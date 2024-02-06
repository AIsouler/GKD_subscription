import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.oplus.appdetail',
  name: '应用安装器',
  groups: [
    {
      enable: false,
      key: 1,
      name: '功能类-自动安装应用',
      rules: [
        {
          key: 0,
          name: '点击"继续安装"',
          activityIds:
            'com.oplus.appdetail.model.guide.ui.InstallGuideActivity',
          matches:
            '[id="com.oplus.appdetail:id/view_bottom_guide_continue_install_btn"]',
          excludeMatches:
            '[id="com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title"][text^="正在扫描"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13038560', // 使用 excludeMatches，扫描病毒阶段不进行点击
            'https://i.gkd.li/import/13054204',
            'https://i.gkd.li/import/13038570',
          ],
        },
        {
          key: 1,
          name: '点击"完成"',
          activityIds: 'com.oplus.appdetail.model.finish.InstallFinishActivity',
          matches: '[id="com.oplus.appdetail:id/launch_button"][text="完成"]',
          snapshotUrls: 'https://i.gkd.li/import/13038664',
        },
        {
          key: 2,
          name: '点击"完成"',
          activityIds: 'com.oplus.appdetail.model.finish.InstallFinishActivity',
          matches: '[id="com.oplus.appdetail:id/done_button"][text="完成"]',
          snapshotUrls: 'https://i.gkd.li/import/13054849',
        },
      ],
    },
  ],
});
