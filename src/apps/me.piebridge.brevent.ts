import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.piebridge.brevent',
  name: '黑阈',
  groups: [
    {
      key: 1,
      name: '权限提示-权限不足弹窗',
      desc: '点击取消',
      activityIds: ['me.piebridge.brevent.ui.BreventActivity'],
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[id="android:id/message"][text^=`黑阈服务权限不足`]',
            '[text=`取消`][id^=`android:id/button`]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13218439',
        },
      ],
    },
  ],
});
