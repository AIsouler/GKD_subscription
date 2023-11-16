import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.waimaiii.waimaiii',
  name: '歪麦霸王餐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '【跳过+倒计时】型',
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13346166',
        },
        {
          key: 1,
          name: '【圆圈跳过】型-穿山甲SDK',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13346451',
        },
      ],
    },
    {
      key: 3,
      name: '广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sangshen.ad_jg_flutter_sdk.SplashAdActivity',
      rules: [
        {
          matches:
            'View > View[childCount=2] > ImageView[clickable=true] + ImageView[id=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13346187',
        },
      ],
    },
  ],
});
