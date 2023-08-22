import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.baidu.BaiduMap',
  groups: [
    {
      key: 0,
      name: '百度地图-开屏广告',
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: [
        '@TextView[text^=`跳过`] + TextView[text=`广告`]',
        `ImageView[clickable=false] + TextView[text^='跳过'][clickable=true]`, // 1689423368140
      ],
    },
  ],
};
