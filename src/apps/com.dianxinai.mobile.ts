import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dianxinai.mobile',
  name: '点心云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.dianxinai.mobile.MainActivity'],
      rules:
        '@ViewGroup[clickable = true] > TextView[text $="s" && text.length=2]',
      snapshotUrls: 'https://i.gkd.li/i/12847518',
    },
  ],
});
