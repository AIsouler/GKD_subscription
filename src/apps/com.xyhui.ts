import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xyhui.start.LoadingActivity',
      rules: 'ImageView -(4) LinearLayout > [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642486',
    },
    {
      key: 1,
      name: '优量汇广告',
      activityIds: 'com.xyhui.start.PUMainActivity',
      rules: [
        {
          key: 1,
          matches:
            '[text="查看详情"] - View < FrameLayout - FrameLayout >(2) ImageView[id=null]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12642482',
        },
        {
          key: 2,
          matches:
            '[text="查看详情"] - View < FrameLayout -(4) FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12643276',
        },
      ],
    },
  ],
});
