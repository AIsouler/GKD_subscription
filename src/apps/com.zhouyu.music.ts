import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhouyu.music',
  name: '微音乐',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      activityIds: 'com.zhouyu.music.activities.MainActivity',
      rules: '@[id=null][clickable=true] + View >n View [text$="广告"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13062330',
        'https://i.gkd.li/import/13068583',
        'https://i.gkd.li/import/13231850',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/798afc53-4aaf-481f-acb1-7c193bd8e6d6',
    },
    {
      key: 2,
      name: '局部广告-搜索底部广告',
      quickFind: true,
      activityIds: 'com.zhouyu.music.activities.MainActivity',
      rules: '[id="com.zhouyu.music:id/ksad_ad_dislike"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13245859', //launcher
      ],
    },
    {
      key: 3,
      quickFind: true,
      name: '功能类-看视频免广告自动化',
      desc: '点击静音-倒计时结束后点击X-点击确定',
      rules: [
        {
          key: 0,
          name: '点击静音',
          actionMaximum: 1, //由于静音前后控件没有区别，故设置最大触发次数
          resetMatch: 'app', //之所以不设置activity是因为进入广告时会刷新两次activity，触发两次点击导致静音失效
          activityIds: 'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          matches: '[id="com.zhouyu.music:id/ksad_video_sound_switch"]',
          snapshotUrls: 'https://i.gkd.li/import/13974721',
        },
        {
          key: 1,
          name: '倒计时结束后点击右上角X',
          activityIds: 'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          matches:
            '[id="com.zhouyu.music:id/ksad_play_end_top_toolbar"] > [vid="ksad_end_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13974632',
        },
        {
          key: 2,
          name: '点击退出广告后的确定弹窗',
          activityIds: 'com.zhouyu.music.activities.MainActivity',
          matches: '[text="免广告成功"] +3 * > [text="确定"]',
          snapshotUrls: 'https://i.gkd.li/import/13974655',
        },
      ],
    },
  ],
});
