import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mosoink.teach',
  name: '云班课',
  groups: [
    {
      key: 0,
      name: '首页-班课列表广告',
      activityIds: ['com.mosoink.teach.MainMenuActivity'],
      rules: [
        {
          matches: '[text="广告"] <2 ViewGroup -2 ViewGroup > ViewGroup',
          exampleUrls:
            'https://m.gkd.li/64072399/4f7366d4-77eb-4a11-8e08-26afc29f29ed',
          snapshotUrls: 'https://i.gkd.li/import/13778179',
        },
        {
          matches:
            '[text="广告"] <2 ViewGroup < ViewGroup < ViewGroup - ViewGroup > FrameLayout + ViewGroup > ViewGroup',
          exampleUrls:
            'https://m.gkd.li/64072399/ab4a196f-725d-4e03-aabf-fb0eb6018f51',
          snapshotUrls: 'https://i.gkd.li/import/13786802',
        },
        {
          matches:
            'TextView - View <1 FrameLayout - FrameLayout >1 FrameLayout > ImageView < FrameLayout',
          exampleUrls:
            'https://m.gkd.li/64072399/69bb91ee-5367-4819-94d7-90e357dd9d3c',
          snapshotUrls: 'https://i.gkd.li/import/13784406', //极少触发
        },
        {
          matches: '[id$="/iv_close"]',
          exampleUrls:
            'https://m.gkd.li/64072399/695871fb-9c73-4c93-a6d1-18d90786604a',
          snapshotUrls: 'https://i.gkd.li/import/13778123',
        },
      ],
    },
  ],
});
