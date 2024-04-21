import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.seebaby',
  name: '掌通家园',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[id="com.seebaby:id/btn_later"] + [text$="新版本"]',
      snapshotUrls: ['https://i.gkd.li/i/12705351'],
    },
    {
      key: 2,
      name: '分段广告-信息流、文章底部广告',
      activityIds: [
        'com.seebaby.login.ui.activity.LauncherActivity',
        'com.seebaby.parent.article.ui.activity.NativeArticleDetailActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            '[id="com.seebaby:id/tv_ad_detail"] + [id="com.seebaby:id/ic_delad"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12705353', // activityId: 'com.seebaby.login.ui.activity.LauncherActivity'
            'https://i.gkd.li/i/12705363', // activityIds: 'com.seebaby.parent.article.ui.activity.NativeArticleDetailActivity'
          ],
        },
        {
          key: 2,
          matches:
            '[id="com.seebaby:id/ad_tv_advertiser"] + [id="com.seebaby:id/ad_iv_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12705372'],
        },
        {
          preKeys: [1, 2],
          key: 3,
          matches: '[id="com.seebaby:id/tv_un_instrest"]',
          snapshotUrls: ['https://i.gkd.li/i/12705358'],
        },
      ],
    },
  ],
});
