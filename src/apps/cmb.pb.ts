import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'cmb.pb',
  groups: [
    {
      key: 0,
      name: '招商银行-开屏广告',
      activityIds: 'cmb.pb.app.mainframe.container.PBMainActivity',
      rules: '[id=`cmb.pb:id/ll_launch_ad_skip_hot_area`]',
    },
  ],
};
