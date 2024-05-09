import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chunqiu.ah',
  name: 'AH视频',
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
          matches: '[text^="跳过"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13264387',
            'https://i.gkd.li/i/13264381',
          ],
        },
        {
          key: 1,
          matches: '@ImageView - [text="|"]',
          snapshotUrls: 'https://i.gkd.li/i/13264377',
        },
        {
          key: 2,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/15258457',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13264383',
            'https://i.gkd.li/i/13852448',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] -4 @View[visibleToUser=true] > Image[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/15258557',
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.androlua.LuaActivity',
          matches: '[text="我已知晓"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13852430',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '@FrameLayout[childCount=1] <3 FrameLayout[childCount=3] +2 * >2 [text="了解更多"]',
          snapshotUrls: 'https://i.gkd.li/i/13635499',
        },
        {
          key: 1,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '@TextView[visibleToUser=true][childCount=0] - View >4 [text="立即下载"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13852535',
            'https://i.gkd.li/i/15258570',
            'https://i.gkd.li/i/15258575',
          ],
        },
        {
          key: 2,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            'WebView >3 View[childCount=6] > @View[visibleToUser=true] > Image[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/15258500',
        },
        {
          key: 3,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '[id="android:id/content"] FrameLayout[childCount<=5] > FrameLayout[childCount=1] > ImageView[visibleToUser=true][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13852695',
            'https://i.gkd.li/i/13852670',
            'https://i.gkd.li/i/13852669',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-公告弹窗',
      desc: '点击[不再提示]',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.androlua.LuaActivity',
          matches: '[text="不再提示"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13852447',
        },
      ],
    },
  ],
});
