import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jym.mall',
  name: '交易猫',
  groups: [
    {
      key: 0,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: {
        matches: '[id="com.jym.mall:id/tv_cancel"][text="下次再说"]',
        exampleUrls:
          'https://m.gkd.li/57941037/3fa65227-8284-4343-ac5c-d509b8eb70bf',
        snapshotUrls: 'https://i.gkd.li/i/12496974',
      },
    },
  ],
});
