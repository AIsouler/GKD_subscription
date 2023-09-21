import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
      rules: '[id="com.alibaba.wireless:id/v5_splash_over"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12684411',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.alibaba.wireless.launch.home.V5HomeActivity',
        'com.alibaba.wireless.workbench.myali.MyAliSettingActivity',
      ],
      rules:
        '[id="com.alibaba.wireless:id/update_title"] +(2) LinearLayout >(2) [text="取消"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12684422',
        'https://gkd-kit.gitee.io/import/12684426',
      ],
    },
  ],
});
