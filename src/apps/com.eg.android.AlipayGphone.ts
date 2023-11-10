import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      enable: false,
      key: 0,
      name: '关闭花呗升级弹窗',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views', //views.MspContainerActivity & views.MspUniRenderActivity
      ],
      matchLauncher: true,
      rules: [
        {
          key: 0,
          matches: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
          snapshotUrls: 'https://i.gkd.li/import/12737055', //com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main
        },
        {
          key: 1,
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13183946', //com.alipay.android.msp.ui.views.MspContainerActivity
            'https://i.gkd.li/import/12826077', //com.alipay.android.msp.ui.views.MspUniRenderActivity
            'https://i.gkd.li/import/12915864', //matchLauncher
          ],
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '关闭开启定位提示',
      quickFind: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启定位权限"]',
      snapshotUrls: 'https://i.gkd.li/import/12792688',
    },
    {
      enable: false,
      key: 2,
      name: '关闭开启通知提示',
      quickFind: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text ^="开启通知权限"]',
      snapshotUrls: 'https://i.gkd.li/import/13194955',
    },
  ],
});
