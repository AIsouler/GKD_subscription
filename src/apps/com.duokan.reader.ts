import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duokan.reader',
  name: '多看',
  groups: [
    {
      key: 2,
      name: '首页-广告弹窗',
      quickFind: true,
      activityIds: 'com.duokan.reader.DkMainActivity',
      rules: '[id="com.duokan.reader:id/store_feed_layer_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13248773',
    },
    {
      key: 3,
      name: '小说推荐弹窗',
      rules: [
        {
          key: 1,
          name: '退出阅读时的推荐弹窗',
          activityIds: 'com.duokan.reader.DkMainActivity',
          quickFind: true,
          matches:
            '[id="com.duokan.reader:id/reading_stop_read_recommend_stop"]',
          snapshotUrls: 'https://i.gkd.li/import/13413412',
        },
      ],
    },
    {
      key: 4,
      name: '小说页广告',
      desc: '小说页面下方出现的条形广告',
      quickFind: true,
      activityIds: 'com.duokan.reader.DkMainActivity',
      rules:
        '@ImageView < FrameLayout[id="com.duokan.reader:id/reading__app_ad_view__close"]',
      snapshotUrls: 'https://i.gkd.li/import/13497902',
    },
    {
      key: 5,
      name: '小说页全屏卡片广告',
      desc: '点击关闭和确定按钮',
      quickFind: true,
      activityIds: 'com.duokan.reader.DkMainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@TextView[id="com.duokan.reader:id/reading__app_ad_view__close"][text="广告"]',
        },
        {
          key: 1,
          matches:
            '@TextView[id="com.duokan.reader:id/ad__feedback_close_dialog_button"][text="知道了"]',
        },
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/13498048',
        'https://i.gkd.li/import/13497990',
      ],
    },
  ],
});
