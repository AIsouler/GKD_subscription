import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.lives',
  name: '生活服务',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f693fb2b-92a6-4aa1-8b0a-9bc5d66c037e',
          snapshotUrls: 'https://i.gkd.li/i/20788828',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: [
            '[text*="消息通知"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/756362f5-7d43-4993-8ed9-962615a5a278',
          snapshotUrls: 'https://i.gkd.li/i/20903425',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-信息共享权限',
      desc: '点击[取消]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: [
            '[text^="开启服务号三方商家服务推荐向您提供更感兴趣的内容"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/1fc31176-b989-4041-9b1d-759ee737133f',
          snapshotUrls: 'https://i.gkd.li/i/20903428',
        },
      ],
    },
  ],
});
