import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiekj.user',
  name: '胖乖生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[id="com.qiekj.user:id/native_splash_view"] >n [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12903088',
        },
        {
          key: 1,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12903086',
        },
        {
          key: 2,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > TextView + TextView + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12903095',
        },
      ],
    },
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
  ],
});
