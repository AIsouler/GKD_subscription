import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhiyin.qingdan.dashixiong',
  name: '大师兄影视',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '快手广告-1',
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          quickFind: true,
          matches:
            '@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12843281',
        },
        {
          key: 1,
          name: '快手广告-2',
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13521143',
        },
        {
          key: 2,
          name: '快手广告-3',
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          matches: '[text="广告"] <2 ViewGroup -3 ViewGroup >2 [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13521140',
        },
        {
          key: 3,
          name: '腾讯广告-1',
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/12843282',
        },
        {
          key: 4,
          name: '腾讯广告-2',
          activityIds: [
            'com.zhiyin.qingdan.dashixiong.MainActivity',
            'com.qq.e.ads.ADActivity',
          ],
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/12843345',
            'https://i.gkd.li/import/12843333',
            'https://i.gkd.li/import/13400656', // com.qq.e.ads.ADActivity
          ],
        },
        {
          key: 5,
          name: '字节广告',
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          quickFind: true,
          matches: '@Image < View +n View > View > View > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12843323',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '通知提示-公告弹窗',
      desc: '自动点击"我知道了"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[desc^="必读通告"] +n [desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/12843280',
    },
    {
      key: 11,
      name: '全屏广告-首页广告弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
          matches: '[id="close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13887500',
        },
      ],
    },
  ],
});
