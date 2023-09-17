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
      rules: 'ImageView - FrameLayout[childCount=1] > ImageView[id=null]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642482',
    },
  ],
});
