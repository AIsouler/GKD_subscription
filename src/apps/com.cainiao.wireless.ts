import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.cainiao.wireless.homepage.view.activity.AdsActivity',
      rules: [
        {
          matches: '[text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12901758',
            'https://gkd-kit.gitee.io/import/12724823',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '包裹页面-弹窗广告',
      quickFind: true,
      activityIds: [
        'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      ],
      rules: 'RelativeLayout > ImageView[desc="关闭"]',
      snapshotUrls: ['https://gkd-kit.songe.li/import/12914371'],
    },
    {
      key: 2,
      name: '包裹页面-地图底部横条广告',
      activityIds: [
        'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      ],
      rules: 'View[desc="立即查看"] +2 ImageView[id=null]',
      snapshotUrls: ['https://gkd-kit.songe.li/import/12914450'],
    },
  ],
});
