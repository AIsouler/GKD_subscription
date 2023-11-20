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
      rules:
        '[id^="am-modal-container"] Dialog @View[clickable=true][index=1] > Image',
      snapshotUrls: 'https://i.gkd.li/import/13402692',
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
  ],
});
