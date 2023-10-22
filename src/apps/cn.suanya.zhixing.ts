import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.suanya.zhixing',
  name: '智行旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.app.main.entrance.MainActivity',
      rules: 'LinearLayout > TextView + TextView[id!=null][text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12739122',
    },
  ],
});
