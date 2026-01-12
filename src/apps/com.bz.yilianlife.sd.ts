import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bz.yilianlife.sd',
  name: '深(新)度搜索',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '快手广告',
          fastQuery: true,
          activityIds: 'com.deep.search.MainActivity',
          matches: [
            '[text="广告"]',
            '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13766176',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.deep.search.SearchActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/1f7e5a9f-e1a1-4e30-9d89-6d18d3717c80',
          snapshotUrls: 'https://i.gkd.li/i/18095241',
        },
        {
          key: 2,
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          matches: '[id="ad_area"] >2 [id="close_btn"]',
          exampleUrls: 'https://e.gkd.li/eee962a4-5a67-4bc7-bda2-8c1e3fbe04fe',
          snapshotUrls: 'https://i.gkd.li/i/18095172',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.deep.search.SearchActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/b752c0a3-8108-4107-bc29-29d75fb88562',
          snapshotUrls: 'https://i.gkd.li/i/18146842',
        },
      ],
    },
  ],
});
