import fs from 'node:fs/promises';
import type PkgT from '../package.json';
const pkg: typeof PkgT = JSON.parse(
  await fs.readFile(process.cwd() + '/package.json', 'utf-8'),
);
process.stdout.write(pkg.version);
