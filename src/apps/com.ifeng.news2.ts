import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ifeng.news2',
  name: '凤凰新闻',
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
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/63006672-75df-47c0-96d5-e26551974a98',
          snapshotUrls: [
            'https://i.gkd.li/i/17643592',
            'https://i.gkd.li/i/17644109',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-信息流广告',
      activityIds: 'com.ifeng.news2.activity.IfengTabMainActivity',
      rules: [
        {
          key: 1,
          matches:
            '[id="com.ifeng.news2:id/adv_label"] + [id="com.ifeng.news2:id/normal_item_delete_wrap"]',
          snapshotUrls: 'https://i.gkd.li/i/12705500',
        },
        {
          key: 2,
          matches:
            '@[id="com.ifeng.news2:id/img_feedback_left_of_image"] - LinearLayout >(2) [id="com.ifeng.news2:id/adv_label"]',
          snapshotUrls: 'https://i.gkd.li/i/12705508',
        },
        {
          key: 3,
          matches:
            '[id="com.ifeng.news2:id/adv_icon"] + LinearLayout[id="com.ifeng.news2:id/normal_item_delete_wrap"]',
          snapshotUrls: 'https://i.gkd.li/i/12705511',
        },
        {
          key: 4,
          matches:
            '[id="com.ifeng.news2:id/adv_icon"] + TextView + [id="com.ifeng.news2:id/normal_item_delete_wrap"]',
          snapshotUrls: 'https://i.gkd.li/i/12705518',
        },
        {
          key: 5,
          matches:
            '[id="com.ifeng.news2:id/adv_label"] + [id="com.ifeng.news2:id/iv_item_del"]',
          snapshotUrls: 'https://i.gkd.li/i/12705520',
        },
        {
          preKeys: [1, 2, 3, 4, 5],
          key: 9,
          matches:
            '@[id="com.ifeng.news2:id/dialog_dislike_feedback_normal_item_linearlayout"] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12705505',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-定位权限',
      desc: '自动点击取消',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ifeng.news2.activity.IfengTabMainActivity',
      rules:
        '[text*="请求您的位置"] + [id="com.ifeng.news2:id/permission_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/12705531',
    },
  ],
});
