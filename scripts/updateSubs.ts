import fs from 'node:fs/promises';
import url from 'node:url';
import type { RawApp } from '@gkd-kit/api';
import { tryRun } from '../src/utils';

// 使用命令更新内存订阅
// 使用格式: pnpm updateSubs deviceUrl appId
// 使用示例-1: pnpm updateSubs http://10.2.156.1:8888 android.zhibo8
// 使用示例-2: pnpm updateSubs 10.2.156.1:8888 android.zhibo8

if (!process.argv[2]) {
  throw new Error('miss parameter: deviceUrl');
}
const deviceUrlRaw = process.argv[2].includes('://')
  ? process.argv[2]
  : 'http://' + process.argv[2];
const deviceUrl = tryRun(
  () => new url.URL(deviceUrlRaw),
  () => void 0,
);
if (!deviceUrl) {
  throw new Error('invalid URL: ' + process.argv[2]);
}
deviceUrl.pathname = '/';
if (!(await fetch(deviceUrl).catch(() => false))) {
  throw new Error('connect device failed: ' + process.argv[2]);
}

if (!process.argv[3]) {
  throw new Error('miss parameter: appId');
}
const appId = process.argv[3];
const tsFp = process.cwd() + `/src/apps/${appId}.ts`;
if (!(await fs.stat(tsFp).catch(() => false))) {
  throw new Error('invalid appId: ' + appId);
}

const getAppConfig = async () => {
  const mod: { default: RawApp } = await import(url.pathToFileURL(tsFp).href);
  return mod.default;
};

const appConfig = await getAppConfig();

const resp = await fetch(deviceUrl.origin + '/api/updateSubsApps', {
  method: 'post',
  body: JSON.stringify([appConfig]),
  headers: {
    'Content-Type': 'application/json',
  },
}).catch(console.error);
if (!resp) {
  throw new Error('更新订阅失败');
}
const r: any = await resp.json();
if (r.__error) {
  console.log('更新订阅失败');
  console.log(r.message || r);
} else {
  console.log('更新订阅成功: ' + appConfig.name);
}
