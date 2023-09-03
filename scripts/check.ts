import subsConfig from '../src/config';
import { checkConfig } from '../src/file';
import picocolors from 'picocolors';

checkConfig(subsConfig);

console.log(picocolors.green(`校验成功, 合法订阅`));
