import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ifeng.news2',
  name: '凤凰新闻',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      fastQuery: true,
      activityIds: [
        '.activity.IfengTabMainActivity',
        '.activity.DocDetailActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            '@[vid="img_feedback_left_of_image"] < LinearLayout -2 LinearLayout >2 [vid="adv_label"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/63216ca1-4f7c-4a95-9b9e-7ac4c894f0c0',
          snapshotUrls: 'https://i.gkd.li/i/19752573',
        },
        {
          key: 2,
          matches:
            '[vid="iv_item_del" || vid="doc_detail_titleimg_ad_delete" || vid="del_click"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0a199f54-70f9-45ae-8025-896b688dc8e6',
          snapshotUrls: [
            'https://i.gkd.li/i/19752570',
            'https://i.gkd.li/i/19752567',
            'https://i.gkd.li/i/19752561',
          ],
        },
        {
          preKeys: [1, 2],
          matches: '@[clickable=true] > [text="不感兴趣"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e182591a-492d-49ec-8820-20bea10495d9',
          snapshotUrls: [
            'https://i.gkd.li/i/19752582',
            'https://i.gkd.li/i/19752559',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-定位权限',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ifeng.news2.activity.IfengTabMainActivity',
          matches:
            '[text*="请求您的位置"] + [id="com.ifeng.news2:id/permission_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12705531',
        },
      ],
    },
  ],
});
