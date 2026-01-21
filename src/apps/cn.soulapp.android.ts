import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.soulapp.android',
  name: 'Soul',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'clickCenter', // 该快照action: 'click' 无效
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20139575',
        },
        {
          key: 1,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20139739',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-广场页卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.soulapp.android.component.startup.main.MainActivity',
          matches:
            '[id="cn.soulapp.android:id/sl_ad_root"] >n [id="cn.soulapp.android:id/fl_tag_container"]',
          snapshotUrls: 'https://i.gkd.li/i/12838000',
        },
      ],
    },
    {
      key: 3,
      name: '评价提示-app评分',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.component.chat.ConversationActivity',
            '.component.startup.main.MainActivity',
          ],
          matches: [
            '[vid="score_message"][visibleToUser=true]',
            '[vid="cancel"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/4f67640e-836c-4b17-9870-5bb8b8547462',
          snapshotUrls: [
            'https://i.gkd.li/i/13425057',
            'https://i.gkd.li/i/18423888',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      activityIds: [
        '.component.startup.main.MainActivity',
        '.component.chat.ConversationActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[id="cn.soulapp.android:id/img_close"] -2 RelativeLayout > [text="升级到最新版本"]',
          exampleUrls: 'https://e.gkd.li/b8aedb39-1ef1-4b41-80da-0948614d9c7f',
          snapshotUrls: [
            'https://i.gkd.li/i/13693361',
            'https://i.gkd.li/i/18096443',
          ],
        },
        {
          key: 1,
          matches: '[text="升级体验"] - [text="关闭"]',
          exampleUrls: 'https://e.gkd.li/8980a9a6-5ea3-4d61-afdb-e22ffbf1cbde',
          snapshotUrls: 'https://i.gkd.li/i/15034131',
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.component.startup.main.MainActivity',
          matches: '[text="消息通知显示消息内容"] +3 [vid="img_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14332334',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-帖子详情页卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds:
            'cn.soulapp.android.component.square.post.base.detail.PostDetailActivity',
          matches: '@ImageView[visibleToUser=true] <2 * < [vid="tvAdClose"]',
          snapshotUrls: 'https://i.gkd.li/i/14332294',
        },
        {
          key: 1,
          activityIds:
            'cn.soulapp.android.component.square.post.base.detail.PostDetailActivity',
          matches: '@[clickable=true][visibleToUser=true] >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14359616',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-送礼开聊会话',
      desc: '自动点击先不聊了',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.component.chat.ConversationActivity',
          matches: '[vid="cl_gift_normal"] > TextView[vid="tv_btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/19448971',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-推荐页领金币',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.component.startup.main.MainActivity',
          matches: '[vid="tslAdLayout"] [vid="tv_cancel"]',
          exampleUrls: 'https://e.gkd.li/f721ac73-f66c-45ca-8660-0c3e57845fd9',
          snapshotUrls: 'https://i.gkd.li/i/21900487',
        },
      ],
    },
  ],
});
