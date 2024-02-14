import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhaopin.social',
  name: '智联招聘',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.zhaopin.social:id/update"] + [id="com.zhaopin.social:id/ignore"]',
      snapshotUrls: ['https://i.gkd.li/import/12706186'],
    },
    {
      key: 2,
      name: '局部广告-我的页面卡片广告',
      activityIds: 'com.zhaopin.social.homepage.ZSC_MainTabActivity',
      rules: '[id="com.zhaopin.social:id/rl_banner_close"][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12706181'],
    },
    {
      key: 3,
      name: '全屏广告-社区页面弹窗广告',
      activityIds: ['com.zhaopin.social.homepage.ZSC_MainTabActivity'],
      rules:
        'ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]',
      snapshotUrls: 'https://inspect.gkd.li/import/13063442',
    },
    {
      enable: false,
      key: 4,
      name: '通知提示-开启消息通知弹窗',
      desc: '自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.zhaopin.social:id/message_pushlayout_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13063427',
    },
  ],
});
