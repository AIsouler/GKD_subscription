import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.qiyi.video',
  groups: [
    {
      key: 0,
      name: 'iqiyi-开屏广告',
      activityIds: 'org.qiyi.android.video.MainActivity',
      rules:
        '@FrameLayout[id=`com.qiyi.video:id/unused_res_a`] > LinearLayout[id=null] > TextView[text=`关闭`][id=`com.qiyi.video:id/unused_res_a`]',
    },
    {
      key: 1,
      name: 'iqiyi-关闭青少年模式弹窗',
      activityIds: 'org.qiyi.basecore.widget.dialog.AlertDialogBottom1',
      rules: 'Button[id=`com.qiyi.video:id/confirm_btn`][text=`我知道了`]',
    },
  ],
};
