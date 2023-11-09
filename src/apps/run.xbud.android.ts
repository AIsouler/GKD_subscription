import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'run.xbud.android',
  name: '小步点',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12777125',
    },
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'run.xbud.android.mvp.ui.other.MainActivity',
      rules: [
        {
          key: 0,
          name: '快手广告',
          matches:
            '[id="run.xbud.android:id/ksad_tk_view"] >n @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12777133',
            'https://i.gkd.li/import/12777134',
          ],
        },
        {
          key: 1,
          name: '腾讯广告1',
          matches:
            'ImageView - LinearLayout < FrameLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13296371',
        },
        {
          key: 2,
          name: '腾讯广告2',
          matches:
            'ImageView -n FrameLayout > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13296398',
        },
      ],
    },
  ],
});
