import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.androidqqmail',
  name: 'qq邮箱',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.tencent.qqmail.launcher.desktop.LauncherActivity',
      rules: 'RelativeLayout > ImageView[id!=null] + ImageView[id!=null]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12775855',
    },
    {
      key: 0,
      name: '广告邮件-列表卡片广告',
      activityIds: 'com.tencent.qqmail.fragment.base.MailFragmentActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.tencent.androidqqmail:id/advertise_view_ad"]', // 需要补充快照
        },
        {
          key: 1,
          matches:
            'LinearLayout > TextView + @LinearLayout[id!=null][clickable=true] > [text="广告"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12775857',
        },
        {
          preKeys: [1],
          key: 9,
          matches:
            '[text="赞助商提供的广告"] < FrameLayout + @FrameLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12775862',
        },
      ],
    },
  ],
});
