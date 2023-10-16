import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.zhouzhuo810.zznote',
  name: '小周便签',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'me.zhouzhuo810.zznote.view.act.QiDongActivity',
        'me.zhouzhuo810.zznote.view.act.edit.immersive.SpanPicWordDetailImmersiveActivity',
      ],
      rules:
        '[id="me.zhouzhuo810.zznote:id/native_ad_container"] + [id^="me.zhouzhuo810.zznote:id/btn_next"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12798528',
        'https://gkd-kit.songe.li/import/12912217',
      ],
    },
  ],
});
