import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.hkgt.gasapp',
  name: '易捷加油',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.com.hkgt.gasapp.dialog.BannerDialog',
          matches: 'ImageView[id="cn.com.hkgt.gasapp:id/exit"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12744270',
        },
      ],
    },
  ],
});
