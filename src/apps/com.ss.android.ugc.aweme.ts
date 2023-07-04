import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.ss.android.ugc.aweme',
  groups: [
    {
      key: 0,
      name: '抖音-青少年模式弹窗',
      rules: 'Button[text=`开启青少年模式`] + * > Button[text!=null]',
    },
  ],
};
