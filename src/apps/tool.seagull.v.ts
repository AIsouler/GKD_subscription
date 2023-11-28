import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tool.seagull.v',
  name: '海鸥加速器',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '卡片式广告-1',
          activityIds: 'io.github.trojan_gfw.igniter.MainActivity',
          matches:
            'View[childCount=2] > @Button[clickable=true] - View > View > View > Image',
          snapshotUrls: 'https://i.gkd.li/import/13413556',
        },
      ],
    },
    {
      key: 2,
      name: '谷歌广告',
      rules: [
        {
          key: 0,
          name: '谷歌广告-1',
          activityIds: [
            'io.github.trojan_gfw.igniter.MainActivity',
            'com.google.android.gms.ads.AdActivity',
          ],
          matches: [
            '[id="mys-wrapper"] + View >n Image',
            '@View[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13426255',
            'https://i.gkd.li/import/13459399',
          ],
        },
        {
          key: 1,
          name: '谷歌广告-2',
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: [
            '[id="mys-wrapper"] + View >n Image',
            '[id="mys-wrapper"] >n View > View > Button',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13476799',
        },
        {
          key: 2,
          name: '谷歌广告-3',
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: '[desc="Interstitial close button"]',
          snapshotUrls: 'https://i.gkd.li/import/13476579',
        },
      ],
    },
  ],
});
