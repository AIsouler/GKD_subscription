import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.browser',
  name: '小米浏览器',
  groups: [
    {
      key: 0,
      name: '关闭[个性推荐开启提示]',
      activityIds: ['com.android.browser.BrowserActivity'],
      rules: [
        {
          matches:
            '@ImageView[id!=null][clickable=true] -2 [text="个性推荐获得更丰富内容"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12829403',
        },
      ],
    },
    {
      key: 1,
      name: '主页信息流广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.android.browser.BrowserActivity',
          matches:
            '@[id!=null][desc="负反馈"][visibleToUser=true] -n * > * > [text="广告"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12894221',
            'https://gkd-kit.songe.li/import/12893649',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'com.android.browser.flow.view.FeedbackDialog',
          matches: '@FrameLayout > ViewGroup > [text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12894234',
        },
      ],
    },
  ],
});
