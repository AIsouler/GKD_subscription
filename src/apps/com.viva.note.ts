import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.viva.note',
  name: '囧次元',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'View[desc^="APP最新版本"] > Button[desc="关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12888361',
            'https://i.gkd.li/i/12888389',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      activityIds: [
        'com.sigmob.sdk.base.common.TransparentAdActivity',
        'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
      ],
      rules: [
        {
          matches: '[id="ad_area"] [id="close_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12888388',
            'https://i.gkd.li/i/12888419',
            'https://i.gkd.li/i/12888578',
            'https://i.gkd.li/i/12888647',
          ],
        },
        {
          matches:
            'TextView[text="反馈"] + @ImageView[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/i/12888945',
        },
        {
          matches: [
            '[text="查看详情"]',
            'ImageView < FrameLayout[childCount=1]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13213661',
        },
      ],
    },
  ],
});
