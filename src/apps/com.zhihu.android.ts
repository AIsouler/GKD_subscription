import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.zhihu.android',
  groups: [
    {
      key: 0,
      name: '知乎-开屏广告',
      activityIds: [
        'com.zhihu.android.app.ui.activity.LauncherActivity',
        'com.zhihu.android.app.ui.activity.LaunchAdActivity',
        'com.zhihu.android.app.feed.AdTransparentHostActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: 'TextView[id=`com.zhihu.android:id/btn_skip`]', // 1688038758143
    },
    {
      key: 1,
      name: '知乎-关闭广告弹窗',
      desc: '点击 关闭广告按钮 之后出现的广告弹窗',
      activityIds: [
        'com.zhihu.android.ContentActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules:
        '@FrameLayout ImageView + TextView[text*=`虚假广告`][id=`com.zhihu.android:id/tv_content`]', // 1687787655006
    },
    {
      key: 2,
      name: '知乎-关闭广告原因',
      desc: '点击 关闭广告按钮 之后出现的选择原因',
      activityIds: 'com.zhihu.android.ContentActivity',
      rules: [
        '[id=`com.zhihu.android:id/confirm_uninterest`]',
        '[id=`com.zhihu.android:id/revert_uninterest`] <n * + [id=`com.zhihu.android:id/reason_container`] > [id=`com.zhihu.android:id/uninterest_reason`]',
      ],
    },
    {
      key: 3,
      name: '知乎-关闭推荐',
      desc: '关闭回答底部其他回答',
      activityIds: 'com.zhihu.android.mix.activity.ContentMixProfileActivity',
      rules: [
        'TextView + View + TextView + TextView[text$=`评论`][text*=`赞同`] + View',
      ],
    },
    {
      key: 5,
      name: '知乎-推荐页广告卡片',
      desc: `赚稿费广告卡片,盐选推荐广告,知乎学课堂,汽车广告`,
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        `[id='com.zhihu.android:id/content'] >2 TextView[text='不感兴趣'][id='com.zhihu.android:id/title']`, // 1686989681860
        'TextView[text=`内容质量差`][id=`com.zhihu.android:id/tv_content`]',
        '@ImageView[id=`com.zhihu.android:id/menu`] < FrameLayout - * > TextView[text^=`广告`]', // 1687913210243 1686989714786
        '@ImageView[id=null][isClickable=true] -n TextView[text*=`广告`][index=0]', // 1687418944396 1686924015259
      ],
    },
    {
      key: 6,
      name: '问题-回答列表-卡片广告',
      activityIds: 'com.zhihu.android.ContentActivity',
      rules: [
        '@ImageView -n TextView[text=`广告`][index=0]', // 1687787712268 1687787635158
        `ImageView[id=null] + TextView[text!=null][id=null] + ViewGroup > ImageView[isClickable=true]`, // 1688028432747
      ],
    },
    {
      key: 7,
      name: '回答底部评论顶部的任意广告推荐',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
      ],
      rules: [
        '@Image + TextView[text$=`的广告`]',
        'TextView[text$=`的广告`] +n TextView[text=`×`]',
        'TextView[text=`查看详情`] + TextView[text=`×`]',
        'TextView[text*=`赞同`][text*=`评论`] + TextView[text=`×`]',
        'TextView[text*=`回答`][text*=`关注`] + TextView[text=`×`]',
        'TextView[text!=null] + TextView[text*=`赞同`] + View > Image',
        'TextView[text$=`的广告`] - Image[id=null]',
        'TextView[text*=`广告`] +2 Image[id=null]', // 1687338556331
        'TextView[text*=`点赞`][text*=`的回答`] +2 Image[id=null]', // 1687076663768 1686969672948
        `TextView[text=''] + Image[text=''] + TextView[text='​'] + Image[id=null][isClickable=true]`, // 1687234636980
      ],
    },
    {
      key: 8,
      name: '知乎-关闭首页广告',
      activityIds: 'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
      rules: '[id=`com.zhihu.android:id/tv_ad_close`]',
    },
    {
      key: 9,
      name: `知乎-推荐页-顶部广告`,
      activityIds: `com.zhihu.android.app.ui.activity.MainActivity`,
      rules: [
        `[id='com.zhihu.android:id/tv_ad_tag'] + [id='com.zhihu.android:id/img_close_focus']`, // 1686911063850
      ],
    },
  ],
};
