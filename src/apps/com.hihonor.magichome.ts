import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.magichome',
  name: '荣耀智慧空间',
  groups: [
    {
      key: 10,
      name: '首页顶部广告',
      activityIds: 'com.hihonor.magichome.business.MainActivity',
      rules: '[id="com.hihonor.magichome:id/item_close_image"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12843930',
    },
    {
      key: 11,
      name: '推荐服务声明',
      enable: false,
      desc: '推荐服务声明弹窗。默认点击【取消】按钮',
      activityIds: 'com.hihonor.magichome.business.MainActivity',
      rules:
        '[text$="推荐服务声明"] < LinearLayout < LinearLayout + LinearLayout > [id="com.hihonor.magichome:id/negative_btn"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12843976',
    },
  ],
});
