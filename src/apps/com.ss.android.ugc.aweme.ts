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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/202942ce-259c-4b9d-b3b3-06afbac8145f',
          snapshotUrls: 'https://i.gkd.li/i/13216121',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17811608',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-关闭用户推荐',
      rules: [
        {
          key: 6,
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '@[text="不感兴趣"] - * [text*="也关注了"]',
          snapshotUrls: 'https://i.gkd.li/i/14661956',
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
      key: 7,
      name: '功能类-设置无声进入抖音弹窗',
      desc: '点击[拒绝]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '@[text="拒绝"] + [text="去设置"]',
          snapshotUrls: 'https://i.gkd.li/i/13256087',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击[暂不]/[以后再说]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.main.MainActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[text^="打开私信通知" || text="开启朋友的消息通知" || text="及时获得消息提醒"][visibleToUser=true]',
            '[text="以后再说" || text="暂不开启"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13669790',
            'https://i.gkd.li/i/18417891',
            'https://i.gkd.li/i/18419574',
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
      name: '功能类-[添加快捷方式到桌面]弹窗',
      desc: '关闭弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '商城快捷方式',
          fastQuery: true,
          activityIds: [
            'com.ss.android.ugc.aweme.main.MainActivity',
            'com.ss.android.ugc.aweme.live.LiveDummyActivity',
          ],
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
          activityIds:
            'com.ss.android.ugc.aweme.search.activity.SearchResultActivity',
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
      key: 14,
      name: '全屏广告-视频播放中途插入的打招呼界面',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '@[desc="关闭"] + ViewGroup > [text$="打个招呼"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13379307',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-关闭商城推荐',
      desc: '点击"不感兴趣"',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '@[text="不感兴趣"][clickable=true] + [text="去商城搜索更多"]',
          snapshotUrls: 'https://i.gkd.li/i/13800207',
        },
      ],
    },
    {
      key: 16,
      name: '局部广告-拍同款弹窗',
      desc: '点击不感兴趣',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '@LynxFlattenUI[text="不感兴趣"] +4 [text="拍同款"]',
          snapshotUrls: 'https://i.gkd.li/i/13996724',
        },
      ],
    },
    {
      key: 17,
      name: '全屏广告-[去首页商城]弹窗',
      desc: '点击[知道了]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.ss.android.ugc.aweme.live.LiveDummyActivity',
            'com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity',
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
      key: 18,
      name: '全屏广告-低价秒杀券弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          position: {
            left: 'width * 0.5051',
            top: 'width * 2.0649',
          },
          activityIds: 'com.ss.android.ugc.aweme.live.LiveDummyActivity',
          matches: '[text="恭喜获得低价秒杀券"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ef703cd7-99af-4e10-8345-9860ed160b8b',
          snapshotUrls: 'https://i.gkd.li/i/14585377',
        },
      ],
    },
    {
      key: 19,
      name: '权限提示-请求访问通讯录弹窗',
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
          activityIds:
            'com.ss.android.ugc.aweme.search.activity.SearchResultActivity',
          matches: '@ImageView[clickable=true] - [text^="开启定位"]',
          snapshotUrls: 'https://i.gkd.li/i/13755718',
        },
      ],
    },
    {
      key: 22,
      name: '全屏广告-汽水音乐VIP',
      desc: '点击关闭',
      activityIds: [
        '.dsp.MusicLunaActivity',
        '.dsp.playpage.singlepage.subpage.MusicDspSubPlayerActivity',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
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
  ],
});
