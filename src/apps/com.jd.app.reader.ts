import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.app.reader',
  name: '京东读书',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: ['com.jingdong.app.reader.logo.JdLogoActivity'],
      rules: [
        {
          matches: '@[text="下次再说"] +(2) [text="立即更新"]',
          snapshotUrls: ['https://i.gkd.li/import/12686632'],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      activityIds: [
        'com.jingdong.app.reader.main.ui.JdMainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches:
            '[id="com.jd.app.reader:id/mCardView"] + [id="com.jd.app.reader:id/mCloseBtn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12686577',
            'https://i.gkd.li/import/12686664', // activityId: 'com.miui.home.launcher.Launcher'
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-阅读页面广告弹窗',
      activityIds: 'com.jd.read.engine.activity.EngineReaderActivity',
      rules: '[id$="ad_read_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12881810',
        'https://i.gkd.li/import/12893631',
      ],
    },
  ],
});
