import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.alibaba.wireless:id/update_title"] +(2) LinearLayout >(2) [text="取消"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12684422',
        'https://i.gkd.li/import/12684426',
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      quickFind: true,
      activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
      rules: 'WebView >n View > Image[text*="FXa-124-124"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13683509',
        'https://i.gkd.li/import/13683510',
      ],
    },
  ],
});
