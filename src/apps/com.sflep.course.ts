import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sflep.course',
  name: 'WE Learn',
  groups: [
    {
      key: 1,
      name: '功能类-离开考试页面弹窗',
      desc: '点击确定',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.ClassActivity',
          matches:
            '@[text="确认"][clickable=true] < * - [text^="系统检查到你离开了考试页面"] <n Dialog <n * <<3 [vid="pp_about_content"]',
          snapshotUrls: 'https://i.gkd.li/i/23150673',
        },
      ],
    },
  ],
});
