import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.thememanager',
  name: 'miui主题壁纸',
  groups: [
    {
      key: 1,
      name: '推荐下广告',
      desc: '注意如果使用ADB禁用了MIUI广告组件,点击此按钮会无反应,可关闭此规则,避免过多相同点击记录',
      rules: '[id=`com.android.thememanager:id/ad_close_btn`]',
    },
  ],
});
