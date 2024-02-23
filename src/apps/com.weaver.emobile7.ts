import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.weaver.emobile7',
  name: 'EMobile7',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[id="com.weaver.emobile7:id/sdl__negative_button"][text="取消"] +(2) [id="com.weaver.emobile7:id/sdl__positive_button"][text="更新"]',
          snapshotUrls: ['https://i.gkd.li/i/12673154'],
        },
      ],
    },
  ],
});
