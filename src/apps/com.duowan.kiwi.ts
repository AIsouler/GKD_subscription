import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id=`com.duowan.kiwi:id/skip_time`]',
        },
        {
          key: 1,
          matches:
            '[id="com.duowan.kiwi:id/ams_splash_ad_container"] >2 [text^="跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/13052592'],
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      activityIds: [
        'com.duowan.kiwi.homepage.Homepage', // 缺少快照
        'com.duowan.kiwi.immersepage.impl.ImmersePageActivity',
      ],
      quickFind: true,
      matchLauncher: true,
      rules:
        '[id="com.duowan.kiwi:id/hyui_dialog_button_positive"][text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/12908790',
    },
    {
      key: 2,
      name: '直播间悬浮广告',
      quickFind: true,
      activityIds: 'com.duowan.kiwi.liveroom.ChannelPage',
      rules: [
        {
          key: 0,
          matches: '[id="com.duowan.kiwi:id/ad_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12901045',
            'https://i.gkd.li/import/12901044',
          ],
        },
        {
          key: 1,
          matches: '[id="com.duowan.kiwi:id/game_header_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13395604',
            'https://i.gkd.li/import/13395606',
          ],
        },
      ],
    },
  ],
});
