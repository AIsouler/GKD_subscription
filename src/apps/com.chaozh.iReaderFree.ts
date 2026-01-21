import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReaderFree',
  name: '掌阅',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter', // clickNode无效
          matches:
            '[name!$="ViewGroup"] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/84df4bd7-bdf9-4b34-bb3c-57dfe9c09454',
          snapshotUrls: [
            'https://i.gkd.li/i/23046697',
            'https://i.gkd.li/i/23186001',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24635516',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches: '[vid="dialog_public_top_bar_title_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16549332',
        },
      ],
    },
  ],
});
