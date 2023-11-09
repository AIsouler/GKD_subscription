import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hose.ekuaibao',
  name: '易快报',
  groups: [
    {
      key: 1,
      name: '首页-横幅广告',
      activityIds: 'com.hose.ekuaibao.view.activity.EkbProActivity',
      rules:
        'View[childCount=2] > TextView + TextView[text="不感兴趣"][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/import/12649616'],
    },
  ],
});
