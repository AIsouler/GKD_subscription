import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.tieba',
  name: '最右',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15858014',
            'https://i.gkd.li/i/15858024',
          ],
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/15858023',
        },
        {
          key: 2,
          position: {
            left: 'width * 0.8903',
            top: 'width * 0.1342',
          },
          matches: '[vid="contentView"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15856190',
            'https://i.gkd.li/i/15858008',
          ],
        },
      ],
    },
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
          snapshotUrls: 'https://i.gkd.li/i/12660882',
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text$="青少年模式"] + [text$="知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/12660929',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-评论区卡片广告',
      activityIds:
        'cn.xiaochuankeji.tieba.ui.post.postdetail.PostDetailActivity',
      rules: [
        {
          key: 1,
          matches:
            '[id="cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag"] + [id="cn.xiaochuankeji.tieba:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12661011',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '[id="cn.xiaochuankeji.tieba:id/iv_dislike_reason"] + LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12661028',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '系统通知弹窗，点击暂不开启',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="cn.xiaochuankeji.tieba:id/confirm"][text="打开通知"] + [id="cn.xiaochuankeji.tieba:id/cancel"][text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/12660823',
        },
        {
          matches:
            '[text^="开启通知"] +(2) [id="cn.xiaochuankeji.tieba:id/tips_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12660851',
        },
      ],
    },
    // key 11 已弃用
  ],
});
