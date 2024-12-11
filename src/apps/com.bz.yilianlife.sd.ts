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
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
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
      ],
    },
  ],
});
