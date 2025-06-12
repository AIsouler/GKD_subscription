import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jiaohua_browser',
  name: 'JMComic2',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '关闭选择路线后的全屏广告',
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '[childCount=2] > [name="android.view.ViewGroup"] + [name="android.view.ViewGroup"] > [name="android.widget.TextView"][text=""][clickable=false][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/447bea41-2771-4a57-8436-82da37d0b3b2',
          snapshotUrls: 'https://i.gkd.li/i/20709992',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-底部横幅广告',
      desc: '关闭底部横幅广告',
      rules: [
        {
          activityIds: '.MainActivity',
          action: 'clickCenter',
          matches:
            '[text="AD"] <<7 [name="android.view.ViewGroup"] + [name="android.view.ViewGroup"] > [name="android.widget.TextView"][text=""][clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-路线选择',
      desc: '选择路线，优先顺畅>普通>缓慢',
      actionMaximum: 1,
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          anyMatches: [
            '[text="请选择线路"] +(2,3,4,5,6) [name="android.view.ViewGroup"] > [text="顺畅"]',
            '[text="请选择线路"] +(2,3,4,5,6) [name="android.view.ViewGroup"] > [text="普通"]',
            '[text="请选择线路"] +(2,3,4,5,6) [name="android.view.ViewGroup"] > [text="缓慢"]',
          ],
          exampleUrls: 'https://e.gkd.li/68004e70-6b78-41f2-b329-ff600038db94',
          snapshotUrls: 'https://i.gkd.li/i/20711163',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-点击[我保证我已满18岁]',
      actionMaximum: 6,
      actionDelay: 500,
      actionCd: 500,
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[text="我保证我已满18岁！确定进入！"]',
          exampleUrls: 'https://e.gkd.li/f890ac7e-8626-4fc3-85c1-83d6776cb3f4',
          snapshotUrls: 'https://i.gkd.li/i/20711995',
        },
      ],
    },
  ],
});
