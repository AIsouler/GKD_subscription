import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.daysko.safp',
  name: '7天澳門統考',
  groups: [
    {
      key: 1,
      name: '全屏广告-谷歌广告',
      activityIds: 'com.google.android.gms.ads.AdActivity',
      rules: [
        {
          key: 1,
          matches: 'View > [text="关闭"]',
          // 快照里可以选择 @[text="关闭"] < View + View > [text="安装"||text="打开"]
          // 但是实际执行选择器却无法点击, 原因未知, 需要后续排查
          snapshotUrls: [
            'https://i.gkd.li/import/12642909',
            'https://i.gkd.li/import/12643316',
          ],
        },
        {
          key: 2,
          matches: '[id="adchoiceWrap"] + [id="mv_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12643032',
        },
        {
          key: 3,
          name: '右上角白色圆形背景黑色x关闭按钮',
          matches:
            'View[clickable=false][childCount=2] > TextView[clickable=true] + View[clickable=true][childCount=1] > Button[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12643039',
            'https://i.gkd.li/import/12643246',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-视频广告',
      desc: '点击跳过视频-点击关闭按钮',
      activityIds: ['com.google.android.gms.ads.AdActivity'],
      rules: [
        {
          key: 1,
          matches:
            '[id=null][text="跳过视频"] < View +(2) @View > Button[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12668269',
            'https://i.gkd.li/import/12642913',
            'https://i.gkd.li/import/12642932',
          ],
        },
        {
          key: 3,
          matches: [
            'Button[id=null][clickable=true] < @View - * < View - View >(n) View[desc="安装"]', // 点中间的View才会关闭广告，最后两个 View 之间的距离不确定
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12642952',
            // https://github.com/gkd-kit/subscription/pull/136#issuecomment-1723186711
            'https://i.gkd.li/import/12668298',
          ],
        },
        {
          key: 4,
          actionCd: 2500,
          matches: ['[desc="了解详情"] - View > [text="关闭"]'],
          snapshotUrls: ['https://i.gkd.li/import/12642983'],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-页面底部广告',
      activityIds: 'com.daysko.safp.MainActivity',
      rules: [
        {
          matches:
            '[id!="why_this_ad_btn"] -2 View[id="mys-wrapper"] + View >2 Button[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642993',
            'https://i.gkd.li/import/12643229',
          ],
        },
        {
          matches: 'View[desc="Advertisement"] + View >(2) Button',
          snapshotUrls: ['https://i.gkd.li/import/12643001'],
        },
      ],
    },
  ],
});
