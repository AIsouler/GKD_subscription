import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jim.qrcode',
  name: '随便扫',
  groups: [
    {
      key: 0,
      name: '局部广告-顶部广告卡片',
      desc: '点击卡片右上角关闭按钮',
      activityIds: [
        'com.jim.qrcode.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: 'TextView[text.length>0] < FrameLayout + FrameLayout > ImageView',
      snapshotUrls: [
        'https://i.gkd.li/i/12606861',
        'https://i.gkd.li/i/12606862',
      ],
    },
  ],
});
