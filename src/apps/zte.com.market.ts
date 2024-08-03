import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'zte.com.market',
  name: '应用中心',
  groups: [
    {
      key: 1,
      name: '功能类-流量模式点击[继续下载]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.nubia.neostore.WifiLimitActivity',
          matches: '[text="继续下载"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6bab3e98-7b52-49eb-b8e8-ae47b871343d',
          snapshotUrls: 'https://i.gkd.li/i/16478331',
        },
      ],
    },
  ],
});
