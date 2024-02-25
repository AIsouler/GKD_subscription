import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'android.zhibo8',
  name: '直播吧',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '局部广告-信息流广告',
      quickFind: true,
      activityIds: 'android.zhibo8.ui.contollers.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '点击[查看详情]右侧x',
          matches:
            '@[id="android.zhibo8:id/iv_tip"] - [id="android.zhibo8:id/tv_app_download_2"]',
          snapshotUrls: 'https://i.gkd.li/i/12841134',
        },
        {
          key: 1, //不重叠不需要preKeys
          name: '点击[不感兴趣]',
          matches:
            '@LinearLayout > [id="android.zhibo8:id/tv_title"][text="不感兴趣"]', // issues/1656, 直接指向text可能不工作
          snapshotUrls: 'https://i.gkd.li/i/12841135',
        },
        {
          key: 2,
          name: '点击"广告"右侧的x',
          matches:
            '[text="广告"] <3 LinearLayout +2 [visibleToUser=true][id="android.zhibo8:id/iv_tip"]',
          snapshotUrls: 'https://i.gkd.li/i/13786148',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-文章底部广告',
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
