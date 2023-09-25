import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.xuexi.android',
  name: '学习强国',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
      rules: '@[text="取消"] + [text="立即升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12715139',
    },
    {
      enable: false,
      key: 10,
      name: '请求开启通知权限提示信息',
      desc: '自动点击x按钮',
      activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
      rules:
        '[text^="开启消息通知"] +2 [id="cn.xuexi.android:id/layout_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12715160',
    },
  ],
});
