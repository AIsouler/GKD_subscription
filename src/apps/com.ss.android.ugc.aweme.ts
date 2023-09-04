import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '关闭青少年弹窗',
      rules: 'Button[text=`开启青少年模式`] + * > Button[text!=null]',
    },
  ],
});
