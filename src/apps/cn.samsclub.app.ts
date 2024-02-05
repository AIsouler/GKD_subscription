import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.samsclub.app',
  name: '山姆会员商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@ImageView[clickable=true] <2 [id="cn.samsclub.app:id/advertising_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13609106',
        },
      ],
    },
    {
      key: 1,
      name: '定位提示-关闭「系统位置服务未打开」通知条',
      activityIds: 'cn.samsclub.app.ui.MainActivity',
      rules: [
        {
          matches: '[id="cn.samsclub.app:id/tips_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13609113',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-关闭「您有一张亲友卡待赠送」通知条',
      activityIds: 'cn.samsclub.app.ui.MainActivity',
      rules: [
        {
          matches: '[id="cn.samsclub.app:id/fragment_home_window_delete_iv"]',
          snapshotUrls: 'https://i.gkd.li/import/13609113',
        },
      ],
    },
  ],
});
