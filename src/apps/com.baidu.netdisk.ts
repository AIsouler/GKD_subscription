import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.baidu.netdisk.ui.Navigate',
      rules: [
        {
          matches: 'TextView[text="跳过"][clickable=true]',
          snapshotUrls:
            'https://gkd-kit.gitee.io/import/38517192/edc1d0a6-ebdd-48b0-9e11-f0b2c277c40a',
        },
        '@TextView[text^=`跳过`] + TextView[text=`广告`]',
        '[id=\'com.byted.pangle:id/tt_splash_skip_btn\']', // 1687136781353
      ],
    },
  ],
});
