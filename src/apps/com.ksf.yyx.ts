import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ksf.yyx',
  name: 'OMOFUN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          matches: '[id="com.ksf.yyx:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://i.gkd.li/import/12775918',
        },
        {
          matches:
            '[id="com.ksf.yyx:id/ksad_splash_root_container"] [childCount=3] > @ImageView[clickable=true] - [text="|"]',
          snapshotUrls: ['https://i.gkd.li/import/12775919'],
        },
        {
          matches:
            'FrameLayout > FrameLayout > [text^="跳过 "][text.length<=4][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12775926',
        },
      ],
    },
    {
      key: 1,
      name: '首页通知',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          matches: '[desc="了解更多"] - [desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/12775920',
        },
      ],
    },
    {
      key: 2,
      name: '插屏广告',

      activityIds: [
        'com.ksf.yyx.MainActivity',
        'com.sigmob.sdk.base.common.TransparentAdActivity',
        // 'com.miui.wakepath.ui.ConfirmStartActivity', //抓到activityIds为小米的 不确定是否正常
        // 'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches: '[id="com.ksf.yyx:id/ksad_container"] [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12775922',
        },
        {
          matches:
            '[id="com.ksf.yyx:id/ksad_container"] TextView[text="广告"] <2 ViewGroup -n ViewGroup[childCount=1] > @ViewGroup[childCount=1 && clickable=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12775923',
            'https://i.gkd.li/import/12998899',
          ],
        },
        {
          matches: '[id="ad_area"] [id="close_btn"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775925',
            'https://i.gkd.li/import/12775924',
          ],
        },
        {
          action: 'clickCenter',
          matches:
            '[text^="去"][text$="看看"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12775921',
            'https://i.gkd.li/import/12776903',
          ],
        },
        {
          action: 'clickCenter',
          matches:
            'TextView[text="查看详情"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12789196',
        },
        {
          action: 'clickCenter',
          matches:
            'TextView[text="立即下载"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12789928',
        },
      ],
    },
  ],
});
