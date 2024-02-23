import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="更新提示"] <<2 * +2 * >2 [text="取消"]',
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
      ],
    },
    {
      enable: false,
      key: 10,
      name: '通知提示-请求打开系统通知提示信息',
      desc: '自动点击提示信息的x按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text^="打开消息通知"] + [text="去开启"] + ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12684278'],
        },
        {
          matches:
            '[text^="打开消息通知"] + FrameLayout > [text="去开启"] < FrameLayout + ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12684351'],
        },
      ],
    },
  ],
});
