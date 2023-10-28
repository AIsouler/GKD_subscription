import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jdd.motorfans',
  name: '摩托范',
  groups: [
    {
      key: 1,
      name: '第三方 SDK 广告弹窗',
      matchLauncher: true,
      activityIds: [],
      rules: [
        {
          key: 0,
          matches:
            '[id="com.jdd.motorfans:id/ad_content"] >n [id="com.jdd.motorfans:id/iv_close"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12733646', // com.jdd.motorfans.MTMainActivity
            'https://i.gkd.li/import/12798654', // com.jdd.motorfans.modules.detail.DetailActivity2
            'https://i.gkd.li/import/12878843', // com.jdd.motorfans.search.SearchMainActivity
            'https://i.gkd.li/import/12913956', // com.jdd.motorfans.modules.base.FragmentContainerActivity
            'https://i.gkd.li/import/13188861', // com.jdd.motorfans.message.ChatDetailActivity
            'https://i.gkd.li/import/12840710', // com.miui.home.launcher.Launcher
            'https://i.gkd.li/import/13188928', // com.tencent.mm.ui.LauncherUI
          ],
          exampleUrls:
            'https://user-images.githubusercontent.com/44717382/270852019-b0296eaa-a378-49b3-877b-acefca2a7d58.gif',
        },
        {
          key: 1,
          matches: '@ImageView -n RelativeLayout > TextView[text*="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12826288'],
        },
      ],
    },
    {
      key: 2,
      name: '信息流广告',
      activityIds: ['com.jdd.motorfans.MTMainActivity'],
      rules: [
        {
          name: '点x按钮',
          key: 0,
          matches:
            '[id="com.jdd.motorfans:id/recyclerView"] > FrameLayout[id="com.jdd.motorfans:id/container"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]', //虽然在审查页面能匹配上，但是在“执行选择器”功能下一直处于搜索中，先添加后到真机测试
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12826382'],
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          matches: [
            'TextView[id="com.jdd.motorfans:id/beizi_dislike_item_multi_one_title"][text*="不感兴趣"]',
          ],
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12829069'],
        },
      ],
    },
    {
      key: 3,
      name: '文章内容弹窗',
      activityIds: [
        'com.jdd.motorfans.modules.zone.search.ZoneInsideSearchActivity',
      ],
      rules: [
        {
          name: '点x按钮',
          key: 0,
          matches: '[id="com.jdd.motorfans:id/iv_close"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12888087'],
        },
      ],
    },
  ],
});
