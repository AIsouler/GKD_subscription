import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hexin.plat.android',
  name: '同花顺',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.hexin.plat.android.Hexin',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches:
            '[id="com.hexin.plat.android:id/ad_image"] + [id="com.hexin.plat.android:id/skip_tv"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12662631',
            'https://gkd-kit.gitee.io/import/12662620',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '信息流广告',
      desc: '信息流广告-点击x按钮-点击内容质量差',
      activityIds: ['com.hexin.plat.android.Hexin'],
      rules: [
        {
          key: 1,
          matches:
            '@[id="com.hexin.plat.android:id/iv_feed_bottom_bar_dislike"] < LinearLayout -(2) LinearLayout >(2) [text="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12662754'],
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '[id="com.hexin.plat.android:id/tv_negative_feedback_option"][text="内容质量差"] - ImageView < LinearLayout[clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12662781'],
        },
      ],
    },
    {
      key: 10,
      name: '指数页面-底部产品广告',
      activityIds: ['com.hexin.plat.android'],
      rules: [
        {
          matches:
            '[id="com.hexin.plat.android:id/prod_ad"] + [id="com.hexin.plat.android:id/prod_close_image"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12662656'],
        },
      ],
    },
  ],
});
