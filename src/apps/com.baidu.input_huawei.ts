import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.input_huawei',
  name: '百度输入法定制版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0754949d-3440-4a0f-9b2e-949c6850b292',
          snapshotUrls: [
            'https://i.gkd.li/i/16493628',
            'https://i.gkd.li/i/16493619',
          ],
        },
      ],
    },
  ],
});
