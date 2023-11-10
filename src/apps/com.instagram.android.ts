import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.instagram.android',
  name: 'Instagram',
  groups: [
    {
      key: 1,
      enable: false,
      name: '信息流广告',
      desc: '但是步骤较多, 影响app使用',
      quickFind: true,
      activityIds: 'com.instagram.mainactivity.InstagramMainActivity',
      rules: [
        {
          key: 0,
          name: '点击【更多】按钮',
          actionCd: 4000,
          matches:
            '[text="赞助内容"] + [id="com.instagram.android:id/feed_more_button_stub"]',
          snapshotUrls: 'https://i.gkd.li/import/12798562',
        },
        {
          key: 1,
          name: '点击【隐藏广告】按钮',
          matches: '@ViewGroup >n [text="隐藏广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12798571',
            'https://i.gkd.li/import/12829448',
          ],
        },
        {
          key: 2,
          name: '点击【广告不相关】按钮',
          matches: '@ViewGroup > [text="广告不相关"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12798590',
            'https://i.gkd.li/import/12829464',
          ],
        },
        {
          key: 3,
          name: '关闭[你不会再看到这条广告]',
          action: 'back',
          matches: '[text="你不会再看到这条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12829492',
        },
      ],
    },
  ],
});
