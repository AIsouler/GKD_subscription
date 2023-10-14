import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.cainiao.wireless.homepage.view.activity.AdsActivity',
      rules: [
        {
          matches: '[text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12901758',
            'https://gkd-kit.gitee.io/import/12724823',
          ],
        },
      ],
    },
  ],
});
