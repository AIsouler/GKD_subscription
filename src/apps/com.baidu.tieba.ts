import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.baidu.tieba',
  groups: [
    {
      key: 0,
      name: '百度贴吧-开屏广告',
      desc: '数字倒计时广告,圆形倒计时广告',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.pb.pb.main.PbActivity',
      ],
      rules: [
        'TextView[text*=`广告`] - TextView[text^=`跳过`]',
        '[id=`com.kwad.dy.sdk:id/ksad_splash_circle_skip_view`] TextView[text=`跳过`]',
        '[id=`com.byted.pangle:id/tt_splash_skip_btn`]',
      ],
    },
    {
      key: 1,
      name: '任意界面-选择不喜欢理由-不感兴趣',
      rules: '@View[text=null] - TextView[text=`选择不喜欢理由`][index=0]',
    },
    {
      key: 2,
      name: '首页/贴吧帖子列表-推荐列表-长得像帖子的广告卡片',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.frs.FrsActivity',
      ],
      rules: [
        'ImageView < @FrameLayout < LinearLayout < RelativeLayout <n LinearLayout < RelativeLayout + LinearLayout > RelativeLayout > TextView[text$=`广告`]',
      ],
    },
    {
      key: 3,
      name: '某个广告卡片',
      desc: '忘记是哪个卡片了',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.pb.pb.main.PbActivity',
      ],
      rules:
        'TextView[text=`广告`] <n FrameLayout <n LinearLayout - RelativeLayout @FrameLayout > ImageView',
    },
    {
      key: 4,
      name: '帖子评论区内部广告卡片',
      activityIds: 'com.baidu.tieba.frs.FrsActivity',
      rules:
        'ImageView < @FrameLayout < LinearLayout < RelativeLayout <n LinearLayout < RelativeLayout + LinearLayout[id=`com.baidu.tieba:id/obfuscated`] TextView[text=`广告`]',
    },
    {
      key: 5,
      name: '帖子评论区广告卡片',
      activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
      rules: [
        'TextView[text=`广告`] <n FrameLayout +n RelativeLayout[id=`com.baidu.tieba:id/obfuscated`] ImageView',
        'TextView[text$=`广告`] +n FrameLayout[id=`com.baidu.tieba:id/obfuscated`] ImageView[id=null]',
        'TextView[text$=`广告`] < RelativeLayout <n LinearLayout - RelativeLayout ImageView[id=null][desc=null]',
      ],
    },
  ],
};
