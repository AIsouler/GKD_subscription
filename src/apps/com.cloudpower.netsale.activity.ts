import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cloudpower.netsale.activity',
  name: '中国人保',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击下次再说',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.picc.aasipods.module.versionupdate.controller.VersionUpdateActivity',
          matches: '[id="com.cloudpower.netsale.activity:id/tvw_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/14005533',
        },
      ],
    },
  ],
});
