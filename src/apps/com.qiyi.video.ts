import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qiyi.video',
  name: `爱奇艺`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'org.qiyi.android.video.MainActivity',
      rules:
        '@FrameLayout[id=`com.qiyi.video:id/unused_res_a`] > LinearLayout[id=null] > TextView[text=`关闭`][id=`com.qiyi.video:id/unused_res_a`]',
    },
    {
      key: 1,
      name: '青少年弹窗',
      activityIds: 'org.qiyi.basecore.widget.dialog.AlertDialogBottom1',
      rules: 'Button[id=`com.qiyi.video:id/confirm_btn`][text=`我知道了`]',
    },
    {
      key: 2,
      name: `我的-顶部广告`,
      activityIds: `org.qiyi.android.video.MainActivity`,
      snapshotUrls: `https://gkd-kit.gitee.io/import/12495050`,
      rules: [
        `[id="com.qiyi.video:id/unused_res_a"] > [id="com.qiyi.video:id/close"]`,
      ],
    },
  ],
});
