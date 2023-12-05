import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qiyi.video',
  name: '爱奇艺',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@LinearLayout > [text="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13160866',
        'https://i.gkd.li/import/13379565',
      ],
    },
    {
      key: 1,
      name: '青少年弹窗',
      quickFind: true,
      activityIds: 'org.qiyi.android.video.MainActivity',
      rules: [
        {
          matches: '[id="com.qiyi.video:id/confirm_btn"][text="我知道了"]',
          exampleUrls:
            'https://m.gkd.li/6328439/d69e92f8-8304-4296-909a-11730e408a16',
          snapshotUrls: 'https://i.gkd.li/import/13546555',
        },
      ],
    },
    {
      key: 2,
      name: '我的-顶部广告',
      quickFind: true,
      activityIds: 'org.qiyi.android.video.MainActivity',
      snapshotUrls: 'https://i.gkd.li/import/12495050',
      rules: [
        '@[id="com.qiyi.video:id/unused_res_a"][clickable=true] > [id="com.qiyi.video:id/close"]',
      ],
    },
    {
      key: 3,
      name: '开启推送通知弹窗',
      quickFind: true,
      activityIds: 'org.qiyi.android.video.MainActivity',
      snapshotUrls: 'https://i.gkd.li/import/12838152',
      rules: ['[id="com.qiyi.video:id/cancel_btn"][text="暂时不要"]'],
    },
    {
      key: 4,
      name: '版本更新弹窗',
      quickFind: true,
      activityIds: 'org.qiyi.android.video.MainActivity',
      snapshotUrls: 'https://i.gkd.li/import/12838158',
      rules: ['[id="com.qiyi.video:id/cancel_btn"][text="暂不升级"]'],
    },
    {
      key: 5,
      enable: false,
      name: '播放页-插入广告',
      desc: '视频播放前或播放中途插入的广告。默认关闭。',
      activityIds: 'org.iqiyi.video.activity.PlayerActivity',
      rules: [
        {
          matches:
            '@RelativeLayout[id="com.qiyi.video:id/unused_res_a"] > TextView[text="关闭广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13536669',
            'https://i.gkd.li/import/13536703',
          ],
        },
      ],
    },
  ],
});
