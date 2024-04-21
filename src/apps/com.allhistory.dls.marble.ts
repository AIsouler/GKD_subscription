import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.allhistory.dls.marble',
  name: '全知识',
  groups: [
    {
      key: 1,
      name: '通知提示-请求通知弹窗',
      desc: '点击暂不开启',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="v_open"] + [vid="v_not"]',
          snapshotUrls: 'https://i.gkd.li/i/13997956',
        },
      ],
    },
    {
      key: 2,
      quickFind: true,
      name: '局部广告-左下角参与答题卡片',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.pwrd.dls.marble.moudle.homepage.HomePageActivity',
          matches: '[id="com.allhistory.dls.marble:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13997954',
        },
      ],
    },
  ],
});
