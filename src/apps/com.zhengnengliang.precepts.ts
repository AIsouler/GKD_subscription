import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhengnengliang.precepts',
  name: '正气',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="取消"] +2 [text="升级"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12727650',
        'https://i.gkd.li/import/12715352',
      ],
    },
    {
      key: 2,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: [
            'com.zhengnengliang.precepts.ui.activity.MainActivity',
            'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton',
          ],
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] >2 ImageView[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/0b140d85-0556-46aa-a648-600ae349f88b',
          snapshotUrls: [
            'https://i.gkd.li/import/14338307',
            'https://i.gkd.li/import/12739767',
            'https://i.gkd.li/import/12727705',
          ],
        },
      ],
    },
  ],
});
