import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            '[text*="新版本"] - ImageView < LinearLayout < LinearLayout + ImageButton[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642017',
        },
        {
          key: 1,
          matches: '@Image + Image +n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13195645',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页优惠弹窗',
      rules: [
        {
          key: 0,
          name: '首页优惠弹窗1',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'FrameLayout > FrameLayout > RelativeLayout[childCount=2] > @ImageView[id!=null][clickable=true][visibleToUser=true] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12642015',
        },
        {
          key: 1,
          name: '首页优惠弹窗2',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'View[id=null] > TextView + View > View +(4) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12642019',
        },
        {
          key: 2,
          name: '首页优惠弹窗3',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true][visibleToUser=true] < ViewGroup + ViewGroup >7 [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/i/13761182',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-活动弹窗',
      rules: [
        {
          key: 0,
          name: '抽免单活动1',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text="免单特权"] < View < View +(5) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12642032',
        },
        {
          key: 1,
          name: '抽免单活动2',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text$="抽免单"] -(2) Image[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642038',
        },
        {
          key: 2,
          name: '抽免单活动3',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '[text="多多免单"] >5 View[childCount=2] > Image[index=0][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14310581',
        },
        {
          key: 3,
          name: '抽免单活动4',
          quickFind: true,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView[visibleToUser=true] < * +2 * >3 [text="立即抽免单"]',
          snapshotUrls: 'https://i.gkd.li/i/14614135',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-红包弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup > ImageView + ViewGroup > ImageView +(2) FrameLayout > TextView[text="专属现金红包"]',
          snapshotUrls: 'https://i.gkd.li/i/12642023',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          quickFind: true,
          matches:
            '@ImageView[clickable=true] < ViewGroup + ViewGroup >n [text="送你大额现金"]',
          snapshotUrls: 'https://i.gkd.li/i/13625441',
        },
        {
          key: 2,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text="百亿补贴"] > View > View > @View[clickable=true] +n [text^="立即领取"]',
          snapshotUrls: 'https://i.gkd.li/i/13669963',
        },
        {
          key: 3,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '[id="com.xunmeng.pinduoduo:id/pdd"] View[childCount=3][clickable=false] > Image[index=0]',
          snapshotUrls: 'https://i.gkd.li/i/13944160',
        },
        {
          key: 4,
          name: '刮奖弹窗',
          quickFind: true,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@ImageView[clickable=true] + * >4 [text="去刮奖"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f9f73d28-a124-41ba-9781-261a3af281c6',
          snapshotUrls: 'https://i.gkd.li/i/14456101',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-多多买菜弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'View[childCount=1] > Button[id=null][text="关闭弹窗"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b6b638d0-9e99-4e4a-89ea-f2539a46cf56',
          snapshotUrls: 'https://i.gkd.li/i/12642053',
        },
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ViewGroup[clickable=true][visibleToUser=true] - * > [index=2] >2 [text="连领7天 今日可领"]',
          exampleUrls:
            'https://m.gkd.li/57941037/059c82cd-cc70-4611-b3ab-c3c6c7e35f22',
          snapshotUrls: 'https://i.gkd.li/i/14596990',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-多多视频悬浮窗广告',
      desc: '点击关闭',
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches:
            '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
          exampleUrls:
            'https://m.gkd.li/57941037/bfe9f8d5-2c13-4dbf-a0b3-a8347068afa6',
          snapshotUrls: 'https://i.gkd.li/i/12642058',
        },
        {
          key: 1,
          matches:
            '@TextView[id=null][clickable=true] + View > Image[text="webp"]',
          exampleUrls:
            'https://m.gkd.li/57941037/bfe9f8d5-2c13-4dbf-a0b3-a8347068afa6',
          snapshotUrls: 'https://i.gkd.li/i/12642058',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-多多视频每日签到弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'ImageView < ViewGroup < @ViewGroup[clickable=true] +2 * >7 [text="领取今日现金"]',
          exampleUrls:
            'https://m.gkd.li/57941037/29876836-b365-48c0-b129-4560ca193776',
          snapshotUrls: 'https://i.gkd.li/i/13804657',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-商品详情页视频讲解窗口',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[vid="iv_float_window_close"] > TextView[text=""][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/560162d0-940d-413a-8f2e-e40c21c976e2',
          snapshotUrls: 'https://i.gkd.li/i/14549415',
        },
      ],
    },
    {
      key: 9,
      name: '分段广告-多多视频每日自动签到',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        {
          key: 0,
          name: '自动签到',
          action: 'clickCenter',
          matches: 'FrameLayout > TextView[text="领取今日现金"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13201422', //com.xunmeng.pinduoduo.ui.activity.HomeActivity
            'https://i.gkd.li/i/13372677', //com.bbk.launcher2.Launcher
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后关闭弹窗',
          action: 'clickCenter',
          matches: 'FrameLayout > TextView[text="明日继续来领"]',
          snapshotUrls: 'https://i.gkd.li/i/13205634',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-多多视频划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      quickFind: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches: [
            'TextView[text="正在直播"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13446291',
        },
        {
          matches: [
            'TextView[text="查看更多低价商品"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13791119',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-自动点击原图',
      activityIds:
        'com.xunmeng.pinduoduo.app_album.album.MultiImageSelectorActivity',
      quickFind: true,
      rules: '@[text="原图"][checked=false] + [text="发送"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13925378', // checked=false
        'https://i.gkd.li/i/13925380', // checked=true
      ],
    },
    {
      key: 12,
      name: '全屏广告-下单后出现的弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '邀请好友弹窗',
          activityIds: [
            'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
            'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          ],
          matches: [
            '[text^="查看订单详情"]',
            '[text="关闭弹窗"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13927594',
            'https://i.gkd.li/i/14434154',
            'https://i.gkd.li/i/14456017',
            'https://i.gkd.li/i/13308175',
          ],
        },
        {
          key: 1,
          name: '拼单返现弹窗',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: [
            '[text="拼单返现"]',
            'WebView[text="拼多多"] >3 View[index=0] > Image[clickable=true][visibleToUser=true][childCount=0]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/abc035bb-0d18-4711-b64c-a5319dd2191d',
          snapshotUrls: 'https://i.gkd.li/i/14549422',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-金币翻倍特权弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '[id="com.xunmeng.pinduoduo:id/pdd"] ViewGroup[childCount=4] > ImageView[clickable=true][desc=null]',
          snapshotUrls: 'https://i.gkd.li/i/13944165',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-红包助手打款弹窗',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '[id="com.xunmeng.pinduoduo:id/pdd"][childCount=1] >4 ImageView[id=null][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13972251',
            'https://i.gkd.li/i/14341073', // clickable=true避免在此页面误触
          ],
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-多多视频-上滑看视频得现金弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '[text="上滑看视频得现金"] - [text="webp"]',
          snapshotUrls: 'https://i.gkd.li/i/13809053',
        },
      ],
    },
    {
      key: 16,
      name: '青少年模式',
      desc: '点击我知道了',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches:
            '[text="青少年模式"] < FrameLayout +5 ViewGroup [text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/13809053',
        },
      ],
    },
    {
      key: 17,
      name: '通知提示-请求开启消息通知弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'FrameLayout > ViewGroup[vid="pdd"] > ViewGroup > ViewGroup[childCount<3] > ViewGroup[childCount=3 || childCount=2] >(1,2) ImageView[clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/8f376a1e-750f-4677-af82-473f3522b67c',
          snapshotUrls: [
            'https://i.gkd.li/i/14109435',
            'https://i.gkd.li/i/14549423',
            'https://i.gkd.li/i/14662202', // 避免在此页面误触
          ],
        },
      ],
    },
    {
      key: 18,
      name: '全屏广告-看视频得现金弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '[vid="pdd"] > FrameLayout > ViewGroup > ViewGroup > ViewGroup > ViewGroup[childCount=3] > ViewGroup[index=0] > ImageView[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/532b339f-066c-4b35-9ca7-cb3821dcea5f',
          snapshotUrls: [
            'https://i.gkd.li/i/14305741',
            'https://i.gkd.li/i/14317199',
          ],
        },
      ],
    },
  ],
});
