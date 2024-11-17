import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.browser',
  name: 'vivo浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][visibleToUser=true][clickable=true]',
          exampleUrls: 'https://e.gkd.li/ae56bdf6-1de3-4a19-bcd3-233212aeffc0',
          snapshotUrls: 'https://i.gkd.li/i/16739023',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-免流提示',
      activityIds: 'com.vivo.browser.pendant.PendantActivity',
      rules: '[id="com.vivo.browser:id/dialog_button_right"][text="继续浏览"]',
      snapshotUrls: 'https://i.gkd.li/i/12847431',
    },
    {
      key: 2,
      name: '局部广告-天气详情页面',
      rules: [
        {
          key: 0,
          activityIds: 'com.vivo.browser.lightweb.LightWebNomalStartActivity',
          matches: '[text$="广告"] +5 * > Image',
          snapshotUrls: 'https://i.gkd.li/i/14392332',
        },
      ],
    },
  ],
});
