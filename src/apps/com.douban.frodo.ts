import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
          snapshotUrls: 'https://i.gkd.li/i/15981630',
        },
        {
          key: 1,
          fastQuery: true,
          position: {
            left: 'width * 0.8833',
            top: 'width * 0.1388',
          },
          matches: '[vid="ad_view"][visibleToUser=true][width!=1200]',
          snapshotUrls: [
            'https://i.gkd.li/i/13575257',
            'https://i.gkd.li/i/13575547',
            'https://i.gkd.li/i/18423724',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.8666',
            top: 'width * 0.1625',
          },
          matches: '[vid="ad_view"][visibleToUser=true][width=1200]',
          snapshotUrls: [
            'https://i.gkd.li/i/13601755',
            'https://i.gkd.li/i/16054268',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17687115',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: [
            '.activity.SplashActivity',
            '.subject.structure.activity.MovieActivity',
            '.group.activity.GroupTopicActivity',
          ],
          matches:
            '[vid="ad_header_new"] > [vid="menu_item"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18424402',
            'https://i.gkd.li/i/18424418',
            'https://i.gkd.li/i/18424924',
          ],
        },
        {
          key: 2,
          activityIds: [
            '.group.activity.GroupDetailActivity',
            '.group.activity.GroupTopicActivity',
          ],
          matches:
            '[vid="ad_not_interest" || vid="ad_tag" || vid="group_ad_not_interest"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18424568',
            'https://i.gkd.li/i/18424574',
            'https://i.gkd.li/i/18424681',
            'https://i.gkd.li/i/18424818',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18422533',
        },
        {
          key: 3,
          actionMaximum: 1,
          activityIds: '.group.activity.GroupTopicActivity',
          matches:
            '@Image[childCount=0][visibleToUser=true][text=""] < View[childCount=1] -2 View >2 [childCount=0][text="广告"] <<n [vid="structure_header_container"]',
          snapshotUrls: 'https://i.gkd.li/i/18424747',
        },
        {
          preKeys: [1, 2, 3],
          activityIds: [
            '.activity.SplashActivity',
            '.subject.structure.activity.MovieActivity',
            '.group.activity.GroupDetailActivity',
            '.group.activity.GroupTopicActivity',
          ],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18424404',
            'https://i.gkd.li/i/18424419',
            'https://i.gkd.li/i/18424568',
            'https://i.gkd.li/i/18424674',
            'https://i.gkd.li/i/18424711',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '评价提示-关闭评分反馈弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.SplashActivity',
          matches: [
            '[text^="喜欢豆瓣吗"][visibleToUser=true]',
            '[text="下次再说"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18424257',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.group.activity.GroupTopicActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18424415',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.group.activity.GroupTopicActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout +2 FrameLayout >2 [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"]',
          exampleUrls: 'https://e.gkd.li/735decb0-7f08-4c7d-8199-a38faf213f77',
          snapshotUrls: 'https://i.gkd.li/i/18424859',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.douban.frodo.subject.structure.activity.MovieActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13195565',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13328126',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/f8b1e031-3ec1-422c-9214-8350195642cd',
          snapshotUrls: 'https://i.gkd.li/i/13328126',
        },
      ],
    },
    {
      key: 11,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            '.activity.BetaApkDialogActivity',
            '.activity.SplashActivity',
          ],
          matches: [
            '[text="新版试用邀请"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13228832',
            'https://i.gkd.li/i/13659160',
          ],
        },
      ],
    },
  ],
});
