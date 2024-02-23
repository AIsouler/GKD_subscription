import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[id=`com.smile.gifmaker:id/positive`] + [id=`com.smile.gifmaker:id/set_teenage_mode`]',
        },
        {
          matches:
            '[id="com.smile.gifmaker:id/set_teenage_mode"] + [id="com.smile.gifmaker:id/positive"]',
          snapshotUrls: 'https://i.gkd.li/i/12708609',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '全屏广告-首页红包弹窗',
      desc: '自动点击x按钮',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          name: '老友回归红包弹窗',
          matches:
            '@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/12708649',
            'https://i.gkd.li/i/12708660',
          ],
        },
        {
          name: '限时高额奖励弹窗',
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text="立即领取"]',
          snapshotUrls: ['https://i.gkd.li/i/12708681'],
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '局部广告-首页左侧红包悬浮控件',
      desc: '自动点击x按钮',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          matches:
            '[id="com.smile.gifmaker:id/pendant_mask_bg"] + [id="com.smile.gifmaker:id/pendant_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12708671',
            'https://i.gkd.li/i/12708676', // 执行规则后，控件隐藏，使用 visibleToUser=true 进行限定，防止反复触发规则
          ],
        },
      ],
    },
    {
      key: 12,
      name: '功能类-推荐关注',
      desc: '自动点击"关闭/隐藏"',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 0,
          name: '消息页面-你可能感兴趣的人',
          matches: '[id="com.smile.gifmaker:id/close_pymk"]',
          snapshotUrls: 'https://i.gkd.li/i/12708707',
        },
        {
          key: 1,
          name: '我的页面-你可能感兴趣的人',
          quickFind: true,
          matches:
            'ViewGroup[childCount=3] > [text="隐藏"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14001536',
        },
        {
          key: 2,
          name: '朋友推荐弹窗',
          quickFind: true,
          matches: '[text="朋友推荐"] + [vid="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/14232217',
        },
      ],
    },
    {
      key: 13,
      name: '评价提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '@[vid="close"] +2 * > [text="喜欢就给个好评吧"]',
          exampleUrls:
            'https://m.gkd.li/57941037/da412e0f-47db-4cc0-8821-184c6ba42882',
          snapshotUrls: 'https://i.gkd.li/i/14343547',
        },
      ],
    },
  ],
});
