import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.app.reader',
  name: '京东读书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.jingdong.app.reader.logo.JdLogoActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches: '[id="com.jd.app.reader:id/count_down_time"][text^="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12686559',
            'https://gkd-kit.gitee.io/import/12686589', // activityId: 'com.miui.home.launcher.Launcher'
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.jingdong.app.reader.logo.JdLogoActivity'],
      rules: [
        {
          matches: '@[text="下次再说"] +(2) [text="立即更新"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12686632'],
        },
      ],
    },
    {
      key: 2,
      name: '首页弹窗广告',
      activityIds: [
        'com.jingdong.app.reader.main.ui.JdMainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches:
            '[id="com.jd.app.reader:id/mCardView"] + [id="com.jd.app.reader:id/mCloseBtn"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12686577',
            'https://gkd-kit.gitee.io/import/12686664', // activityId: 'com.miui.home.launcher.Launcher'
          ],
        },
      ],
    },
    {
      key: 3,
      name: '阅读页面广告弹窗',
      activityIds: 'com.jd.read.engine.activity.EngineReaderActivity',
      rules: '[id$="ad_read_close"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12881810',
        'https://gkd-kit.songe.li/import/12893631',
      ],
    },
  ],
});
