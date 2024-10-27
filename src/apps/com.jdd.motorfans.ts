import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdd.motorfans',
  name: '摩托范',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[id="com.jdd.motorfans:id/ad_content"] >n [id="com.jdd.motorfans:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12733646',
            'https://i.gkd.li/i/12798654',
            'https://i.gkd.li/i/12878843',
            'https://i.gkd.li/i/12913956',
            'https://i.gkd.li/i/13188861',
            'https://i.gkd.li/i/12840710',
            'https://i.gkd.li/i/13188928',
            'https://i.gkd.li/i/14546613',
          ],
        },
        {
          key: 1,
          matches: '@ImageView - RelativeLayout > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12826288',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.jdd.motorfans.MTMainActivity',
          matches: '[vid="iv_right_top_close"]',
          exampleUrls: 'https://e.gkd.li/0f4b8d7d-fda4-43ee-b892-3a85d6dae278',
          snapshotUrls: 'https://i.gkd.li/i/17002101',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.jdd.motorfans.MTMainActivity',
          matches: '[vid="ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/17078108',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      activityIds: 'com.jdd.motorfans.MTMainActivity',
      rules: [
        {
          key: 0,
          name: '点x按钮',
          matches:
            '[id="com.jdd.motorfans:id/recyclerView"] > FrameLayout[id="com.jdd.motorfans:id/container"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]', //虽然在审查页面能匹配上，但是在“执行选择器”功能下一直处于搜索中，先添加后到真机测试
          snapshotUrls: 'https://i.gkd.li/i/12826382',
        },
        {
          preKeys: [0],
          name: '点击不感兴趣',
          matches:
            'TextView[id="com.jdd.motorfans:id/beizi_dislike_item_multi_one_title"][text*="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12829069',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-文章内容页面弹窗广告',
      activityIds:
        'com.jdd.motorfans.modules.zone.search.ZoneInsideSearchActivity',
      rules: [
        {
          key: 0,
          name: '点x按钮',
          matches: '[id="com.jdd.motorfans:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12888087',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.MTMainActivity',
            '.modules.detail.DetailActivity2',
            '.cars.MotorDetailActivity2',
            '.modules.carbarn.brand.detail.MBrandDetailActivity',
          ],
          matches: '[vid="close_b_t_a_i_b_no_compliance"]',
          exampleUrls: 'https://e.gkd.li/daf8ea52-a935-4e58-9e27-c5cb28fa9cf0',
          snapshotUrls: [
            'https://i.gkd.li/i/16685033',
            'https://i.gkd.li/i/16859608',
            'https://i.gkd.li/i/17162753',
            'https://i.gkd.li/i/17533553',
          ],
        },
      ],
    },
  ],
});
