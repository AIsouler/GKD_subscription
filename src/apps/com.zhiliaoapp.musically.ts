import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhiliaoapp.musically',
  name: 'TikTok',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            'RelativeLayout[childCount=2] > @ImageView[index=1][clickable=true] <<n [id="android:id/custom"]',
          exampleUrls:
            'https://m.gkd.li/57941037/13316f83-eaca-4081-9757-33730338a033',
          snapshotUrls: 'https://i.gkd.li/i/15144780',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-接受通知弹窗',
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '[text*="接收通知"] <n * <<2 RecyclerView + * > [text="暂时不要"]',
      snapshotUrls: 'https://i.gkd.li/i/15944175',
    },
  ],
});
