import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.securityadd',
  name: '系统服务组件',
  groups: [
    {
      key: 1,
      name: '全屏广告-游戏加速广告弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.miui.gamebooster.GameBoosterRichWebActivity',
          matches:
            '[id="com.miui.securityadd:id/webViewContainer"] [text="活动图片"] +2 Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13914659',
        },
      ],
    },
  ],
});
