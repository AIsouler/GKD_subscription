import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.lezhi.speedtest',
  name: '网速管家',
  groups: [
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
