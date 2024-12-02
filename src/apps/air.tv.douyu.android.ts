import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'air.tv.douyu.android',
  name: '斗鱼',
  groups: [
    {
      key: 3,
      name: '局部广告-直播间广告',
      activityIds: [
        'tv.douyu.view.activity.PlayerActivity',
        'com.douyu.module.player.p.rambobase.RamboPlayerActivity',
      ],
      rules: [
        {
          key: 5,
          matches:
            'ViewGroup[childCount=8] > ViewGroup[index=5] >4 RelativeLayout[visibleToUser=true] > ImageView[clickable=true][index=1]',
          snapshotUrls: [
            'https://i.gkd.li/i/13948990',
            'https://i.gkd.li/i/14310474', // 避免在此页面误触
          ],
        },
        {
          key: 6,
          matches:
            '[id="android:id/content"] > RelativeLayout >4 FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/14668232',
            'https://i.gkd.li/i/14668248',
            'https://i.gkd.li/i/14667860',
          ],
        },
        {
          key: 7,
          fastQuery: true,
          matches:
            '@ImageView[visibleToUser=true][childCount=0] -(1,2) * >3 [text="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14668232',
            'https://i.gkd.li/i/17978451',
          ],
        },
        {
          key: 8,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + ViewGroup >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd',
          snapshotUrls: 'https://i.gkd.li/i/16939767',
        },
        {
          key: 9,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0][index=1] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="big_live_actions_layout"]',
          exampleUrls: 'https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd',
          snapshotUrls: 'https://i.gkd.li/i/16939767',
        },
      ],
    },
  ],
});
