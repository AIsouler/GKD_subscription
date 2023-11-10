import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          snapshotUrls: [
            'https://i.gkd.li/import/12642486',
            'https://i.gkd.li/import/12846496',
            'https://i.gkd.li/import/12868232',
          ],
          matches: '[text^="跳过"][text.length<=10]',
        },
        {
          matches: '[id="com.xyhui:id/ms_skipView"]',
          snapshotUrls: ['https://i.gkd.li/import/13197417'],
        },
      ],
    },
    {
      key: 1,
      name: '首页-弹窗广告',
      matchLauncher: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'TextView - View < FrameLayout - FrameLayout >(2) ImageView[id=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642482', // 查看详情
            'https://i.gkd.li/import/12646347', // 立即打开
            'https://i.gkd.li/import/12646519', // 立即抢购
            'https://i.gkd.li/import/12793157', // 立即安装
            'https://i.gkd.li/import/12793177', // 立即下载
            'https://i.gkd.li/import/12868157', // 立即下载, activityId = 'com.xyhui.start.LoadingActivity'
            'https://i.gkd.li/import/12868369', // 去微信看看
            'https://i.gkd.li/import/12646541', // 华为手机的快照，activityId = 'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity'
          ],
        },
        {
          key: 2,
          matches:
            'TextView - View < FrameLayout -(4) FrameLayout > ImageView[id=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/12643276', // 查看详情
            'https://i.gkd.li/import/12793180', // 立即下载
            'https://i.gkd.li/import/12868503', // 去微信看看
            'https://i.gkd.li/import/12646420', // 华为手机的快照，activityId = 'com.huawei.android.launcher.unihome.UniHomeLauncher'
          ],
        },
        {
          key: 3,
          matches:
            '[text="广告"] <n * < * < ViewGroup - ViewGroup >n ViewGroup > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/13259196',
            'https://i.gkd.li/import/13259198',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '首页-右侧浮窗广告',
      quickFind: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/deleteIv"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12846543',
        'https://i.gkd.li/import/12868119',
      ],
    },
    {
      enable: false,
      key: 3,
      name: '升级提示',
      quickFind: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/closeIv"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12908853',
        'https://i.gkd.li/import/12908865',
      ],
    },
    {
      key: 4,
      name: '我的-弹窗广告',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules:
        '[text="查看详情"] <n FrameLayout -n FrameLayout > [(name="android.widget.ImageView"&&clickable=false)||name="android.view.View"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13259183',
        'https://i.gkd.li/import/13259194',
      ],
    },
  ],
});
