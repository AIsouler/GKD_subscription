import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.igpsport.igpsportandroid',
  name: 'iGPSPORT',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="忽略本次"] + [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/13797203',
    },
  ],
});
