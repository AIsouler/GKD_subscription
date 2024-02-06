import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '局部广告-广告卡片',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: [
        {
          key: 1,
          activityIds:
            'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
          matches: '[text^="广告"] + [text="跳过"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13985169', // 播放界面
        },
        {
          key: 2,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: '[text="广告"] +n [desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206534', //歌单页
            'https://i.gkd.li/import/13797001', //我的页
          ],
        },
        {
          key: 3,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206982',
            'https://i.gkd.li/import/13218134',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页-底部广告弹窗',
      quickFind: true,
      activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
      rules: 'View[id="js_close_btn"][desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13115121',
    },
    {
      key: 3,
      name: '更新提示-内测体验弹窗',
      desc: '点击[不再提醒]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: '[text="抢先体验"] -2 [text="不再提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/13178485',
    },
    {
      key: 4,
      name: '全屏广告-免流弹窗',
      desc: '点击[流量够用]',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      quickFind: true,
      rules: '[text="流量够用"]',
      snapshotUrls: 'https://i.gkd.li/import/13197868',
    },
    {
      key: 5,
      name: '全屏广告-看广告免费听歌弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches: '[id="com.tencent.qqmusic:id/c5i"] >5 [desc="关闭按钮"]',
          snapshotUrls: 'https://i.gkd.li/import/13806773',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-豪华绿钻弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: '[id="android:id/content"] >4 ViewGroup[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13806782',
        },
      ],
    },
  ],
});
