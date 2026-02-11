import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.medicinehelper',
  name: '用药助手',
  groups: [
    {
      key: 1,
      name: '更新提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.dxy.medicinehelper.activity.MainComposeActivity',
          matches: '[vid="blankForClose"] + [vid="iv_close"]',
        },
      ],
    },
  ],
});
