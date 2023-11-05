import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673680'],
        },
        {
          // 无法使用 quickFind
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13224627',
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'net.csdn.csdnplus.activity.MainActivity',
        'net.csdn.csdnplus.activity.SetActivity',
      ],
      rules: [
        {
          matches:
            '[id="net.csdn.csdnplus:id/update"] -2 [id="net.csdn.csdnplus:id/cancel"]',
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
      quickFind: true,
      activityIds: ['net.csdn.csdnplus.activity.MainActivity'],
      rules: [
        {
          key: 1,
          matches: '[text="广告"] + [id="net.csdn.csdnplus:id/iv_more"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12673738',
            'https://i.gkd.li/import/13224538',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          matches:
            '@[clickable=true] > [id="net.csdn.csdnplus:id/img_feedback_title"][text="重复推荐该广告"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12673787',
            'https://i.gkd.li/import/13224551',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '关闭好评弹窗',
      resetMatch: 'app',
      actionMaximum: 1,
      quickFind: true,
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: '[id="net.csdn.csdnplus:id/tv_cancel"][text="残忍拒绝"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13251085',
    },
    {
      enable: false,
      key: 10,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      name: '请求推送通知弹窗',
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: {
        matches: [
          '[text="开启推送通知"]',
          '[id="net.csdn.csdnplus:id/iv_close"]',
        ],
        snapshotUrls: ['https://gkd-kit.gitee.io/import/12673638'],
      },
    },
  ],
});
