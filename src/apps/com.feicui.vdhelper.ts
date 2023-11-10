import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.feicui.vdhelper',
  name: '翡翠视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.ys.resemble.ui.login.splash.SplashSecondAdActivity'],
      rules: '[id="com.feicui.vdhelper:id/txt_skip"][text^="跳过"]',
      snapshotUrls: ['https://i.gkd.li/import/12700730'],
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: ['com.ys.resemble.ui.MainActivity'],
      rules: [
        {
          matches: 'ImageView - FrameLayout >(2) ImageView[id=null]',
          snapshotUrls: ['https://i.gkd.li/import/12700749'],
        },
        {
          matches: [
            'ImageView + [id=null][text="广告"]',
            'ImageView + [id=null][text="跳过"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/12700759'],
        },
        {
          matches:
            '[text="广告"] - ImageView < ViewGroup -(2) ViewGroup >(2) ImageView[id=null]',
          snapshotUrls: ['https://i.gkd.li/import/12700800'],
        },
        {
          activityIds: ['com.sigmob.sdk.base.common.TransparentAdActivity'],
          matches: '[id="close_btn"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700837',
            'https://i.gkd.li/import/12700848', // 为了兼容此快照，仅使用 id="close_btn" 进行匹配
          ],
        },
      ],
    },
  ],
});
