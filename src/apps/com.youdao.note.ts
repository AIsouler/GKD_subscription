import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youdao.note',
  name: '有道云笔记',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.youdao.note.activity2.NormalSplashActivity',
      rules: '[id="com.youdao.note:id/count_down_textview"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12745606',
    },
  ],
});
