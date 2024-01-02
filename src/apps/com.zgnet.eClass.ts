import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zgnet.eClass',
  name: '掌医课堂',
  groups: [
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
