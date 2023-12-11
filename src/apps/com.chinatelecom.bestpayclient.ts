import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.chinatelecom.bestpayclient:id/tv_ad_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13197640',
    },
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
      rules: '[id="com.chinatelecom.bestpayclient:id/bupdate_tv_bottom_tip"]',
      snapshotUrls: 'https://i.gkd.li/import/13391544',
    },
    {
      key: 3,
      name: '广告弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
      rules: [
        {
          key: 0,
          name: '权益页',
          matches:
            'Image < @View[clickable=true][index=1] <<n Dialog <<n [id="com.chinatelecom.bestpayclient:id/best_h5_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13402692',
        },
        {
          key: 1,
          name: '首页1',
          matches:
            '[id="com.chinatelecom.bestpayclient:id/iv_dialog_close_one"]',
          snapshotUrls: 'https://i.gkd.li/import/13455790',
        },

        {
          key: 2,
          name: '首页2',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@Image[clickable=true][text!=null] < View[childCount=2] <<n FrameLayout[id="com.chinatelecom.bestpayclient:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13626324',
        },
        {
          key: 3,
          name: '借贷页',
          matches:
            '@View[clickable=true][text=""] <<n [id="com.chinatelecom.bestpayclient:id/best_h5_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13455929',
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '悬浮窗小广告',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
      rules:
        '[id="com.chinatelecom.bestpayclient:id/best_h5_container"] View[childCount=2] > @View[clickable=true] +  View[clickable=true] > Image[text!=null]',
      snapshotUrls: 'https://i.gkd.li/import/13402711',
    },
    {
      key: 5,
      name: '年底积分活动弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
      rules: 'View > View[index=1][clickable=true][childCount=1] > Image',
      snapshotUrls: [
        'https://i.gkd.li/import/13543032',
        'https://i.gkd.li/import/13625037', //修改规则，避免在此误触
      ],
    },
  ],
});
