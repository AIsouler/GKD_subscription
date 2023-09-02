import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.android.thememanager',
  name: `miui主题壁纸`,
  groups: [
    {
      key: 1,
      name: '推荐下广告',
      rules: '[id=`com.android.thememanager:id/ad_close_btn`]',
    },
  ],
};
