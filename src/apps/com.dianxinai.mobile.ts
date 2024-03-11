import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dianxinai.mobile',
  name: '点心云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@ViewGroup[clickable=true] > TextView[text$="s" && text.length=2]',
          exampleUrls:
            'https://m.gkd.li/57941037/a4b9c558-1d1f-4964-9545-95533253c9d1',
          snapshotUrls: 'https://i.gkd.li/i/12847518',
        },
      ],
    },
  ],
});
