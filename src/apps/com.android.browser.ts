import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.browser',
  name: '小米浏览器',
  groups: [
    {
      key: 0,
      name: '关闭[个性推荐开启提示]',
      activityIds: ['com.android.browser.BrowserActivity'],
      rules: [
        {
          matches:
            '@ImageView[id!=null][clickable=true] -2 [text="个性推荐获得更丰富内容"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12829403',
        },
      ],
    },
  ],
});
