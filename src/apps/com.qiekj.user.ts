import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qiekj.user',
  name: '胖乖生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qiekj.user.MainActivity',
      matchLauncher: true,
      rules: [
        {
          key: 0,
          matches:
            '[id="com.qiekj.user:id/native_splash_view"] >n [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12903088',
        },
        {
          key: 1,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12903086',
        },
        {
          key: 2,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > TextView + TextView + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12903095',
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.qiekj.user.MainActivity',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.qiekj.user:id/btn_cancelUpdate"][text*="暂不更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13435011',
        },
      ],
    },
  ],
});
