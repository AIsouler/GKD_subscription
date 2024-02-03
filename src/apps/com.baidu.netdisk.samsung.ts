import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk.samsung',
  name: '百度网盘-三星版本',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击右上角x图标按钮',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        '[id="com.baidu.netdisk.samsung:id/cl_root"] > [id="com.baidu.netdisk.samsung:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12738331',
    },
    {
      key: 2,
      name: '局部广告-关闭购买套餐卡片广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        '[id="com.baidu.netdisk.samsung:id/buy_product_root"] > [id="com.baidu.netdisk.samsung:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12738388',
    },
    {
      key: 3,
      name: '局部广告-关闭[专属福利]卡片广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        'View[childCount=2] > @TextView[text=""][clickable=true] + TextView[text="专属福利"][clickable=false]',
      snapshotUrls: 'https://i.gkd.li/import/12738404',
    },
    {
      key: 4,
      name: '局部广告-关闭[今日福利]卡片广告',
      desc: '会员-我的会员-底部卡片广告,点击[去使用]右侧的x关闭图标',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        '@TextView[text=""][clickable=true] - TextView[text="去使用"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12738449',
    },
  ],
});
