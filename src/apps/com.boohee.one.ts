import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.boohee.one',
  name: '薄荷健康',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.boohee.one:id/tv_ignore"] + [id="com.boohee.one:id/tv_update"]',
      snapshotUrls: 'https://i.gkd.li/i/12716918',
    },
    {
      key: 2,
      name: '全屏广告-发现页弹窗广告',
      activityIds: 'com.sensorsdata.sf.ui.view.DialogActivity',
      rules:
        'LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/12716970',
    },
    {
      key: 10,
      name: '通知提示-请求开启通知权限弹窗',
      desc: '自动点击x按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.boohee.one:id/img_close_push"]',
      snapshotUrls: 'https://i.gkd.li/i/12716950',
    },
  ],
});
