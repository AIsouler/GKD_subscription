import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oray.sunlogin',
  name: '向日葵远程控制',
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
          matches: '[vid="tobid_splash_skip_text"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f41b0367-9161-4329-987d-b2d0ad9ec233',
          snapshotUrls: 'https://i.gkd.li/i/17004919',
        },
      ],
    },
    {
      key: 0,
      name: '全屏广告-瓜子会员弹窗',
      desc: '点击右上角[关闭]',
      fastQuery: true,
      activityIds: 'com.oray.sunlogin.application.Main',
      rules: '[id="com.oray.sunlogin:id/close"][text="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13195950',
        'https://i.gkd.li/i/12910411',
        'https://i.gkd.li/i/13197454', //如果没有text条件则会和这一条误触
      ],
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/61d335f0-a85a-4e26-80fe-6bc0d1742bc0',
    },
    {
      key: 1,
      name: '更新提示-版本更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches:
            '[text="立即更新"] <2 * > [id="com.oray.sunlogin:id/button_cancel"][text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13195560',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.oray.sunlogin.application.Main',
          matches:
            '[id="com.oray.sunlogin:id/fl_close_advertise" || vid="iv_dislike"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2cad526b-1691-45e9-826b-eb92299cb8ee',
          snapshotUrls: [
            'https://i.gkd.li/i/13207785',
            'https://i.gkd.li/i/17159821',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-退出app提示',
      fastQuery: true,
      rules: '[text="是否确认退出向日葵？"] + LinearLayout > [vid="button_ok"]',
      snapshotUrls: 'https://i.gkd.li/i/13927148',
    },
  ],
});
