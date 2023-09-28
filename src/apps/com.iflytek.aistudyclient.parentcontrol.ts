import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.iflytek.aistudyclient.parentcontrol',
  name: '讯飞AI学',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.iflytek.aistudyclient.parentcontrol.MainActivity',
      rules: 'View > @[desc^="跳过"] + ImageView', // 选中的目标是快照中的一片区域，不确定能否达到预期目的
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740402',
    },
  ],
});
