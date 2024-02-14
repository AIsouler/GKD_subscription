import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.emagsoftware.gamehall',
  name: '咪咕快游',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="cn.emagsoftware.gamehall:id/btn_update"] -2 [id="cn.emagsoftware.gamehall:id/btn_cancle"]',
      snapshotUrls: 'https://i.gkd.li/import/13448894',
    },
  ],
});
