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
      snapshotUrls: 'https://i.gkd.li/import/13055542',
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
          snapshotUrls: 'https://i.gkd.li/import/13055837',
        },

        // 快手广告
        {
          key: 2,
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '[id="client.android.yixiaotong:id/ksad_tk_view"] >n ViewGroup + ViewGroup > @ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13060116',
        },
      ],
    },
    {
      key: 2,
      name: '应用内广告卡片',
      activityIds:
        'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
      rules: 'ImageView - FrameLayout - FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13055542',
    },
    {
      key: 3,
      name: '底部卡片广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds:
        'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
      rules:
        '@TextView[clickable=true][text=""] + View [text="广告"] <<n [id="client.android.yixiaotong:id/ksad_container"]',
      snapshotUrls: 'https://i.gkd.li/import/13448963',
    },
  ],
});
