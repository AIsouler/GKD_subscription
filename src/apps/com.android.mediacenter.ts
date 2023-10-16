import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.mediacenter',
  name: '华为音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.android.mediacenter.PageActivity',
      matchLauncher: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12901417',
          exampleUrls:
            'https://github.com/gkd-kit/inspect/assets/38517192/6c34cd13-cfda-4462-99ed-2a2534a6fdf5',
        },
        {
          key: 1,
          matches: '[id="com.android.mediacenter:id/jump"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12908742',
          exampleUrls:
            'https://github.com/gkd-kit/inspect/assets/38517192/c71bb14d-cd1f-4f9e-8ee9-6a1e11e56901',
        },
      ],
    },
    {
      key: 1,
      name: 'VIP广告弹窗',
      desc: '点击底部圆形x图标关闭弹窗',
      activityIds: 'com.android.mediacenter.MainActivity',
      quickFind: true,
      rules: '[id="com.android.mediacenter:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12914026',
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/433dd71c-4fe5-41c9-a2da-dd3ac29f8dd4',
    },
    {
      key: 2,
      name: '推荐广告卡片',
      desc: '点击卡片右上角[广告],点击不感兴趣[直接关闭]',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击卡片右上角[广告]',
          activityIds: 'com.android.mediacenter.MainActivity',
          matches: '[id="com.android.mediacenter:id/ad_more_layout"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12914077',
          exampleUrls:
            'https://github.com/gkd-kit/inspect/assets/38517192/37ee4a9b-2518-41e6-8227-7b204ed1bf61',
        },
        {
          key: 1,
          name: '点击不感兴趣[直接关闭]',
          activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
          matches:
            '[id="com.android.mediacenter:id/label_title"][text="直接关闭"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12914078',
          exampleUrls:
            'https://github.com/gkd-kit/inspect/assets/38517192/d098a194-80ff-49a1-b80e-191f7574a816',
        },
      ],
    },
  ],
});
