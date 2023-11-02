import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.thememanager',
  name: 'miui主题壁纸',
  groups: [
    {
      key: 1,
      name: '主题详情底部广告',
      desc: '注意如果使用ADB禁用了MIUI广告组件,点击此按钮会无反应,可关闭此规则,避免过多相同点击记录',
      rules:
        '[id="com.android.thememanager:id/ad_close_btn"][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/import/13227330',
    },
    {
      key: 2,
      name: '广告弹窗',
      quickFind: true,
      activityIds: 'com.android.thememanager.ThemeResourceTabActivity',
      rules: 'ImageView[id="com.android.thememanager:id/cancel"][desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13215038',
    },
  ],
});
