import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ifeng.news2',
  name: '凤凰新闻',
  groups: [
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
      name: '定位提示-请求位置权限弹窗',
      desc: '自动点击取消',
      activityIds: 'com.ifeng.news2.activity.IfengTabMainActivity',
      rules:
        '[text*="请求您的位置"] + [id="com.ifeng.news2:id/permission_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/12705531',
    },
  ],
});
