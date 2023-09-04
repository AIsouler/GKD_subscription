import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '阅读页面底部广告',
      rules: [
        {
          activityIds: 'com.dragon.read.ad.banner.ui',
          matches: '@[clickable=true] TextView[text=`关闭此条广告`]',
        },
        {
          activityIds: 'com.dragon.read.reader.ReaderActivity',
          matches: '@ImageView - LinearLayout TextView[text=`广告`]',
        },
      ],
    },
  ],
});
