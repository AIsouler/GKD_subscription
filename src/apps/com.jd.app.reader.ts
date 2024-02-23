import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.app.reader',
  name: '京东读书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/6f4561e5-b998-43f9-8848-b6b43d045a3d',
          snapshotUrls: 'https://i.gkd.li/i/14189228',
        },
        {
          key: 1,
          actionCdKey: 0,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳过"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[text="下次再说"] +(2) [text="立即更新"]',
          snapshotUrls: ['https://i.gkd.li/i/12686632'],
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
            'https://i.gkd.li/i/12686577',
            'https://i.gkd.li/i/12686664', // activityId: 'com.miui.home.launcher.Launcher'
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
        'https://i.gkd.li/i/12881810',
        'https://i.gkd.li/i/12893631',
      ],
    },
  ],
});
