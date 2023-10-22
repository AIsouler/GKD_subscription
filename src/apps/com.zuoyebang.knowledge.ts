import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zuoyebang.knowledge',
  name: '作业帮家长版',
  groups: [
    {
      key: 3,
      name: '赏好评弹窗',
      quickFind: true,
      activityIds: 'com.baidu.homework.activity.init.InitActivity',
      rules: 'TextView[id="com.zuoyebang.knowledge:id/btn_cancle"]',
      snapshotUrls: 'https://i.gkd.li/import/13043228',
    },
  ],
});
