import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'net.csdn.csdnplus.activity.SplashActivity',
      rules: [
        {
          matches: '[id="net.csdn.csdnplus:id/tv_skip_splashimage"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673680'],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'net.csdn.csdnplus.activity.MainActivity',
        'net.csdn.csdnplus.activity.SetActivity',
      ],
      rules: [
        {
          matches:
            '@[id="net.csdn.csdnplus:id/cancel"][text="以后再说"] +(2) [id="net.csdn.csdnplus:id/update"][text="立即安装"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12673693',
            'https://gkd-kit.gitee.io/import/12673654',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '信息流广告',
      activityIds: ['net.csdn.csdnplus.activity.MainActivity'],
      rules: [
        {
          key: 1,
          matches:
            'TextView[id=null][text="广告"] + ImageView[id="net.csdn.csdnplus:id/iv_more"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673738'],
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '[id="net.csdn.csdnplus:id/img_feedback_title"][text="虚假广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673787'],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求推送通知弹窗',
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: {
        matches:
          '@[id="net.csdn.csdnplus:id/iv_close"][clickable=true] + LinearLayout > [text="开启推送通知"]',
        snapshotUrls: ['https://gkd-kit.gitee.io/import/12673638'],
      },
    },
  ],
});
