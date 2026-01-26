import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.search',
  name: '智慧搜索',
  groups: [
    {
      key: 0,
      name: '分段广告-下拉搜索横幅广告',
      fastQuery: true,
      activityIds: ['.HomeActivity', '.MainActivity'],
      rules: [
        {
          key: 0,
          matches:
            '[id="com.huawei.search:id/iv_topic_close_in_image" || id="com.huawei.search:id/iv_topic_left_close" || id="com.huawei.search:id/iv_topic_close_in_pps"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12667938',
            'https://i.gkd.li/i/12745008',
            'https://i.gkd.li/i/12841076',
            'https://i.gkd.li/i/13266095',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: 'TextView[text="直接关闭"]',
          snapshotUrls: ['https://i.gkd.li/i/12745001'],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-搜索框下广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.HomeActivity',
          matches: '[vid="btn_full_mode_cancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24856481',
        },
      ],
    },
  ],
});
