import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chunqiu.ah',
  name: 'AH视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13264387',
            'https://i.gkd.li/import/13264381',
          ],
        },
        {
          matches: '@ImageView - [text="|"]',
          snapshotUrls: 'https://i.gkd.li/import/13264377',
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      quickFind: true,
      activityIds: 'com.androlua.LuaActivity',
      rules: [
        {
          matches: '@FrameLayout - FrameLayout >2 [text="京东"]',
          snapshotUrls: 'https://i.gkd.li/import/13264383',
        },
      ],
    },
    {
      key: 2,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.androlua.LuaActivity',
          matches:
            'ImageView < FrameLayout -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13635499',
        },
      ],
    },
  ],
});
