import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiekj.user',
  name: '胖乖生活',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches:
            '[id="com.qiekj.user:id/btn_cancelUpdate"][text*="暂不更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13435011',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-开启[自动抵扣]开关',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.scan.AfterPayUseAct',
          matches:
            '@[vid="switchView"][checked=false] - [vid="tv_automatic_use"]',
          exampleUrls: 'https://e.gkd.li/85bbfba2-5011-4f48-a08a-45386836ebd6',
          snapshotUrls: 'https://i.gkd.li/i/17260785',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.activity.home.MyDeviceAct',
          matches: [
            '[text*="广告"][visibleToUser=true]',
            '[text="关闭"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/bccff301-de1c-4d70-8b99-f9acf8e04efa',
          snapshotUrls: 'https://i.gkd.li/i/18032031',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.tianmu.biz.activity.InterstitialActivity',
          matches: '[vid="tianmu_widget_iv_close"]',
          exampleUrls: 'https://e.gkd.li/3f3d3462-7121-4f37-8252-1ef82e74f626',
          snapshotUrls: 'https://i.gkd.li/i/18033023',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
          exampleUrls: 'https://e.gkd.li/343016ff-dd8f-4a19-8e3c-63520b087e98',
          snapshotUrls: 'https://i.gkd.li/i/12903095',
        },
      ],
    },
  ],
});
