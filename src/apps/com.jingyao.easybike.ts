import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    // 预留 key 0-8
    {
      key: 8,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="开启通知"] < FrameLayout + FrameLayout >2 [text="取消"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13228735',
        'https://i.gkd.li/i/13402675', // activityIds: com.hellobike.atlas.business.portal.PortalActivity
      ],
    },
    {
      key: 9,
      name: '权限提示-定位权限',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
      rules:
        '[text="系统定位服务已关闭"] < FrameLayout +n FrameLayout >2 [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/13228677',
    },
    {
      key: 10,
      name: '全屏广告-应用内活动、弹窗广告（大部分）',
      activityIds: [
        'com.hellobike.ads.widget.insert.dialog.HBAdvertDialog',
        'com.hellobike.atlas.business.portal.PortalActivity',
      ],
      rules:
        'FrameLayout[id="com.jingyao.easybike:id/hbDialogLayout"] + ImageView[id="com.jingyao.easybike:id/actionDialogClose"][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/12650028', // 哈啰出行保弹窗
        'https://i.gkd.li/i/12650090', // 账单查看弹窗
        'https://i.gkd.li/i/13331231', // 骑行卡 atlas.business.portal.PortalActivity
      ],
    },
    {
      key: 11,
      name: '全屏广告-哈啰智能电动车-弹窗广告',
      quickFind: true,
      activityIds: [
        'com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity',
      ],
      rules:
        '[id="com.jingyao.easybike:id/lottie_view"] < ViewGroup + [id="com.jingyao.easybike:id/btn_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12650163',
    },
    {
      key: 12,
      name: '局部广告-右侧悬浮广告',
      quickFind: true,
      activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
      rules:
        '@[id="com.jingyao.easybike:id/closeFloatArea"] + [id="com.jingyao.easybike:id/floatADContainer"]',
      snapshotUrls: 'https://i.gkd.li/i/12650071',
    },
    {
      key: 13,
      name: '全屏广告-骑行订单完成-弹窗广告',
      activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
      rules:
        '[text="订单完成"] >(2) View[childCount=2] > Image[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12684673',
    },
    {
      key: 14,
      name: '全屏广告-骑行卡-优惠券弹窗',
      activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
      rules: '[desc="去使用"] + Button[text=null][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/i/12739316',
    },
    {
      key: 15,
      quickFind: true,
      name: '功能类-新人教学弹窗',
      desc: '点击跳过',
      activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
      rules:
        '@View[text="跳过"] <2 View <2 View <<n FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"]',
      snapshotUrls: 'https://i.gkd.li/i/13837543',
    },
  ],
});
