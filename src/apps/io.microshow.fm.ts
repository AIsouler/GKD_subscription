import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'io.microshow.fm',
  name: '畅听FM',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'io.microshow.fm.ui.activity.MainActivity',
          matches:
            '[id="android:id/content"] > RelativeLayout > FrameLayout[childCount=2] > Button[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14953007',
        },
      ],
    },
  ],
});
