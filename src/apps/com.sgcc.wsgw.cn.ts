import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
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
