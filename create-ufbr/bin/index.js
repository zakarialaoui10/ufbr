#!/usr/bin/env node

import path from "node:path";
import { fileURLToPath } from "node:url";
import { createScaffolder } from 'scafy';
import pc from 'picocolors';

import{
  TEMPLATES,
  LANGUAGES,
  PROJECT_TYPES
} from './config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cli = createScaffolder({
  templatesDir: '../templates',
  templates : TEMPLATES,
  languages : LANGUAGES,
  projectTypes : PROJECT_TYPES,
})

cli.run()