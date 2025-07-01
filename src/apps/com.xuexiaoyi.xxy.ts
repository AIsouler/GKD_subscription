import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xuexiaoyi.xxy',
  name: '学小易',
  groups: [
    {
      key: 1,
      name: '分段广告-首页-底部广告',
      activityIds: [
        'com.xuexiaoyi.entrance.main.MainActivity',
        'com.xuexiaoyi.platform.base.arch.RouterFragmentActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击在下方的X',
          matches:
            'View[text="广告"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]', // longClickable=null为了与 key:3 区别防止误触
          snapshotUrls: [
            'https://i.gkd.li/i/13068836',
            'https://i.gkd.li/i/13375502',
            'https://i.gkd.li/i/13375559',
          ],
        },
        {
          key: 1,
          name: '点击在上方的X-类型1',
          matches:
            'Image[text.length>=20] < View < View + View > Image[text.length=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13068811',
            'https://i.gkd.li/i/13202990',
            'https://i.gkd.li/i/13266356',
            'https://i.gkd.li/i/13266362',
            'https://i.gkd.li/i/13457114',
            'https://i.gkd.li/i/13457204',
          ],
        },
        {
          key: 2,
          name: '点击在上方的X-类型2',
          matches:
            '[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View',
          snapshotUrls: 'https://i.gkd.li/i/13266689',
        },
        {
          key: 3,
          name: '点击在内部的X',
          matches: 'View[text.length=4] - View > View > Image[text.length=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13457210',
            'https://i.gkd.li/i/13457302',
          ],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 10,
          name: '点击不感兴趣',
          matches: 'TextView[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13068819',
            'https://i.gkd.li/i/13457380',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '更新提示',
      desc: '点击以后再说',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xuexiaoyi.entrance.main.MainActivity',
          matches: '[text="立即体验"] + [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13203105',
        },
      ],
    },
  ],
});
