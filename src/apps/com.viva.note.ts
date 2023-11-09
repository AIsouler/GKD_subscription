import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.viva.note',
  name: '囧次元',
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
          matches: 'TextView[text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12888429',
            'https://i.gkd.li/import/import/12888730',
            'https://i.gkd.li/import/import/12888762',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '应用内通知',
      activityIds: [
        'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        'com.maoyun.guoguo.MainActivity',
      ],
      matchLauncher: true,
      rules: [
        {
          matches:
            'View[desc^="APP最新版本"] > Button[desc="关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12888361',
            'https://i.gkd.li/import/import/12888389',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '应用内弹窗',
      activityIds: [
        'com.sigmob.sdk.base.common.TransparentAdActivity',
        'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
      ],
      matchLauncher: true,
      rules: [
        {
          matches: '[id="ad_area"] [id="close_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12888388',
            'https://i.gkd.li/import/import/12888419',
            'https://i.gkd.li/import/import/12888578',
            'https://i.gkd.li/import/import/12888647',
          ],
        },
        {
          matches:
            'TextView[text="反馈"] + @ImageView[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/import/import/12888945',
        },
        {
          matches: [
            '[text="查看详情"]',
            'ImageView < FrameLayout[childCount=1]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/import/13213661',
        },
      ],
    },
  ],
});
