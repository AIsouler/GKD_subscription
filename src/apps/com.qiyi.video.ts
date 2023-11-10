import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qiyi.video',
  name: '爱奇艺',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'org.qiyi.android.video.MainActivity',
      rules:
        '@LinearLayout[id=`com.qiyi.video:id/unused_res_a`] > TextView[text=`关闭`][id=`com.qiyi.video:id/unused_res_a`]',
      snapshotUrls: 'https://i.gkd.li/import/13160866',
    },
    {
      key: 1,
      name: '青少年弹窗',
      quickFind: true,
      activityIds: 'org.qiyi.basecore.widget.dialog.AlertDialogBottom1',
      rules: 'Button[id=`com.qiyi.video:id/confirm_btn`][text=`我知道了`]',
    },
    {
      key: 2,
      name: '我的-顶部广告',
      quickFind: true,
      activityIds: 'org.qiyi.android.video.MainActivity',
      snapshotUrls: 'https://i.gkd.li/import/12495050',
      rules: [
        '@[id="com.qiyi.video:id/unused_res_a"][clickable=true] > [id="com.qiyi.video:id/close"]',
      ],
    },
    {
      key: 3,
      name: '开启推送通知弹窗',
      quickFind: true,
      activityIds: 'org.qiyi.android.video.MainActivity',
      snapshotUrls: 'https://i.gkd.li/import/12838152',
      rules: ['[id="com.qiyi.video:id/cancel_btn"][text="暂时不要"]'],
    },
    {
      key: 4,
      name: '版本更新弹窗',
      quickFind: true,
      activityIds: 'org.qiyi.android.video.MainActivity',
      snapshotUrls: 'https://i.gkd.li/import/12838158',
      rules: ['[id="com.qiyi.video:id/cancel_btn"][text="暂不升级"]'],
    },
  ],
});
