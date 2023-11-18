import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.codoon.gps',
  name: '咕咚',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '【跳过+倒计时】型',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13348806',
        },
      ],
    },
    {
      key: 1,
      name: '广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.codoon.gps.ui.SlideActivity',
      rules: [
        {
          name: '首页-广告弹窗',
          matches:
            '[id="android:id/content"] >2 RelativeLayout > ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13358586',
        },
        {
          name: '运动圈-广告弹窗',
          matches:
            '[id="android:id/content"] >4 FrameLayout > ImageView + FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13348663',
        },
      ],
    },
  ],
});
