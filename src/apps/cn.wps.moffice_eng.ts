import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'cn.wps.moffice_eng',
  name: `WPS`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.wps.moffice.documentmanager.PreStartActivity',
      rules: '[id=`cn.wps.moffice_eng:id/splash_skip`]',
    },
  ],
};
