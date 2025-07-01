import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.danielstudio.app.wowtu',
  name: '煎蛋',
  groups: [
    {
      key: 1,
      name: '功能类-自动查看高清图片',
      desc: '点击图片左下角[HD]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.ImageGalleryActivity',
          matches: '[vid="hd_image"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ec909db9-b585-4d69-a456-aa0865cec6a7',
          snapshotUrls: 'https://i.gkd.li/i/19643465',
        },
      ],
    },
  ],
});
