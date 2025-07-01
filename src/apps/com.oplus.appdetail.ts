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
  ],
});
