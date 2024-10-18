import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.docs',
  name: '腾讯文档',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '@LinearLayout > [id="com.tencent.docs:id/tv_gdt_ad_text"]',
      snapshotUrls: 'https://i.gkd.li/i/13198082',
    },
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="暂不更新"] + [desc="现在更新"]',
      snapshotUrls: 'https://i.gkd.li/i/13198091',
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      activityIds: 'com.tencent.docs.DocsFlutterActivity',
      rules: '[desc="限时购买"] + ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13198097',
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      actionDelay: 200,
      activityIds: 'com.tencent.docs.DocsFlutterActivity',
      rules: 'View[childCount=2] > @TextView[id=null][clickable=true] + View',
      snapshotUrls: 'https://i.gkd.li/i/13242404',
    },
  ],
});
