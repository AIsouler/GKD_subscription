import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xyhui.start.LoadingActivity',
      rules: '[name$="ViewGroup"||name$="LinearLayout"] > [text^="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12642486',
        'https://gkd-kit.songe.li/import/12846496',
        'https://gkd-kit.songe.li/import/12868232',
      ],
    },
    {
      key: 1,
      name: '首页-优量汇弹窗广告',
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.huawei.android.launcher.unihome.UniHomeLauncher',
        'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'TextView - View < FrameLayout - FrameLayout >(2) ImageView[id=null]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642482', // 查看详情
            'https://gkd-kit.gitee.io/import/12646347', // 立即打开
            'https://gkd-kit.gitee.io/import/12646519', // 立即抢购
            'https://gkd-kit.songe.li/import/12793157', // 立即安装
            'https://gkd-kit.songe.li/import/12793177', // 立即下载
            'https://gkd-kit.songe.li/import/12868157', // 立即下载, activityId = 'com.xyhui.start.LoadingActivity'
            'https://gkd-kit.songe.li/import/12868369', // 去微信看看
            'https://gkd-kit.gitee.io/import/12646541', // 华为手机的快照，activityId = 'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity'
          ],
        },
        {
          key: 2,
          matches:
            'TextView - View < FrameLayout -(4) FrameLayout > ImageView[id=null]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12643276', // 查看详情
            'https://gkd-kit.songe.li/import/12793180', // 立即下载
            'https://gkd-kit.songe.li/import/12868503', // 去微信看看
            'https://gkd-kit.gitee.io/import/12646420', // 华为手机的快照，activityId = 'com.huawei.android.launcher.unihome.UniHomeLauncher'
          ],
        },
      ],
    },
    {
      key: 2,
      name: '首页-浮窗广告',
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/deleteIv"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12846543',
        'https://gkd-kit.songe.li/import/12868119',
      ],
    },
  ],
});
