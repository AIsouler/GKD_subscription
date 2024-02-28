import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'android.zhibo8',
  name: '直播吧',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      quickFind: true,
      activityIds: [
        'android.zhibo8.ui.contollers.main.MainActivity',
        'android.zhibo8.ui.contollers.detail.DetailActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击关闭',
          matches:
            '@[id$="iv_tip"][clickable=true] -2 * > [text="广告"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b67e6d84-0373-4985-82da-c8443904c8f0',
          snapshotUrls: [
            'https://i.gkd.li/i/14428863',
            'https://i.gkd.li/i/13786148',
          ],
        },
        {
          key: 1,
          name: '点击不感兴趣',
          matches: '@[clickable=true] >3 [text="不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/cb130039-0338-4225-91f0-eae4669ed0dc',
          snapshotUrls: 'https://i.gkd.li/i/14428912',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-文章底部广告',
      rules: [
        {
          key: 0,
          activityIds: 'android.zhibo8.ui.contollers.detail.DetailActivity',
          quickFind: true,
          matches:
            '@[vid="iv_tip"][clickable=true][visibleToUser=true] -(1,2) * > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14395379',
            'https://i.gkd.li/i/14395389',
          ],
        },
        {
          key: 1,
          preKeys: 0,
          activityIds: 'android.zhibo8.ui.contollers.detail.DetailActivity',
          quickFind: true,
          matches: '@[clickable=true][visibleToUser=true] >3 [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14395415',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      rules: [
        {
          key: 0,
          actionMaximum: 1,
          resetMatch: 'app',
          quickFind: true,
          matches: '@[vid="iv_cancel"] - * >4 [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/14395465',
        },
      ],
    },
  ],
});
