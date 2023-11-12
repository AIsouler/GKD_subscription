import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  groups: [
    {
      key: 0,
      name: '青少年模式弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="青少年模式"] +n [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/12472628',
    },
    {
      key: 1,
      name: '更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="关闭"] - LinearLayout > [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/13328430',
    },
  ],
});
