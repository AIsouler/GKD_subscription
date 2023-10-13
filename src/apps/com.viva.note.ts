import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.viva.note',
  name: '囧次元',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      rules: [
        {
          matches: 'TextView[text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12888429',
            'https://gkd-kit.gitee.io/import/12888730',
            'https://gkd-kit.gitee.io/import/12888762',
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
            'https://gkd-kit.gitee.io/import/12888361',
            'https://gkd-kit.gitee.io/import/12888389',
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
            'https://gkd-kit.gitee.io/import/12888388',
            'https://gkd-kit.gitee.io/import/12888419',
            'https://gkd-kit.gitee.io/import/12888578',
            'https://gkd-kit.gitee.io/import/12888647',
          ],
        },
        {
          matches:
            'TextView[text="反馈"] + @ImageView[clickable=true] + TextView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12888945',
        },
      ],
    },
  ],
});
