import fs from "node:fs";
import path from "node:path";

const createUfbrDir = path.resolve(import.meta.dirname, "..");
const packagesDir = path.resolve(createUfbrDir, "..");
const workspaceRoot = path.resolve(packagesDir, "..");

const templatesDir = path.join(createUfbrDir, "templates");
const ufbrPackagePath = path.join(packagesDir, "ufbr", "package.json");
const workspaceFile = path.join(workspaceRoot, "pnpm-workspace.yaml");

// -------------------------------------
// Read ufbr version
// -------------------------------------

const ufbrPackage = JSON.parse(
  fs.readFileSync(ufbrPackagePath, "utf8")
);

const ufbrVersion = ufbrPackage.version;

if (!ufbrVersion) {
  throw new Error("Could not find ufbr version");
}

console.log(`Using ufbr@${ufbrVersion}`);

// -------------------------------------
// Read catalog from pnpm-workspace.yaml
// -------------------------------------

const workspaceYaml = fs.readFileSync(workspaceFile, "utf8");

const catalog = {};

let insideCatalog = false;

for (const line of workspaceYaml.split(/\r?\n/)) {
  if (/^catalog:\s*$/.test(line)) {
    insideCatalog = true;
    continue;
  }

  if (insideCatalog) {
    // Stop when another top-level key starts
    if (/^\S/.test(line) && line.trim() !== "") {
      insideCatalog = false;
      continue;
    }

    const match = line.match(/^\s{2}([^:#]+):\s*(.+)$/);

    if (match) {
      catalog[match[1].trim()] = match[2].trim();
    }
  }
}

console.log("Catalog:", catalog);

// -------------------------------------
// Process templates
// -------------------------------------

function processTemplates(dir) {
  for (const entry of fs.readdirSync(dir, {
    withFileTypes: true,
  })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processTemplates(entryPath);
      continue;
    }

    if (entry.name !== "package.json") continue;

    const pkg = JSON.parse(
      fs.readFileSync(entryPath, "utf8")
    );

    let changed = false;

    // workspace:* → actual ufbr version
    if (pkg.dependencies?.ufbr === "workspace:*") {
      pkg.dependencies.ufbr = `^${ufbrVersion}`;
      changed = true;
    }

    // catalog: → actual catalog value
    for (const section of [
      "dependencies",
      "devDependencies",
      "peerDependencies",
      "optionalDependencies",
    ]) {
      if (!pkg[section]) continue;

      for (const [name, version] of Object.entries(pkg[section])) {
        if (version === "catalog:") {
          if (!catalog[name]) {
            throw new Error(
              `No catalog entry found for "${name}" in ${workspaceFile}`
            );
          }

          pkg[section][name] = catalog[name];
          changed = true;
        }
      }
    }

    if (changed) {
      fs.writeFileSync(
        entryPath,
        JSON.stringify(pkg, null, 2) + "\n"
      );

      console.log(`✓ ${path.relative(workspaceRoot, entryPath)}`);
    }
  }
}

processTemplates(templatesDir);