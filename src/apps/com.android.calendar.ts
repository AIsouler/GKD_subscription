import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.calendar',
  name: '小米日历',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      desc: '注意⚠️：该广告需开启[智能服务]的对应规则才能关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.homepage.AllInOneActivity',
          matches: '[vid="close"][desc="关闭广告卡片"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23619245',
        },
      ],
    },
  ],
});
