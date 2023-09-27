import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      enable: false,
      key: 0,
      name: '关闭花呗升级弹窗',
      activityIds:
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      rules: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12737055',
    },
  ],
});
