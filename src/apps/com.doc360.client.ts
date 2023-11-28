import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.doc360.client',
  name: '个人图书馆',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13485331',
    },
    {
      key: 5,
      name: '阅读-推荐-信息流广告',
      quickFind: true,
      activityIds: 'com.doc360.client.activity.ReadRoomActivity',
      rules:
        '@FrameLayout[desc^="dislike"] <<n [id="com.doc360.client:id/fl_ad_container"]',
      snapshotUrls: 'https://i.gkd.li/import/13485051',
    },
  ],
});
