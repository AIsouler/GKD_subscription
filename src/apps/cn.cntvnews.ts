import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.cntvnews',
  name: '央视新闻',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.torch.open.ad.splash.SplashAdActivity',
      rules: 'TextView[text$="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12749208',
    },
  ],
});
