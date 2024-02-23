import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youdao.dict',
  name: '网易有道词典',
  deprecatedKeys: [3],
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
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
          key: 1,
          activityIds: 'com.youdao.dict.activity.MainActivity',
          quickFind: true,
          matches: '[vid="close_pop"][text="收起广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12668583',
            'https://i.gkd.li/i/13800056',
          ],
        },
        {
          key: 2,
          activityIds: 'com.youdao.dict.activity.MainActivity',
          matches: '[id="com.youdao.dict:id/home_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14009705',
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
  ],
});
