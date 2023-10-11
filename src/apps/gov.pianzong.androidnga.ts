import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: ['gov.pianzong.androidnga.activity.LoadingActivity'],
      rules: [
        '[id="gov.pianzong.androidnga:id/iv_tg_ad"]',
        '[id="gov.pianzong.androidnga:id/ksad_splash_circle_skip_view"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12476484',
        'https://gkd-kit.gitee.io/import/12706127', // activityId: 'com.miui.home.launcher.Launcher',
        'https://gkd-kit.gitee.io/import/12864707', // activityIds: 'gov.pianzong.androidnga.activity.LoadingActivity',
      ],
    },
    {
      key: 1,
      name: '首页-推荐-广告卡片',
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules: ['[id="gov.pianzong.androidnga:id/iv_close_ad"]'],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12482727',
    },
    {
      key: 2,
      name: '话题-帖子列表广告',
      desc: '点击卡片右下角x按钮关闭广告',
      activityIds:
        'gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity',
      rules: [
        {
          matches: 'Image[text="ams_icon_single_close"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12655805'],
        },
        {
          matches:
            'TextView[text!=null] - ImageView < LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView[id=null]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12706140'],
        },
      ],
    },
    {
      key: 3,
      name: '社区-顶部广告',
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules: '[id="gov.pianzong.androidnga:id/iv_close_community_ad"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12706132'],
    },
  ],
});
