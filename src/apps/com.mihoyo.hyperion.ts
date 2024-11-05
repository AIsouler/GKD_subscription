import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      desc: '点击[我知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[vid="tv_dialog_go_to_teenage_mode"] + [vid="tv_dialog_i_know"]',
      exampleUrls: 'https://e.gkd.li/db8bb97e-f0f0-4f85-a262-14dd760f812b',
      snapshotUrls: [
        'https://i.gkd.li/i/17002129',
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
      key: 6,
      name: '全屏广告-游戏版本活动',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.popup.HomePopupDialogActivity',
          matches: '[vid="closeIv"]',
          exampleUrls: 'https://e.gkd.li/5c54c1cc-95ae-420d-b3af-37e8553a6327',
          snapshotUrls: 'https://i.gkd.li/i/16818949',
        },
      ],
    },
    {
      key: 7,
      name: '分段广告-游戏版本活动',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: '.main.HyperionMainActivity',
      exampleUrls: 'https://e.gkd.li/197dfb66-6b42-4fbd-b60c-4d801a8c729c',
      rules: [
        {
          key: 0,
          name: '点击关闭',
          matches: '[vid="bottomBarBgIv"] + * > [vid="close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/16996311',
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击确定',
          matches: '[vid="rootLayout"] > [vid="confirmTv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/16996319',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-米游自动签到全家桶',
      desc: '包含崩坏3、绝区零、原神、星穹铁道',
      forcedTime: 10000,
      activityIds: '.web2.MiHoYoWebActivity',
      rules: [
        {
          key: 0,
          name: '点击签到',
          anyMatches: [
            '[text$="每日签到"] >4 View[childCount=11] > @View[childCount=3][visibleToUser=true] > Image[index=0][text!=null]',
            '[text="《崩坏：星穹铁道》签到福利"] >4 View > View + TextView[visibleToUser=true]', // 星穹铁道
          ],
          exampleUrls: 'https://e.gkd.li/53d22dc7-b368-46c0-85d2-fe132b0832a9',
          snapshotUrls: [
            'https://i.gkd.li/i/17601269', // 崩坏3签到前
            'https://i.gkd.li/i/17601338', // 绝区零签到前
            'https://i.gkd.li/i/17611619', // 原神签到前
            'https://i.gkd.li/i/17611613', // 星穹铁道签到前
            'https://i.gkd.li/i/14967627', // 签到节点 clickable=false
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/17601295', // 崩坏3签到后
            'https://i.gkd.li/i/17601347', // 绝区零签到后
            'https://i.gkd.li/i/17611621', // 原神签到后
            'https://i.gkd.li/i/17611617', // 星穹铁道签到后 无法排除匹配
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '关闭签到后的弹窗',
          matches:
            '@TextView[visibleToUser=true][text=""] - View[childCount=2] >2 [text*="签到成功"]',
          exampleUrls: 'https://e.gkd.li/ef30277a-bd5d-444a-a9d5-ce63406d1269',
          snapshotUrls: [
            'https://i.gkd.li/i/17601273', // 崩坏3
            'https://i.gkd.li/i/17601340', // 绝区零
            'https://i.gkd.li/i/17611620', // 原神
            'https://i.gkd.li/i/17611616', // 星穹铁道
            'https://i.gkd.li/i/14967631', // 关闭节点 clickable=false
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '关闭签到提醒',
          matches: '[text="不用了"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/56299b94-01fb-4d83-9796-ec9bd6bbae64',
          snapshotUrls: [
            'https://i.gkd.li/i/17601283', // 崩坏3
            'https://i.gkd.li/i/17601345', // 绝区零
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '从签到页返回',
          excludeMatches: '[text="不用了"][visibleToUser=true]',
          matches:
            '[text$="每日签到" || text$="签到福利"] > View >3 View[index=0][childCount=1] > TextView[childCount=0][text=""][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/cc68f623-5dc7-4703-9768-28826c4f16f6',
          snapshotUrls: [
            'https://i.gkd.li/i/17601295', // 崩坏3
            'https://i.gkd.li/i/17601347', // 绝区零
            'https://i.gkd.li/i/17611621', // 原神
            'https://i.gkd.li/i/17611617', // 星穹铁道
            'https://i.gkd.li/i/17629453', // 返回节点 clickable=false
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/17601283', // 崩坏3
            'https://i.gkd.li/i/17601345', // 绝区零
          ],
        },
      ],
    },
  ],
});
