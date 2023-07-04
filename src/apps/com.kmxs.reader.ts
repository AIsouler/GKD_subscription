import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.kmxs.reader',
  groups: [
    {
      key: 0,
      name: '七猫免费小说-关闭青少年模式',
      activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
      rules: '[id=`com.kmxs.reader:id/young_dialog_close`]',
    },
  ],
};
