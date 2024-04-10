import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wuba.zhuanzhuan',
  name: '转转',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '@[text="下次再说"] +2 [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14292849',
        },
        {
          key: 1,
          matches: '@[text="残忍拒绝"] +2 [text="立即安装"]',
          snapshotUrls: 'https://i.gkd.li/i/14392301',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity',
          matches:
            '[id="android:id/content"] > ViewGroup[childCount=3] >2 ViewGroup[childCount=3] > ImageView[clickable=true][index=2]',
          exampleUrls:
            'https://m.gkd.li/57941037/2549c1c7-b3ff-49c0-8bcb-d981427c710a',
          snapshotUrls: 'https://i.gkd.li/i/14927441',
        },
      ],
    },
  ],
});
