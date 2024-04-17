import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
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
          matches:
            '@ImageView[visibleToUser=true] < * - * > [text*="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/15004486',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      quickFind: true,
      activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
      rules: 'WebView >n View > Image[text*="FXa-124-124"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13683509',
        'https://i.gkd.li/i/13683510',
      ],
    },
  ],
});
