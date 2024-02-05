import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.doc360.client',
  name: '个人图书馆',
  groups: [
    {
      key: 5,
      name: '局部广告-信息流广告',
      quickFind: true,
      activityIds: 'com.doc360.client.activity.ReadRoomActivity',
      rules:
        '@FrameLayout[desc^="dislike"] <<n [id="com.doc360.client:id/fl_ad_container"]',
      snapshotUrls: 'https://i.gkd.li/import/13485051',
    },
  ],
});
