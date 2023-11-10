import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cmbchina.ccd.pluto.cmbActivity',
  name: '掌上生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.cmbchina.ccd.pluto.cmbActivity.SplashActivity'],
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/tv_skip_timer"][text^="跳过"]',
      snapshotUrls: ['https://i.gkd.li/import/12647186'],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
        'com.cmbchina.ccd.pluto.cmbActivity.secplugin.activity.login.fingerprint.cmbR6VH0R',
      ],
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/bt_sure_tips"] - [id="com.cmbchina.ccd.pluto.cmbActivity:id/bt_cancel_tips"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12647025',
        'https://i.gkd.li/import/12727203',
      ],
    },
    {
      key: 2,
      name: '首页弹窗',
      activityIds: ['com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2'],
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/lly_cf_view_content"] + [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_cf_view_close"]',
      snapshotUrls: ['https://i.gkd.li/import/12647000'],
    },
    {
      key: 3,
      name: '右侧悬浮广告',
      rules: [
        {
          name: '信用卡、我的页面-悬浮广告',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
            'com.cmbchina.ccd.pluto.cmbActivity.secondNav.cmbBQDU4FG',
          ],
          matches:
            '[id="com.cmbchina.ccd.pluto.cmbActivity:id/img_floating_ad_cmb"] - [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_close_floating_ad_cmb"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647039', // 信用卡页面
            'https://i.gkd.li/import/12647052', // 我的页面
          ],
        },
        {
          name: '查账页面-悬浮广告',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
            'com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billRepay.view.cmbK99GNX',
          ],
          matches:
            '[id="com.cmbchina.ccd.pluto.cmbActivity:id/img_cmb_drag_pendant_bg"] - [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_cmb_drag_pendant_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12647127'],
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '消息页面-通知开关',
      desc: '点击x按钮，不开启系统通知',
      activityIds: [
        'com.cmbchina.ccd.pluto.cmbActivity.messagebox.activity.cmbBAP9I2J',
      ],
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify"] + [id="com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete"]',
      snapshotUrls: ['https://i.gkd.li/import/12647068'],
    },
  ],
});
