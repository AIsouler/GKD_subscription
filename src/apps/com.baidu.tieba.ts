import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '数字倒计时广告,圆形倒计时广告',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.pb.pb.main.PbActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_circle_skip_view"] TextView[text="跳过"]', // 需要补充快照
        },
        { key: 1, matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]' }, // 需要补充快照
        {
          key: 2,
          matches: 'TextView[text*="广告"] - TextView[text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12775906',
        },
        {
          key: 3,
          matches: '@TextView[text="跳过"] + TextView[text.length=1]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12566191'],
        },
      ],
    },
    {
      key: 1,
      name: '任意界面-选择不喜欢理由-不感兴趣',
      rules: '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12775914',
    },
    {
      key: 2,
      name: '首页/贴吧帖子列表-推荐列表-长得像帖子的广告卡片',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.frs.FrsActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'TextView[text$="广告"] < RelativeLayout <n LinearLayout - RelativeLayout > LinearLayout > FrameLayout +n RelativeLayout > LinearLayout',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12775930',
        },
      ],
    },
    {
      key: 3,
      name: '某个广告卡片',
      desc: '忘记是哪个卡片了',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.pb.pb.main.PbActivity',
      ],
      rules:
        'TextView[text=`广告`] <n FrameLayout <n LinearLayout - RelativeLayout @FrameLayout > ImageView', // 需要补充快照
    },
    // key=4 的规则组已经删除, 后续不可添加 key=4 的规则组
    {
      key: 5,
      name: '帖子评论区广告卡片',
      activityIds: [
        'com.baidu.tieba.pb.pb.main.PbActivity',
        'com.baidu.tieba.frs.FrsActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'TextView[text="广告"] <n FrameLayout +n RelativeLayout[id="com.baidu.tieba:id/obfuscated"] >n ImageView',
        },
        {
          key: 1,
          matches:
            'TextView[text$="广告"] +n FrameLayout[id="com.baidu.tieba:id/obfuscated"] >n ImageView[id=null]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12775913',
        },
        {
          key: 2,
          matches:
            'TextView[text$="广告"] < RelativeLayout <n LinearLayout - RelativeLayout >n @FrameLayout > ImageView[id=null][desc=null]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12775916',
            'https://gkd-kit.songe.li/import/12775892', // 指定点击目标为具备 clickable=true 属性的 @FrameLayout，防止在这个快照误触点击收藏
          ],
        },
      ],
    },
    {
      key: 6,
      name: '首页左侧游戏广告小图标',
      activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
      rules: [
        'ImageView[clickable=true] - RelativeLayout[clickable=false][childCount=1] > ImageView[clickable=true]',
      ],
    },
    {
      key: 7,
      name: '升级弹窗',
      activityIds: 'com.baidu.tieba.UpdateDialog',
      rules: '[text="稍后再说"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12496934',
    },
    {
      key: 8,
      name: '帖子底部广告卡片',
      activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
      rules:
        'LinearLayout > RelativeLayout > ImageView[id=null][clickable=true]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12775882',
    },
  ],
});
