import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="取消"] < * > [text="好,升级"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12684250',
        'https://i.gkd.li/i/12727457',
        'https://i.gkd.li/i/12684244',
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.taobao.etao.app.home.view.NewHomeActivity',
            'com.taobao.etao.app.homev4.HomeV4Activity',
          ],
          matches:
            'LinearLayout[childCount=2] > @RelativeLayout[clickable=true][childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/12739581',
            'https://i.gkd.li/i/13670025',
          ],
        },
        {
          key: 1,
          activityIds: 'com.taobao.etao.app.homev4.HomeV4Activity',
          matches:
            '[text="一淘-首页红包升级-2312wf"] >5 View[childCount=3] > View[index=0][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/db5c7761-3a8b-4bc6-a61c-65dd30f61b9f',
          snapshotUrls: 'https://i.gkd.li/i/14622468',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '[text^="打开消息通知"] + [text="去开启"] + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12684278',
        },
        {
          key: 1,
          matches:
            '[text^="打开消息通知"] + FrameLayout > [text="去开启"] < FrameLayout + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12684351',
        },
      ],
    },
  ],
});
