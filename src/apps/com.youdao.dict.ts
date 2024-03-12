import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youdao.dict',
  name: '网易有道词典',
  deprecatedKeys: [3],
  groups: [
    {
      key: 1,
      name: '分段广告-单词页面卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.youdao.dict.activity.MainActivity',
          quickFind: true,
          matches: '[text="广告"] - [vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12668574',
            'https://i.gkd.li/i/13800055',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'com.youdao.dict.activity.MainActivity',
          quickFind: true,
          matches: '[vid="close_pop"][text="收起广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12668583',
            'https://i.gkd.li/i/13800056',
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
          activityIds: [
            'com.youdao.dict.activity.MainActivity',
            'com.youdao.dict.activity.DictSplashActivity',
          ],
          quickFind: true,
          matches: '@ImageView[id="com.youdao.dict:id/iv_close_bt"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12893419',
            'https://i.gkd.li/i/13263801',
          ],
        },
        {
          key: 1,
          name: '学习页面-弹窗广告',
          activityIds: [
            'com.youdao.dict.edu.main.MainPopDialog',
            'com.youdao.dict.activity.MainActivity',
          ],
          quickFind: true,
          matches: '@ImageView[id="com.youdao.dict:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12893450',
        },
        {
          key: 2,
          name: '抽奖机会-弹窗广告',
          activityIds: [
            'com.youdao.dict.activity.DictSplashActivity',
            'com.youdao.dict.activity.DictHotBootSplashActivity',
          ],
          quickFind: true,
          matches: '[vid="skip_bottom_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13931202',
            'https://i.gkd.li/i/14064647',
          ],
        },
        {
          key: 3,
          name: '首页-礼包弹窗',
          activityIds: 'com.youdao.dict.activity.MainActivity',
          quickFind: true,
          matches: '[vid="image"] + [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/14296482',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-VIP弹窗',
      quickFind: true,
      activityIds: [
        'com.youdao.dict.vip.activity.RecallSevenDayVipActivity',
        'com.youdao.dict.vip.activity.SecondShowNewUserSevenDayVipActivity',
      ],
      rules: 'ImageView[id="com.youdao.dict:id/iv_close"][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/13263706',
        'https://i.gkd.li/i/14381735',
      ],
    },
    {
      key: 5,
      name: '评价提示',
      quickFind: true,
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
      quickFind: true,
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
      rules: [
        {
          key: 0,
          name: '右下角悬浮卡片',
          quickFind: true,
          activityIds: [
            'com.youdao.dict.activity.MainActivity',
            'com.youdao.dict.activity.DictQueryActivity',
          ],
          matches: '[vid="aivClose"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e365b983-15c7-4ac7-acd7-9d7be4c45160',
          snapshotUrls: [
            'https://i.gkd.li/i/14468564',
            'https://i.gkd.li/i/14468628', // visibleToUser=true 防止在此页面选中屏幕外节点
            'https://i.gkd.li/i/14567234',
          ],
        },
        {
          key: 1,
          name: '主页卡片广告',
          quickFind: true,
          activityIds: 'com.youdao.dict.activity.MainActivity',
          matches: '[vid="home_ad_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14009705',
        },
        {
          key: 2,
          name: '单词页面下方广告',
          quickFind: true,
          activityIds: 'com.youdao.dict.activity.MainActivity',
          matches: '[vid="course_four_course_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4045988d-93bb-4aad-80dd-f14da296a214',
          snapshotUrls: 'https://i.gkd.li/i/14559287',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-关闭单词页面[去复习]提示',
      desc: '通过点击提示框以外的其他地方关闭',
      rules: [
        {
          quickFind: true,
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
  ],
});
