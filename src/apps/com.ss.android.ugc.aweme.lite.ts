import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 2,
      name: '功能类-功能体验邀请弹窗',
      rules: [
        {
          key: 0,
          name: '"首页商城"体验邀请弹窗',
          activityIds:
            'com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity',
          matches:
            '[text="不再提示"] + @ECCustomUiImage[clickable=true] +n LynxFlattenUI[text^="立即体验"]',
          snapshotUrls: 'https://i.gkd.li/i/13684791',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-朋友推荐弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
      rules:
        '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme.lite:id/close"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13650523',
    },
    {
      key: 9,
      fastQuery: true,
      name: '权限提示-通知权限',
      desc: '点击暂不开启',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.ss.android.ugc.aweme.lite:id/gl7"] > [id="com.ss.android.ugc.aweme.lite:id/h5q"]',
          snapshotUrls: 'https://i.gkd.li/i/13888485',
        },
      ],
    },
    {
      key: 10,
      fastQuery: true,
      name: '功能类-选择图片时自动勾选原图',
      rules: [
        {
          activityIds:
            'com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity',
          matches:
            '[id="com.ss.android.ugc.aweme.lite:id/amh"][desc^="未选中"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13946092', //未勾选原图
            'https://i.gkd.li/i/13946033', //已勾选原图
          ],
        },
      ],
    },
  ],
});
