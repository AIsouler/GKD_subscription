import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mtt',
  name: 'QQ浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.mtt.MainActivity',
      rules: [
        '@View[id=null] + ImageView + FrameLayout TextView[text=`向上滑动或点击查看`]',
        {
          matches: '@LinearLayout[clickable=true] > TextView[text="跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12472630'],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '小说阅读页面-卡片广告',
      activityIds: 'com.tencent.mtt.MainActivity',
      rules: [
        {
          preKeys: 0,
          key: 1,
          name: '点击[屏蔽此广告]',
          matches: '@ViewGroup > [desc="屏蔽此广告"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12907654',
            'https://gkd-kit.gitee.io/import/12907651',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          name: '点击[不感兴趣]',
          matches: '@ViewGroup > [desc="不感兴趣"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12907655',
            'https://gkd-kit.gitee.io/import/12907653',
          ],
        },
        {
          cd: 3000,
          key: 0,
          name: '点击广告按钮',
          excludeMatches: '[desc="屏蔽此广告"||desc="不感兴趣"]',
          matches: '@ViewGroup[visibleToUser=true] > ViewGroup > [desc="广告"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12907446',
            'https://gkd-kit.gitee.io/import/12907445', // 限定 visibleToUser=true，防止在节点不可见时触发规则
          ],
        },
      ],
    },
    {
      key: 11,
      name: '小说阅读页面-视频广告',
      activityIds: 'com.qq.e.tg.RewardvideoPortraitADActivity',
      rules: [
        {
          key: 0,
          matches: '[text="腾讯广告"] >n [id^="button_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12909822',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[id="com.tencent.mtt:id/reward_dialog_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12908955',
        },
      ],
    },
  ],
});
