import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.sankuai.meituan.takeoutnew',
  name: `美团外卖`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.sankuai.meituan.takeoutnew.ui.page.boot.SplashAdActivity',
      rules: 'TextView[text*=`跳过`]',
    },
    {
      key: 1,
      name: `关闭更新弹窗`,
      activityIds: `com.sankuai.waimai.business.page.homepage.widget.dialog.UpdateForceInstallDialog`,
      rules: [
        `[id='com.sankuai.meituan.takeoutnew:id/wm_upgrade_force_cancel']`, // 1686969252896
      ],
    },
    {
      key: 2,
      name: `关闭美食广告弹窗`,
      activityIds: `com.sankuai.waimai.platform.mach.dialog.DynamicDialog`,
      rules: [
        `@[desc='关闭'][clickable=true] > ImageView`, // 1686969062508
      ],
    },
  ],
};
