import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android.lite',
  name: '酷狗概念版',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text="开启青少年模式"] + [text="知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/14321697',
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      rules: [
        {
          key: 0,
          name: '新人限时优惠弹窗',
          activityIds: 'com.kugou.android.app.setting.YoungModeTipsActivity',
          fastQuery: true,
          matches: '[text^="新人限时开通"] +3 [text="放弃优惠"]',
          snapshotUrls: 'https://i.gkd.li/i/14321698',
        },
        {
          key: 1,
          name: '组队抽奖弹窗',
          activityIds: 'com.kugou.android.app.setting.YoungModeTipsActivity',
          matches:
            '[id="android:id/content"] > ViewGroup[childCount=3] > ImageView + ImageView + ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14321700',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-我的页面-右侧悬浮反馈图标',
      rules: [
        {
          key: 0,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            'FrameLayout > RelativeLayout > @ImageView[vid!=null][clickable=true][visibleToUser=true] +(2,3) ImageView[vid!=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/14321713',
            'https://i.gkd.li/i/14321718',
          ],
        },
        {
          key: 1,
          preKeys: 0,
          activityIds: 'com.kugou.android.app.MediaActivity',
          fastQuery: true,
          matches: '[text="是否取消？"] +4 * > [text="确认"]',
          snapshotUrls: 'https://i.gkd.li/i/14321724',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '@ImageView - * > [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/i/14622566',
    },
    {
      name: '自动签到',
      key: 5,
      fastQuery: true,
      matchTime: 20000,
      snapshotUrls: [
        'https://i.gkd.li/i/16386628',
        'https://i.gkd.li/i/16386629',
        'https://i.gkd.li/i/16554695'
      ],
      rules: [
        {
          matches: [
            '@LinearLayout[clickable=true] > TextView[text="听歌领VIP"]'
          ]
        }
      ]
    },
    {
      name: '听歌弹出广告',
      key: 6,
      matchTime: 10000,
      snapshotUrls: [
        'https://i.gkd.li/i/16407631'
      ],
      rules: [
        {
          matches: [
            'TextView[text$="跳过" && text.length=5]'
          ]
        }
      ]
    },
    {
      name: '自动签到2',
      key: 7,
      matchTime: 20000,
      snapshotUrls: [
        'https://i.gkd.li/i/16594001'
      ],
      rules: [
        {
          matches: [
            'TextView[text="小时VIP"] <n FrameLayout + ImageView'
          ]
        }
      ]
    },
    {
      name: '搜索下广告',
      key: 8,
      matchTime: 10000,
      snapshotUrls: [
        'https://i.gkd.li/i/16594197'
      ],
      rules: [
        {
          name: '点x',
          key: 0,
          matches: [
            'TextView[text="最近搜索"] < FrameLayout < LinearLayout + FrameLayout > ImageView'
          ]
        },
        {
          name: '确认关闭',
          key: 1,
          matches: [
            'Button[text="确认关闭"]'
          ]
        }
      ]
    }
  ],
});
