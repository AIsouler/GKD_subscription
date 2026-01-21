import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      // actionMaximum: 2,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/15981630',
        },
        {
          key: 1,
          fastQuery: true,
          position: {
            left: 'width * 0.875',
            top: 'width * 0.17', // height可能会变化，不建议使用
          },
          matches:
            '[vid="ad_parent"][visibleToUser=true][width>=1200 && width!=1224]',
          snapshotUrls: [
            'https://i.gkd.li/i/13601755',
            'https://i.gkd.li/i/16054268',
            'https://i.gkd.li/i/23324118',
            'https://i.gkd.li/i/23324139',
            'https://i.gkd.li/i/23652259',
            'https://i.gkd.li/i/24191638',
            'https://i.gkd.li/i/24362806',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23283060',
            'https://i.gkd.li/i/23382528',
            'https://i.gkd.li/i/23982586',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.875',
            top: 'width * 0.137', // height可能会变化，不建议使用
          },
          matches:
            '[vid="ad_parent"][visibleToUser=true][width<1200 || width=1224]',
          snapshotUrls: [
            'https://i.gkd.li/i/13575257',
            'https://i.gkd.li/i/13575547',
            'https://i.gkd.li/i/18423724',
            'https://i.gkd.li/i/23982586',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          excludeMatches: '[text="去绑定邮箱"][visibleToUser=true]',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17687115',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23283375',
        },
        {
          key: 4,
          fastQuery: true,
          position: {
            left: 'width * 0.868',
            top: 'width * 0.09', // height可能会变化，不建议使用
          },
          matches: '[vid="ad_parent"][visibleToUser=true][width=1216]',
          snapshotUrls: 'https://i.gkd.li/i/23283060',
        },
        {
          key: 5,
          fastQuery: true,
          position: {
            left: 'width * 0.875',
            top: 'width * 0.125',
          },
          matches: '[vid="ad_parent"][visibleToUser=true][width=1440]',
          snapshotUrls: 'https://i.gkd.li/i/23382528',
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
            '.fangorns.topic.TopicsActivity',
            '.subject.struct2.MovieActivity2',
          ],
          matches:
            '[vid="ad_header_new"] > [vid="menu_item"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18424402',
            'https://i.gkd.li/i/18424418',
            'https://i.gkd.li/i/18424924',
            'https://i.gkd.li/i/19615325',
            'https://i.gkd.li/i/23982599',
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
          key: 4,
          activityIds: '.group.activity.GroupTopicActivity',
          matches:
            '@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^="dislike"] -2 FrameLayout >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/11d3ea75-c640-4b91-942e-3bf83b2e5f5e',
          snapshotUrls: 'https://i.gkd.li/i/19621152',
        },
        {
          preKeys: [1, 2, 3, 4],
          activityIds: [
            '.activity.SplashActivity',
            '.subject.structure.activity.MovieActivity',
            '.group.activity.GroupDetailActivity',
            '.group.activity.GroupTopicActivity',
            '.fangorns.topic.TopicsActivity',
          ],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18424404',
            'https://i.gkd.li/i/18424419',
            'https://i.gkd.li/i/18424568',
            'https://i.gkd.li/i/18424674',
            'https://i.gkd.li/i/18424711',
            'https://i.gkd.li/i/19615333',
            'https://i.gkd.li/i/19621163',
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
        {
          key: 2,
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: '[vid="venue_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/86f2589d-87eb-4b9a-83aa-4248b905f7b2',
          snapshotUrls: 'https://i.gkd.li/i/18717693',
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
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13195565',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
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
        {
          key: 3,
          fastQuery: true,
          activityIds: '.subject.structure.activity.MovieActivity',
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[vid="close"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/208939d0-9d7f-4a44-8e7d-5070478c15df',
          snapshotUrls: 'https://i.gkd.li/i/18631520',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.subject.structure.activity.MovieActivity',
          matches: [
            '[text="你发现了一枚徽章"][visibleToUser=true]',
            '[vid="confirmLayout"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/ca74a922-fb47-4fc8-8111-b6a66c2465ff',
          snapshotUrls: 'https://i.gkd.li/i/18717771',
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
    {
      key: 13,
      name: '其他-标记看过的影视弹窗',
      desc: '点击[取消]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.subject.structure.activity.MovieActivity',
          matches: [
            '[text="标记看过的影视"][visibleToUser=true]',
            '[vid="cancelLayout"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/8067419c-a902-4750-9e1e-655bfc5c7342',
          snapshotUrls: 'https://i.gkd.li/i/18717798',
        },
      ],
    },
  ],
});
