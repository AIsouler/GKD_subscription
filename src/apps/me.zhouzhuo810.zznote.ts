import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.zhouzhuo810.zznote',
  name: '上海交警',
  groups: [
    {
      key: 0,
      name: '小周便签',
      activityIds: 'me.zhouzhuo810.zznote.view.act.QiDongActivity',
      rules:
        '[id="me.zhouzhuo810.zznote:id/native_ad_container"] + [id^="me.zhouzhuo810.zznote:id/btn_next"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12798528',
    },
  ],
});
