import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xs.fm.lite',
  name: '番茄音乐（原畅听音乐）',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.dragon.read.pages.main.MainFragmentActivity',
            'com.bytedance.polaris.impl.view.BulletSingleContainerActivity',
          ],
          matches:
            'FlattenUIImage[clickable=true] -(1,2) FlattenUIText[text="开心收下" || text="前往领取"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25246321',
            'https://i.gkd.li/i/25246625',
            'https://i.gkd.li/i/25245765',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] - [text="添加番茄音乐组件"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25246270',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] <3 ViewGroup[childCount=3] < ViewGroup < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/24908945',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches:
            '[text^="领取成功"][clickable=true][visibleToUser=true][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/i/25246506',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches:
            '@View[clickable=true][width<90 && height<90] -2 ScrollView < View[childCount=3]',
          snapshotUrls: 'https://i.gkd.li/i/25246616',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动展开回复',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xs.fm.karaoke.impl.cover.KaraokeCoverActivity',
          matches:
            '@ViewGroup[clickable=true] > TextView[text^="展开"][text$="回复"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25246736',
        },
      ],
    },
  ],
});
