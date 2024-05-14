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
      rules: [
        {
          quickFind: true,
          position: {
            left: 'width * 0.8833',
            top: 'width * 0.1388',
          },
          matches: '[id="com.douban.frodo:id/_ad_image_"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1c36c96b-95b7-4299-8e88-b4fdc85d3518',
          snapshotUrls: [
            'https://i.gkd.li/i/13575257',
            'https://i.gkd.li/i/13575547',
            'https://i.gkd.li/i/13601755',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-不分享/同步作品短评',
      desc: '书影音-作品-状态-不分享/同步短评(5s后可手动)',
      quickFind: true,
      matchTime: 5000,
      resetMatch: 'activity',
      activityIds: 'com.douban.frodo.subject.activity.RatingActivity',
      rules: [
        {
          key: 0,
          name: '不分享到微信、微博',
          matches:
            '@LinearLayout > [id="com.douban.frodo:id/check_weibo_wechat"][visibleToUser=true][checked=true]',
          snapshotUrls: ['https://i.gkd.li/i/12508777'],
        },
        {
          key: 1,
          name: '不同步到动态',
          matches:
            '@LinearLayout > [id="com.douban.frodo:id/check_status"][visibleToUser=true][checked=true]',
          snapshotUrls: ['https://i.gkd.li/i/12508777'],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-剧照广告',
      activityIds: 'com.douban.frodo.baseproject.image.SociableImageActivity',
      rules: [
        {
          matches:
            'TextView[id="com.douban.frodo:id/ad_not_interest"][text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12509475',
        },
        {
          matches:
            'TextView[id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12509476',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-信息流广告',
      desc: '首页动态/推荐,小组讨论列表,帖子底部,点击广告关闭后出现关闭原因底部菜单-点击不感兴趣',
      quickFind: true,
      activityIds: [
        'com.douban.frodo.activity.SplashActivity',
        'com.douban.frodo.status.activity.StatusDetailActivity',
        'com.douban.frodo.subject.structure.activity.MovieActivity',
        'com.douban.frodo.subject.activity.ForumTopicActivity',
        'com.douban.frodo.group.activity.GroupDetailActivity',
        'com.douban.frodo.group.activity.GroupTopicActivity',
      ],
      rules: [
        {
          key: 1,
          name: '首页-动态-信息流广告',
          activityIds: [
            'com.douban.frodo.activity.SplashActivity',
            'com.douban.frodo.status.activity.StatusDetailActivity',
          ],
          matches:
            'ImageView[id="com.douban.frodo:id/avatar"][index=0] +n ImageView[id="com.douban.frodo:id/menu_item"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12547964',
            'https://i.gkd.li/i/12548011',
            'https://i.gkd.li/i/12548046',
          ],
        },
        {
          key: 2,
          name: '小组-帖子列表信息流广告',
          activityIds: [
            'com.douban.frodo.group.activity.GroupDetailActivity',
            'com.douban.frodo.activity.SplashActivity',
          ],
          matches: '[id="com.douban.frodo:id/ad_tag"][text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12723569',
            'https://i.gkd.li/i/13347455',
          ],
        },
        {
          name: '点击不感兴趣',
          preKeys: [1, 2],
          matches:
            '@LinearLayout[clickable=true] > [id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12548016',
            'https://i.gkd.li/i/12723422',
          ],
        },
      ],
    },
    {
      key: 4,
      actionCd: 10000,
      name: '分段广告-卡片广告',
      desc: '书影音-卡片广告-点击卡片右下角"广告"文字',
      // 豆瓣在屏幕之外渲染了大量节点, 在节点肉眼不可见但是无障碍可见的情况下, 仍然会触发大量点击
      // 发现增加一个较高的 cd 值可以避免后续广告节点出现, 从而不会触发点击
      quickFind: true,
      snapshotUrls: 'https://i.gkd.li/i/12548160',
      activityIds: 'com.douban.frodo.activity.SplashActivity',
      rules: [
        {
          key: 0,
          name: '点击"广告"',
          matches:
            '@View[clickable=true] > Image - TextView[text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12548131',
        },
        {
          preKeys: 0,
          name: '点击"不感兴趣"',
          matches:
            '[text="广告"] < * + * > [text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12548116',
        },
      ],
    },
    {
      key: 5,
      name: '评价提示-关闭评分反馈弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: {
        matches: '[text="下次再说"][id="com.douban.frodo:id/neutral"]',
        snapshotUrls: 'https://i.gkd.li/i/12548314',
      },
    },
    {
      key: 8,
      name: '分段广告-搜索页/帖子内容与评论区中间的卡片广告',
      desc: '部分有二次弹窗',
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '点击"x"关闭型',
          activityIds: ['com.douban.frodo.group.activity.GroupTopicActivity'],
          matches:
            'ImageView[id=null] +(n) LinearLayout[childCount<=2] + FrameLayout[childCount=1] > ImageView[id=null][visibleToUser=true][top>250]',
          snapshotUrls: [
            'https://i.gkd.li/i/12674798',
            'https://i.gkd.li/i/12674842',
            'https://i.gkd.li/i/12723462',
            'https://i.gkd.li/i/12723800',
            'https://i.gkd.li/i/13402399', // 添加[top>250]，避免误触快照中"更多"按钮
            'https://i.gkd.li/i/12548476', // 原key6
          ],
        },
        {
          key: 1,
          name: '点击"广告"选原因型',
          matches: '[text="广告"][id$="ad_not_interest"]',
          activityIds: [
            'com.douban.frodo.subject.structure.activity.MovieActivity',
            'com.douban.frodo.subject.activity.ForumTopicActivity',
            'com.douban.frodo.group.activity.GroupTopicActivity',
            'com.douban.frodo.activity.SplashActivity',
            'com.douban.frodo.search.activity.NewSearchActivity', // 搜索页
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12548064',
            'https://i.gkd.li/i/12548450',
            'https://i.gkd.li/i/12723751',
            'https://i.gkd.li/i/13062693',
            'https://i.gkd.li/i/13692895', // activityIds: 'com.douban.frodo.search.activity.NewSearchActivity'
          ],
        },
        {
          name: '点击"不感兴趣"',
          preKeys: 1,
          matches:
            '@LinearLayout[clickable=true] > [id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12548016',
            'https://i.gkd.li/i/12723422',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-个性化内容推荐弹窗',
      desc: '首页底部-个性化内容推荐弹窗-点击卡片右上角x直接关闭',
      rules: {
        activityIds: ['com.douban.frodo.activity.SplashActivity'],
        matches:
          '[id="com.douban.frodo:id/info"][text^="开启个性化推荐"] - [id="com.douban.frodo:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/12836798',
      },
    },
    {
      key: 10, // 已包含key13内容
      name: '全屏广告-弹窗广告',
      desc: '浏览详情时弹窗广告,点击右上角x',
      rules: [
        {
          key: 0,
          name: '腾讯广告-1',
          activityIds:
            'com.douban.frodo.subject.structure.activity.MovieActivity',
          matches:
            'ImageView - FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13195565',
        },
        {
          key: 1,
          name: '腾讯广告-2',
          matches:
            'ImageView -n FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13296656', // 与"咕咚" https://i.gkd.li/i/13348663 ，"全能计算器" https://i.gkd.li/i/13378847类似，可能来自同个sdk
            'https://i.gkd.li/i/13328126',
          ],
        },
      ],
    },
    {
      key: 11, //与key12完全重复
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: ['[text="新版试用邀请"]', '@[text="取消"] + [text="下载"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13228832',
            'https://i.gkd.li/i/13659160', // activityIds: 'com.douban.frodo.activity.SplashActivity',
          ],
        },
      ],
    },
  ],
});
