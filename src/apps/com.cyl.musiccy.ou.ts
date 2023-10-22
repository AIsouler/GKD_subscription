import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cyl.musiccy.ou',
  name: 'OMOFUN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.cyl.musiccy.ou.MainActivity'],
      rules: [
        {
          matches: '[id="com.cyl.musiccy.ou:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775918',
        },
        {
          matches:
            '[id="com.cyl.musiccy.ou:id/ksad_splash_root_container"] [childCount=3] > @ImageView[clickable=true] - [text="|"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12775919'],
        },
        {
          matches:
            'FrameLayout > FrameLayout > [text^="跳过 "][text.length<=4][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775926',
        },
        {
          matches: 'LinearLayout > FrameLayout > TextView[text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13063151',
        },
        {
          matches: 'FrameLayout > LinearLayout > TextView[text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13063246',
        },
      ],
    },
    {
      key: 1,
      name: '首页通知',
      activityIds: ['com.cyl.musiccy.ou.MainActivity'],
      rules: [
        // {
        //   matches: '[desc="了解更多"] - [desc="我知道了"]',
        //   snapshotUrls: 'https://gkd-kit.gitee.io/import/12775920',
        // },
        {
          matches: '[desc="我知道了"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13063206',
        },
      ],
    },
    {
      key: 2,
      name: '插屏广告',
      activityIds: [
        'com.cyl.musiccy.ou.MainActivity',
        'com.sigmob.sdk.base.common.TransparentAdActivity',
        'com.miui.wakepath.ui.ConfirmStartActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches: '[id="com.cyl.musiccy.ou:id/ksad_container"] [text="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12775922',
            'https://gkd-kit.gitee.io/import/13063222',
          ],
        },
        {
          matches:
            '[id="com.cyl.musiccy.ou:id/ksad_container"] [text="广告"] <2 ViewGroup -2 ViewGroup > @ViewGroup[clickable=true][childCount=1] ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775923',
        },
        {
          matches: '[id="ad_area"] [id="close_btn"][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12775925',
            'https://gkd-kit.gitee.io/import/12775924',
          ],
        },
        {
          action: 'clickCenter',
          matches:
            '[text^="去"][text$="看看"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12775921',
            'https://gkd-kit.gitee.io/import/12776903',
          ],
        },
        {
          action: 'clickCenter',
          matches:
            'TextView[text="查看详情"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12789196',
        },
        {
          action: 'clickCenter',
          matches:
            'TextView[text="立即下载"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12789928',
        },
        {
          action: 'click',
          matches:
            'TextView[text^="摇动"||text^="点击"] <2 LinearLayout < LinearLayout < FrameLayout -n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13063249',
        },
      ],
    },
  ],
});
