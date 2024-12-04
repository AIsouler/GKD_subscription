import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securityadd',
  name: '系统服务组件',
  groups: [
    {
      key: 1,
      name: '全屏广告-游戏加速弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.miui.gamebooster.GameBoosterRichWebActivity',
          matches:
            '[text="活动图片"] +2 @Image[clickable=true][childCount=0][visibleToUser=true] <<n [vid="content_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13914659',
            'https://i.gkd.li/i/14668629',
          ],
        },
      ],
    },
  ],
});
