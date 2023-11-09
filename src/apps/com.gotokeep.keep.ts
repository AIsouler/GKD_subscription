import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gotokeep.keep',
  name: 'Keep',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.gotokeep.keep.splash.SplashActivity',
      rules: '[id="com.gotokeep.keep:id/textSkip"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12706108',
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      activityIds:
        'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
      rules:
        '[text$="未成年人模式"] + ImageView + ViewGroup > [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12706097',
    },
    {
      key: 2,
      name: '首页广告弹窗',
      activityIds:
        'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
      rules:
        '[id="com.gotokeep.keep:id/layoutLottie"] + [id="com.gotokeep.keep:id/imgCloseHomePageDialog"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12706102',
    },
    {
      key: 3,
      name: '首页信息流广告',
      activityIds:
        'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
      rules:
        '[id="com.gotokeep.keep:id/textAdTag"] + [id="com.gotokeep.keep:id/imgClose"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12706115',
    },
    {
      key: 4,
      name: '运动购页面-广告弹窗',
      activityIds:
        'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
      rules: 'ImageView + LinearLayout > ImageView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/import/12706111',
    },
  ],
});
