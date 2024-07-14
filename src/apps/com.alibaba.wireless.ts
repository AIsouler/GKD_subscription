import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[id="com.alibaba.wireless:id/update_button_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12684422',
            'https://i.gkd.li/i/12684426',
          ],
        },
        {
          key: 1,
          matches: '[vid="update_pop_cancel_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/15004486',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
      rules: 'WebView >n View > Image[text*="FXa-124-124"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13683509',
        'https://i.gkd.li/i/13683510',
      ],
    },
  ],
});
