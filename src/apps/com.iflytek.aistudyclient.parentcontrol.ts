import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.iflytek.aistudyclient.parentcontrol',
  name: '讯飞AI学',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.iflytek.aistudyclient.parentcontrol.MainActivity',
      rules: 'View > @[desc^="跳过"] + ImageView', // 点击目标是快照中的一片区域，https://github.com/gkd-kit/subscription/issues/429#issuecomment-1738990131 反馈可以成功跳过
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740402',
    },
  ],
});
