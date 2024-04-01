import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan.dispatch.crowdsource',
  name: '美团众包',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: [
            'com.meituan.banma.main.activity.MainActivity',
            'com.meituan.banma.main.activity.ImageAdActivity',
          ],
          matches: '[vid="image_ad_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13694935',
            'https://i.gkd.li/i/14818737',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-[保级成功]弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.meituan.banma.usercenter.activity.UserGradeUpgradeKNBActivity',
          matches: '[vid="btn_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/11dd0efd-5872-47de-a307-c3dd0c0009a9',
          snapshotUrls: 'https://i.gkd.li/i/14822280',
        },
      ],
    },
  ],
});
