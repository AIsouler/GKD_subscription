import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shizhuang.duapp',
  name: '得物',
  groups: [
    {
      key: 4,
      name: '功能类-截屏分享',
      desc: '关闭截屏时app弹出的分享弹窗',
      quickFind: true,
      activityIds:
        'com.shizhuang.duapp.modules.product_detail.detailv4.ui.ProductDetailActivityV4',
      rules:
        '[id="com.shizhuang.duapp:id/ivClose"] +2 [id="com.shizhuang.duapp:id/ivSave"]',
      snapshotUrls: 'https://i.gkd.li/i/13473449',
    },
  ],
});
