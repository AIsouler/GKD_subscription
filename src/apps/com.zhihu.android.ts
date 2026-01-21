import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: [
            '.app.SearchActivity',
            '.comment.ui.activity.CommentListActivity',
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matches:
            '([vid="btn_skip"][visibleToUser=true]) || ([text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true])',
          exampleUrls: 'https://e.gkd.li/e129aaa6-bf4f-4455-9242-a6779667d814',
          snapshotUrls: [
            'https://i.gkd.li/i/18221451',
            'https://i.gkd.li/i/22714295',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18221225',
            'https://i.gkd.li/i/23141429',
            'https://i.gkd.li/i/24229324',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击内容不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
            '.ContentActivity',
          ],
          matches:
            '@[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup >n [text*="广告"][childCount=0][id=null][desc=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849671',
            'https://i.gkd.li/i/14645530',
            'https://i.gkd.li/i/14178516',
            'https://i.gkd.li/i/13849442',
            'https://i.gkd.li/i/14178979',
            'https://i.gkd.li/i/14178980',
            'https://i.gkd.li/i/14206949',
            'https://i.gkd.li/i/14206988',
            'https://i.gkd.li/i/18008867',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/17002118',
            'https://i.gkd.li/i/17002119',
            'https://i.gkd.li/i/17002120',
          ],
        },
        {
          key: 2,
          activityIds: '.app.ui.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][childCount=0] < FrameLayout[childCount=1] - * > [text*="广告" || text$="商品介绍"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14296163',
            'https://i.gkd.li/i/14321041',
            'https://i.gkd.li/i/14468152',
            'https://i.gkd.li/i/17237944',
          ],
        },
        {
          key: 3,
          activityIds: [
            '.app.ui.activity.MainActivity',
            '.ContentActivity',
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matches:
            '@ViewGroup[clickable=true][childCount=1] <(2,3,4) ViewGroup -(2,3) ViewGroup[childCount>1] >(1,2) [text*="广告"]',
          exampleUrls: 'https://e.gkd.li/60c4dea8-99c1-4a6f-aca6-a098b5ed76d7',
          snapshotUrls: [
            'https://i.gkd.li/i/14192451',
            'https://i.gkd.li/i/18217217',
            'https://i.gkd.li/i/19591989',
            'https://i.gkd.li/i/21813914',
            'https://i.gkd.li/i/24214771',
          ],
        },
        {
          key: 4,
          activityIds: '.app.ui.activity.MainActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=1] <3 ViewGroup < ViewGroup -(2,3) ViewGroup >2 [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14332161',
            'https://i.gkd.li/i/14730741',
          ],
        },
        {
          key: 5,
          activityIds:
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches: '@[vid="remove"] - [vid="subtitle"][text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17268845',
            'https://i.gkd.li/i/17268869',
          ],
        },
        {
          preKeys: [0, 2, 3, 4, 5],
          key: 90,
          activityIds: [
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
            '.ContentActivity',
            '.app.ui.activity.MainActivity',
          ],
          matches:
            '@[clickable=true] >(1,3) [text$="不感兴趣" || text^="屏蔽作者" || text="不喜欢该内容"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849689',
            'https://i.gkd.li/i/17237940',
            'https://i.gkd.li/i/17268849',
            'https://i.gkd.li/i/23431871',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: [
            '.app.ui.activity.MainActivity',
            '.mix.activity.ContentMixProfileActivity',
            '.app.ui.activity.HostActivity',
          ],
          matches: [
            '[text$="内容推送" || text="开启私信通知"]',
            '[vid="btn_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18057057',
            'https://i.gkd.li/i/20647853',
            'https://i.gkd.li/i/22762314',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '会员页弹窗广告',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[id="com.zhihu.android:id/dismiss"]',
          snapshotUrls: 'https://i.gkd.li/i/12707676',
        },
        {
          key: 1,
          name: '首页弹窗广告',
          activityIds: 'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
          matches: '[vid="tv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14648128',
        },
        {
          key: 2,
          name: '会员页红包弹窗',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[id="com.zhihu.android:id/floating_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12647421',
        },
        {
          key: 3,
          action: 'clickCenter',
          activityIds:
            'com.zhihu.android.creatorcenter.CreatorCenterHostActivity',
          matches:
            'View[text="关闭"] > @[visibleToUser=true][text="关闭"] <<n [vid="webview_bg"]',
          snapshotUrls: 'https://i.gkd.li/i/14955183',
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '搜索栏上方广告',
          fastQuery: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: ['[vid="ad_container"]', '[vid="img_close_focus"]'],
          exampleUrls:
            'https://m.gkd.li/101449500/11c26ab8-0b01-4345-8ea8-d4e97233b723',
          snapshotUrls: 'https://i.gkd.li/i/14156887',
        },
        {
          key: 1,
          name: '评论区广告',
          fastQuery: true,
          activityIds: '.comment.ui.activity.CommentListActivity',
          matches:
            '@ViewGroup[childCount=1][clickable=true][visibleToUser=true][getChild(0).name$="SvgView"] - [text="广告"]',
          exampleUrls: 'https://e.gkd.li/d81b6bc4-f4f9-466d-8edb-7af27c707ca5',
          snapshotUrls: 'https://i.gkd.li/i/20711018',
        },
        {
          key: 2,
          name: '优质答主推荐',
          fastQuery: true,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches: '@[vid="ic_close"][clickable=true] -n [text="更多优质答主"]',
          snapshotUrls: 'https://i.gkd.li/i/24335648',
        },
      ],
    },
    {
      key: 14,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 2,
          activityIds: [
            '.mix.activity.ContentMixProfileActivity',
            '.mixshortcontainer.MixShortContainerActivity',
          ],
          matches:
            '@[text="×"][visibleToUser=true] <n View > [visibleToUser=true][text*="广告" || text="查看详情"] <<n [vid="web_frame" || vid="view_content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14220104',
            'https://i.gkd.li/i/14421277',
            'https://i.gkd.li/i/15285359',
          ],
        },
        {
          key: 5,
          activityIds: [
            '.mixshortcontainer.MixShortContainerActivity',
            '.mix.activity.ContentMixProfileActivity',
          ],
          matches:
            '@Image[visibleToUser=true] <2 View > [visibleToUser=true][text$="广告"] <<n [vid="view_content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14391614',
            'https://i.gkd.li/i/15282584',
            'https://i.gkd.li/i/20648888',
          ],
        },
        {
          key: 6,
          activityIds:
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true]  -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup > [text*="知乎" || text="创作者小助手"][childCount=0][id=null][desc=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/14235024',
            'https://i.gkd.li/i/14944631',
            'https://i.gkd.li/i/14232195',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14232195',
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-悬浮广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '发现页面-右侧年卡折扣悬浮窗',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: ['[vid="activity_img"]', '[vid="activity_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/14296251',
        },
        {
          key: 1,
          name: '首页-右侧悬浮窗广告',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14635636',
        },
        {
          key: 2,
          name: '回答页-底部关注悬浮窗',
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches: '[vid="close_img"]',
          snapshotUrls: 'https://i.gkd.li/i/14970008',
        },
        {
          key: 3,
          activityIds:
            'com.zhihu.android.mix.activity.ContentMixProfileActivity',
          matches:
            'View[childCount=3] > @View[clickable=true][childCount=1][text=""] > Image[childCount=0][text=""] <<n [vid="view_content"]',
          exampleUrls: 'https://e.gkd.li/6b9afb50-47a3-4426-a157-9b170b57c616',
          snapshotUrls: 'https://i.gkd.li/i/16422471',
        },
      ],
    },
    {
      key: 16,
      name: '更新提示',
      matchTime: 10000,
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: [
        '.app.ui.activity.MainActivity',
        '.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      rules: [
        {
          key: 0,
          name: '勾选[不再提醒]',
          matches: 'CheckBox[text="不再提醒"][checked=false][clickable=true]', // checked=false 区别勾选前后
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: [
            'https://i.gkd.li/i/14445502', // 勾选前
            'https://i.gkd.li/i/14445815', // 勾选后
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[取消]',
          matches: ['[text="去应用市场"]', '[text="取消"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: 'https://i.gkd.li/i/14445502',
        },
      ],
    },
    {
      key: 17,
      name: '功能类-热榜页自动点击[展开更多]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '@[clickable=true] >2 [text="展开更多"]',
          exampleUrls:
            'https://m.gkd.li/57941037/09616b29-8a83-4f0f-9f8e-0100fa61738d',
          snapshotUrls: 'https://i.gkd.li/i/14974198',
        },
      ],
    },
    {
      key: 18,
      name: '功能类-自动展开回答',
      desc: '自动点击展开',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          matches:
            'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/6f6e5fd0-98a8-4a92-be02-7f34e3c5b8bd',
          snapshotUrls: [
            'https://i.gkd.li/i/12647688',
            'https://i.gkd.li/i/12707687', // 使用 [visibleToUser=true] 进行限定，防止在控件不可见时提前触发规则
          ],
        },
      ],
    },
    {
      key: 19,
      name: '评价提示-评论区氛围评价卡片',
      desc: '点击关闭',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.comment.ui.activity.CommentListActivity',
          matches:
            '@ViewGroup[clickable=true] - [text^="你对该内容下的评论氛围是否满意"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/60674332-41a3-4a31-907e-7af6c23182bf',
          snapshotUrls: 'https://i.gkd.li/i/20473238',
        },
      ],
    },
  ],
});
