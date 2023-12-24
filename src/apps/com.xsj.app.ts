import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xsj.app',
  name: '星影视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13670193',
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: ['com.xsj.app.MainActivity', 'com.qq.e.ads.ADActivity'],
          matches:
            'ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/13625504',
            'https://i.gkd.li/import/13761165',
          ],
        },
        {
          key: 1,
          activityIds: 'com.qq.e.ads.ADActivity',
          matches:
            'FrameLayout[childCount=3] > TextView[text!=""] + @ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13670176',
        },
      ],
    },
  ],
});
