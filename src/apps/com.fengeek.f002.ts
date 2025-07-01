import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fengeek.f002',
  name: 'fiil+',
  groups: [
    {
      key: 2,
      name: '功能类-自动连接耳机',
      desc: '点击连接耳机按钮,点击扫描到的第一个设备',
      activityIds: 'com.fengeek.f002.MainActivity',
      rules: [
        {
          key: 0,
          name: '点击连接耳机按钮',
          fastQuery: true,
          action: 'clickCenter',
          matches: '[id="com.fengeek.f002:id/av_elc"]',
          snapshotUrls: 'https://i.gkd.li/i/13161277',
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击扫描到的设备',
          fastQuery: true,
          matches: '[id="com.fengeek.f002:id/device_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13161365',
        },
      ],
    },
  ],
});
