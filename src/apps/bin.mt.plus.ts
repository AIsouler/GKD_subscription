import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'bin.mt.plus',
  name: 'MT管理器',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'bin.mt.plus.Main',
      rules: '@[text="取消"] + [text="更新"]',
      snapshotUrls: 'https://i.gkd.li/import/12908784',
    },
  ],
});
