import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
    {
      key: 0,
      name: '首页悬浮窗广告',
      activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
      quickFind: true,
      rules: {
        matches: [
          '[id="com.xiaomi.market:id/webview_container"]',
          'Button[text.length=2][text="关闭"]',
        ],
      },
      snapshotUrls: 'https://i.gkd.li/import/13248808',
    },
    {
      key: 9,
      name: '应用升级界面-顶部广告横幅',
      quickFind: true,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      rules: '[id="com.xiaomi.market:id/iv_close_tip"]',
      snapshotUrls: 'https://i.gkd.li/import/13197334',
    },
    {
      enable: false,
      key: 10,
      name: '忽略升级',
      quickFind: true,
      desc: '应用升级界面-自动点击忽略',
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/45487685/a3a61df9-7757-428e-b4fe-a960e09a0bbe',
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.xiaomi.market:id/fold_text"][text^="查看全部升级"]',
          snapshotUrls: 'https://i.gkd.li/import/12674261',
        },
        {
          key: 1,
          matches:
            '[id="com.xiaomi.market:id/expandable_textview"] + [id="com.xiaomi.market:id/expand_button"][desc="更多"]',
          snapshotUrls: 'https://i.gkd.li/import/12674264',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '@[id="com.xiaomi.market:id/ignore_this"][text="忽略本次"] + [id="com.xiaomi.market:id/ignore_permanently"][text="永久忽略"]',
          snapshotUrls: 'https://i.gkd.li/import/12674269',
        },
      ],
    },
    {
      key: 11,
      name: '请求通知权限提示弹窗',
      desc: '自动点击关闭按钮',
      quickFind: true,

      activityIds: [
        'com.xiaomi.market.ui.UpdateListActivity',
        'com.xiaomi.market.business_ui.main.MarketTabActivity',
      ],
      rules: [
        {
          key: 0,
          name: '开启推送',
          matches:
            '@[id="com.xiaomi.market:id/dialog_cancel"] - LinearLayout > [id="com.xiaomi.market:id/btn_start_push"]',
          snapshotUrls: 'https://i.gkd.li/import/12714980',
        },
        {
          key: 1,
          name: '开启通知栏提醒',
          matches: 'Button[text="立即开启"] - Button[text="不了，谢谢"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13197306',
            'https://i.gkd.li/import/13691701',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '个性化推荐弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.xiaomi.market.business_ui.main.MarketTabActivity',
      rules: '[id="com.xiaomi.market:id/close_float_recommend"]',
      snapshotUrls: 'https://i.gkd.li/import/13624971',
    },
  ],
});
