import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[text=`跳过`][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12673960', // text="互动广告"
            'https://gkd-kit.gitee.io/import/12674023', // text="互动广告 | "
            'https://gkd-kit.gitee.io/import/12673998', // text="广告"
            'https://gkd-kit.gitee.io/import/12674074', // text="运营推广"
          ],
        },
      ],
    },
    {
      key: 1,
      name: '推荐页-广告卡片',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: [
        '@LinearLayout[clickable=true] > TextView[text="广告"] + ImageView', // 1688045698846
        'TextView[text="广告 | 关闭"][clickable=true]',
      ],
    },
    {
      key: 2,
      name: '首页-底部广告弹窗',
      quickFind: true,
      activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
      rules: 'View[id="js_close_btn"][desc="关闭"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13115121',
    },
    {
      key: 3,
      name: '内测体验弹窗',
      desc: '点击[不再提醒]',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      quickFind: true,
      rules: '[text="抢先体验"] -2 [text="不再提醒"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13178485',
    },
    {
      key: 4,
      name: '免流弹窗',
      desc: '点击[流量够用]',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      quickFind: true,
      rules: '[text="流量够用"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13197868',
    },
  ],
});
