import type { AppConfig } from '../types';

export default <AppConfig>{
  id: `com.taobao.taobao`,
  groups: [
    {
      key: 0,
      name: `淘宝-开屏广告`,
      activityIds: `com.taobao.bootimage.activity.BootImageActivity`,
      rules: `[id='com.taobao.taobao:id/close']`, // 1687596777612
    },
  ],
};
