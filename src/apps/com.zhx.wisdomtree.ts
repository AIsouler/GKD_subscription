import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhx.wisdomtree',
  name: '智慧树家长端',
  groups: [
    {
      key: 1,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches: '[vid="iv_close_ad"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/82c2a85d-1007-45e2-abed-3c5933563a92',
          snapshotUrls: 'https://i.gkd.li/i/20062093',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches: '[vid="tv_close_ad"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/486eae02-6c25-4e2a-b6a4-7997a8887eac',
          snapshotUrls: 'https://i.gkd.li/i/20062094',
        },
      ],
    },
  ],
});
