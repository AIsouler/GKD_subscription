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
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[vid="tobid_splash_skip_text" || vid="ms_skipView"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f41b0367-9161-4329-987d-b2d0ad9ec233',
          snapshotUrls: [
            'https://i.gkd.li/i/17004919',
            'https://i.gkd.li/i/22056539',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22861457',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@View[clickable=true][childCount=0][visibleToUser=true] +2 LinearLayout >2 [vid="sig_ad_privacy_ll"]',
          snapshotUrls: 'https://i.gkd.li/i/22863334',
        },
      ],
    },
    {
      key: 0,
      name: '全屏广告-瓜子会员弹窗',
      desc: '点击右上角[关闭]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.oray.sunlogin.application.Main',
            '.dialog.ShareDialog',
          ],
          matches: '[id="com.oray.sunlogin:id/close"][text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13195950',
            'https://i.gkd.li/i/12910411',
            'https://i.gkd.li/i/13197454', //如果没有text条件则会和这一条误触
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示-版本更新',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.application.Main',
          matches:
            '[text="立即更新"] <2 * > [id="com.oray.sunlogin:id/button_cancel"][text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13195560',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: '.application.Main',
      rules: [
        {
          key: 0,
          action: 'clickCenter', // clickNode 可能无效
          matches:
            '[id="com.oray.sunlogin:id/fl_close_advertise" || vid="iv_dislike"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2cad526b-1691-45e9-826b-eb92299cb8ee',
          snapshotUrls: [
            'https://i.gkd.li/i/13207785',
            'https://i.gkd.li/i/17159821',
          ],
        },
        {
          preKeys: [0],
          anyMatches: [
            '@[clickable=true] > [text="不感兴趣"][clickable=false][visibleToUser=true]',
            '[text="不感兴趣"][clickable=true][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/55f927c7-edb5-4324-a73a-ad6dfa090eb6',
          snapshotUrls: [
            'https://i.gkd.li/i/22865433',
            'https://i.gkd.li/i/22941348',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-退出app提示',
      rules: [
        {
          fastQuery: true,
          matches:
            '[text="是否确认退出向日葵？"] + LinearLayout > [vid="button_ok"]',
          snapshotUrls: 'https://i.gkd.li/i/13927148',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-远程控制结束后的广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.application.Main',
          matches: '@[vid="close"][visibleToUser=true] - [vid="ll_remote_end"]',
          exampleUrls: 'https://e.gkd.li/104ba188-b4cd-4922-b27e-f654085eb163',
          snapshotUrls: 'https://i.gkd.li/i/17782893',
        },
      ],
    },
  ],
});
