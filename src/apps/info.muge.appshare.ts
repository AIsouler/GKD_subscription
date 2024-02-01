import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 1,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683168',
            'https://i.gkd.li/import/12683211',
            'https://i.gkd.li/import/12748893',
          ],
        },
        {
          key: 0,
          matches: '[id$="tt_splash_skip_btn"] <<n [vid="rlAdView"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683145',
            'https://i.gkd.li/import/12683173',
            'https://i.gkd.li/import/13702708',
          ],
        },
        {
          key: 2,
          matches:
            '@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid="rlAdView"]',
          snapshotUrls: 'https://i.gkd.li/import/13842826',
        },
        {
          key: 3,
          name: '穿山甲SDK',
          matches: '@View[clickable=true] <<n [vid="tp_splash_container_id"]',
          snapshotUrls: 'https://i.gkd.li/import/13939089',
        },
      ],
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'info.muge.appshare.view.app.detail.AppDetailActivity',
          matches: [
            '[id="info.muge.appshare:id/adContainer"] >n FrameLayout > ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]',
            '[id="info.muge.appshare:id/adContainer"] >n FrameLayout[desc*="dislike"]', //新规则
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13761259',
            'https://i.gkd.li/import/13712716',
            'https://i.gkd.li/import/13758909', //新规则
          ],
        },
      ],
    },
    {
      key: 2,
      quickFind: true,
      name: '功能类-自动签到',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          matches: '[id="info.muge.appshare:id/tvSign"][text="签到"]',
          snapshotUrls: 'https://i.gkd.li/import/13931265',
        },
        {
          preKeys: 0,
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          matches: '[id="info.muge.appshare:id/tvClose"][text="确定"]',
          snapshotUrls: 'https://i.gkd.li/import/13931279',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-软件详情页广告',
      desc: '有二次弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'info.muge.appshare.view.app.detail.AppDetailActivity',
          matches:
            '[id="info.muge.appshare:id/adContainer"] >6 FrameLayout[visibleToUser=true][index=2][desc!=null]',
          snapshotUrls: 'https://i.gkd.li/import/13758909',
        },
        {
          preKeys: 0,
          activityIds: 'info.muge.appshare.view.app.detail.AppDetailActivity',
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13944942',
        },
      ],
    },
  ],
});
