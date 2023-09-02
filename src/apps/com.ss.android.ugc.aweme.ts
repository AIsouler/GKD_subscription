import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.ss.android.ugc.aweme',
  name: `抖音`,
  groups: [
    {
      key: 0,
      name: `关闭青少年弹窗`,
      rules: 'Button[text=`开启青少年模式`] + * > Button[text!=null]',
    },
  ],
};
