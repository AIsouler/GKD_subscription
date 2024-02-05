import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qjy.youqulife.io',
  name: 'MINO 4K',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '快手广告',
          activityIds: 'com.qjy.youqulife.io.MainActivity',
          quickFind: true,
          matches:
            '[text="广告"] <2 ViewGroup -n ViewGroup > ViewGroup > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13378653',
        },
      ],
    },
  ],
});
