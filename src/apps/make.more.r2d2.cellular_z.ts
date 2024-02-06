import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'make.more.r2d2.cellular_z',
  name: 'Cellular-Z',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          quickFind: true,
          name: '全局规则-1',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13987038',
        },
        {
          key: 1,
          name: '字节广告SDK',
          matches:
            'TextView - @View[clickable=true] <n FrameLayout <2 FrameLayout[childCount=2]', // 字节开屏通用规则
          snapshotUrls: 'https://i.gkd.li/import/13978978',
        },
        {
          key: 2,
          name: '全局规则-2',
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: [
            '[id="make.more.r2d2.cellular_z:id/tv_alert_title"][text="发现新版本"]',
            '[id="make.more.r2d2.cellular_z:id/btn_alert_left"][text="取消"]',
          ], //防止误触其它取消按钮
          snapshotUrls: 'https://i.gkd.li/import/13608563',
        },
      ],
    },
  ],
});
