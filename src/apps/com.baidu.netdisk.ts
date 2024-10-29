import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: ['TextView[text*="跳过"][text.length<=10]'],
          snapshotUrls: ['https://i.gkd.li/i/17405893'],
        },
        {
          key: 1,
          action: 'clickCenter',
          matches: [
            'TextView[text^="点击跳转"] <2 RelativeLayout + View[vid="ms_skipView"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/17546726'],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '相册页面激活无限空间弹窗',
          activityIds:
            'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
          matches:
            '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
          snapshotUrls: 'https://i.gkd.li/i/12648987',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          key: 0,
          name: '首页-弹窗广告1',
          matches: 'TextView[text^="恭喜"] -n ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/14730106'],
        },
        {
          key: 1,
          name: '首页-弹窗广告2',
          matches:
            'ImageView[id="com.baidu.netdisk:id/button_two"] + ImageView[id="com.baidu.netdisk:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12783106'],
        },
        {
          key: 2,
          name: '首页-弹窗广告3',
          matches:
            'ViewGroup[id="com.baidu.netdisk:id/cl_content"] - ImageView[id="com.baidu.netdisk:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12642505'],
        },
        {
          key: 3,
          name: '首页特惠广告',
          matches:
            'FrameLayout[id="com.baidu.netdisk:id/home_banner_root"] > ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12706544',
        },
        {
          key: 4,
          name: '首页热门广告',
          fastQuery: true,
          matches:
            '[id="com.baidu.netdisk:id/vf_content"] + [id="com.baidu.netdisk:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/12706544',
        },
        {
          key: 5,
          name: '[我的]页面限时福利',
          matches: '@TextView + [text="专属福利"]',
          snapshotUrls: 'https://i.gkd.li/i/12706549',
        },
        {
          key: 6,
          name: '续费横幅提示',
          matches: 'View[desc="续费"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12924036',
        },
        {
          key: 7,
          name: '局部广告-悬浮广告',
          fastQuery: true,
          matches: 'ImageView[vid="float_btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14278618',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="立即更新"] -2 [text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/i/16118181',
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      desc: '自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: 'FrameLayout > ImageView + ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12923936',
    },
    {
      key: 5,
      name: '评价提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="view_score_style"] > [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/14317054',
    },
  ],
});
