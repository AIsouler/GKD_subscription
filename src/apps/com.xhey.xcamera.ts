import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xhey.xcamera',
  name: '今日相机',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.xhey.xcamera.ui.camera.picNew.PreviewActivity'],
      rules: [
        {
          matches: '@LinearLayout > TextView[text^="跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/import/12864144'],
        },
      ],
    },
  ],
});
