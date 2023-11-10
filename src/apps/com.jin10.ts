import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jin10',
  name: '金十数据',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.jin10.lgd.update.UpdateActivity'],
      rules: '@[id="com.jin10:id/update_cancel"] + [id="com.jin10:id/iv_pic"]',
      snapshotUrls: ['https://i.gkd.li/import/12706043'],
    },
    {
      key: 2,
      name: '首页广告弹窗',
      activityIds: ['com.jin10.lgd.biz.MainActivity'],
      rules: '[id="com.jin10:id/iv_body"] + [id="com.jin10:id/iv_close"]',
      snapshotUrls: ['https://i.gkd.li/import/12706045'],
    },
    {
      key: 3,
      name: '快讯页面-广告弹窗',
      activityIds: ['com.jin10.lgd.biz.MainActivity'],
      rules: '@[id="com.jin10:id/iv_close"] + [id="com.jin10:id/iv_pic"]',
      snapshotUrls: ['https://i.gkd.li/import/12706047'],
    },
    {
      enable: false,
      key: 10,
      name: '会员页面-顶部广告',
      activityIds: ['com.jin10.lgd.biz.MainActivity'],
      rules: '[id="com.jin10:id/iv_header"] + [id="com.jin10:id/iv_close"]',
      snapshotUrls: ['https://i.gkd.li/import/12706051'],
    },
  ],
});
