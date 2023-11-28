import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12739065', // com.xingin.xhs.index.v2.IndexActivityV2
        'https://i.gkd.li/import/13197784', // com.xingin.matrix.detail.activity.DetailFeedActivity
      ],
    },
    {
      key: 1,
      name: '通知权限弹窗',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'app',
      matchLauncher: true,
      activityIds: [
        'com.xingin.xhs.index.v2.IndexActivityV2',
        'com.xingin.xhs.notification.NotificationAuthorizationTranslucentActivity',
        'com.xingin.matrix.notedetail.r10.comment.r10.NoteCommentActivity',
      ],
      rules: [
        {
          matches: '@ImageView <2 FrameLayout >2 [text^="打开通知"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13195753', //com.xingin.xhs.index.v2.IndexActivityV2
            'https://i.gkd.li/import/13222356', //com.xingin.xhs.notification.NotificationAuthorizationTranslucentActivity
            'https://i.gkd.li/import/13256145', //com.huawei.android.launcher.unihome.UniHomeLauncher
            'https://i.gkd.li/import/13255627', //com.xingin.matrix.notedetail.r10.comment.r10.NoteCommentActivity
          ],
        },
        {
          matches: '@ImageView <2 FrameLayout - [text^="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/import/13250418',
        },
      ],
    },
    {
      key: 2,
      name: '更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'app',
      activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
      rules:
        '@ImageView[clickable=true] <2 FrameLayout < LinearLayout >2 [text="立即安装"]',
      snapshotUrls: 'https://i.gkd.li/import/13246890',
    },
    {
      enable: false,
      key: 3,
      name: '信息流广告',
      desc: '长按【赞助】/【广告】标识的卡片-点【不感兴趣】',
      quickFind: true,
      activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
      rules: [
        {
          key: 0,
          action: 'longClick',
          name: '长按【赞助】/【广告】卡片',
          matches:
            '@FrameLayout[clickable=true] > LinearLayout TextView[text="赞助"||text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13455503',
            'https://i.gkd.li/import/13470690',
          ],
        },
        {
          preKeys: 0,
          name: '点【不感兴趣】',
          matches:
            'RecyclerView > @LinearLayout > TextView[text="不喜欢该内容"]',
          snapshotUrls: 'https://i.gkd.li/import/13455500',
        },
      ],
    },
  ],
});
