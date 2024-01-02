import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shuqi.controller',
  name: '书旗小说',
  groups: [
    {
      key: 0,
      name: '内部右侧浮动广告',
      activityIds: 'com.shuqi.home.MainActivity',
      rules: '[id="com.shuqi.controller:id/promotion_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12513811',
    },
    {
      key: 1,
      name: '关闭打卡红包弹窗',
      activityIds: 'com.shuqi.common',
      rules: '[id="com.shuqi.controller:id/bottomCloseImg"]',
      snapshotUrls: 'https://i.gkd.li/import/12513822',
    },
    {
      key: 2,
      name: '阅读页面底部广告',
      desc: '点击关闭x图标-关闭优惠券弹窗-关闭当前广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.shuqi.android.ui.dialog',
          matches: '[id="com.shuqi.controller:id/right_close_ad_text"]',
          snapshotUrls: 'https://i.gkd.li/import/12513893',
        },
        {
          key: 1,
          activityIds: 'com.shuqi.monthlypay.view',
          matches: [
            '[text*="优惠券"]',
            '[id="com.shuqi.controller:id/close_btn"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12513908',
        },
        {
          key: 2,
          activityIds: 'com.shuqi.reader.ShuqiReaderActivity',
          matches:
            '@ImageView[clickable=true] - RelativeLayout [id="com.shuqi.controller:id/noah_tv_stencil_native_source"]',
          snapshotUrls: 'https://i.gkd.li/import/12513860',
        },
        {
          key: 3,
          activityIds: 'com.shuqi.reader.ShuqiReaderActivity',
          matches:
            '[id="com.shuqi.controller:id/banner_container_ad"] >n RelativeLayout + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12901429',
        },
      ],
    },
    {
      key: 3,
      name: '听书页面底部广告',
      desc: '点击卡片右上角关闭按钮-点击底部中间<关闭当前广告>',
      activityIds: 'com.shuqi.audio.online.view.AudioBookActivity',
      rules: [
        {
          matches: '[id="com.shuqi.controller:id/remove_current_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/12513959',
        },
        {
          matches: '[id="com.shuqi.controller:id/ad_close_but"]',
          snapshotUrls: 'https://i.gkd.li/import/12513944',
        },
      ],
    },
  ],
});
