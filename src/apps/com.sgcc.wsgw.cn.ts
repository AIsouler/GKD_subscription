import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text*="跳过"][text.length<10]',
      snapshotUrls: 'https://i.gkd.li/import/13242169',
    },
    {
      key: 1,
      name: '首页弹窗广告',
      activityIds: 'com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity',
      rules:
        '[id="com.sgcc.wsgw.cn:id/news_remind_laytout"] > RelativeLayout > [id="com.sgcc.wsgw.cn:id/btn_remind_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12745042',
    },
  ],
});
