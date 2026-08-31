import fs from "node:fs";
import path from "node:path";

const workspaceRoot = path.resolve(import.meta.dirname, "..");

const templatesDir = path.join(
  workspaceRoot,
  "packages",
  "create-ufbr",
  "templates"
);

// Packages that should use catalog:
const catalogPackages = new Set([
  "ziko",
  "vite",
]);

function restoreTemplates(dir) {
  for (const entry of fs.readdirSync(dir, {
    withFileTypes: true,
  })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      restoreTemplates(entryPath);
      continue;
    }

    if (entry.name !== "package.json") continue;

    const pkg = JSON.parse(
      fs.readFileSync(entryPath, "utf8")
    );

    let changed = false;

    // -------------------------------------
    // Restore ufbr
    // -------------------------------------

    if (pkg.dependencies?.ufbr) {
      pkg.dependencies.ufbr = "workspace:*";
      changed = true;
    }

    // -------------------------------------
    // Restore catalog dependencies
    // -------------------------------------

    for (const section of [
      "dependencies",
      "devDependencies",
      "peerDependencies",
      "optionalDependencies",
    ]) {
      if (!pkg[section]) continue;

      for (const name of Object.keys(pkg[section])) {
        if (catalogPackages.has(name)) {
          pkg[section][name] = "catalog:";
          changed = true;
        }
      }
    }

    if (changed) {
      fs.writeFileSync(
        entryPath,
        JSON.stringify(pkg, null, 2) + "\n"
      );

      console.log(
        `✓ Restored ${path.relative(workspaceRoot, entryPath)}`
      );
    }
  }
}

restoreTemplates(templatesDir);