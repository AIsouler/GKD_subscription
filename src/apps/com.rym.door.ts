import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.rym.door',
  name: '日淘任意门',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      rules:
        'View[childCount=4] > [desc^="跳过（"][desc.length<=6][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12865344',
    },
  ],
});
