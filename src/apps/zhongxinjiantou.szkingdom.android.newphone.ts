import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'zhongxinjiantou.szkingdom.android.newphone',
  name: '蜻蜓点金',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过',

      quickFind: true,
      activityIds:
        'kds.szkingdom.modeinit.android.init.activity.ZXJTInitActivity',
      rules: [
        {
          matches:
            '[id="zhongxinjiantou.szkingdom.android.newphone:id/kds_advertise_btn_timmer"]',
          snapshotUrls: 'https://i.gkd.li/import/12924454',
        },
      ],
    },
    {
      key: 1,
      name: '通知权限',
      desc: '点击放弃通知',
      quickFind: true,
      activityIds: 'com.szkingdom.android.phone.ZXJTUserMainActivity',
      rules: [
        {
          matches:
            '[id="zhongxinjiantou.szkingdom.android.newphone:id/tv_notify_confirm_off"][text="放弃通知"]',
          snapshotUrls: 'https://i.gkd.li/import/12924466',
        },
      ],
    },
  ],
});
