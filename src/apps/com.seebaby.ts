import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.seebaby',
  name: '掌通家园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.seebaby.login.ui.activity.LauncherActivity'],
      rules:
        '[id="com.seebaby:id/view_ads_logo"] + [id="com.seebaby:id/rtv_ads_time"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12705347'],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.seebaby.login.ui.activity.LauncherActivity'],
      rules: '@[id="com.seebaby:id/btn_later"] + [text$="新版本"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12705351'],
    },
    {
      key: 2,
      name: '信息流、文章底部广告',
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
            'https://gkd-kit.gitee.io/import/12705353', // activityId: 'com.seebaby.login.ui.activity.LauncherActivity'
            'https://gkd-kit.gitee.io/import/12705363', // activityIds: 'com.seebaby.parent.article.ui.activity.NativeArticleDetailActivity'
          ],
        },
        {
          key: 2,
          matches:
            '[id="com.seebaby:id/ad_tv_advertiser"] + [id="com.seebaby:id/ad_iv_close"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12705372'],
        },
        {
          preKeys: [1, 2],
          key: 3,
          matches: '[id="com.seebaby:id/tv_un_instrest"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12705358'],
        },
      ],
    },
  ],
});
