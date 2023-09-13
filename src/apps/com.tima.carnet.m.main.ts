import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tima.carnet.m.main',
  name: '钛马星',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/22029832/5aa3f016-d33c-4821-91bd-f23235b04ad3',
            'https://gkd-kit.gitee.io/import/12594568',
            'https://gkd-kit.gitee.io/import/12594574',
          ],
        },
      ],
    },
  ],
});
