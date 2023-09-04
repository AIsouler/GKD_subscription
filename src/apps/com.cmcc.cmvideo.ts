import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
      rules: '[id=`com.cmcc.cmvideo:id/skip_button`]',
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
      rules: '[id="com.cmcc.cmvideo:id/btn_cancle"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12498307',
    },
    {
      key: 2,
      name: '右下角小广告',
      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
      rules: '[id="com.cmcc.cmvideo:id/iv_right_bottom_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12498315',
    },
  ],
});
