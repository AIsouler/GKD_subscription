import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bilibili.studio',
  name: '必剪',
  groups: [
    {
      enable: false,
      key: 0,
      name: '通知权限请求',
      desc: '会出现在创作、模板、我的页面，自动点击不开启。',
      quickFind: true,
      activityIds: 'com.bcut.homepage.widget.MainActivity',
      rules: [
        {
          matches: 'TextView[text="开启设置"] - TextView[text="取消"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12867401', // 创作页面
        },
        {
          matches: 'ImageView[id="com.bilibili.studio:id/iv_close"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12908880', // 模板页面
        },
        {
          matches: 'ImageView[id="com.bilibili.studio:id/iv_push_tips_close"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12908886', // 我的页面
        },
      ],
    },
  ],
});
