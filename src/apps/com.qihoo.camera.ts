import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qihoo.camera',
  name: '360摄像机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12846783',
    },
    {
      key: 6,
      name: '卡录像界面广告',
      actionMaximum: 1,
      activityIds: 'com.qihoo.jia.playpage.RecordPlayActivity',
      rules: [
        {
          name: '视频下方卡片式广告',
          matches:
            'ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]',
        },
        {
          name: '云收藏弹窗广告',
          matches:
            'ViewGroup > @ImageView[clickable=true] -n TextView[text="云收藏"]',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/13630755',
    },
  ],
});
