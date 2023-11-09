import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.ailabs.tg',
  name: '天猫精灵',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.alibaba.ailabs.tg.splash.WelcomeActivity',
      rules: [
        {
          matches: ['[id="com.alibaba.ailabs.tg:id/fl_ad"] >n [text^="跳过"]'],
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12814080'],
        },
        {
          action: 'clickNode',
          matches: ['[id="com.alibaba.ailabs.tg:id/operation_ad_skip_text"]'],
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12819744'],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      quickFind: true,
      activityIds: 'com.alibaba.ailabs.tg.activity.HomeActivity',
      rules:
        '[id="com.alibaba.ailabs.tg:id/ll_download"] + [id="com.alibaba.ailabs.tg:id/va_dialog_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13296332',
    },
  ],
});
