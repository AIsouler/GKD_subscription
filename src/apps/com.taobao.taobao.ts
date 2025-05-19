import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '@[vid*="close"] > [text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17576743',
            'https://i.gkd.li/i/17578451',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
            'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
          ],
          matches: '@[desc="关闭按钮"] - [vid="poplayer_native_state_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12648734',
            'https://i.gkd.li/i/12648746',
            'https://i.gkd.li/i/13198052',
            'https://i.gkd.li/i/14905372',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            '@ImageView[desc="图片"][childCount=0][clickable=true][visibleToUser=true][width<180&&height<180] <<n [vid="poplayer_native_state_id"]',
          exampleUrls: 'https://e.gkd.li/5c77eaf1-b4dc-48c9-96af-131ae9644ffa',
          snapshotUrls: [
            'https://i.gkd.li/i/18218537',
            'https://i.gkd.li/i/20277438',
          ],
        },
        {
          key: 2,
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches:
            'WebView[text="红包签到"] > [id="ice-container"] >(3,4) View[childCount=3] > [name$="Image" || name$="Button"][text*="jpg" || text="关闭"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c7c06d50-a384-4869-a14f-95d219d9d08c',
          snapshotUrls: [
            'https://i.gkd.li/i/18587158',
            'https://i.gkd.li/i/18587159',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-消息页面热门活动卡片',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: 'View[desc.length>0] +2n FrameLayout > TextView[text="퀺"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642795',
            'https://i.gkd.li/i/13197877',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          name: '商品详情右侧悬浮广告',
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches:
            'View[childCount=2] > @Image[text!=""][clickable=true] + View',
          snapshotUrls: 'https://i.gkd.li/i/13521702',
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
            'com.taobao.tao.TBMainActivity',
            'com.taobao.tao.welcome.Welcome',
          ],
          matches:
            '@Image[visibleToUser=true][text!=null] +2 View > [visibleToUser=true][text="消息通知" || text="发货通知"] <<n [vid="poplayer_inner_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13446901',
            'https://i.gkd.li/i/13455424',
            'https://i.gkd.li/i/15104645',
            'https://i.gkd.li/i/18407606',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-各级页面添加到首页弹窗',
      desc: '点击退出',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.taobao.themis.container.app.TMSActivity',
            'com.alibaba.triver.container.TriverMainActivity',
          ],
          matches: 'TextView[text="去首页"] + TextView[text="退出"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197553',
            'https://i.gkd.li/i/13197546',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
            'com.taobao.android.order.bundle.TBOrderListActivity',
          ],
          matches: '[vid="update_imageview_cancel_v2"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13336760',
            'https://i.gkd.li/i/13695520',
            'https://i.gkd.li/i/14899863',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '功能类-关闭小额免密支付',
      desc: '在支付前/后出现',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="关闭"] < @[clickable=true] <3 * < * + * >3 [text$="小额免密支付"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2322af2e-52e2-4059-9757-f26940f4b2fc',
          snapshotUrls: 'https://i.gkd.li/i/13438414',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: '@[checked=true] < * - [text="开通淘宝小额免密支付"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3ae78555-c0a5-4f76-8096-c4d1593ebb77',
          snapshotUrls: [
            'https://i.gkd.li/i/14471853', // 关闭前
            'https://i.gkd.li/i/14471858', // 关闭后
          ],
        },
      ],
    },
    {
      key: 14,
      name: '功能类-将小组件添加到手机桌面',
      desc: '点击取消',
      activityIds: 'com.alibaba.triver.container.TriverMainActivity',
      rules: [
        {
          action: 'clickCenter',
          matches: 'View[text="立即添加"] + View[text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/13598578',
        },
      ],
    },
    {
      key: 15,
      name: '权限提示-悬浮窗权限',
      desc: '点击[否]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.taobao.android.detail2.core.framework.floatwindow.permission.PermissionActivity',
          matches: ['[text*="悬浮窗权限"]', '[text="否"]'],
          snapshotUrls: 'https://i.gkd.li/i/13588165',
        },
      ],
    },
    {
      key: 16,
      name: '全屏广告-花呗推荐弹窗',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 2,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text*="花呗升级" || text*="花呗服务" || text$="开通花呗"][visibleToUser=true]',
            '@[clickable=true] >n [text="暂不升级，继续付款" || text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13691864',
            'https://i.gkd.li/i/13628020',
            'https://i.gkd.li/i/13898735',
            'https://i.gkd.li/i/18296345',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '全屏广告-抢天降补贴弹窗',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: '@[desc="关闭按钮"] - [vid="poplayer_native_state_id"]',
          snapshotUrls: 'https://i.gkd.li/i/14060521',
        },
      ],
    },
    {
      key: 18,
      name: '全屏广告-[「0元下单」权益]弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="关闭"] < @FrameLayout[clickable=true] <3 FrameLayout[childCount=3] < * + FrameLayout[childCount=3] [text*="0元下单"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a35c954d-5162-463c-aee3-b72b9c2d6625',
          snapshotUrls: 'https://i.gkd.li/i/14155537',
        },
      ],
    },
    {
      key: 19,
      name: '局部广告-商品详情页直播悬浮窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
          matches: '[vid="view_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15124094',
        },
      ],
    },
    {
      key: 20,
      name: '功能类-登录授权',
      desc: '点击[确认授权]',
      rules: [
        {
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches: '[text="确认授权"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e6250a9c-3fee-4470-8c7c-1d28ea63d2a5',
          snapshotUrls: 'https://i.gkd.li/i/18271783',
        },
      ],
    },
  ],
});
