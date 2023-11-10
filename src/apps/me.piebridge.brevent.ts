import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.piebridge.brevent',
  name: '黑阈',
  groups: [
    {
      enable: false,
      key: 1,
      name: '权限不足弹窗',
      desc: '点击取消',
      activityIds: ['me.piebridge.brevent.ui.BreventActivity'],
      actionMaximum: 1,
      quickFind: true,
      rules: [
        {
          matches: [
            '[id="android:id/message"][text^=`黑阈服务权限不足`]',
            '[text=`取消`][id^=`android:id/button`]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13218439',
        },
      ],
    },
  ],
});
