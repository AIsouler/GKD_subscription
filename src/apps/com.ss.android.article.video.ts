import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.ss.android.article.video',
  groups: [
    {
      key: 0,
      name: `西瓜视频-关闭青少年模式弹窗`,
      activityIds: `com.ixigua.commonui.uikit.dialog.XGAlertDialog`,
      rules: [`TextView[text="我知道了"][clickable=true]`],
    },
  ],
};
