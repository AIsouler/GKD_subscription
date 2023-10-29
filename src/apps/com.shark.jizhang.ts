import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shark.jizhang',
  name: '鲨鱼记账',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/13192242'],
        },
      ],
    },
    {
      key: 0,
      name: '新用户特惠广告',
      desc: '弹窗广告,右下角浮动广告',
      activityIds: 'com.shark.jizhang.module.main.MainActivity',
      rules: [
        {
          matches:
            '[id="com.shark.jizhang:id/buy_later_view"||id="com.shark.jizhang:id/tv_count_down"] - [id="com.shark.jizhang:id/close_view"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12518500',
            'https://gkd-kit.gitee.io/import/12518517',
          ],
        },
      ],
    },
  ],
});
