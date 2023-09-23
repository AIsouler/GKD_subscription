import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.xiaochuankeji.tieba',
  name: '最右',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.xiaochuankeji.tieba.ui.base.SplashActivity',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12660905'],
        },
        {
          matches:
            '[id="cn.xiaochuankeji.tieba:id/splash_ad_view"] [text^="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12660955',
            'https://gkd-kit.gitee.io/import/12660984',
            'https://gkd-kit.gitee.io/import/12699405',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'cn.xiaochuankeji.tieba.ui.home.setting.SettingActivity',
      rules: [
        {
          matches:
            '[id="cn.xiaochuankeji.tieba:id/btn_ok"][text^="马上升级"] + [id="cn.xiaochuankeji.tieba:id/btn_cancel"][text="取消"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12660882'],
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式弹窗',
      activityIds: 'cn.xiaochuankeji.tieba.ui.home.page.PageMainActivity',
      rules: [
        {
          matches: '[text$="青少年模式"] + [text$="知道了"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12660929'],
        },
      ],
    },
    {
      key: 3,
      name: '评论区广告卡片',
      activityIds:
        'cn.xiaochuankeji.tieba.ui.post.postdetail.PostDetailActivity',
      rules: [
        {
          key: 1,
          matches:
            '[id="cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag"] + [id="cn.xiaochuankeji.tieba:id/iv_close"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12661011'],
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '[id="cn.xiaochuankeji.tieba:id/iv_dislike_reason"] + LinearLayout > [text="不感兴趣"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12661028'],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '系统通知弹窗',
      desc: '系统通知弹窗，点击暂不开启',
      activityIds: 'cn.xiaochuankeji.tieba.ui.home.page.PageMainActivity',
      rules: [
        {
          matches:
            '[id="cn.xiaochuankeji.tieba:id/confirm"][text="打开通知"] + [id="cn.xiaochuankeji.tieba:id/cancel"][text="暂不开启"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12660823'],
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '系统通知提示信息',
      desc: '系统通知提示信息，点击x按钮',
      activityIds: 'cn.xiaochuankeji.tieba.ui.home.page.PageMainActivity',
      rules: [
        {
          matches:
            '[text^="开启通知"] +(2) [id="cn.xiaochuankeji.tieba:id/tips_close"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12660851'],
        },
      ],
    },
  ],
});
