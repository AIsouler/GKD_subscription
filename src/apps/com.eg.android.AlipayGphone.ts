import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      enable: false,
      key: 0,
      name: '更新提示-关闭花呗升级弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views', //views.MspContainerActivity & views.MspUniRenderActivity
        'com.alipay.android.msp.ui.views.MspContainerActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
          snapshotUrls: 'https://i.gkd.li/import/12737055', //com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main
        },
        {
          quickFind: true,
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13183946', //com.alipay.android.msp.ui.views.MspContainerActivity
            'https://i.gkd.li/import/12826077', //com.alipay.android.msp.ui.views.MspUniRenderActivity
            'https://i.gkd.li/import/12915864',
          ],
        },
        {
          quickFind: true,
          matches:
            '[text="花呗服务未升级，将影响后续使用"] <<n FrameLayout @FrameLayout[clickable=true] [text="暂不升级，继续付款"]',
          snapshotUrls: 'https://i.gkd.li/import/13631362',
        },
        {
          matches:
            '[text="同意协议并确认交易"] < * <2 FrameLayout[childCount=2] + FrameLayout [text="暂不升级，继续付款"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13857535',
            'https://i.gkd.li/import/14001273', // 误触快照
          ],
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '定位提示-请求定位权限弹窗',
      quickFind: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启定位权限"]',
      snapshotUrls: 'https://i.gkd.li/import/12792688',
    },
    {
      key: 2,
      name: '通知提示-请求通知弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '首页底部提示',
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            '@[desc="关闭"] - * >n [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启通知权限"]',
          snapshotUrls: 'https://i.gkd.li/import/13194955',
        },
        {
          key: 1,
          name: '消息页弹窗提示',
          activityIds:
            'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
          matches:
            '[text="选择通知接收范围"] <2 RelativeLayout [text="暂时不用"]',
          snapshotUrls: 'https://i.gkd.li/import/13669620',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '更新提示-版本更新弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: [
        'com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage63',
        'com.eg.android.AlipayGphone.AlipayLogin',
        'com.alipay.mobile.about.ui.AboutAlipayActivity',
      ],
      rules: [
        {
          name: '弹窗-"稍后再说"',
          matches:
            'TextView[id="com.alipay.mobile.accountauthbiz:id/update_cancel_tv"]',
          snapshotUrls: 'https://i.gkd.li/import/13327095',
        },
        {
          name: '弹窗-"x"',
          matches:
            '[text="版本更新"||text^="Version"] - [id="com.alipay.mobile.antui:id/btn_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13490805',
            'https://i.gkd.li/import/13580594',
          ],
        },
        {
          name: '卡片-"x"',
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/import/13490797',
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '功能类-设置支付宝小组件',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          matches:
            '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13327349',
        },
      ],
    },
    {
      key: 10,
      name: '分段广告-小程序-12306',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 0,
          matches:
            '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13763314',
        },
        {
          preKeys: 0,
          key: 1,
          quickFind: true,
          matches: '[text="对该内容不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13763315',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-借呗消费信贷协议',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="同意协议并刷脸验证"] < * -4 * >2 Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13915022',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-支付后自动点击完成',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[id="com.alipay.android.app:id/rl_nav_bar"] > [id="com.alipay.android.app:id/nav_right_textview"]',
          snapshotUrls: 'https://i.gkd.li/import/14008852',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-领新年红包弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            'RelativeLayout[childCount=2][desc="全屏广告"] ImageView[desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/14034152',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-"下次支付用花呗"弹窗',
      desc: '点击"30天不再提醒"',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@[text$="不再提醒"] <<2 * <3 * - FrameLayout[childCount=3] [text="下次支付用花呗"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5',
          snapshotUrls: 'https://i.gkd.li/import/14060628',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-小程序-哈啰-专属额度到账弹窗',
      desc: '点击关闭',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          matches:
            '[id="com.alipay.mobile.nebula:id/h5_pc_container"] View[childCount=1] > View[childCount=2] > View + Image[text=""]',
          exampleUrls:
            'https://m.gkd.li/57941037/bfc87673-cba3-4a5b-ba77-210de8244604',
          snapshotUrls: [
            'https://i.gkd.li/import/14112224',
            'https://i.gkd.li/import/14176001', //不加text=""误触
          ],
        },
      ],
    },
  ],
});
