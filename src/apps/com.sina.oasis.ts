import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sina.oasis',
  name: '绿洲',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13434430',
        },
      ],
    },
    {
      key: 1,
      name: '首页-推荐广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            'ImageView[id="com.sina.oasis:id/gdt_v2_banner_ad_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13434468',
        },
        {
          preKeys: 0,
          matches: '@LinearLayout > [text*="关闭此广告"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13498631',
        },
      ],
    },
  ],
});
