import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          matches:
            '[id="android:id/tabhost"] >(3) [text="跳过广告"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12684954'],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.ss.android.mine.BaseSettingActivity'],
      rules: [
        {
          matches: '[text="升级版本"] + [desc="关闭"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12685000'],
        },
      ],
    },
  ],
});
