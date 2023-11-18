import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhiyin.qingdan.dashixiong',
  name: '大师兄影视',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12843284',
        'https://i.gkd.li/import/12843283',
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
      rules: [
        {
          key: 0,
          name: '快手广告',
          quickFind: true,
          matches:
            '@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12843281',
        },
        {
          key: 1,
          name: '腾讯广告-1',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/12843282',
        },
        {
          key: 2,
          name: '腾讯广告-2',
          activityIds: 'com.qq.e.ads.ADActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/12843345',
            'https://i.gkd.li/import/12843333',
            'https://i.gkd.li/import/13400656', // com.qq.e.ads.ADActivity
          ],
        },
        {
          key: 3,
          name: '字节广告',
          quickFind: true,
          matches: '@Image < View +n View > View > View > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12843323',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '公告弹窗',
      desc: '自动点击【我知道了】',
      activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
      quickFind: true,
      rules: '[desc^="必读通告"] +n [desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/12843280',
    },
  ],
});
