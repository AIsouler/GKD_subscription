import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cmb.pb',
  name: '招商银行',
  deprecatedKeys: [0],
  groups: [
    {
      key: 10,
      name: '全屏广告-广告弹窗',
      activityIds:
        'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
      rules: '[id="cover-img"] + [text="关闭推荐"]',
      snapshotUrls: 'https://i.gkd.li/import/12706022',
    },
    {
      key: 11,
      name: '定位提示-请求定位权限弹窗',
      quickFind: true,
      activityIds: [
        'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        'cmb.pb.app.search.PBSearchWebActivity',
      ],
      rules:
        '@[id="cmb.pb:id/ivDelete"][desc="关闭"] - FrameLayout > [id="cmb.pb:id/tvDescription"][text*="获取您的位置"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12706029',
        'https://i.gkd.li/import/13248893',
        'https://i.gkd.li/import/13897345',
      ],
    },
  ],
});
