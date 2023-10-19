import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alicloud.databox',
  name: '阿里网盘',
  groups: [
    {
      key: 0,
      name: '自动签到',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          key: 0,
          desc: '自动签到',
          matches: ['[id="com.alicloud.databox:id/tvTaskAction"][text="领取"]'],
          snapshotUrls: 'https://gkd-kit.songe.li/import/12929318',
          quickFind: true,
        },
        {
          key: 1,
          preKeys: [0],
          desc: '在签到后，关闭弹窗',
          matches: ['[id="com.alicloud.databox:id/ivClose"]'],
          snapshotUrls: 'https://gkd-kit.songe.li/import/13038304',
          quickFind: true,
        },
      ],
    },
  ],
});
