import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
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
          excludeActivityIds: '.search.activity.SearchResultActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/202942ce-259c-4b9d-b3b3-06afbac8145f',
          snapshotUrls: 'https://i.gkd.li/i/13216121',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17811608',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.live.LivePlayActivity',
          matches:
            '@View[clickable=true][width<80&&height<80] +2 View >4 [text="立即查看"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7c97fdc7-9de0-403d-9817-e43da0eb8a31',
          snapshotUrls: 'https://i.gkd.li/i/22743677',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示-关闭更新弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: ['[text*="立即升级"]', '[text="以后再说"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/12534016',
            'https://i.gkd.li/i/13328599',
            'https://i.gkd.li/i/15359995',
            'https://i.gkd.li/i/20139600',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击[暂不]/[以后再说]/[禁止]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        '.main.MainActivity',
        '.profile.ui.UserProfileActivity',
        '.detail.ui.DetailActivity',
      ],
      rules: [
        {
          key: 1,
          matches: [
            '[text^="打开私信通知" || text="开启朋友的消息通知" || text="及时获得消息提醒" || text$="评论回复提醒"][visibleToUser=true]',
            '[text="以后再说" || text="暂不开启" || text="禁止"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13669790', //这些开启通知请求形式全都不一样！
            'https://i.gkd.li/i/18417891',
            'https://i.gkd.li/i/18419574',
            'https://i.gkd.li/i/25024525',
            'https://i.gkd.li/i/25063241',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '功能类-自动勾选原图',
      desc: '聊天发送图片时自动勾选原图',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds:
            '.ecommerce.im.choosemedia.ECommerceIMMediaChooseActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + [text="原图"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18637952', // 未选中
            'https://i.gkd.li/i/18637948', // 已选中
          ],
        },
      ],
    },
    {
      key: 12,
      name: '其他-休息提醒',
      fastQuery: true,
      rules: [
        {
          key: 1,
          matches: '@[text="取消"] + [text*="提醒我"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13241564',
            'https://i.gkd.li/i/14160675',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-小组件弹窗',
      desc: '关闭弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '商城快捷方式',
          fastQuery: true,
          activityIds: ['.main.MainActivity', '.live.LiveDummyActivity'],
          matches:
            '[text="添加抖音商城到桌面"] +2 LinearLayout > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13669682',
            'https://i.gkd.li/i/14740312',
          ],
        },
        {
          key: 2,
          name: '搜索组件',
          fastQuery: true,
          activityIds: '.search.activity.SearchResultActivity',
          matches: '[text="暂不开启"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14325749',
        },
        {
          key: 3,
          name: '火花桌面小组件',
          fastQuery: true,
          activityIds: '.main.MainActivity',
          action: 'back',
          matches: '[text="添加火花桌面小组件"]',
          exampleUrls: 'https://e.gkd.li/c3980f6b-5459-45fe-b317-5bdc561319dc',
          snapshotUrls: 'https://i.gkd.li/i/18009276',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.main.MainActivity',
          anyMatches: [
            'FlattenUIText[text="不感兴趣"][visibleToUser=true]',
            '@[text="不感兴趣"] - FrameLayout >2 [text*="也关注了"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13800207',
            'https://i.gkd.li/i/13996724',
            'https://i.gkd.li/i/14661956',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23833191',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            '.live.LiveDummyActivity',
            '.commerce.sdk.MallContainerActivity',
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
          matches: [
            'FlattenUIText[text*="首页商城"]',
            'FlattenUIText[text="去看看"]',
            'FlattenUIText[text="知道了"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14533732',
            'https://i.gkd.li/i/14969825',
            'https://i.gkd.li/i/14969835',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '权限提示-通讯录权限',
      desc: '点击[拒绝]',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: ['[text*="通讯录"]', '[text="拒绝"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/8f70418d-92f0-4264-83fd-a680350c478e',
          snapshotUrls: [
            'https://i.gkd.li/i/14735280',
            'https://i.gkd.li/i/16171391',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          excludeActivityIds: '.setting.ui.SettingCommonProtocolActivity',
          matches: [
            '[text*="青少年" || text*="未成年"][text*="模式"]',
            '[text="关闭" || text="不再提醒"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14321107',
            'https://i.gkd.li/i/14473006',
            'https://i.gkd.li/i/17726070',
            'https://i.gkd.li/i/18638030',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14917848',
            'https://i.gkd.li/i/17610958',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '权限提示-定位权限',
      desc: '直接关闭所有类似形状窗口',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.search.activity.SearchResultActivity',
      rules: [
        {
          key: 0,
          name: '弹窗',
          action: 'back',
          matches: '[id="com.ss.android.ugc.aweme:id/rootview"]',
          snapshotUrls: 'https://i.gkd.li/i/13755373',
        },
        {
          key: 1,
          name: '顶部横条',
          activityIds: '.search.activity.SearchResultActivity',
          matches: '@ImageView[clickable=true] - [text^="开启定位"]',
          snapshotUrls: 'https://i.gkd.li/i/13755718',
        },
      ],
    },
    {
      key: 22,
      name: '全屏广告-汽水音乐VIP',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.dsp.MusicLunaActivity',
            '.dsp.playpage.singlepage.subpage.MusicDspSubPlayerActivity',
          ],
          matches:
            'ScrollView - @ImageView[index=1][childCount=0][visibleToUser=true][width<100][height<100] <2 View < View < ViewGroup < ViewGroup < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/4c57ee77-2189-4b3b-be0b-430fac8853c2',
          snapshotUrls: [
            'https://i.gkd.li/i/18100285',
            'https://i.gkd.li/i/18100454',
            'https://i.gkd.li/i/18100477',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '其他-个性化推荐弹窗',
      desc: '点击[稍后再说]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: [
            '[text*="个性化推荐"][visibleToUser=true]',
            '[text="稍后再说"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/987234ad-de0f-40d8-b7dd-d3c600609949',
          snapshotUrls: 'https://i.gkd.li/i/18633134',
        },
      ],
    },
    {
      key: 24,
      name: '全屏广告-视频推荐广告',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: 'FlattenUIText[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20035670',
        },
        {
          key: 1,
          fastQuery: true,
          action: 'back',
          activityIds: '.main.MainActivity',
          matches: [
            '[desc^="已选中"] > [text="推荐"][visibleToUser=true]', // 其他页面可能会误触回到推荐页
            '([text$="广告"][vid="desc"][visibleToUser=true]) || (ImageView[childCount=0] + [text="应用" || text="购物" || text="游戏"][visibleToUser=true])',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/21142063',
            'https://i.gkd.li/i/21142589',
            'https://i.gkd.li/i/21142249',
            'https://i.gkd.li/i/21142871',
          ],
        },
      ],
    },
    {
      key: 26,
      name: '功能类-自动领取别人发的红包',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches:
            'FrameLayout[getChild(0).desc$="的头像"] + ViewGroup >3 @FrameLayout > [text="抖音红包"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6c963e99-1a74-40a5-bf84-a9353c27acdb',
          snapshotUrls: 'https://i.gkd.li/i/22761277',
          excludeSnapshotUrls: 'https://i.gkd.li/i/22849224', // 自己发的不领取
        },
        {
          preKeys: [0],
          key: 1,
          fastQuery: true,
          activityIds: '.fund.redpacket.RedPacketReceiveActivity',
          matches:
            '@FrameLayout[clickable=true][width=height] -2 [text="大吉大利"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e8b822c1-c289-4802-85a4-994093024b24',
          snapshotUrls: 'https://i.gkd.li/i/22761510',
        },
        {
          preKeys: [1],
          fastQuery: true,
          activityIds: '.fund.redpacket.RedPacketReceiveActivity',
          matches: '[vid="iv_back"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f92c1412-8111-40bc-8188-24f2c004c55c',
          snapshotUrls: 'https://i.gkd.li/i/22761554',
        },
      ],
    },
    {
      key: 27,
      name: '功能类-自动抢口令红包',
      desc: '点击 ①口令红包 ②弹窗 ③一键发口令',
      fastQuery: true,
      activityIds: '.fund.redpacket.RedPacketReceiveActivity',
      rules: [
        {
          key: 1,
          name: '①点进口令红包',
          activityIds: '.main.MainActivity',
          matches: '@ImageView + [text="抖音红包「口令」"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25121991',
        },
        {
          key: 2,
          name: '②弹窗-点击红包',
          matches: 'ImageView < @[clickable=true] -2 [text="发口令开红包"]',
          snapshotUrls: 'https://i.gkd.li/i/25122030',
        },
        {
          key: 3,
          name: '③一键发口令',
          matches:
            '[text="发口令开红包"] + LinearLayout >2 [text="一键发送到聊天"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25122077',
            'https://i.gkd.li/i/25122095',
          ],
        },
      ],
    },
  ],
});
