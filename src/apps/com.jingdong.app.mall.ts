import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: '[desc$="广告"] +2 [desc="跳过"] > [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12519430',
    },
  ],
});
