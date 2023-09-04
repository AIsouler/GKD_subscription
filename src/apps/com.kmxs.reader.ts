import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kmxs.reader',
  name: '七猫免费小说',
  groups: [
    {
      key: 0,
      name: '关闭青少年模式',
      activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
      rules: '[id=`com.kmxs.reader:id/young_dialog_close`]',
    },
  ],
});
