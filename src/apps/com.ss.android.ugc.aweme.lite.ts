import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 1,
      name: '青少年弹窗',
      desc: '点击【我知道了】',
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: 'Button[desc="开启青少年模式"] + Button[text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/import/13111607',
    },
  ],
});
