import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'moc.nauxuoyoaixoaix.www',
  name: '晓晓优选',
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
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13476862',
            'https://i.gkd.li/i/13820450',
          ],
        },
        {
          key: 1,
          matches: '[text^="跳过"][text.length<=10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13625367',
        },
      ],
    },
  ],
});
