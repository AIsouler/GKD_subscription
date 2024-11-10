import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.feicui.vdhelper',
  name: '翡翠视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: ['com.ys.resemble.ui.MainActivity'],
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/12700749',
        },
        {
          key: 1,
          matches: [
            'ImageView + [id=null][text="广告"]',
            'ImageView + [id=null][text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12700759',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12700800',
        },
        {
          key: 3,
          activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
          matches: '[id="close_btn"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700837',
            'https://i.gkd.li/i/12700848', // 为了兼容此快照，仅使用 id="close_btn" 进行匹配
          ],
        },
      ],
    },
  ],
});
