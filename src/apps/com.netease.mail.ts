import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          excludeMatches: '[id="com.netease.mail:id/ad_skip"][clickable=false]',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12893573',
            'https://i.gkd.li/i/12923776',
            'https://i.gkd.li/i/13195662',
            'https://i.gkd.li/i/12818335',
            'https://i.gkd.li/i/13206298', // 使用 excludeMatches 防止提前触发规则
          ],
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14046124',
        },
        {
          key: 2,
          position: {
            left: 'width * 0.9016',
            top: 'width * 0.1557',
          },
          excludeMatches: '[text*="跳过"][text.length<=10]',
          matches: '[id="com.netease.mail:id/ad_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13207736',
            'https://i.gkd.li/i/14900326', // 使用 excludeMatches 防止提前触发规则
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.netease.mail:id/tv_ignore_this_version"][text="暂不更新"]',
      snapshotUrls: 'https://i.gkd.li/i/12664070',
    },
    {
      key: 2,
      name: '全屏广告-邮件列表广告',
      activityIds: ['com.netease.mail.biz.main.MainITabActivity'],
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.mail:id/ad_vip"]',
          snapshotUrls: 'https://i.gkd.li/i/12999833',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[id="com.netease.mail:id/ll_delete"]',
          snapshotUrls: 'https://i.gkd.li/i/12999841',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/i/12664070',
    },
    {
      key: 5,
      name: '其他-获得成就弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'TextView[text="恭喜您获得以下成就"] - TextView[text=""][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13876817',
    },
  ],
});
