import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duitang.main',
  name: '堆糖',
  groups: [
    {
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      key: 1,
      actionMaximum: 1,
      activityIds: ['com.duitang.main.business.main.NAMainActivity'],
      rules: [
        {
          matches: '[id="com.duitang.main:id/teenGuideKnown"]',
          snapshotUrls: 'https://i.gkd.li/import/13202230',
        },
      ],
    },
    {
      name: '局部广告-推荐浏览广告',
      desc: '关闭推荐浏览页面广告',
      key: 2,
      activityIds: ['com.duitang.main.business.main.NAMainActivity'],
      quickFind: true,
      rules: [
        {
          matches: '[id="com.duitang.main:id/adOptionEntry"]',
          snapshotUrls: 'https://i.gkd.li/import/13202725',
        },
      ],
    },
    {
      name: '评价提示',
      desc: '点击[下次再说]',
      key: 3,
      actionMaximum: 1,
      quickFind: true,
      activityIds: ['com.miui.home.launcher.Launcher'],
      rules: [
        {
          matches: '[id="com.duitang.main:id/scoreDuitangCancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13203217',
        },
      ],
    },
    {
      key: 4,
      quickFind: true,
      name: '全屏广告-图片页广告弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.duitang.main.business.display.ImageActivity',
          matches: '[id="com.duitang.main:id/popUpbtnClose"]',
          snapshotUrls: 'https://i.gkd.li/import/13997011',
        },
      ],
    },
  ],
});
