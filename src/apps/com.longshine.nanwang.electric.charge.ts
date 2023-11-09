import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.longshine.nanwang.electric.charge',
  name: '顺易充',
  groups: [
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: ['com.android.app.station.NewMainAct'],
      rules:
        '[id="com.longshine.nanwang.electric.charge:id/bodyFL"] + [id="com.longshine.nanwang.electric.charge:id/ivClose"]',
      snapshotUrls: ['https://i.gkd.li/import/import/12700011'],
    },
  ],
});
