import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '阅读页面底部广告',
      activityIds: [
        'com.dragon.read.ad.banner.ui',
        'com.dragon.read.reader.ReaderActivity',
        'com.dragon.read.reader.ui.ReaderActivity',
      ],
      rules: [
        {
          matches: '@[clickable=true] TextView[text="关闭此条广告"]',
        },
        {
          matches: '@ImageView - LinearLayout TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12908734',
        },
        {
          matches:
            '[id="com.dragon.read:id/root_view"] >n ViewGroup[childCount=4] > @FrameLayout[id!=null][clickable=true][childCount=1] > ImageView[visibleToUser=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12716444',
            'https://gkd-kit.gitee.io/import/13062909', // 误触
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.dragon.read.update',
      rules: '@[text="以后再说"] + [text="优先体验"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12716477',
    },
    {
      key: 2,
      name: '右侧悬浮红包',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules:
        '[id="android:id/content"] > FrameLayout > RelativeLayout[childCount=1][clickable=true] > RelativeLayout[childCount=3] > ImageView[id!=null][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12716506',
    },
    {
      key: 3,
      name: '优惠券弹窗',
      rules: [
        {
          key: 0,
          name: '电商惊喜券',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@LynxFlattenUI[id=null][text=""][clickable=true] - [text="去逛商城"] -4 [text$="电商惊喜券"] ',
          snapshotUrls: 'https://i.gkd.li/import/12910159',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击【取消】',
      activityIds: 'com.dragon.read.widget.ConfirmDialogBuilder',
      rules:
        '@[text="取消"] < LinearLayout -2 LinearLayout > [text="开启推送提醒"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12716592',
    },
    {
      key: 11,
      name: '广告弹窗',
      desc: '点击底部圆形x图标',
      quickFind: true,
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules:
        '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12878266',
    },
    {
      key: 12,
      name: '关闭阅读-全屏广告',
      desc: '点击右上角【关闭】',
      quickFind: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: 'TextView[text="广告"] +2 Button[id="com.dragon.read:id/close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13191156',
    },
  ],
});
