import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cyl.musiccy.ou',
  name: 'OMOFUN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775918',
            'https://i.gkd.li/import/12775926',
            'https://i.gkd.li/import/13063151',
            'https://i.gkd.li/import/13063246',
            'https://i.gkd.li/import/13071599',
          ],
        },
        {
          matches:
            '[id="com.cyl.musiccy.ou:id/ksad_splash_root_container"] [childCount=3] > @ImageView[clickable=true] - [text="|"]',
          snapshotUrls: ['https://i.gkd.li/import/12775919'],
        },
      ],
    },
    {
      key: 1,
      name: '首页通知',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.cyl.musiccy.ou.MainActivity'],
      rules: [
        {
          matches: '[desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13063206',
        },
      ],
    },
    {
      key: 2,
      name: '插屏广告',
      matchLauncher: true,
      actionDelay: 300,
      activityIds: [
        'com.cyl.musiccy.ou.MainActivity',
        'com.sigmob.sdk.base.common.TransparentAdActivity',
        'com.miui.wakepath.ui.ConfirmStartActivity',
      ],
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[id="com.cyl.musiccy.ou:id/ksad_container"] [text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775922',
            'https://i.gkd.li/import/13063222',
          ],
        },
        {
          key: 1,
          matches:
            '[id="com.cyl.musiccy.ou:id/ksad_container"] [text="广告"] <2 ViewGroup -2 ViewGroup > @ViewGroup[clickable=true][childCount=1] ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12775923',
        },
        {
          key: 2,
          quickFind: true,
          matches: '[id="ad_area"] [id="close_btn"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775925',
            'https://i.gkd.li/import/12775924',
          ],
        },
        {
          key: 3,
          matches:
            'ImageView <n FrameLayout > FrameLayout[index=1] > FrameLayout[index=2] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12775921',
            'https://i.gkd.li/import/12776903',
            'https://i.gkd.li/import/12789928',
            'https://i.gkd.li/import/13215476',
            'https://i.gkd.li/import/13071595',
          ],
        },
        {
          key: 4,
          matches:
            'ImageView <n FrameLayout - FrameLayout > FrameLayout[index=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13063249',
        },
        {
          key: 5,
          matches:
            'ImageView <n FrameLayout > FrameLayout[index=0] > FrameLayout FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13422363',
        },
      ],
    },
  ],
});
