import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '定位权限悬浮弹窗',
      activityIds: ['com.unionpay.activity.UPActivityMain'],
      rules: [
        {
          matches:
            '[id="com.unionpay:id/locate_guide_view"] >2 [id="com.unionpay:id/locate_iv_close"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12694508',
        },
      ],
    },
    {
      key: 2,
      name: '访问位置请求弹窗',
      enable: false,
      desc: '自动点击【不允许】。默认关闭，请手动开启',
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches:
            '[text$="想访问您的位置信息"] < * +2 LinearLayout > [id="com.unionpay:id/btn_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12695773',
        },
      ],
    },
    {
      key: 3,
      name: '右侧悬浮广告',
      activityIds: ['com.unionpay.activity.UPActivityMain'],
      rules: [
        {
          matches:
            '[id="com.unionpay:id/frog_float"] >2 [id="com.unionpay:id/close_view"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12695699',
        },
      ],
    },
    {
      key: 4,
      name: '开启消息通知弹窗',
      enable: false,
      desc: '默认关闭，请手动开启',
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches:
            '[text="开启消息通知"] < * + [id="com.unionpay:id/view_alert_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12695736',
        },
      ],
    },
  ],
});
