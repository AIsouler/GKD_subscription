import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.MainActivity',
          matches:
            '[id="com.chinatelecom.bestpayclient:id/bupdate_tv_bottom_tip"]',
          snapshotUrls: 'https://i.gkd.li/i/13391544',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '权益页',
          fastQuery: true,
          activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
          matches:
            'Dialog >3 View[childCount=2] > @View[clickable=true] > Image[childCount=0] <<n [id="com.chinatelecom.bestpayclient:id/best_h5_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13402692',
        },
        {
          key: 1,
          name: '首页1',
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.ui.MainActivity',
          matches:
            '[vid="iv_dialog_close_one" || vid="iv_sky_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13455790',
            'https://i.gkd.li/i/15369212',
            'https://i.gkd.li/i/18160066',
          ],
        },
        {
          key: 2,
          name: '首页2',
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '[text="甜橙信用卡"] >2  View[childCount=2] > @Image[clickable=true][text!=null] <<n [id="com.chinatelecom.bestpayclient:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13626324',
        },
        {
          key: 3,
          name: '借贷页',
          activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
          fastQuery: true,
          matches:
            '@View[clickable=true][text=""] <<n [id="com.chinatelecom.bestpayclient:id/best_h5_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13455929',
        },
        {
          key: 4,
          name: '信用卡页面',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '[id="com.chinatelecom.bestpayclient:id/h5_pc_container"] >2 bc >5 View > View >3 View[childCount=3] > @[clickable=true][width<150 && height<150][visibleToUser=true] + * + View[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13696322',
            'https://i.gkd.li/i/13696323',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24420758',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-悬浮窗小广告',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
          matches:
            '[id="com.chinatelecom.bestpayclient:id/best_h5_container"] View[childCount=2] > @View[clickable=true] + View[clickable=true] > Image[text!=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/4457a342-5750-45d8-ad8e-233dd1da3de3',
          snapshotUrls: 'https://i.gkd.li/i/13402711',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
          matches: '[vid="iv_market_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/14326e73-6c7c-4659-8493-d4b196746b2a',
          snapshotUrls: 'https://i.gkd.li/i/14456159',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-年底积分活动弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View[childCount=2] > @View[index=1][clickable=true][childCount=1] > Image[childCount=0] <<n [id="com.chinatelecom.bestpayclient:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13543032',
            'https://i.gkd.li/i/13625037', //修改规则，避免在此误触
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动签到',
      desc: '点击[立即打卡]-关闭弹窗',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[text^="已连续签到"] +12 * >2 Image[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/8fd8a0ce-90a3-460b-9882-33fdb55cbca4',
          snapshotUrls: 'https://i.gkd.li/i/14459643',
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[text="明日签到可得惊喜盲盒"] <2 View + View > Image',
          exampleUrls:
            'https://m.gkd.li/57941037/31296e53-7d32-405b-b8ae-25855a02291d',
          snapshotUrls: 'https://i.gkd.li/i/14459494',
        },
      ],
    },
  ],
});
