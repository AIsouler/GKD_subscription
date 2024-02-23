import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yaerxing.fkst',
  name: '疯狂刷题',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.yaerxing.fkst:id/iv_close"] < LinearLayout - LinearLayout > [id="com.yaerxing.fkst:id/btn_update"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12715037',
        'https://i.gkd.li/i/12715047',
        'https://i.gkd.li/i/12715053',
      ],
    },
  ],
});
