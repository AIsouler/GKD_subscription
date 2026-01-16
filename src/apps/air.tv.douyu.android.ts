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
          name: '右下方悬浮广告-1',
          matches:
            'ViewGroup[childCount=8] > ViewGroup[index=5] >4 RelativeLayout[visibleToUser=true] > ImageView[clickable=true][index=1]',
          snapshotUrls: 'https://i.gkd.li/i/13948990',
          excludeSnapshotUrls: 'https://i.gkd.li/i/14310474',
        },
        {
          key: 6,
          name: '视频下方横幅广告-1',
          matches:
            '[id="android:id/content"] > RelativeLayout >2 FrameLayout > ViewGroup[childCount=4] > ImageView[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)]',
          snapshotUrls: 'https://i.gkd.li/i/14667860',
        },
        {
          key: 7,
          name: '右下方悬浮广告-2',
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
          name: '右下方悬浮广告-3',
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] +(1,2) ViewGroup >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd',
          snapshotUrls: [
            'https://i.gkd.li/i/16939767',
            'https://i.gkd.li/i/24661966',
          ],
        },
        {
          key: 9,
          name: '右下方悬浮广告-4',
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0][index=1] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="big_live_actions_layout"]',
          exampleUrls: 'https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd',
          snapshotUrls: 'https://i.gkd.li/i/16939767',
        },
        {
          key: 10,
          name: '视频下方横幅广告-2',
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] - FrameLayout >2 [text="去看看" || text^="立即"]',
          exampleUrls: 'https://e.gkd.li/942ee7a5-43e1-4709-b967-7af1a6900e4c',
          snapshotUrls: [
            'https://i.gkd.li/i/14668232',
            'https://i.gkd.li/i/18032754',
            'https://i.gkd.li/i/24661966',
          ],
        },
      ],
    },
  ],
});
