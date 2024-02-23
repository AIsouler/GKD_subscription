import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pcncn.jj',
  name: '作业精灵',
  groups: [
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '腾讯广告SDK',
      quickFind: true,
      activityIds: 'com.pcncn.jj.act.AnswerDetail2Activity',
      rules:
        '[id="com.pcncn.jj:id/interact_ad_root"] [id="com.pcncn.jj:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13695874',
    },
  ],
});
