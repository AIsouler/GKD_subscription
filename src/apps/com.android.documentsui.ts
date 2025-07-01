import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.documentsui',
  name: '文件',
  groups: [
    {
      key: 1,
      name: '功能类-允许第三方应用访问文件夹',
      desc: '点击允许',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.documentsui.picker.PickActivity',
          matches: [
            '[text^="要允许"][visibleToUser=true]',
            '[text="允许"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13801468',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-使用此文件夹',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.documentsui.picker.PickActivity',
          matches: '[text="使用此文件夹"]',
          snapshotUrls: 'https://i.gkd.li/i/13916082',
        },
      ],
    },
  ],
});
