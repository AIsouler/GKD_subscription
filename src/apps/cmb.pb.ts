import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cmb.pb.app.mainframe.container.PBMainActivity',
      rules: '[id="cmb.pb:id/ll_launch_ad_skip_hot_area"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12706015',
    },
    {
      key: 10,
      name: '朝朝宝-广告弹窗',
      activityIds:
        'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
      rules: '[id="cover-img"] + [text="关闭推荐"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12706022',
    },
    {
      key: 11,
      name: '请求定位权限弹窗',
      quickFind: true,
      activityIds:
        'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
      rules:
        '@[id="cmb.pb:id/ivDelete"][desc="关闭"] - FrameLayout > [id="cmb.pb:id/tvDescription"][text*="获取您的位置"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12706029',
        'https://i.gkd.li/import/13248893',
      ],
    },
  ],
});
