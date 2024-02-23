import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.hkgt.gasapp',
  name: '易捷加油',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      activityIds: 'cn.com.hkgt.gasapp.dialog.BannerDialog',
      rules: 'ImageView[id="cn.com.hkgt.gasapp:id/exit"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12744270',
    },
  ],
});
