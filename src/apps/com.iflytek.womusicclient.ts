import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.iflytek.womusicclient',
  name: '联通视频彩铃',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'android.womusic.com.songcomponent.MainActivity',
          matches: '[vid="iv_img"] + [vid="btn_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/64eb594e-f764-4080-a3e6-620e7174602f',
          snapshotUrls: 'https://i.gkd.li/i/14680681',
        },
      ],
    },
  ],
});
