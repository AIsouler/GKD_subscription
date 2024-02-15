import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xtuone.android.syllabus',
  name: '超级课程表',
  groups: [
    {
      key: 1,
      name: '局部广告-首页卡片广告',
      activityIds: ['com.xtuone.android.friday.MainFragmentActivity'],
      rules: '[id="com.xtuone.android.syllabus:id/treehole_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12840733',
    },
    {
      key: 2,
      name: '局部广告-课程表界面广告',
      activityIds: ['com.xtuone.android.friday.MainFragmentActivity'],
      rules: '[id="com.xtuone.android.syllabus:id/imgv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12999642',
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.xtuone.android.friday.MainFragmentActivity',
      rules: '[id="com.xtuone.android.syllabus:id/dialog_ad_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13166501',
    },
    {
      key: 4,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[vid="update_cancel"] + [vid="go_to_update"]',
      snapshotUrls: 'https://i.gkd.li/import/14292875',
    },
  ],
});
