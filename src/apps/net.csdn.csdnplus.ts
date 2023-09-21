import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'net.csdn.csdnplus.activity.SplashActivity',
      rules: '[id="net.csdn.csdnplus:id/tv_skip_splashimage"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12668884',
    },
    {
      key: 1,
      name: '推荐条目广告',
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            'TextView[text="广告"] + ImageView[id="net.csdn.csdnplus:id/iv_more"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12668903',
        },
        {
          key: 1,
          matches:
            '[id="net.csdn.csdnplus:id/img_feedback_title"][text="虚假广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12668923',
        },
      ],
    },
  ],
});
