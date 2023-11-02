import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.douban.frodo.activity.SplashActivity',
        'com.douban.frodo.splash.SplashActivityHot',
      ],
      rules: '[id="com.douban.frodo:id/skip"||text^="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12505151',
        'https://gkd-kit.gitee.io/import/12505152',
        'https://gkd-kit.gitee.io/import/12506164',
      ],
    },
    {
      key: 1,
      name: '不同步到我的动态',
      desc: '标记看过时，不同步到我的动态',
      enable: false,
      activityIds: 'com.douban.frodo.subject.activity.RatingActivity',
      rules: '[id="com.douban.frodo:id/check_status"][checked=true]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12508777'],
    },
    {
      key: 2,
      name: '剧照广告',
      activityIds: 'com.douban.frodo.baseproject.image.SociableImageActivity',
      rules: [
        {
          matches:
            'TextView[id="com.douban.frodo:id/ad_not_interest"][text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12509475',
        },
        {
          matches:
            'TextView[id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12509476',
        },
      ],
    },
    {
      key: 3,
      name: '信息流广告',
      desc: '首页动态/推荐,小组讨论列表,帖子底部,点击广告关闭后出现关闭原因底部菜单-点击不感兴趣',
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
          name: '点击不感兴趣',
          preKeys: [1, 2, 3],
          matches:
            '@LinearLayout[clickable=true] > [id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12548016',
            'https://gkd-kit.gitee.io/import/12723422',
          ],
        },
        {
          key: 1,
          name: '点击广告卡片右上角菜单图标按钮',
          activityIds: [
            'com.douban.frodo.activity.SplashActivity',
            'com.douban.frodo.status.activity.StatusDetailActivity',
          ],
          matches:
            'ImageView[id="com.douban.frodo:id/avatar"][index=0] +n ImageView[id="com.douban.frodo:id/menu_item"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12547964',
            'https://gkd-kit.gitee.io/import/12548011',
            'https://gkd-kit.gitee.io/import/12548046',
          ],
        },
        {
          key: 2,
          name: '点击广告卡片右下角[广告]文字按钮',
          matches: '[text="广告"][id$="ad_not_interest"]',
          activityIds: [
            'com.douban.frodo.subject.structure.activity.MovieActivity',
            'com.douban.frodo.subject.activity.ForumTopicActivity',
            'com.douban.frodo.group.activity.GroupTopicActivity',
            'com.douban.frodo.activity.SplashActivity',
          ],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12548064',
            'https://gkd-kit.gitee.io/import/12548450',
            'https://gkd-kit.gitee.io/import/12723751',
            'https://gkd-kit.gitee.io/import/13062693',
          ],
        },
        {
          key: 3,
          name: '点击卡片中间的[广告]文字按钮',
          activityIds: ['com.douban.frodo.group.activity.GroupDetailActivity'],
          matches: '[id="com.douban.frodo:id/ad_tag"][text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12723569',
        },
      ],
    },
    {
      key: 4,
      cd: 10000,
      name: '卡片广告',
      desc: '书影音-卡片广告-点击卡片右下角"广告"文字',
      // 豆瓣在屏幕之外渲染了大量节点, 在节点肉眼不可见但是无障碍可见的情况下, 仍然会触发大量点击
      // 发现增加一个较高的 cd 值可以避免后续广告节点出现, 从而不会触发点击
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12548160',
      activityIds: 'com.douban.frodo.activity.SplashActivity',
      rules: [
        {
          matches:
            '[text="广告"] < * + * > [text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12548116',
        },
        {
          matches:
            '@View[clickable=true] > Image - TextView[text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12548131',
        },
      ],
    },
    {
      key: 5,
      name: '关闭评分反馈弹窗',
      activityIds: 'com.douban.frodo.activity.SplashActivity',
      rules: {
        matches: '[text="下次再说"][id="com.douban.frodo:id/neutral"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12548314',
      },
    },
    {
      key: 6,
      name: '影评广告卡片',
      desc: '影评顶部评论区顶部广告卡片-点击右下角x关闭广告',
      activityIds: ['com.douban.frodo.subject.activity.ForumTopicActivity'],
      rules: [
        {
          matches:
            'TextView < FrameLayout + FrameLayout > ImageView +3 FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12548476',
        },
      ],
    },
    // key=7 已被删除,不可使用
    {
      key: 8,
      name: '小组讨论详情页广告',
      desc: '帖子底部-评论区顶部广告卡片,点击卡片右下角x直接关闭',
      rules: {
        activityIds: ['com.douban.frodo.group.activity.GroupTopicActivity'],
        matches:
          'ImageView[id=null] +(n) LinearLayout[childCount<=2] + FrameLayout[childCount=1] > ImageView[id=null][visibleToUser=true]',
        snapshotUrls: [
          'https://gkd-kit.gitee.io/import/12674798',
          'https://gkd-kit.gitee.io/import/12674842',
          'https://gkd-kit.gitee.io/import/12723462',
          'https://gkd-kit.gitee.io/import/12723800',
        ],
      },
    },
    {
      key: 9,
      name: '个性化内容推荐弹窗',
      desc: '首页底部-个性化内容推荐弹窗-点击卡片右上角x直接关闭',
      rules: {
        activityIds: ['com.douban.frodo.activity.SplashActivity'],
        matches:
          '[id="com.douban.frodo:id/info"][text^="开启个性化推荐"] - [id="com.douban.frodo:id/close"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12836798',
      },
    },
    {
      key: 10,
      name: '弹窗',
      desc: '浏览详情时弹窗广告',
      rules: {
        activityIds: [
          'com.douban.frodo.subject.structure.activity.MovieActivity',
        ],
        matches: [
          '[text="查看详情"]',
          'FrameLayout[childCount=5] > FrameLayout > ImageView',
        ],
        snapshotUrls: 'https://i.gkd.li/import/13195565',
      },
    },
    {
      key: 11,
      name: '更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds: 'com.douban.frodo.activity.BetaApkDialogActivity',
          matches: ['[text="新版试用邀请"]', '@[text="取消"] + [text="下载"]'],
          snapshotUrls: 'https://i.gkd.li/import/13228832',
        },
      ],
    },
  ],
});
