import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.chinamobile.mcloud:id/bn_cancel"] + [id="com.chinamobile.mcloud:id/upgrade_title"]',
          snapshotUrls: 'https://i.gkd.li/i/12774833',
        },
        {
          key: 1,
          quickFind: true,
          matches: '@[vid="bn_cancel"] + * > [vid="upgrade_title"]',
          snapshotUrls: 'https://i.gkd.li/i/14297700',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          quickFind: true,
          matches:
            '[id="com.chinamobile.mcloud:id/rl_container"] + [id="com.chinamobile.mcloud:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13627826',
        },
        {
          key: 1,
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          matches: '[text="马上领取"] +n View > Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13627832',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          quickFind: true,
          matches:
            '[id="com.chinamobile.mcloud:id/iv_logo"] + [id="com.chinamobile.mcloud:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13627834',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-请求开启自动备份弹窗',
      desc: '点击关闭',
      activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
      quickFind: true,
      rules:
        '[text="开启自动备份"] +n [id="com.chinamobile.mcloud:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/i/13627830',
    },
  ],
});
