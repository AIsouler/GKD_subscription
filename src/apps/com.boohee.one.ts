import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.boohee.one',
  name: '薄荷健康',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.boohee.one.app.home.ui.activity.SplashActivity',
      rules: '[id="com.boohee.one:id/anythink_myoffer_splash_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12716929',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.boohee.library.update.UpdateDialogActivity',
      rules:
        '@[id="com.boohee.one:id/tv_ignore"] + [id="com.boohee.one:id/tv_update"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12716918',
    },
    {
      key: 2,
      name: '发现页广告弹窗',
      activityIds: 'com.sensorsdata.sf.ui.view.DialogActivity',
      rules:
        'LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/import/12716970',
    },
    {
      enable: true,
      key: 10,
      name: '请求开启通知权限弹窗',
      desc: '自动点击x按钮',
      activityIds:
        'com.boohee.one.app.account.ui.activity.MsgCategoryActivityV2',
      rules: '[id="com.boohee.one:id/img_close_push"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12716950',
    },
  ],
});
