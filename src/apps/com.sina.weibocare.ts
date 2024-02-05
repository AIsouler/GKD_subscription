import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sina.weibocare',
  name: 'WeiboBig',
  groups: [
    {
      enable: false,
      key: 1,
      name: '功能类-流量继续播放视频',
      desc: '点击[播放]',
      quickFind: true,
      activityIds: 'com.weico.international.activity.MainFragmentActivity',
      rules: '[id="com.sina.weibocare:id/ed_btn_positive"][text="播放"]',
      snapshotUrls: 'https://i.gkd.li/import/13253223',
    },
  ],
});
