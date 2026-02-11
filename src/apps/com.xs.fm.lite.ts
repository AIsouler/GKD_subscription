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
          activityIds: [
            'com.dragon.read.pages.main.MainFragmentActivity',
            'com.bytedance.polaris.impl.view.BulletSingleContainerActivity',
          ],
          matches: [
            '[text$="为准" || text$="领取" || text$="收下"] + FlattenUIImage[clickable=true][visibleToUser=true]',
            '[text$="音乐组件"] + ImageView[clickable=true][visibleToUser=true]',
            '@ImageView[clickable=true][visibleToUser=true][width<90 && height<90] - View <2 ViewGroup[childCount=3]',
            '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] <2 LinearLayout[childCount=2]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25245765',
            'https://i.gkd.li/i/25246270',
            'https://i.gkd.li/i/25246625',
            'https://i.gkd.li/i/25246321',
            'https://i.gkd.li/i/24908945',
          ],
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
          key: 1,
          preKeys: [0],
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
          activityIds: 'com.xs.fm.karaoke.impl.cover.KaraokeCoverActivity',
          fastQuery: true,
          matches:
            'ViewGroup[childCount=3] > TextView[visibleToUser=true][text^="展开"][text$="回复"]',
          snapshotUrls: 'https://i.gkd.li/i/25246736',
        },
      ],
    },
  ],
});
