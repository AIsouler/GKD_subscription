import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lucky.luckyclient',
  name: '瑞幸咖啡',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@ImageView[id="com.lucky.luckyclient:id/dismiss_btn"] - LinearLayout > ImageView[id="com.lucky.luckyclient:id/update_btn"]',
      snapshotUrls: 'https://i.gkd.li/i/12846499',
    },
    {
      key: 2,
      name: '全屏广告-超值换购弹窗',
      desc: '关闭超值换购弹窗',
      activityIds: 'com.lucky.luckyclient.preview2.OrderPreviewActivity2',
      quickFind: true,
      rules: '[id="com.lucky.luckyclient:id/close_iv"][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/i/12922834',
    },
    {
      key: 3,
      name: '全屏广告-优惠卷领取提示',
      desc: '按下返回键关闭优惠卷领取提示',
      activityIds: 'com.luckin.client.main.FirstActivity',
      rules: {
        matches: '[id="com.lucky.luckyclient:id/webcontent"]',
        action: 'back',
      },
      snapshotUrls: 'https://i.gkd.li/i/13164114',
    },
  ],
});
