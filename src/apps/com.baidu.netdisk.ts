import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.baidu.netdisk.ui.Navigate',
      rules: [
        {
          matches: 'TextView[text="跳过"][clickable=true]',
          snapshotUrls:
            'https://gkd-kit.gitee.io/import/38517192/edc1d0a6-ebdd-48b0-9e11-f0b2c277c40a',
        },
        {
          activityIds: [
            'com.baidu.netdisk.ui.Navigate',
            'com.baidu.netdisk.ui.DefaultMainActivity',
          ],
          matches: '@TextView[text^="跳过"] + TextView[text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12648924',
        },
        {
          activityIds: 'com.baidu.netdisk.ui.DefaultMainActivity',
          matches: '[id="com.baidu.netdisk:id/countdown"][text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12706553',
        },
        '[id="com.byted.pangle:id/tt_splash_skip_btn"]', // 1687136781353
      ],
    },
    {
      key: 1,
      name: '活动弹窗',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        '@[id="com.baidu.netdisk:id/iv_close"] + [id="com.baidu.netdisk:id/cl_content"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642505',
    },
    {
      key: 2,
      name: '首页banner广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: '[id="com.baidu.netdisk:id/banner_item_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12706544',
    },
    {
      key: 3,
      name: '首页热门广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        '[id="com.baidu.netdisk:id/vf_content"] + [id="com.baidu.netdisk:id/close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12706544',
    },
    {
      key: 4,
      name: '我的页面-限时福利',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: '@TextView + [text="专属福利"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12706549',
    },
    {
      key: 5,
      name: '相册页面-激活无限空间弹窗',
      activityIds:
        'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
      rules:
        '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12648987',
    },
    {
      enable: false,
      key: 10,
      name: '看视频免费享极速下载弹窗',
      desc: '自动点击x按钮',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        'ViewGroup > [id="com.baidu.netdisk:id/background_image"] +n [id="com.baidu.netdisk:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12783106',
    },
  ],
});
