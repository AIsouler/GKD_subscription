import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      desc: '点击"我知道了"/"关闭"',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: 'Button[desc="开启青少年模式"] + Button[text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13111607',
        },
        {
          actionMaximumKey: 0,
          matches:
            'Button[text="开启青少年模式"] + LinearLayout > Button[text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13542867', //新版本
          ],
        },
      ],
    },
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
          snapshotUrls: 'https://i.gkd.li/import/13684791',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-朋友推荐弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
      rules:
        '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme.lite:id/close"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13650523',
    },
    {
      key: 9,
      quickFind: true,
      name: '通知提示-消息提醒弹窗',
      desc: '点击暂不开启',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.ss.android.ugc.aweme.lite:id/gl7"] > [id="com.ss.android.ugc.aweme.lite:id/h5q"]',
          snapshotUrls: 'https://i.gkd.li/import/13888485',
        },
      ],
    },
    {
      key: 10,
      quickFind: true,
      name: '功能类-选择图片时自动勾选原图',
      rules: [
        {
          activityIds:
            'com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity',
          matches:
            '[id="com.ss.android.ugc.aweme.lite:id/amh"][desc^="未选中"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13946092', //未勾选原图
            'https://i.gkd.li/import/13946033', //已勾选原图
          ],
        },
      ],
    },
  ],
});
