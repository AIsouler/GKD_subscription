import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.edu.buaa.wxwork',
  name: '智慧北航',
  groups: [
    {
      key: 0,
      name: '功能类-扫码后自动确认登录',
      desc: '点击[确认登录]',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.tencent.wework.common.web.JsWebActivity',
        'com.tencent.wework.launch.WwMainActivity',
      ],
      rules: [
        {
          matches: '[desc="确认登录"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16784272',
            'https://i.gkd.li/i/16784259',
          ],
          exampleUrls: 'https://e.gkd.li/501ba684-b4a5-40e8-9e24-c61048569667',
        },
      ],
    },
  ],
});
