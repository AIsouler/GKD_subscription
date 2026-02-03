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
            '@[vid*="close"] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
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
            'https://i.gkd.li/i/14060521',
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
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            '[text="规则"] +2 @View[childCount=1][clickable=true] > Image[childCount=0][text!=null] <<n [vid="tms_tab_content_view"]',
          exampleUrls: 'https://e.gkd.li/dbf9ea95-3674-4cb2-8a88-dfb96c24e71b',
          snapshotUrls: 'https://i.gkd.li/i/22308745',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: [
            'com.taobao.search.uniform.SearchActivity',
            'com.taobao.android.detail.alittdetail.TTDetailActivity',
            'com.taobao.tao.TBMainActivity',
          ],
          matches:
            '@[clickable=true][childCount=0][width<150 && height<150][index=parent.childCount.minus(1)] -n TextView[text.length>0] <n View <<n WebView[vid="poplayer_inner_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22949963',
            'https://i.gkd.li/i/23289412',
            'https://i.gkd.li/i/23567053',
            'https://i.gkd.li/i/24982514',
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
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
          ],
          matches:
            '[desc.length>0 || text.length>0] + @LinearLayout[clickable=true] + FrameLayout > TextView[text="퀺"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197877',
            'https://i.gkd.li/i/23140899',
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
          fastQuery: true,
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches:
            '@Image[childCount=0][clickable=true][text!=null] < View <2 View < WebView < o0 <2 WebView < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13521702',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            '@Image[childCount=0][clickable=true][text!=null] <2 View < View < View <9 View < WebView < m0 <2 WebView < RelativeLayout < [vid="tms_tab_content_view"]',
          exampleUrls: 'https://e.gkd.li/45f8b78d-bc6a-4c1a-994d-6b5bce2c96a0',
          snapshotUrls: 'https://i.gkd.li/i/22291107',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.taobao.android.detail.alittdetail.TTDetailActivity',
          matches:
            '@FrameLayout[desc="关闭"][clickable=true] <<n [vid="ll_dinamicx_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23289445',
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
            '@Image[childCount=0][visibleToUser=true][text!=null] <n View >(1,2) [visibleToUser=true][text*="消息通知" || text*="系统通知"] <<n [vid="poplayer_inner_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13446901',
            'https://i.gkd.li/i/13455424',
            'https://i.gkd.li/i/15104645',
            'https://i.gkd.li/i/18407606',
            'https://i.gkd.li/i/21789921',
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
            'com.taobao.browser.BrowserActivity',
            'com.taobao.themis.container.app.TMSActivity',
          ],
          matches: '[vid="update_imageview_cancel_v2"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13336760',
            'https://i.gkd.li/i/13695520',
            'https://i.gkd.li/i/14899863',
            'https://i.gkd.li/i/24861114', //芭芭农场
            'https://i.gkd.li/i/24999523', //淘金币
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
          activityIds: [
            'com.taobao.android.detail2.core.framework.floatwindow.permission.PermissionActivity',
            'com.taobao.taolive.sdk.permisson.PermissionActivity',
          ],
          matches: ['[text*="悬浮窗权限"]', '[text="否" || text="暂不"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13588165',
            'https://i.gkd.li/i/23146078',
          ],
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
          ],
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
    {
      key: 21,
      name: '全屏广告-支付后的推荐弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text$="推荐你"][visibleToUser=true]',
            '@[clickable=true] > [text="关闭"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/1646b159-a3ca-4cd8-9519-729e70acb72a',
          snapshotUrls: [
            'https://i.gkd.li/i/14155537',
            'https://i.gkd.li/i/18296345',
            'https://i.gkd.li/i/22113615',
          ],
        },
        {
          key: 1,
          name: '充值类商品界面广告',
          fastQuery: true,
          activityIds: 'com.taobao.weex.WXActivity',
          matches:
            '@ImageView[clickable=true][width<150 && height<155] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout <2 [vid="weex_render_view"]',
          snapshotUrls: 'https://i.gkd.li/i/23923991',
        },
      ],
    },
    {
      key: 22,
      name: '局部广告-搜索页广告',
      desc: '自动隐藏猜你想搜、热榜',
      rules: [
        {
          key: 0,
          name: '猜你想搜',
          fastQuery: true,
          activityIds: 'com.taobao.search.uniform.SearchActivity',
          matches: '[vid="hideBtn"][desc="隐藏"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23165368', // 隐藏前
            'https://i.gkd.li/i/23165384', // 隐藏后
          ],
        },
        {
          key: 1,
          name: '热榜',
          fastQuery: true,
          activityIds: 'com.taobao.search.uniform.SearchActivity',
          matches:
            '@[desc="隐藏榜单"][clickable=true] <<n [vid="dynamic_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23165418', // 隐藏前
            'https://i.gkd.li/i/23165427', // 隐藏后
          ],
        },
      ],
    },
  ],
});
