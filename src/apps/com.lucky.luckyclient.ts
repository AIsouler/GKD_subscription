import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lucky.luckyclient',
  name: '瑞幸咖啡',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.luckin.client.main.FirstActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.lucky.luckyclient:id/tv_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12508764',
    },
    {
      key: 1,
      name: '软件更新',
      activityIds: 'com.luckin.client.main.FirstActivity',
      rules:
        '@ImageView[id="com.lucky.luckyclient:id/dismiss_btn"] - LinearLayout > ImageView[id="com.lucky.luckyclient:id/update_btn"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12846499',
    },
    {
      key: 2,
      name: '超值换购',
      desc: '关闭超值换购弹窗',
      enable: false,
      activityIds: 'com.lucky.luckyclient.preview2.OrderPreviewActivity2',
      quickFind: true,
      rules: '[id="com.lucky.luckyclient:id/close_iv"][visibleToUser=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12922834',
    },
  ],
});
