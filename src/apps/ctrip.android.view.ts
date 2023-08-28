import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'ctrip.android.view',
  groups: [
    {
      key: 0,
      name: `携程旅行-开屏广告`,
      activityIds: `ctrip.android.publicproduct.home.view.CtripHomeActivity`,
      rules: [
        // https://gkd-kit.gitee.io/import/38517192/104f3807-7613-46ff-9eb2-3c8bcb6ee3b1
        `LinearLayout[childCount=2] > TextView + TextView[text="跳过"]`,
      ],
    },
  ],
};
