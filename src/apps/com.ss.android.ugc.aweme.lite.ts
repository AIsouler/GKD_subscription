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
          name: '[首页商城]体验邀请弹窗',
          fastQuery: true,
          activityIds:
            'com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity',
          matches: [
            'UIText[text^="立即体验"]',
            'FlattenUIText[text="不再提示"][visibleToUser=true]',
          ],
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
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme.lite:id/close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13650523',
        },
      ],
    },
    {
      key: 9,
      name: '权限提示-通知权限',
      desc: '点击暂不开启',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[text="及时获得消息提醒"] +2 [text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13888485',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-选择图片时自动勾选原图',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity',
          matches: '[text="原图"][desc^="未选中"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13946092', //未勾选原图
            'https://i.gkd.li/i/13946033', //已勾选原图
          ],
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.ss.android.ugc.aweme.live.LiveDummyHybridTransparentActivity',
          matches:
            '@Image[clickable=true][text!=null][width<100 && height<100] +4 View >2 [text="同意协议并查看额度"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23558501',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '@UIView[text="不感兴趣"][clickable=true] +2 FlattenUIText[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/24123937',
        },
      ],
    },
  ],
});
