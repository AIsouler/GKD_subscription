import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vphonegaga.titan',
  name: '光速虚拟机',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      quickFind: true,
      activityIds: 'com.vphonegaga.titan.MyNativeActivity1',
      rules: '@Image < View +2 [text="反馈"]',
      snapshotUrls: 'https://i.gkd.li/i/13292911',
    },
  ],
});
