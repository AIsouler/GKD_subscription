import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.feicui.vdhelper',
  name: '翡翠视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
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
