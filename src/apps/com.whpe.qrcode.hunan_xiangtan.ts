import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.whpe.qrcode.hunan_xiangtan',
  name: '湘潭出行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.whpe.qrcode.hunan_xiangtan.MainActivity',
          quickFind: true,
          matches:
            '@[id="com.whpe.qrcode.hunan_xiangtan:id/iv_close"] +n * >n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13476265',
        },
      ],
    },
  ],
});
