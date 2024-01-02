import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vivo.browser',
  name: 'vivo浏览器',
  groups: [
    {
      key: 1,
      name: '免流提示',
      activityIds: 'com.vivo.browser.pendant.PendantActivity',
      rules: '[id="com.vivo.browser:id/dialog_button_right"][text="继续浏览"]',
      snapshotUrls: 'https://i.gkd.li/import/12847431',
    },
  ],
});
