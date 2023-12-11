import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'client.android.yixiaotong',
  name: '乐校通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13055542',
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13055837',
        },
        {
          key: 1,
          name: '快手广告-1',
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '[id="client.android.yixiaotong:id/ksad_tk_view"] >n ViewGroup + ViewGroup > @ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13060116',
        },
        {
          key: 2,
          name: '快手广告-2',
          activityIds: [],
          matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13625511',
        },
      ],
    },
    {
      key: 2,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            'ImageView - FrameLayout - FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13451010',
        },
        {
          key: 1,
          name: '快手广告',
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '[id="client.android.yixiaotong:id/ksad_container"] >n @TextView + View > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13450887',
        },
      ],
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
