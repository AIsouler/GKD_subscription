import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yaerxing.fkst',
  name: '疯狂刷题',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.yaerxing.fkst.activity.MainActivity',
        'com.yaerxing.fkst.activity.SplashActivity',
        'com.yaerxing.fkst.activity.SelectModuleActivity',
      ],
      rules:
        '@[id="com.yaerxing.fkst:id/iv_close"] < LinearLayout - LinearLayout > [id="com.yaerxing.fkst:id/btn_update"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12715037',
        'https://gkd-kit.gitee.io/import/12715047',
        'https://gkd-kit.gitee.io/import/12715053',
      ],
    },
  ],
});
