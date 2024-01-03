import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zgnet.eClass',
  name: '掌医课堂',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[id$="tv_close_time"&&text^="关闭"]',
          snapshotUrls: ['https://i.gkd.li/import/12644260'],
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
          snapshotUrls: ['https://i.gkd.li/import/12645513'],
        },
      ],
    },
  ],
});
