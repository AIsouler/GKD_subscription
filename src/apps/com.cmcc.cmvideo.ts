import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id=`com.cmcc.cmvideo:id/skip_button`]',
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.cmcc.cmvideo:id/btn_cancle"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12498307',
    },
    {
      key: 2,
      name: '右下角小广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
      rules: '[id="com.cmcc.cmvideo:id/iv_right_bottom_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12498315',
    },
    {
      key: 3,
      name: '版本更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.cmcc.cmvideo:id/btn_update_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13276116',
    },
    {
      key: 4,
      name: '推送通知权限弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.cmcc.cmvideo:id/base_dialog_left_btn"][text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13276127',
    },
    {
      key: 5,
      name: '弹窗广告',
      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
      matchLauncher: true,
      rules:
        '@[id="com.cmcc.cmvideo:id/iv_big_close"] + [id="com.cmcc.cmvideo:id/sdv_big_pic"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13276111',
        'https://i.gkd.li/import/13276122',
      ],
    },
  ],
});
