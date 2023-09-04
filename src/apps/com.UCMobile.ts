import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.UCMobile',
  name: 'UC浏览器',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      desc: '空规则组-待实现',
      activityIds: 'com.uc.browser.InnerUCMobile',
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
});
