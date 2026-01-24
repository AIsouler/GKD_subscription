import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.permissioncontroller',
  name: '权限控制器',
  groups: [
    {
      key: 1,
      name: '权限提示-定位权限',
      desc: '点击不允许',
      rules: [
        {
          fastQuery: true,
          activityIds: '.permission.ui.GrantPermissionsActivity',
          matches: [
            '[text*="位置信息权限"]',
            'Button[text="不允许"][clickable=true]',
          ],
          exampleUrls: 'https://e.gkd.li/801303af-ac30-4d06-b2f8-cfea98aa847a',
          snapshotUrls: 'https://i.gkd.li/i/24759204',
        },
      ],
    },
  ],
});
