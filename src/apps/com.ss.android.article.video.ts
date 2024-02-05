import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="青少年模式"] +n [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/12472628',
    },
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="关闭"] - LinearLayout > [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/13328430',
    },
    {
      key: 2,
      name: '通知提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules:
        '@TextView[id="com.ss.android.article.video:id/sj"][text="暂不开启"]',
      snapshotUrls: 'https://i.gkd.li/import/13456568',
    },
    {
      key: 6,
      name: '全屏广告-红包弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ss.android.article.video.activity.SplashActivity',
      rules: '@FlattenUIImage[clickable=true] -2 [text="开心收下"]',
      snapshotUrls: 'https://i.gkd.li/import/13620299',
    },
  ],
});
