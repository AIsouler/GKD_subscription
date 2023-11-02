import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.xiaolongonly.andpodsop',
  name: 'AndPods',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.xiaolongonly.andpodsop:id/hiad_skip_text"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13229197',
    },
  ],
});
