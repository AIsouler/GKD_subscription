import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  groups: [
    {
      key: 0,
      name: '西瓜视频-关闭青少年模式弹窗',
      activityIds: 'com.ixigua.commonui.uikit.dialog.XGAlertDialog',
      snapshotUrls: ['https://i.gkd.li/import/12472628'],
      rules: ['TextView[text="我知道了"][clickable=true]'],
    },
  ],
});
