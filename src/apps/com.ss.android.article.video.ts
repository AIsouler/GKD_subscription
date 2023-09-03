import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.video',
  name: `西瓜视频`,
  groups: [
    {
      key: 0,
      name: `西瓜视频-关闭青少年模式弹窗`,
      activityIds: `com.ixigua.commonui.uikit.dialog.XGAlertDialog`,
      snapshotUrls: [
        `https://gkd-kit.gitee.io/import/38517192/78f0c1f6-e8da-4bc4-acd3-5e6dc056b044`,
      ],
      rules: [`TextView[text="我知道了"][clickable=true]`],
    },
  ],
});
