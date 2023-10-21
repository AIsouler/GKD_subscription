import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'client.android.yixiaotong',
  name: '乐校通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'client.android.yixiaotong.ui.WelcomeActivity',
      matchLauncher: true,
      rules:
        '[id="client.android.yixiaotong:id/rel_advlogo"] - * >n [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/13055542',
    },
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds:
        'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
      rules: [
        // 腾讯广告
        {
          key: 0,
          matches:
            'ImageView - FrameLayout > ImageView +2 FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/13055837',
        },

        // 快手广告
        {
          key: 2,
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '[id="client.android.yixiaotong:id/ksad_tk_view"] >n ViewGroup + ViewGroup > @ViewGroup > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/13060116',
        },
      ],
    },
    {
      key: 2,
      name: '应用内广告卡片',
      activityIds:
        'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
      rules: 'ImageView - FrameLayout - FrameLayout > ImageView',
      snapshotUrls: 'https://gkd-kit.songe.li/import/13055542',
    },
  ],
});
