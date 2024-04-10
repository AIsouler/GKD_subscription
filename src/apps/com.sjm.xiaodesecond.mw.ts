import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sjm.xiaodesecond.mw',
  name: '喵物次元',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭/跳过',
      rules: [
        {
          key: 0,
          activityIds: 'com.sjm.xiaodesecond.mw.MainActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3 && childCount!=5] >2 ImageView[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/47a8c072-ee52-4e1e-a4bc-526643756d47',
          snapshotUrls: [
            'https://i.gkd.li/i/14353263',
            'https://i.gkd.li/i/14345580',
          ],
        },
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.sjm.xiaodesecond.mw.MainActivity',
          matches: '@[clickable=true] > [text="跳过"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a52ba4bb-0838-4c08-b771-78205786b016',
          snapshotUrls: [
            'https://i.gkd.li/i/14203087',
            'https://i.gkd.li/i/14354395',
          ],
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.sjm.xiaodesecond.mw.MainActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup[childCount=2] > [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/46e28728-570e-4fef-9c38-d561813d1c63',
          snapshotUrls: [
            'https://i.gkd.li/i/14203600',
            'https://i.gkd.li/i/14203327',
          ],
        },
      ],
    },
  ],
});
