import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cnspeedtest.globalspeed',
  name: '全球网测',
  groups: [
    {
      key: 1,
      name: '权限提示-定位权限',
      desc: '点击[取消]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ruili.android.taierspeed.main.WelcomeActivity',
          matches: [
            '[text*="开启GPS权限"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/f6668ec9-eac9-4728-9ab1-5c76ac4b1ef5',
          snapshotUrls: 'https://i.gkd.li/i/24012859',
        },
      ],
    },
  ],
});
