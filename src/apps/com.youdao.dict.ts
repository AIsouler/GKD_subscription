import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youdao.dict',
  name: '网易有道词典',
  groups: [
    {
      key: 1,
      name: '分段广告-单词页面卡片广告',
      fastQuery: true,
      activityIds: [
        'com.youdao.dict.activity.MainActivity',
        '.activity.DictQueryActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[text="广告"] - [vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13800055',
            'https://i.gkd.li/i/16278151',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[vid="close_pop"][text="收起广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13800056',
            'https://i.gkd.li/i/16278150',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '首页-弹窗广告',
          fastQuery: true,
          activityIds: [
            'com.youdao.dict.activity.MainActivity',
            'com.youdao.dict.activity.DictSplashActivity',
          ],
          matches: '@ImageView[id="com.youdao.dict:id/iv_close_bt"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12893419',
            'https://i.gkd.li/i/13263801',
          ],
        },
        {
          key: 1,
          name: '学习页面-弹窗广告',
          fastQuery: true,
          activityIds: [
            'com.youdao.dict.edu.main.MainPopDialog',
            'com.youdao.dict.activity.MainActivity',
          ],
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12893450',
            'https://i.gkd.li/i/16859556',
          ],
        },
        {
          key: 2,
          name: '抽奖机会-弹窗广告',
          fastQuery: true,
          activityIds: [
            'com.youdao.dict.activity.DictSplashActivity',
            'com.youdao.dict.activity.DictHotBootSplashActivity',
          ],
          matches: '[vid="skip_bottom_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13931202',
            'https://i.gkd.li/i/14064647',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          name: '首页-礼包弹窗',
          activityIds: 'com.youdao.dict.activity.MainActivity',
          matches: '[vid="image"] + [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/14296482',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-VIP弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.youdao.dict.vip.activity.RecallSevenDayVipActivity',
            'com.youdao.dict.vip.activity.SecondShowNewUserSevenDayVipActivity',
            '.activity.DictQueryActivity',
          ],
          matches: 'ImageView[vid="iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13263706',
            'https://i.gkd.li/i/14381735',
            'https://i.gkd.li/i/16929322',
          ],
        },
        {
          key: 1,
          activityIds: 'com.youdao.feature_ai.AiMainActivity',
          matches: '[vid="aiv_guide_cancel"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7bfd334a-38a0-4251-966c-1df55c168425',
          snapshotUrls: 'https://i.gkd.li/i/16426631',
        },
      ],
    },
    {
      key: 5,
      name: '评价提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.youdao.dict:id/btn_never"][text*="不再提醒"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13540941',
        'https://i.gkd.li/i/14256301',
      ],
    },
    {
      key: 6,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.youdao.dict:id/tv_version"] + [id="com.youdao.dict:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13627912',
    },
    {
      key: 7,
      name: '功能类-点击显示释义',
      activityIds:
        'com.youdao.dict_flutter_android_bridge.WordBookFlutterActivity',
      rules: '[desc="点击显示释义"] > View[index=3][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/14292588', // 点击显示释义前
        'https://i.gkd.li/i/14292587', // 点击显示释义后
      ],
    },
    {
      key: 8,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.youdao.dict.activity.MainActivity',
            'com.youdao.dict.activity.DictQueryActivity',
          ],
          matches:
            '[vid="aivClose" || vid="course_one_course_close"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e365b983-15c7-4ac7-acd7-9d7be4c45160',
          snapshotUrls: [
            'https://i.gkd.li/i/14468564',
            'https://i.gkd.li/i/14468628', // visibleToUser=true 防止在此页面选中屏幕外节点
            'https://i.gkd.li/i/14567234',
            'https://i.gkd.li/i/14895765',
            'https://i.gkd.li/i/17082441',
          ],
        },
        {
          key: 1,
          activityIds: 'com.youdao.dict.activity.MainActivity',
          matches:
            '[vid="home_ad_close" || vid="course_four_course_close" || vid="promotion_close_zone"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14009705',
            'https://i.gkd.li/i/14559287',
            'https://i.gkd.li/i/17115693',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-关闭单词页面[去复习]提示',
      desc: '通过点击提示框以外的其他地方关闭',
      rules: [
        {
          fastQuery: true,
          position: {
            left: 'width * 0.7231',
            top: 'width * -1.0673',
          },
          activityIds: [
            'com.youdao.dict.activity.DictQueryActivity',
            'com.youdao.dict.activity.MainActivity',
          ],
          matches: '[text="已收藏单词一周，快去复习吧"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ab107cc2-98e1-44a2-a15a-0ee0d4925255',
          snapshotUrls: [
            'https://i.gkd.li/i/14524540',
            'https://i.gkd.li/i/14524817',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-开学福利弹窗',
      desc: '点击[不要再提醒我]-点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.youdao.dict.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[text="不要再提醒我"][checked=false]',
          exampleUrls:
            'https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de',
          snapshotUrls: 'https://i.gkd.li/i/14586448',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[vid="dialog_close_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de',
          snapshotUrls: 'https://i.gkd.li/i/14586448',
        },
      ],
    },
  ],
});
