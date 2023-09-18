import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zgnet.eClass',
  name: '掌医课堂',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.zgnet.eClass.ui.SplashActivity'],
      rules: [
        {
          matches: 'TextView[id$="tv_close_time"&&text^="关闭"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12644260'],
        },
      ],
    },
    {
      key: 2,
      enable: false,
      name: '退出确认弹窗（默认关闭）',
      rules: [
        {
          matches:
            '[text*="确定要退出"] < LinearLayout +n LinearLayout > TextView[id$="tv_exit_sure"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12645513'],
        },
      ],
    },
  ],
});
