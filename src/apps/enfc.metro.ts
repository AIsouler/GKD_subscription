import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'enfc.metro',
  name: '亿通行',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-出站后摇一摇广告',
      desc: '点击跳过',
      rules: [
        {
          activityIds: 'enfc.metro.session.web.rn.RPReactActivity',
          matches: '@View[clickable=true] - * [text="扭动手机"]',
          snapshotUrls: 'https://i.gkd.li/i/13988597',
        },
      ],
    },
  ],
});
