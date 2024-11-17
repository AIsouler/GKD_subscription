import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.svm.hbyy',
  name: '比翼多开',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.svm.core.pro.view.activity.MainActivityEx',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/13185377',
        },
      ],
    },
  ],
});
