import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wework',
  name: '企业微信',
  groups: [
    {
      // 节点id疑似随机生成,尽量不用id属性
      key: 1,
      name: '功能类-自动抢红包',
      desc: '自己发的红包不抢',
      rules: [
        {
          key: 0,
          fastQuery: true,
          name: '点击别人发的红包',
          activityIds:
            'com.tencent.wework.msg.controller.ExternalContactMessageListActivity',
          matches:
            'RelativeLayout[childCount=2] > ImageView + * @RelativeLayout[childCount=4] > LinearLayout[index=1] > LinearLayout[childCount=1] > [text="恭喜发财，大吉大利"]',
          exampleUrls:
            'https://m.gkd.li/57941037/64bdd899-9a30-4816-bafc-a9e2a0d09ec6',
          snapshotUrls: [
            'https://i.gkd.li/i/14151095',
            'https://i.gkd.li/i/14151131', // 已领取的红包、自己的红包
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '开红包',
          activityIds:
            'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeCollectorActivity',
          matches:
            'RelativeLayout[childCount=3] > FrameLayout + RelativeLayout[childCount=3] + ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/52525cdb-0746-483c-b1ba-2282f3a8b8ed',
          snapshotUrls: [
            'https://i.gkd.li/i/14151108',
            'https://i.gkd.li/i/14151215',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          name: '从金额页面返回到聊天页面',
          activityIds:
            'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeDetailActivity',
          matches: 'LinearLayout[childCount=3] > LinearLayout TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/2a69cf93-1d10-48c4-8456-663197c6feca',
          snapshotUrls: 'https://i.gkd.li/i/14151120',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-顶部卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.wework.launch.WwMainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] - ViewFlipper < RelativeLayout < LinearLayout < LinearLayout < RecyclerView < FrameLayout <2 ViewGroup - RelativeLayout >4 [text="工作台"]',
          exampleUrls: 'https://e.gkd.li/e0c4aa4a-fd8b-4440-920b-f96eec60baa1',
          snapshotUrls: 'https://i.gkd.li/i/16977927',
        },
        {
          preKeys: [0],
          fastQuery: true,
          activityIds: 'com.tencent.wework.launch.WwMainActivity',
          matches: '[text="关闭"]',
          exampleUrls: 'https://e.gkd.li/e4a71c0c-c0ce-4822-ae69-4a3330a28a84',
          snapshotUrls: 'https://i.gkd.li/i/16977929',
        },
      ],
    },
  ],
});
