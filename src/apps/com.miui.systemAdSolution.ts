import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.systemAdSolution',
  name: '智能服务',
  deprecatedKeys: [1],
  groups: [
    {
      // 全局规则无效，单独规则有效
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14927422',
        },
      ],
    },
  ],
});
