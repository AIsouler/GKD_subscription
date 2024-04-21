import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nowcasting.activity',
  name: '彩云天气',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗广告',
      quickFind: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          matches:
            '[text="开心收下"] + [id="com.nowcasting.activity:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13405130',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="android:id/content"] >n FrameLayout[childCount>5] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13405131',
            'https://i.gkd.li/i/14814345',
          ],
        },
        {
          key: 1,
          quickFind: true,
          matches:
            'ImageView < @ViewGroup[clickable=true] <<n ViewGroup +n ViewGroup [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14814374',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-卡片广告',
      quickFind: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          key: 1,
          matches: '[id="com.nowcasting.activity:id/ll_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13690822',
        },
        {
          preKeys: 1,
          key: 2,
          matches: '[id="com.nowcasting.activity:id/ll_uninterested"]',
          snapshotUrls: 'https://i.gkd.li/i/13690830',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.nowcasting.activity:id/jad_feed_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13690826',
        },
        {
          key: 1,
          matches:
            '@FrameLayout[visibleToUser=true] +2 * > [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14814348',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-点击收起顶部工具栏',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.nowcasting.activity.WeatherActivity',
          matches:
            'ViewGroup[childCount=2][visibleToUser=true] > [vid="fl_arrow"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/5bdf4f45-d66d-441e-a2ce-f32d5fc40796',
          snapshotUrls: [
            'https://i.gkd.li/i/14814347', // 收起前
            'https://i.gkd.li/i/14814412', // 收起后
          ],
        },
      ],
    },
  ],
});
