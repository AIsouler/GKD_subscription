import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coloros.gallery3d',
  name: '相册',
  groups: [
    {
      key: 1,
      name: '更新提示',
      rules: [
        {
          activityIds: 'com.coloros.gallery3d.app.MainActivity',
          matches: '[text="更新"] -2 [text="取消"]',
          exampleUrls:
            'https://m.gkd.li/47232102/0dae9f4b-8432-4cf4-b648-07ae17cdece2',
          snapshotUrls: 'https://i.gkd.li/import/13554797',
        },
      ],
    },
  ],
});
