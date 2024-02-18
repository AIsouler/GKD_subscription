import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.cloudservice',
  name: '小米云服务',
  groups: [
    {
      key: 0,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          name: '云存储空间不足弹窗',
          activityIds:
            'com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity',
          matches: '[text="以后再说"]',
          exampleUrls:
            'https://m.gkd.li/57941037/df5f7c28-a1fa-4d1b-87b8-2f592e5a8423',
          snapshotUrls: 'https://i.gkd.li/import/12847374',
        },
        {
          key: 1,
          name: '会员打折弹窗',
          quickFind: true,
          activityIds: 'com.miui.cloudservice.ad.AdPopupActivity',
          matches: '[vid="ad_popup_close_iv"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fbb8a877-4e69-4d72-b31d-85ad87ab34af',
          snapshotUrls: 'https://i.gkd.li/import/14320937',
        },
      ],
    },
  ],
});
