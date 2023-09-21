import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
      rules: '[id="com.taobao.idlefish:id/advert_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12668670',
    },
  ],
});
