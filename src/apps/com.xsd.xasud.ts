import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xsd.xasud',
  name: '末忆-铁锈盒子',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['io.dcloud.PandoraEntryActivity'],
      rules: '[text = "广告启动页"] [text = "跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12847496',
    },
  ],
});
