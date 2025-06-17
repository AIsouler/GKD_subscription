import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.himovie',
  name: '华为视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: '[vid="hiad_skip_text"]',
          snapshotUrls: 'https://i.gkd.li/i/15523945',
        },
        {
          key: 1,
          action: 'clickCenter',
          matches:
            '([text*="跳过"][text.length<10][visibleToUser=true]) || ([visibleToUser=true][text*="跳过"][text.length<10])',
          exampleUrls: 'https://e.gkd.li/ec00ceef-3930-4240-92f5-56816fc90be2',
          snapshotUrls: [
            'https://i.gkd.li/i/20745477',
            'https://i.gkd.li/i/20773665',
          ],
        },
      ],
    },
  ],
});
