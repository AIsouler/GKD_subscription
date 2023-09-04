import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.douban.frodo.activity.SplashActivity',
        'com.douban.frodo.splash.SplashActivityHot',
      ],
      rules: '[id="com.douban.frodo:id/skip"||text^="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12505151',
        'https://gkd-kit.gitee.io/import/12505152',
        'https://gkd-kit.gitee.io/import/12506164',
      ],
    },
    {
      key: 1,
      name: '不同步到我的动态',
      desc: '标记看过时，不同步到我的动态',
      enable: false,
      activityIds: 'com.douban.frodo.subject.activity.RatingActivity',
      rules: '[id="com.douban.frodo:id/check_status"][checked=true]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12508777'],
    },
    {
      key: 2,
      name: '剧照广告',
      activityIds: 'com.douban.frodo.baseproject.image.SociableImageActivity',
      rules: [
        {
          matches:
            'TextView[id="com.douban.frodo:id/ad_not_interest"][text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12509475',
        },
        {
          matches:
            'TextView[id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12509476',
        },
      ],
    },
  ],
});
