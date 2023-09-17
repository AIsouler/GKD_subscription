import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tiqiaa.icontrol',
  name: '遥控精灵',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tiqiaa.icontrol.WelcomeActivity',
      rules: [
        {
          matches: '@[id=null][text^="跳过"] < LinearLayout +(n) ImageView',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642183',
            'https://gkd-kit.gitee.io/import/12642185',
          ],
        },
      ],
    },
  ],
});
