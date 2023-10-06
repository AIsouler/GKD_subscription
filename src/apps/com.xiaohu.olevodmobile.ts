import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaohu.olevodmobile',
  name: '欧乐影院',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xiaohu.olevodmobile.home.InitActivity',
      rules:
        '@[id="com.xiaohu.olevodmobile:id/init_time_text"] + [text="跳过"]', // 这个 app 的开屏广告需要点击倒计时按钮才能跳过
      snapshotUrls: 'https://gkd-kit.songe.li/import/12826256',
    },
  ],
});
