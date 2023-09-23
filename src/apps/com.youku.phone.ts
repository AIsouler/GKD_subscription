import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      enable: false,
      key: 0,
      name: '开屏广告',
      desc: '占位，暂无作用',
      activityIds: 'com.youku.v2.HomePageEntry',
      rules: [],
      snapshotUrls: [],
    },
    {
      enable: false,
      key: 1,
      name: '更新弹窗',
      desc: '占位，暂无作用',
      activityIds: 'com.youku.v2.HomePageEntry',
      rules: [],
      snapshotUrls: [],
    },
    {
      key: 2,
      name: '青少年模式弹窗',
      activityIds: 'com.youku.phone.designatemode.adolescent.HomePageTipDialog',
      rules: '[text="青少年模式"] +(3) [text="我知道了"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12701050',
    },
    {
      key: 3,
      name: '视频推荐弹窗',
      activityIds: 'com.youku.vip.wrapper.VipHomeActivity',
      rules: '[id="com.youku.phone:id/closeView"][desc="关闭弹层"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12701029',
    },
  ],
});
