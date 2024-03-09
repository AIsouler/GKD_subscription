import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jdd.motorfans',
  name: '摩托范',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches:
            '[id="com.jdd.motorfans:id/ad_content"] >n [id="com.jdd.motorfans:id/iv_close"]',
          exampleUrls:
            'https://user-images.githubusercontent.com/44717382/270852019-b0296eaa-a378-49b3-877b-acefca2a7d58.gif',
          snapshotUrls: [
            'https://i.gkd.li/i/12733646', // com.jdd.motorfans.MTMainActivity
            'https://i.gkd.li/i/12798654', // com.jdd.motorfans.modules.detail.DetailActivity2
            'https://i.gkd.li/i/12878843', // com.jdd.motorfans.search.SearchMainActivity
            'https://i.gkd.li/i/12913956', // com.jdd.motorfans.modules.base.FragmentContainerActivity
            'https://i.gkd.li/i/13188861', // com.jdd.motorfans.message.ChatDetailActivity
            'https://i.gkd.li/i/12840710', // com.miui.home.launcher.Launcher
            'https://i.gkd.li/i/13188928', // com.tencent.mm.ui.LauncherUI
            'https://i.gkd.li/i/14546613',
          ],
        },
        {
          key: 1,
          matches: '@ImageView - RelativeLayout > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12826288',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      activityIds: ['com.jdd.motorfans.MTMainActivity'],
      rules: [
        {
          name: '点x按钮',
          key: 0,
          matches:
            '[id="com.jdd.motorfans:id/recyclerView"] > FrameLayout[id="com.jdd.motorfans:id/container"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]', //虽然在审查页面能匹配上，但是在“执行选择器”功能下一直处于搜索中，先添加后到真机测试
          snapshotUrls: ['https://i.gkd.li/i/12826382'],
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          matches: [
            'TextView[id="com.jdd.motorfans:id/beizi_dislike_item_multi_one_title"][text*="不感兴趣"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/12829069'],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-文章内容页面弹窗广告',
      activityIds: [
        'com.jdd.motorfans.modules.zone.search.ZoneInsideSearchActivity',
      ],
      rules: [
        {
          name: '点x按钮',
          key: 0,
          matches: '[id="com.jdd.motorfans:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12888087'],
        },
      ],
    },
  ],
});
