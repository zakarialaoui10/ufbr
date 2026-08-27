#!/usr/bin/env node

import path from "node:path";
import { fileURLToPath } from "node:url";
import { createScaffolder } from 'scafy';
import pc from 'picocolors';

import{
  PRESETS,
  LANGUAGES,
} from './config.js'

const cli = createScaffolder({
  templatesDir: '../templates',
  languages : LANGUAGES,
  presets : PRESETS,
})

cli.run()