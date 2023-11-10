import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhiyin.qingdan.dashixiong',
  name: '大师兄影视',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
      matchLauncher: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: 'ImageView -n LinearLayout > [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12843284',
        },
        {
          key: 1,
          matches:
            '[id="com.zhiyin.qingdan.dashixiong:id/ksad_splash_circle_skip_view"] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12843283',
        },
      ],
    },
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches:
            '@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12843281',
        },
        {
          key: 1,
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12843282',
        },
        {
          key: 2,
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12843345',
            'https://i.gkd.li/import/12843333',
          ],
        },
        {
          key: 3,
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
