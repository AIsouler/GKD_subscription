import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 1,
      name: '全屏广告-主页推荐关注弹窗',
      activityIds: ['com.dianping.main.guide.SplashActivity'],
      rules:
        'FrameLayout[id="android:id/content"] >2 FrameLayout > ImageView + FrameLayout[id=null][desc="关闭"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12727011',
    },
    {
      key: 2,
      name: '通知提示-消息页上方开启系统通知提醒',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: {
        matches:
          '[text="去开启"][clickable=true] +2 @FrameLayout[clickable=true] > ImageView',
        action: 'clickCenter', // clickNode无响应
      },
      snapshotUrls: 'https://i.gkd.li/import/12727070',
    },
    {
      key: 3,
      name: '局部广告-关闭[签到开红包]',
      desc: '点击右下角悬浮图片右上角的x图标',
      activityIds: ['com.dianping.v1.NovaMainActivity'],
      rules:
        '[id="com.dianping.v1:id/float_image"] + [id="com.dianping.v1:id/close"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12727366',
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.dianping.v1.NovaMainActivity',
          quickFind: true,
          matches: '[id="com.dianping.v1:id/operate_cross_icon"]',
          snapshotUrls: 'https://i.gkd.li/import/13538340',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-推荐页卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.dianping.v1.NovaMainActivity',
          matches:
            '[desc="reculike_delete"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13759369',
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'com.dianping.v1.NovaMainActivity',
          matches: '@[clickable=true] > [text="重复出现"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14238381',
            'https://i.gkd.li/import/14269115',
          ],
        },
      ],
    },
  ],
});
