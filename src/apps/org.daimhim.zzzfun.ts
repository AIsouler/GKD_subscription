import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'org.daimhim.zzzfun',
  name: 'ZzzFun',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13402607',
    },
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'org.daimhim.zzzfun.ui.home.video.VideoDetailsActivity',
      rules: 'ImageView -2 ImageView + FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13402608',
    },
  ],
});
