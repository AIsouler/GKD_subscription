import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.lark',
  name: '飞书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.ss.android.lark.main.app.MainActivity',
      rules: '[id="com.ss.android.lark:id/splash_skip_btn_layout"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12870733',
    },
    {
      enable: false,
      key: 10,
      name: '自动查看原图',
      desc: '查看图片时自动点击【查看原图】',
      activityIds:
        'com.ss.android.lark.widget.photo.preview.PhotoPagerActivity',
      quickFind: true,
      rules: '[id="com.ss.android.lark:id/look_origin_icon"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12840528',
    },
    {
      enable: false,
      key: 11,
      name: '自动发送原图',
      desc: '发送图片时自动勾选【原图】',
      activityIds: 'com.ss.android.lark.chatwindow.ChatWindowActivity',
      quickFind: true,
      rules:
        '@View[id$="original_photo"][checked=false] + [id="com.ss.android.lark:id/original_label"][text="原图"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12840551',
    },
  ],
});
