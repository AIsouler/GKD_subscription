import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'zhongxinjiantou.szkingdom.android.newphone',
  name: '蜻蜓点金',
  groups: [
    {
      key: 1,
      name: '通知提示-请求通知权限弹窗',
      desc: '点击放弃通知',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="zhongxinjiantou.szkingdom.android.newphone:id/tv_notify_confirm_off"][text="放弃通知"]',
          exampleUrls:
            'https://m.gkd.li/57941037/642582b1-f0f1-446c-b3f4-287eac62d108',
          snapshotUrls: 'https://i.gkd.li/i/12924466',
        },
      ],
    },
  ],
});
