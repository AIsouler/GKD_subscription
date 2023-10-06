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
          name: '点击【更多】按钮',
          matches:
            '[text="赞助内容"] + [id="com.instagram.android:id/feed_more_button_stub"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12798562',
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击【隐藏广告】按钮',
          matches:
            '[id="com.instagram.android:id/recycler_view"] [text="隐藏广告"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12798571',
            'https://gkd-kit.gitee.io/import/12829448',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          name: '点击【广告不相关】按钮',
          matches:
            '[id="com.instagram.android:id/report_tag_title"][text="广告不相关"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12798590',
            'https://gkd-kit.gitee.io/import/12829464',
          ],
        },
        {
          preKeys: 2,
          key: 3,
          name: '关闭[你不会再看到这条广告]',
          matches: 'Button[id="com.instagram.android:id/background_dimmer"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12829492',
        },
      ],
    },
  ],
});
