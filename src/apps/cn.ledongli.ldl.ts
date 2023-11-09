import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.ledongli.ldl',
  name: '乐动力',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text^="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12668468', //text="跳过"
        'https://i.gkd.li/import/import/13259199', //text="跳过 "
      ],
    },
  ],
});
