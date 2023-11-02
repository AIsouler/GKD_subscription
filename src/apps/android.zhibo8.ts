import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'android.zhibo8',
  name: '直播吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: 'TextView[text^="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12700387',
            'https://gkd-kit.gitee.io/import/12661109',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '信息流广告',
      quickFind: true,
      activityIds: 'android.zhibo8.ui.contollers.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '点击[查看详情]右侧x',
          matches:
            '@[id="android.zhibo8:id/iv_tip"] - [id="android.zhibo8:id/tv_app_download_2"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12841134',
        },
        {
          key: 1, //不重叠不需要preKeys
          name: '点击[不感兴趣]',
          matches:
            '@LinearLayout > [id="android.zhibo8:id/tv_title"][text="不感兴趣"]', // issues/1656, 直接指向text可能不工作
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12841135',
        },
      ],
    },
  ],
});
