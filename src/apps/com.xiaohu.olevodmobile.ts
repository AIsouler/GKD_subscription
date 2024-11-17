import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaohu.olevodmobile',
  name: '欧乐影院',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules:
        '@[id="com.xiaohu.olevodmobile:id/init_time_text"] + [text="跳过"]', // 这个 app 的开屏广告需要点击倒计时按钮才能跳过
      snapshotUrls: 'https://i.gkd.li/i/12826256',
    },
  ],
});
