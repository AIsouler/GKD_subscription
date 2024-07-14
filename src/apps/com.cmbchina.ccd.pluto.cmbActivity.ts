import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmbchina.ccd.pluto.cmbActivity',
  name: '掌上生活',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/bt_sure_tips"] - [id="com.cmbchina.ccd.pluto.cmbActivity:id/bt_cancel_tips"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12647025',
        'https://i.gkd.li/i/12727203',
        'https://i.gkd.li/i/13345771', //
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2'],
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/lly_pop_shell"] > [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_cf_view_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12647000',
        'https://i.gkd.li/i/13360282',
      ],
    },
    {
      key: 3,
      name: '局部广告-右侧悬浮广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2, // 目前只有2个界面会分别弹悬浮窗
      resetMatch: 'app',
      rules: [
        {
          name: '信用卡、我的页面',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
            'com.cmbchina.ccd.pluto.cmbActivity.secondNav',
          ],
          matches:
            '[id="com.cmbchina.ccd.pluto.cmbActivity:id/img_floating_ad_cmb"] - [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_close_floating_ad_cmb"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12647039', // 信用卡页面
            'https://i.gkd.li/i/12647052', // 我的页面
          ],
        },
        {
          name: '查账页面',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
            'com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billRepay',
            'com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billDetail.view',
          ],
          matches:
            '@[vid="img_cmb_drag_pendant_close"] + [vid="img_cmb_drag_pendant_bg"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12647127',
            'https://i.gkd.li/i/14209121',
          ],
        },
        {
          name: '发现页',
          activityIds: 'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
          matches:
            '[id="com.cmbchina.ccd.pluto.cmbActivity:id/view_cat"] + [id="com.cmbchina.ccd.pluto.cmbActivity:id/view_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13402782',
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      desc: '点击x按钮，不开启系统通知',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify"] + [id="com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete"]',
      snapshotUrls: ['https://i.gkd.li/i/12647068'],
    },
    {
      key: 5,
      name: '权限提示-定位权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="定位服务"] +n * > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/14209071',
    },
  ],
});
