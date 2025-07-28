import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '全屏广告-关闭花呗升级弹窗',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.alipay.android.msp.ui.views.MspContainerActivity',
            'com.alipay.android.msp.ui.views.MspUniRenderActivity',
          ],
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13183946',
            'https://i.gkd.li/i/12826077',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text*="花呗服务"]',
            '@[clickable=true] >2 [text="暂不升级，继续付款"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13631362',
            'https://i.gkd.li/i/13857535',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '权限提示-定位权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.AlipayLogin',
          matches: '@[desc="取消"] + [text*="位置权限"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/caa96cc4-9943-40d8-8cb6-8c89aa60b20f',
          snapshotUrls: 'https://i.gkd.li/i/18549931',
        },
        {
          key: 1,
          activityIds: '.AlipayLogin',
          matches:
            '@[desc="关闭"] - LinearLayout >2 [text^="定位到" || text^="开启定位权限"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c153cd53-16a1-4d77-bf99-9cac8821ccf8',
          snapshotUrls: [
            'https://i.gkd.li/i/18551258',
            'https://i.gkd.li/i/19267032',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '底部悬浮提示',
          activityIds: [
            'com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity',
            'com.eg.android.AlipayGphone.AlipayLogin',
          ],
          matches: [
            '[text^="开启通知权限" || text^="开通推送通知"][visibleToUser=true]',
            '[id="com.alipay.mobile.antui:id/closeButton"][desc="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13194955',
            'https://i.gkd.li/i/16494085',
          ],
        },
        {
          key: 1,
          name: '消息页弹窗提示',
          activityIds:
            'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
          matches: '[text="选择通知接收范围"] +3 * > [text="暂时不用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13669620',
            'https://i.gkd.li/i/14944514',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '更新提示-版本更新弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage',
            '.AlipayLogin',
          ],
          matches: [
            '[text="立即更新" || text="马上体验"]',
            '[text^="稍后"][text.length=4]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13327095',
            'https://i.gkd.li/i/15010554',
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.alipay.mobile.about.ui.AboutAlipayActivity',
            '.AlipayLogin',
          ],
          matches:
            '[text="版本更新"||text^="Version"] - [id="com.alipay.mobile.antui:id/btn_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13490805',
            'https://i.gkd.li/i/13580594',
          ],
        },
        {
          key: 2,
          activityIds: '.AlipayLogin',
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/i/13490797',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-设置支付宝小组件',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text="设置支付宝小组件"]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13327349',
        },
        {
          key: 1,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="添加会员小组件"] < View +3 View[childCount=2] > [text="近期不再提醒我"]',
          exampleUrls: 'https://e.gkd.li/de3df4c8-6ab4-45a0-aec5-0fbdfa75e823',
          snapshotUrls: 'https://i.gkd.li/i/16427922',
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
          snapshotUrls: 'https://i.gkd.li/i/13915022',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-支付后自动点击完成',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.alipay.android.msp.ui.views.MspContainerActivity',
            'com.alipay.android.phone.businesscommon.ucdp.nfc.activity.NResPageActivity',
          ],
          matches: [
            '[text="支付成功" || text="充值成功" || text="提交成功"]',
            '[text="完成"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14008852',
            'https://i.gkd.li/i/16328809',
            'https://i.gkd.li/i/17503266',
            'https://i.gkd.li/i/17686972',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            'RelativeLayout[childCount=2][desc="全屏广告"] ImageView[desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14034152',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'WebView > View > View > View > View > @TextView[clickable=true][visibleToUser=true][text=""] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          exampleUrls: 'https://e.gkd.li/ebbd606a-0e21-4fc5-b0c3-49e4d87d065c',
          snapshotUrls: 'https://i.gkd.li/i/16812751',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '@[text*="跳过"] + [visibleToUser=true][text^="账单分期还"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          exampleUrls: 'https://e.gkd.li/cc064c84-75a9-4447-b01b-9d5597515093',
          snapshotUrls: 'https://i.gkd.li/i/18409779',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-"下次支付用花呗"弹窗',
      desc: '点击"30天不再提醒"',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text="同意协议并开通" || text*="开通花呗"]',
            '[text="30天不再提醒" || text="不感兴趣"]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5',
          snapshotUrls: [
            'https://i.gkd.li/i/14060628',
            'https://i.gkd.li/i/15050300',
            'https://i.gkd.li/i/20684144',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '分段广告-扫码乘车后出现的广告',
      desc: '点击[展开更多]-点击[对该内容不感兴趣]',
      fastQuery: true,
      activityIds:
        'com.alipay.android.phone.wallet.aptrip.ui.activity.result.ResultPageActivityV2',
      rules: [
        {
          key: 0,
          name: '点击[展开更多]',
          matches: '@[desc="展开更多选项"] - * >2 [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d7c12df8-a92e-45be-a462-bef23ca9b5fc',
          snapshotUrls: 'https://i.gkd.li/i/14546044',
        },
        {
          key: 1,
          preKeys: [0],
          name: '点击[对该内容不感兴趣]',
          matches: '@RelativeLayout[clickable=true] >2 [text$="内容不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7008e1da-738c-4790-9f12-6a5155d42c47',
          snapshotUrls: [
            'https://i.gkd.li/i/14546047',
            'https://i.gkd.li/i/15209602',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '全屏广告-关闭免密支付广告',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@[checked=true] < FrameLayout - [text*="免密"][text$="支付"]',
          exampleUrls: 'https://e.gkd.li/7c789099-9b6f-40a2-bc3b-c73b30891cf0',
          snapshotUrls: [
            'https://i.gkd.li/i/14630824', // 关闭前
            'https://i.gkd.li/i/14630825', // 关闭后
            'https://i.gkd.li/i/17107841',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text^="开通"][text$="免密支付"][visibleToUser=true]',
            '@[clickable=true] > [text="关闭"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/c8388cd5-a97f-4683-9ef1-2caa0a24de91',
          snapshotUrls: 'https://i.gkd.li/i/19449399',
        },
      ],
    },
    {
      key: 19,
      name: '分段广告-服务消息页面-卡片广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      fastQuery: true,
      activityIds:
        'com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c3e08729-6d97-4a87-bfc3-1e38dd95c384',
          snapshotUrls: 'https://i.gkd.li/i/14787644',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] >2 [text="不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/64c8c27d-23de-43b1-a87b-e2107b644eb1',
          snapshotUrls: 'https://i.gkd.li/i/14787585',
        },
      ],
    },
    {
      key: 20,
      name: '全屏广告-[0元下单权益]弹窗',
      desc: '支付完成后出现',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="关闭"] < @FrameLayout[clickable=true] <3 FrameLayout[childCount=3] < * + FrameLayout[childCount=3] [text*="0元下单"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3575bbbc-717b-466d-b863-443a15629ef6',
          snapshotUrls: 'https://i.gkd.li/i/14893122',
        },
      ],
    },
    {
      key: 21,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matchRoot: true,
          forcedTime: 10000,
          activityIds: [
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
          matches:
            'WebView[text="基金"] >(2,3) View[childCount=3] > @TextView[clickable=true][visibleToUser=true][text=""] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/5df9b6fb-7455-492c-a726-fb6a42266a02',
          snapshotUrls: [
            'https://i.gkd.li/i/14907533',
            'https://i.gkd.li/i/15144834',
            'https://i.gkd.li/i/15220394',
            'https://i.gkd.li/i/15231403', // 避免误触
          ],
        },
        {
          key: 1,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'View[childCount=3] >4 View[childCount=6] > @TextView[index=2][clickable=true][visibleToUser=true] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2d714755-efe9-4c63-8187-7f9b7a5a199c',
          snapshotUrls: 'https://i.gkd.li/i/15144844',
        },
      ],
    },
    {
      key: 22,
      name: '其他-蚂蚁理财社区-[加入同路人]弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          matches:
            '@TextView[clickable=true][text=""] < * > [visibleToUser=true][text="立即加入"] <<n [id="com.alipay.mobile.nebula:id/h5_trans_web_content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e6332999-1c2b-49f0-84e1-780424a5cf2a',
          snapshotUrls: 'https://i.gkd.li/i/15289022',
        },
      ],
    },
    {
      key: 23,
      name: '全屏广告-[银行卡还款服务升级]弹窗',
      desc: '点击[放弃升级，直接付款]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: '@[clickable=true] >2 [text="放弃升级，直接付款"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1b788a34-68f6-43c0-8be4-e13cb8221852',
          snapshotUrls: 'https://i.gkd.li/i/16106615',
        },
      ],
    },
    {
      key: 24,
      name: '开屏广告-小程序开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite1',
          matches:
            '@View[id=null][text=null][childCount=0][visibleToUser=true] < ViewGroup[id=null][text=null][childCount=1][index=parent.childCount.minus(1)] <7 ViewGroup <2 ViewGroup < ViewGroup < LinearLayout < RelativeLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/a243e31f-f1b5-4689-8d1a-c53250be651e',
          snapshotUrls: 'https://i.gkd.li/i/17141999',
        },
      ],
    },
    {
      key: 25,
      name: '功能类-自动授权登录',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          action: 'clickCenter', // clickNode可能无效
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '[text="支付宝授权"] >3 @[childCount=0][text="同意"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/17376764',
        },
      ],
    },
    {
      key: 26,
      name: '局部广告-直播悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          position: {
            left: 'width * 0.8893',
            top: 'width * 0.1230',
          },
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '[id="com.alipay.mobile.beevideo:id/fl_bee_player_view_container"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3698e238-f39b-47ce-b0df-e2e47c15b400',
          snapshotUrls: 'https://i.gkd.li/i/21467483',
        },
      ],
    },
  ],
});
