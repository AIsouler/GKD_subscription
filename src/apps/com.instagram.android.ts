import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.instagram.android',
  name: 'Instagram',
  groups: [
    {
      key: 1,
      name: '信息流广告',
      activityIds: 'com.instagram.mainactivity.InstagramMainActivity',
      rules: [
        {
          key: 0,
          desc: '点击【更多】按钮',
          matches: '[id="com.instagram.android:id/feed_more_button_stub"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12798562',
        },
        {
          preKeys: 0,
          key: 1,
          desc: '点击【隐藏广告】按钮',
          matches:
            '[id="com.instagram.android:id/recycler_view"] > [text="隐藏广告"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12798571',
        },
        {
          preKeys: 1,
          key: 2,
          desc: '点击【广告不相关】按钮',
          matches:
            '[id="com.instagram.android:id/report_tag_title"][text="广告不相关"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12798590',
        },
      ],
    },
  ],
});
