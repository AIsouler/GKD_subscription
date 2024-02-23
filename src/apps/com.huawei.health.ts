import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.health',
  name: '华为运动健康',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[id$="hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/i/12667766',
            'https://i.gkd.li/i/13215012',
            'https://i.gkd.li/i/13228290',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-“我的”页会员广告',
      activityIds: ['com.huawei.health.MainActivity'],
      rules: [
        {
          matches: '[id="com.huawei.health:id/item_banner_ad_close_icon"]',
          snapshotUrls: ['https://i.gkd.li/i/12667814'],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.huawei.watchface.api.WebViewActivity',
          matches:
            'View[childCount=2] > View + View[childCount=1] > Image[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13546292',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-请求开启个性化推荐弹窗',
      activityIds: 'com.huawei.watchface.api.WebViewActivity',
      rules: '[text="开启个性化推荐"] +2 [text="开启"] + Button',
      snapshotUrls: 'https://i.gkd.li/i/13546292',
    },
    {
      enable: false,
      key: 4,
      name: '局部广告-底部横幅广告',
      rules: [
        {
          activityIds: 'com.huawei.health.MainActivity',
          matches: '[id="com.huawei.health:id/marketing_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13587206',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-请求开启“实时推送步数”弹窗',
      desc: '点击取消',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.huawei.health.MainActivity',
          matches:
            '[text*="实时推送步数"] <2 * < * +2 * >4 [text="取消"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/7e9b7131-35ae-49dd-badf-13b6dae3aa96',
          snapshotUrls: 'https://i.gkd.li/i/14321121',
        },
      ],
    },
  ],
});
