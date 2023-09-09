import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miaoying.appmy.cs',
  name: '新小财神影视',
  groups: [
    {
      key: -1,
      name: '关闭公告栏',
      desc: 'APP启动时出现的公告栏',
      activityIds: [
        'com.miaoying.appmy.cs.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '@[desc="我知道了"] + [desc="了解更多"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12522872',
    },
    {
      key: 0,
      name: '内部弹窗广告',
      desc: '点击右上角x按钮',
      delay: 750,
      activityIds: [
        'com.miaoying.appmy.cs.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches:
            '@ImageView[desc=null&&id=null] < FrameLayout[childCount=1] +n FrameLayout > FrameLayout > TextView[text.length=4]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12522881',
            'https://gkd-kit.gitee.io/import/12565480',
            'https://gkd-kit.gitee.io/import/12565507',
          ],
        },
        {
          matches: [
            '@ImageView < FrameLayout - ImageView < FrameLayout + FrameLayout > TextView[text.length=4]',
          ],
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12565475',
        },
        {
          matches: [
            '@ImageView < FrameLayout + FrameLayout + ImageView + FrameLayout + FrameLayout > TextView[text.length=4]',
          ],
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12565510',
        },
        {
          matches:
            'TextView[text=null] - FrameLayout > ImageView + FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12565522',
        },
      ],
    },
    {
      key: 1,
      delay: 500,
      name: '内部弹窗广告-2',
      desc: '点击右上角文字[跳过],此广告相同节点存在两种卡片,一种能准确关闭,另外一种(出现较少)节点位置与实际位置不同故不能关闭,如误触可关闭',
      activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12565375',
        'https://gkd-kit.gitee.io/import/12565408', // 节点位置错误的快照
      ],
      rules: '[id="close_btn"][text="跳过"]',
    },
  ],
});
