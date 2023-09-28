import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhengnengliang.precepts',
  name: '正气',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.zhengnengliang.precepts.ui.activity.MainActivity',
        'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton',
      ],
      rules: '@[text="取消"] +2 [text="升级"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12727650',
        'https://gkd-kit.gitee.io/import/12715352',
      ],
    },
    {
      key: 2,
      name: '第三方 SDK 广告',
      activityIds: [
        'com.zhengnengliang.precepts.ui.activity.MainActivity',
        'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton',
      ],
      rules: '[text="点此去广告"] + ImageButton[clickable=true]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12739767',
        'https://gkd-kit.songe.li/import/12727705', // activityId: 'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton'
      ],
    },
  ],
});
