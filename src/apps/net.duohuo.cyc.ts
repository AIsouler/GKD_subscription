import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.duohuo.cyc',
  name: '次元城动画',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'top.cycdm.cycapp.MainActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13972796',
            'https://i.gkd.li/i/14358701',
            'https://i.gkd.li/i/14358706',
          ],
        },
        {
          key: 1,
          quickFind: true,
          activityIds: 'top.cycdm.cycapp.MainActivity',
          matches: '@[clickable=true] > [text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13972792',
            'https://i.gkd.li/i/14358630',
          ],
        },
      ],
    },
  ],
});
