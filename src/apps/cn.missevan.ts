import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.missevan',
  name: '猫耳FM',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '青少年模式',
      desc: '点击：知道了',
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
