import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yuque.mobile.android.app',
  name: '语雀',
  groups: [
    {
      key: 0,
      name: '横幅提示',
      desc: '点x取消提示',
      activityIds:
        'com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity',
      rules: [
        {
          matches: 'TextView[text="了解更多"] + ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/import/12911014',
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '自动原图',
      desc: '如果没有勾选原图, 则勾选',
      activityIds:
        'com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity',
      rules: [
        {
          matches: 'ViewGroup[desc="原图未勾选"][clickable=true][childCount=2]',
          snapshotUrls: 'https://i.gkd.li/import/import/12911013',
        },
      ],
    },
  ],
});
