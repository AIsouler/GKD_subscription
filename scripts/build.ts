import subsConfig from '../src/config';
import { writeConfig } from '../src/file';

await writeConfig(process.cwd() + `/dist/gkd.json`, subsConfig);
