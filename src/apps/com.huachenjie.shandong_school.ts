import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huachenjie.shandong_school',
  name: '闪动校园',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.zj.zjdsp.ad.AdActivity',
          matches:
            '@ImageView[clickable=true][width<80 && height<80] - [text="反馈"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/39f264fa-ea75-4259-b8ed-672e7ec0974d',
          snapshotUrls: 'https://i.gkd.li/i/24258941',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.home.HomeActivity',
          matches:
            '@[id="com.zj.zk.wm.allmodules:id/wm_pop_pic_close"] +2 LinearLayout > [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/328ebf29-ec1e-469a-84b0-c6b255a74b48',
          snapshotUrls: 'https://i.gkd.li/i/24258935',
        },
      ],
    },
  ],
});
