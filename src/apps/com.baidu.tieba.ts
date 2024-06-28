import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: 'TextView[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775906',
            'https://i.gkd.li/i/12566191',
            'https://i.gkd.li/i/12870916',
            'https://i.gkd.li/i/13233500',
          ],
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13322227',
        },
        {
          key: 2,
          matches:
            'TextView[text="广告"] - @LinearLayout[clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13168386',
        },
      ],
    },
    {
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[clickable=true] -2 LinearLayout > [text^="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13536170',
        },
        {
          key: 1,
          matches: 'TextView[text="开启消息推送"] +2 TextView[text="不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13675694',
        },
        {
          key: 2,
          matches: '[text="开启通知"] - [text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13804455',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      desc: '推荐帖子列表,评论区列表,关闭时弹窗选原因',
      activityIds: [
        'com.baidu.tieba.pb.pb.main.PbActivity',
        'com.baidu.tieba.frs.FrsActivity',
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.forum.ForumActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告"x"',
          matches: [
            'RelativeLayout > TextView[text$="广告"][clickable=true]',
            'LinearLayout[clickable=true][childCount=1] > @FrameLayout[clickable=true][childCount=1][desc=null] > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12775913', // 此3条应算卡片广告
            'https://i.gkd.li/i/13043133', // 此3条应算卡片广告
            'https://i.gkd.li/i/13054256', // 此3条应算卡片广告
            'https://i.gkd.li/i/12775930',
            'https://i.gkd.li/i/12840951',
            'https://i.gkd.li/i/12775916',
            'https://i.gkd.li/i/12775892', // 指定点击目标为具备 clickable=true 属性的 @FrameLayout，防止在这个快照误触点击收藏
            'https://i.gkd.li/i/13328300', // 指定点击目标为具备 desc=null 属性的 @FrameLayout，防止在这个快照误触点击"更多"
            'https://i.gkd.li/i/13402610', // 指定LinearLayout[clickable=true] 、 activityIds: 'com.baidu.tieba.forum.ForumActivity',
            'https://i.gkd.li/i/13459289',
          ],
        },
        {
          preKeys: 0,
          name: '关闭原因-"不感兴趣"',
          matches:
            '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
          snapshotUrls: 'https://i.gkd.li/i/12775914',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页、推荐列表顶部卡片广告',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.frs.FrsActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13060892',
        },
      ],
    },
    {
      key: 7,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="稍后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/12496934',
    },
    {
      key: 8,
      name: '分段广告-帖子底部内容推荐卡片',
      desc: '关闭时弹窗选原因',
      activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
      rules: [
        {
          key: 0,
          matches:
            'LinearLayout > RelativeLayout[id!=null][clickable=false] > ImageView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12775882',
        },
        {
          preKeys: 0,
          name: '关闭原因-不感兴趣',
          matches:
            '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
          snapshotUrls: 'https://i.gkd.li/i/12775914',
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '点击右上角x关闭',
          activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
          matches:
            'View[childCount=3] > @View[clickable=true][childCount=1] > Image',
          snapshotUrls: [
            'https://i.gkd.li/i/13060891', // activityIds: com.baidu.tbadk.browser.TBWebContainerActivity
            'https://i.gkd.li/i/13222361', // childCount=1否则误触这里
          ],
        },
        {
          key: 1,
          name: '点击正下方x关闭',
          activityIds: [
            'com.baidu.tieba.frs.FrsActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.LogoActivity',
          ],
          matches:
            '@TextView[clickable=true && text=null] - FrameLayout TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13168383', // activityIds: com.baidu.tieba.tblauncher.MainTabActivity
            'https://i.gkd.li/i/13322120', // activityIds: com.miui.home.launcher.Launcher
            'https://i.gkd.li/i/13328246', // activityIds: com.baidu.tieba.LogoActivity
          ],
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-悬浮小广告',
      matchDelay: 500,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '首页右侧悬浮广告-1',
          activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
          matches:
            '@ImageView[clickable=true] - TextView[text="广告"] < RelativeLayout + ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13115167',
            'https://i.gkd.li/i/13327933', // 原规则在此误触
          ],
        },
        {
          key: 1,
          name: '首页右侧悬浮广告-2',
          activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
          matches:
            'RelativeLayout >2 RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14291964',
        },
        {
          key: 2,
          name: '评论区左侧悬浮广告',
          quickFind: true,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches: 'LinearLayout[childCount=2] > @ImageView + [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13296280',
        },
        {
          key: 3,
          activityIds: [
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          matches:
            'RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625336',
            'https://i.gkd.li/i/13627881',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-帖子内"进吧逛逛"弹窗',
      actionMaximum: 1,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches: '[vid="tip_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e45542c9-cee7-4fa6-874d-0682c53f629b',
          snapshotUrls: 'https://i.gkd.li/i/14571741',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-贴吧内签到并关闭弹窗',
      rules: [
        {
          key: 0,
          name: '贴吧页签到',
          activityIds: 'com.baidu.tieba.forum.ForumActivity',
          matches:
            'WebView[text="frs"] > View > View > View > View > TextView[text="签到"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13776801',
            'https://i.gkd.li/i/15087289',
          ],
        },
        {
          key: 1,
          name: '关闭签到成功弹窗',
          action: 'back',
          activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
          matches: 'WebView[text="签到弹窗"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13776424',
            'https://i.gkd.li/i/15087327',
            'https://i.gkd.li/i/15881225',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-帖子底部话题卡片',
      desc: '点击关闭',
      actionMaximum: 1,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches: '@ImageView[clickable=true] -2 [text="进入话题查看更多"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2fa193f8-5e0e-4f85-b828-eb3e22cb60a3',
          snapshotUrls: 'https://i.gkd.li/i/14586847',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          forcedTime: 5000,
          activityIds: [
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tbadk.browser.TBWebContainerActivity',
          ],
          matches:
            'WebView[text="会员弹窗" || text="一键签到"] >3 TextView + Image[text!=null][childCount=0][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/dd2f2a00-e9d3-47fa-986d-09ae6180d932',
          snapshotUrls: [
            'https://i.gkd.li/i/14630806',
            'https://i.gkd.li/i/15119439',
            'https://i.gkd.li/i/15119451',
          ],
        },
      ],
    },
  ],
});
