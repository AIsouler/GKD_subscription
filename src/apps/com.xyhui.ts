import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xyhui.start.LoadingActivity',
      rules: 'ImageView -(4) LinearLayout > [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642486',
    },
    {
      key: 1,
      name: '优量汇广告',
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.huawei.android.launcher.unihome.UniHomeLauncher',
        'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            '[text="查看详情"||text="立即打开"||text="立即抢购"||text="立即安装"||text="立即下载"] - View < FrameLayout - FrameLayout >(2) ImageView[id=null]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642482', // 查看详情
            'https://gkd-kit.gitee.io/import/12646347', // 立即打开
            'https://gkd-kit.gitee.io/import/12646519', // 立即抢购
            'https://gkd-kit.songe.li/import/12793157', // 立即安装
            'https://gkd-kit.songe.li/import/12793177', // 立即下载
            'https://gkd-kit.gitee.io/import/12646541', // 华为手机的快照，activityId = 'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity'
          ],
        },
        {
          key: 2,
          matches:
            '[text="查看详情"||text="立即打开"||text="立即抢购"||text="立即下载"] - View < FrameLayout -(4) FrameLayout > ImageView[id=null]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12643276', // 查看详情
            'https://gkd-kit.songe.li/import/12793180', // 立即下载
            'https://gkd-kit.gitee.io/import/12646420', // 华为手机的快照，activityId = 'com.huawei.android.launcher.unihome.UniHomeLauncher'
          ],
        },
      ],
    },
  ],
});
