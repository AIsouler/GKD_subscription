import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.motoband',
  name: '摩托邦',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@View[clickable=true] <3 * <2 * < [vid="splash_container_half_size"]',
      snapshotUrls: 'https://i.gkd.li/import/13849831',
    },
  ],
});
