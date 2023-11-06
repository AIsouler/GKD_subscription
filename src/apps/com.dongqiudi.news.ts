import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dongqiudi.news',
  name: '懂球帝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.dongqiudi.news.BaseSplashActivity',
      rules: [
        {
          matches:
            '[id="com.byted.pangle:id/tt_splash_skip_btn"||text^="跳过"&&id=null]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12620568',
            'https://gkd-kit.gitee.io/import/12620577',
            'https://gkd-kit.gitee.io/import/12621997',
          ],
        },
        {
          name: '另一种倒计时广告', // 此广告要点击文字相邻的图片,如果直接点击文字会无反应或者触发广告跳转
          matches:
            '[id="com.dongqiudi.news:id/ad_skip_time"] + [id="com.dongqiudi.news:id/scale_iv"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12620583',
            'https://gkd-kit.gitee.io/import/12621953',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      activityIds: 'com.dongqiudi.news.MainActivity',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12621980',
      rules: '[text*="青少年模式"] + [id="com.dongqiudi.news:id/tv_know"]',
    },
    {
      key: 2,
      name: '更新弹窗',
      activityIds: 'com.dongqiudi.news.DownloadActivity',
      rules: 'TextView[text*="新版本"] +3 TextView[text="下次提醒"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12620586',
    },
    {
      key: 3,
      name: '穿山甲广告弹窗',
      activityIds: 'com.dongqiudi.news.MainActivity',
      rules: 'FrameLayout[desc^="webview-close"] > View[clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12620588',
    },
    {
      enable: false,
      key: 4,
      name: '首页信息流广告',
      desc: '点击广告卡片x关闭按钮-关闭反馈理由弹窗',
      activityIds: 'com.dongqiudi.news.MainActivity',
      rules: [
        {
          preKeys: [1, 2],
          name: '首页信息流广告-反馈理由',
          matches:
            'TextView[text="诱导点击"][id="com.dongqiudi.news:id/text_item"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12620656',
        },
        {
          key: 1,
          matches:
            'TextView[id="com.dongqiudi.news:id/ads_label"] +(n) ImageView[id="com.dongqiudi.news:id/feedback_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12620654',
        },
        {
          key: 2,
          matches:
            'TextView[id="com.dongqiudi.news:id/ads_title"] +(2) RelativeLayout > ImageView[id="com.dongqiudi.news:id/feedback_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12620788',
        },
      ],
    },
  ],
});
