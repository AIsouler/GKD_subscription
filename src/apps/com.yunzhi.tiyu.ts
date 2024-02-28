import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yunzhi.tiyu',
  name: '云运动',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.yunzhi.tiyu.module.MainActivity',
          matches:
            'WebView[text=""] >3 View > View > Image[text=""][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/fa043e1b-4dc6-4824-8b25-5f6c1cfdf0da',
          snapshotUrls: [
            'https://i.gkd.li/i/14428780',
            'https://i.gkd.li/i/14428777',
          ],
        },
      ],
    },
  ],
});
