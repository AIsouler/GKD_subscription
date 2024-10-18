import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '开屏广告', // 该软件开屏广告非常特殊，需使用clickCenter并在设置里开启[shizuku模拟点击]才能跳过
      desc: '该规则需要在高级设置中开启[shizuku模拟点击]才能生效',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches: '[vid="homepage_advert_pb"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd',
          snapshotUrls: 'https://i.gkd.li/i/14585402',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'cn.damai.homepage.MainActivity',
          matches:
            '[id="cn.damai:id/homepage_popup_window_image"] + [id="cn.damai:id/homepage_popup_window_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/13627900',
        },
      ],
    },
  ],
});
