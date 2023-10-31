import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.apps.photos',
  name: '谷歌相册',
  groups: [
    {
      key: 0,
      name: '取消更新',
      desc: '点击[以后再说]',
      activityIds: [
        'com.google.android.apps.photos.update.treatment.UpdateAppTreatmentPromoPageActivity',
      ],
      quickFind: true,
      rules: [
        {
          matches:
            '[id=`com.google.android.apps.photos:id/negative_button`][text=`以后再说`]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13218940',
        },
      ],
    },
  ],
});
