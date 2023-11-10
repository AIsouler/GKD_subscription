import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.missevan',
  name: '猫耳FM',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击：跳过',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'cn.missevan.activity.MainActivity',
      rules: [
        {
          matches: '[id="cn.missevan:id/skip_title"][text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12908434',
        },
      ],
    },
    {
      key: 1,
      name: '青少年提示',
      desc: '点击：知道了',
      activityIds: 'cn.missevan.activity.MainActivity',
      quickFind: true,
      rules: [
        {
          matches: '[id="cn.missevan:id/iKnowTextView"][text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/12908433',
        },
      ],
    },
  ],
});
