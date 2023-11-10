import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.hkgt.gasapp',
  name: '易捷加油',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.com.hkgt.gasapp.activity.start.BannerActivity',
      rules: '[id="cn.com.hkgt.gasapp:id/mCountDownTextView"][text$="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12740125',
    },
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'cn.com.hkgt.gasapp.dialog.BannerDialog',
      rules: 'ImageView[id="cn.com.hkgt.gasapp:id/exit"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12744270',
    },
  ],
});
