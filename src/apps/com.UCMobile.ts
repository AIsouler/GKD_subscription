import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.UCMobile',
  name: `UC浏览器`,
  groups: [
    {
      key: -1,
      name: `开屏广告`,
      activityIds: `com.uc.browser.InnerUCMobile`,
      // TODO
    },
    {
      key: 0,
      name: '推荐页广告',
      activityIds: 'com.uc.browser.InnerUCMobile',
      rules: [
        'TextView[text=`屏蔽此条广告`]',
        'TextView[text=`广告`] +n ImageView[desc=`不感兴趣`]',
      ],
    },
  ],
};
