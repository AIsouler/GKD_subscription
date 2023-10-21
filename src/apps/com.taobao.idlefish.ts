import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.taobao.idlefish.maincontainer.activity.MainActivity',
        'com.taobao.fleamarket.home.activity.InitActivity',
      ],
      rules: [
        {
          matches: '[id="com.taobao.idlefish:id/advert_close"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12668670', //com.taobao.idlefish.maincontainer.activity.MainActivity
            'https://gkd-kit.gitee.io/import/13049015', //com.taobao.fleamarket.home.activity.InitActivity
          ],
        },
      ],
    },
  ],
});
