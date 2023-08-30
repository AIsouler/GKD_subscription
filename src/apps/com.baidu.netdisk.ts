import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.baidu.netdisk',
  groups: [
    {
      key: 0,
      name: '百度网盘-开屏广告',
      activityIds: 'com.baidu.netdisk.ui.Navigate',
      rules: [
        // https://gkd-kit.gitee.io/import/38517192/edc1d0a6-ebdd-48b0-9e11-f0b2c277c40a
        `TextView[text="跳过"][clickable=true]`,
        '@TextView[text^=`跳过`] + TextView[text=`广告`]',
        `[id='com.byted.pangle:id/tt_splash_skip_btn']`, // 1687136781353
      ],
    },
  ],
};
