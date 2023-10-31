import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'ctrip.android.publicproduct.home.view.CtripHomeActivity',
      rules: [
        'LinearLayout[childCount=2] > TextView + TextView[text="跳过"||text="跳过广告"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12472613',
        'https://i.gkd.li/import/12511071',
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'ctrip.android.publicproduct.home.view.CtripHomeActivity',
      rules: '[text^="升级新版本"] <2 LinearLayout + [desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13218347',
    },
  ],
});
