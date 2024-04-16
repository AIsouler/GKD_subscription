import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'TextView[id="com.mihoyo.hyperion:id/tv_dialog_go_to_teenage_mode"] + TextView[id="com.mihoyo.hyperion:id/tv_dialog_i_know"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12675547',
        'https://i.gkd.li/i/12775850', // activityId: 'com.mihoyo.hyperion.splash.SplashActivity'
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '关闭版本更新提示弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[id="com.mihoyo.hyperion:id/mUpgradeDialogCancel"]',
      snapshotUrls: 'https://i.gkd.li/i/12675513',
    },
    {
      key: 3,
      name: '功能类-自动打卡',
      desc: '点击[打卡],切换板块自动签到',
      activityIds: 'com.mihoyo.hyperion.main.HyperionMainActivity',
      rules:
        'TextView[id="com.mihoyo.hyperion:id/signTv"][text="打卡"][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/13721772', // 未打卡
        'https://i.gkd.li/i/13721776', // 已打卡
      ],
    },
    {
      key: 4,
      name: '功能类-原神自动签到',
      desc: '点击签到-关闭弹窗-返回',
      forcedTime: 5000,
      activityIds: 'com.mihoyo.hyperion.web2.MiHoYoWebActivity',
      rules: [
        {
          key: 0,
          name: '点击签到',
          matches:
            '[text="米游社原神每日签到"] >4 View[childCount=11] > @View[childCount=3][visibleToUser=true] > Image[index=0]',
          exampleUrls:
            'https://m.gkd.li/57941037/6654679e-58a9-4d6c-85a3-11bd2f82c15e',
          snapshotUrls: [
            'https://i.gkd.li/i/14369790', // 签到前
            'https://i.gkd.li/i/14371469', // 签到后，避免在此页面误触
            'https://i.gkd.li/i/14967627', // clickable=false
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '关闭签到后的弹窗',
          matches:
            '[text="米游社原神每日签到"] >3 TextView[index=2][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b02eca70-f7d3-4169-99d6-9906c534392a',
          snapshotUrls: 'https://i.gkd.li/i/14371439',
        },
        {
          preKeys: 1,
          key: 2,
          name: '返回上一个页面',
          matches:
            '[text="米游社原神每日签到"] - View > TextView[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/c232ba4c-d50e-4887-85ab-91739928119e',
          snapshotUrls: 'https://i.gkd.li/i/14371469',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-星穹铁道自动签到',
      desc: '点击签到-关闭弹窗-返回',
      forcedTime: 5000,
      activityIds: 'com.mihoyo.hyperion.web2.MiHoYoWebActivity',
      rules: [
        {
          key: 0,
          name: '点击签到',
          matches:
            '[text="《崩坏：星穹铁道》签到福利"] >4 View > View + TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/a9f426c4-3184-4525-b283-ad77d6f83d02',
          snapshotUrls: [
            'https://i.gkd.li/i/14376296',
            'https://i.gkd.li/i/14432972',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '关闭签到后的弹窗',
          matches:
            '[text="《崩坏：星穹铁道》签到福利"] >3 TextView[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/3babb231-30a7-4891-9c4a-c11946838741',
          snapshotUrls: [
            'https://i.gkd.li/i/14371787',
            'https://i.gkd.li/i/14967631', // clickable=false
          ],
        },
        {
          preKeys: 1,
          key: 2,
          name: '返回上一个页面',
          matches:
            '[text="《崩坏：星穹铁道》签到福利"] > View > View[index=0] >3 TextView[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/d8031907-105b-4d37-8542-b71e854b3b8a',
          snapshotUrls: 'https://i.gkd.li/i/14371790',
        },
      ],
    },
  ],
});
