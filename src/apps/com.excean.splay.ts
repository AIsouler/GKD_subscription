import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.excean.splay',
  name: 'OurPlay加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.excelliance.kxqp.gs.main.MainActivity'],
      rules: [
        {
          matches: 'ImageView -(4) LinearLayout[childCount=2] > [text^="跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/12684539'],
        },
        {
          matches:
            '[id="com.excean.splay:id/fl_jump"] - RelativeLayout > [text="跳过"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12684565'],
        },
        {
          matches: '[id="com.excean.splay:id/render_ad_skip"][text^="跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/12684579'],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.excelliance.kxqp.gs.main.MainActivity'],
      rules: [
        {
          matches:
            '[id="com.excean.splay:id/positive"][text="立即更新"] + [id="com.excean.splay:id/negative"][text="忽略"]',
          snapshotUrls: ['https://i.gkd.li/import/12684551'],
        },
      ],
    },
  ],
});
