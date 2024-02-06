import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhihu.android',
  name: '知乎',
  deprecatedKeys: [0, 1, 2, 3, 4, 5, 8, 9],
  groups: [
    {
      key: 6,
      name: '分段广告-问题-回答列表-卡片广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhihu.android.ContentActivity',
          quickFind: true,
          matches: '@ImageView[clickable=true] -n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849671',
        },
        {
          key: 2,
          activityIds: 'com.zhihu.android.ContentActivity',
          quickFind: true,
          matches: '@ImageView[clickable=true] -3 * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849442',
        },
        {
          key: 90,
          preKeys: [0],
          activityIds: 'com.zhihu.android.ContentActivity',
          quickFind: true,
          matches: '@[clickable=true] >3 [text="内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13849689',
        },
      ],
    },
    {
      key: 7,
      name: '分段广告-回答底部评论顶部广告',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'TextView[text$=`的广告`] +n TextView[text=`×`][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12864109',
        },
        {
          key: 2,
          activityIds: [
            'com.zhihu.android.mix.activity.ContentMixProfileActivity',
          ],
          matches: 'TextView[text="查看详情"] + TextView[text="×"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647617',
            'https://i.gkd.li/import/12647659', // 点击x按钮后的快照，界面无任何变化，导致反复触发这条规则
          ],
        },
        {
          key: 10,
          matches:
            '@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647525',
            'https://i.gkd.li/import/14178516', //activityId: com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity
          ],
        },
        // 预留11~99
        {
          preKeys: [10],
          key: 100,
          name: '反馈弹窗-点击“不感兴趣”',
          matches:
            '[id="com.zhihu.android:id/recycler_view"] > FrameLayout >(3) [text$="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/import/12647541'],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '通知提示-推送通知弹窗',
      desc: '推送通知弹窗-点击x按钮',
      activityIds: 'com.zhihu.android.app.ui.dialog.d',
      rules: [
        'TextView[id="com.zhihu.android:id/guide_title"] - ImageView[id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647583'],
    },
    {
      enable: false,
      key: 11,
      name: '全屏广告-会员页面月卡红包',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/floating_img"] + ImageView[id="com.zhihu.android:id/floating_close_btn"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647421'],
    },
    {
      key: 12,
      name: '全屏广告-会员页面广告弹窗',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12707676'],
    },
    {
      key: 13,
      name: '局部广告-搜索栏上方广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[vid="ad_container"] [vid="img_close_focus"]',
          exampleUrls:
            'https://m.gkd.li/101449500/11c26ab8-0b01-4345-8ea8-d4e97233b723',
          snapshotUrls: 'https://i.gkd.li/import/14156887',
        },
      ],
    },
    {
      enable: false,
      key: 101,
      name: '功能类-自动展开回答',
      activityIds:
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12647688',
        'https://i.gkd.li/import/12707687', // 使用 [visibleToUser=true] 进行限定，防止在控件不可见时提前触发规则
      ],
    },
  ],
});
