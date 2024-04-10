import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.cloudservice',
  name: '小米云服务',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '云存储空间不足弹窗',
          activityIds:
            'com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity',
          matches: '[text="以后再说"]',
          exampleUrls:
            'https://m.gkd.li/57941037/df5f7c28-a1fa-4d1b-87b8-2f592e5a8423',
          snapshotUrls: 'https://i.gkd.li/i/12847374',
        },
        {
          key: 1,
          name: '会员打折弹窗',
          quickFind: true,
          activityIds: 'com.miui.cloudservice.ad.AdPopupActivity',
          matches: '[vid="ad_popup_close_iv"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fbb8a877-4e69-4d72-b31d-85ad87ab34af',
          snapshotUrls: 'https://i.gkd.li/i/14320937',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      desc: '点击[以后再说]',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '@[text="以后再说"] + [text="立即升级"]',
          exampleUrls:
            'https://m.gkd.li/57941037/789b4472-f989-4d32-aff2-6b657b6e0deb',
          snapshotUrls: 'https://i.gkd.li/i/14476801',
        },
      ],
    },
  ],
});
