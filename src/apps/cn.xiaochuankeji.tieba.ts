import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.tieba',
  name: '最右',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="cn.xiaochuankeji.tieba:id/btn_ok"][text^="马上升级"] + [id="cn.xiaochuankeji.tieba:id/btn_cancel"][text="取消"]',
          snapshotUrls: ['https://i.gkd.li/i/12660882'],
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式',
      rules: [
        {
          matches: '[text$="青少年模式"] + [text$="知道了"]',
          snapshotUrls: ['https://i.gkd.li/i/12660929'],
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-评论区广告卡片',
      activityIds:
        'cn.xiaochuankeji.tieba.ui.post.postdetail.PostDetailActivity',
      rules: [
        {
          key: 1,
          matches:
            '[id="cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag"] + [id="cn.xiaochuankeji.tieba:id/iv_close"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12661011'],
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '[id="cn.xiaochuankeji.tieba:id/iv_dislike_reason"] + LinearLayout > [text="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/i/12661028'],
        },
      ],
    },
    {
      key: 10,
      name: '通知提示-系统通知弹窗',
      desc: '系统通知弹窗，点击暂不开启',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="cn.xiaochuankeji.tieba:id/confirm"][text="打开通知"] + [id="cn.xiaochuankeji.tieba:id/cancel"][text="暂不开启"]',
          snapshotUrls: ['https://i.gkd.li/i/12660823'],
        },
        {
          matches:
            '[text^="开启通知"] +(2) [id="cn.xiaochuankeji.tieba:id/tips_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12660851'],
        },
      ],
    },
    // key 11 已弃用
  ],
});
