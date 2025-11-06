import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.gallery',
  name: '小米相册',
  groups: [
    {
      key: 1,
      name: '功能类-删除时勾选[同时从云端删除]',
      rules: [
        {
          activityIds: 'com.miui.gallery.activity.InternalPhotoPageActivity',
          matches: '[text="同时从云端删除"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/15804289',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-流量同步自动点击[继续同步]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.BackupDetailActivity',
          matches: [
            '[text^="当前处于移动网络下，继续同步将消耗"]',
            '[text="继续同步"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23124555',
        },
      ],
    },
    {
      key: 3,
      name: '其他-图片保存成功弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.ExternalPhotoPageActivity',
          matches: ['[text="图片已经保存到相册"]', '[text="确定"]'],
          snapshotUrls: 'https://i.gkd.li/i/23383772',
        },
      ],
    },
  ],
});
