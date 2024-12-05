import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.cmocmna',
  name: '腾讯手游加速器',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      rules: [
        {
          activityIds: 'com.tencent.mocmna.activity.MainActivity',
          matches:
            'ViewGroup[childCount=2] > @ImageView[id!=null][clickable=true][childCount=0] + ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/12847323',
            'https://i.gkd.li/i/12847336',
            'https://i.gkd.li/i/13063271', // 限定 [clickable=true] 防止在此快照中点击左上角头像
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-信息流内嵌广告',
      rules: [
        {
          activityIds: 'com.tencent.mocmna.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][index=parent.childCount.minus(1)] -5 [text="下载"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12847340',
            'https://i.gkd.li/i/12847364',
          ],
        },
      ],
    },
  ],
});
