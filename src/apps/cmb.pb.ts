import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cmb.pb',
  name: '招商银行',
  deprecatedKeys: [0],
  groups: [
    {
      key: 3,
      name: '局部广告-首页活动悬浮广告',
      quickFind: true,
      activityIds: 'cmb.pb.app.mainframe.container.PBMainActivity',
      rules: '[vid="float_window"] > [vid="ivCancle"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/14208669',
    },
    {
      key: 10,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[id="cover-img"] + [text="关闭推荐"]',
          snapshotUrls: 'https://i.gkd.li/import/12706022',
        },
        {
          key: 1,
          activityIds: 'com.pb.marketing.PopupWindowActivity',
          matches: '[desc^="活动图片"] + [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/14208693',
        },
      ],
    },
    {
      key: 11,
      name: '定位提示-请求定位权限弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="关闭"] - * > [text*="开启"][text*="定位"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12706029',
        'https://i.gkd.li/import/13248893',
        'https://i.gkd.li/import/13897345',
        'https://i.gkd.li/import/14208717',
      ],
    },
  ],
});
