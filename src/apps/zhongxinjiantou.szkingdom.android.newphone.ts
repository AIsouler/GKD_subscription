import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'zhongxinjiantou.szkingdom.android.newphone',
  name: '蜻蜓点金',
  groups: [
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
