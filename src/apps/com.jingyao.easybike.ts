import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches: '@ImageView + [vid="contentContainer"] >2 [text*="新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/16108173',
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.yanzhenjie.permission.PermissionActivity',
            'com.hellobike.atlas.business.portal.PortalActivity',
          ],
          matches: ['[text*="开启通知"]', '[text="取消"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13228735',
            'https://i.gkd.li/i/13402675',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '权限提示-定位权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches: ['[text="系统定位服务已关闭"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13228677',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: [
            'com.hellobike.ads.widget.insert.dialog.HBAdvertDialog',
            'com.hellobike.atlas.business.portal.PortalActivity',
          ],
          matches: '[vid="actionDialogClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12650090',
            'https://i.gkd.li/i/16503613',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity',
          matches:
            '[id="com.jingyao.easybike:id/lottie_view"] < ViewGroup + [id="com.jingyao.easybike:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12650163',
        },
        {
          key: 2,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '[text="订单完成"] >(2) View[childCount=2] > Image[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12684673',
        },
        {
          key: 3,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches: '[desc="去使用"] + Button[text=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12739316',
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-右侧悬浮广告',
      fastQuery: true,
      activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
      rules:
        '@[id="com.jingyao.easybike:id/closeFloatArea"] + [id="com.jingyao.easybike:id/floatADContainer"]',
      snapshotUrls: 'https://i.gkd.li/i/12650071',
    },
    {
      key: 15,
      name: '其他-新人教学弹窗',
      desc: '点击跳过',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@View[text="跳过"] <2 View <2 View <<n FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13837543',
        },
      ],
    },
  ],
});
