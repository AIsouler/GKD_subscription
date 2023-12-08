import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yidoutang.app',
  name: '一兜糖',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.yidoutang.flutter.YDTFlutterActivity',
      rules: '[desc="跳过"]',
      snapshotUrls: ['https://i.gkd.li/import/13574555'],
    },
  ],
});
