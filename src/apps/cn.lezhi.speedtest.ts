import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.lezhi.speedtest',
  name: '网速管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          name: '字节SDK',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13544242',
        },
        {
          name: '腾讯SDK',
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13626049',
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'cn.lezhi.speedtest.main5.MainV5Activity',
      rules:
        '[id="cn.lezhi.speedtest:id/rl_update_dialog_layout"] >n [id="cn.lezhi.speedtest:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12727619',
    },
  ],
});
