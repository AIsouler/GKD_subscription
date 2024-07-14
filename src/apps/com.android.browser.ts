import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.browser',
  name: '小米浏览器',
  groups: [
    {
      key: 0,
      name: '局部广告-关闭[个性推荐开启提示]',
      activityIds: ['com.android.browser.BrowserActivity'],
      rules: [
        {
          matches:
            '@ImageView[id!=null][clickable=true] -2 [text="个性推荐获得更丰富内容"]',
          snapshotUrls: 'https://i.gkd.li/i/12829403',
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-主页信息流广告',
      fastQuery: true,
      activityIds: [
        'com.android.browser.BrowserActivity',
        'com.android.browser.flow.view.FeedbackDialog',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[id!=null][desc="负反馈"][visibleToUser=true] -n * > * > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12894221',
            'https://i.gkd.li/i/12893649',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@FrameLayout > ViewGroup > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12894234',
            'https://i.gkd.li/i/13196059',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-搜索结果页底部必应推荐卡片',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.android.browser.BrowserActivity',
          matches: '[id="bnp_close_icon"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b0d601cf-6cd1-411c-8555-bd4a8ee3335c',
          snapshotUrls: [
            'https://i.gkd.li/i/14256707',
            'https://i.gkd.li/i/14256761', // visibleToUser=true防止误触此界面
          ],
        },
      ],
    },
  ],
});
