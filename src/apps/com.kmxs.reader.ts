import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kmxs.reader',
  name: '七猫免费小说',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
      rules: ['[id="com.kmxs.reader:id/tv_count_down_text"][text^="跳过"]'],
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640282'],
    },
    {
      key: 0,
      name: '青少年模式弹窗',
      activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
      rules: '[id="com.kmxs.reader:id/young_dialog_close"]',
    },
    {
      key: -2,
      name: '更新弹窗',
      activityIds: 'com.km.app.update.UpdateVersionV2Activity',
      rules: '[id="com.kmxs.reader:id/tv_update_cancel"]',
    },
    {
      key: 2,
      name: '阅读页面底部广告',
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      rules:
        '[id="com.kmxs.reader:id/ll_ad_native_banner"] > [id="com.kmxs.reader:id/iv_ad_direct_close"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640296'],
    },
    {
      key: 3,
      name: '阅读结束后显示的广告',
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      rules:
        '[text$="广告"] - ImageView[id="com.kmxs.reader:id/logo_icon"] < * < * - LinearLayout > ImageView[id="com.kmxs.reader:id/ad_direct_close"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640303'],
    },
    {
      enable: false,
      key: 4,
      name: '签到弹窗',
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      rules:
        '@TextView[id=null] < View +(2) TextView[text^="已连签"&&text*="天"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640320'],
    },
    {
      enable: false,
      key: 99,
      name: '右侧悬浮红包',
      desc: '此规则无法触发，原因未知，因此默认关闭',
      activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
      rules:
        '[id="com.kmxs.reader:id/red_packet_img"] + [id="com.kmxs.reader:id/close_red_packet"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640287'],
    },
  ],
});
