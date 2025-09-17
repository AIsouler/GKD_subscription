import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oplus.appdetail',
  name: '应用安装器',
  groups: [
    {
      key: 1,
      name: '功能类-自动安装应用',
      rules: [
        {
          key: 0,
          name: '点击[继续安装]',
          activityIds:
            'com.oplus.appdetail.model.guide.ui.InstallGuideActivity',
          excludeMatches:
            '[id="com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title"][text^="正在扫描"]',
          matches:
            '[id="com.oplus.appdetail:id/view_bottom_guide_continue_install_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13038560', // 使用 excludeMatches，扫描病毒阶段不进行点击
            'https://i.gkd.li/i/13054204',
            'https://i.gkd.li/i/13038570',
          ],
        },
        {
          key: 1,
          name: '点击[完成]',
          activityIds: 'com.oplus.appdetail.model.finish.InstallFinishActivity',
          matches: '[text="完成"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13038664',
            'https://i.gkd.li/i/13054849',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-安装中高风险应用',
      fastQuery: true,
      activityIds: '.model.guide.ui.InstallGuideActivity',
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.726',
            top: 'height * 0.5',
          },
          matches: '[text="不建议安装此应用；若仍需安装，可查看详情"]',
          exampleUrls: 'https://e.gkd.li/8697d1e8-fa9c-4b5b-92b9-559f55672047',
          snapshotUrls: 'https://i.gkd.li/i/22377287',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="已知悉应用风险"][checked=false]',
          exampleUrls: 'https://e.gkd.li/45246cef-1ef5-49bf-8b7f-09377bde823a',
          snapshotUrls: 'https://i.gkd.li/i/22377327',
        },
        {
          preKeys: [1],
          matches: '[text="仍然安装"]',
          exampleUrls: 'https://e.gkd.li/45246cef-1ef5-49bf-8b7f-09377bde823a',
          snapshotUrls: 'https://i.gkd.li/i/22377327',
        },
      ],
    },
  ],
});
