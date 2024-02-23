import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fengeek.f002',
  name: 'fiil+',
  groups: [
    {
      enable: false,
      key: 2,
      name: '功能类-自动连接耳机',
      desc: '点击连接耳机按钮,点击扫描到的第一个设备',
      activityIds: ['com.fengeek.f002.MainActivity'],
      rules: [
        {
          key: 0,
          name: '点击连接耳机按钮',
          quickFind: true,
          action: 'clickCenter',
          matches: '[clickable=true][id="com.fengeek.f002:id/av_elc"]',
          snapshotUrls: 'https://i.gkd.li/i/13161277',
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击扫描到的设备',
          quickFind: true,
          action: 'clickNode',
          matches:
            '[clickable=true][id="com.fengeek.f002:id/device_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13161365',
        },
      ],
    },
  ],
});
