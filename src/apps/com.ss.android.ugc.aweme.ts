import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  deprecatedKeys: [2],
  groups: [
    {
      key: 0,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text="体验一下"] + [text="关闭"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/d2b6ee77-ae06-4873-a106-db4ce2324777',
          snapshotUrls: 'https://i.gkd.li/i/14321107',
        },
        {
          key: 1,
          quickFind: true,
          matches: '[text="开启青少年模式"] + * > [text="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/29534293-f3c7-4187-a36f-47e37fef2f42',
          snapshotUrls: 'https://i.gkd.li/i/14473006',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-关闭用户推荐',
      rules: [
        {
          key: 0,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="换一个"] - FrameLayout[clickable=true] > ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12520943'],
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[id="com.ss.android.ugc.aweme:id/desc"][text="减少此类推荐"]',
          snapshotUrls: 'https://i.gkd.li/i/12520962',
        },
        {
          key: 2,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="你可能感兴趣"] < LinearLayout + [text="隐藏"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12675396'],
        },
        {
          key: 3,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[text="朋友推荐"] +(2) @FrameLayout > [desc="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12675129',
        },
        {
          key: 4,
          activityIds:
            'com.ss.android.ugc.aweme.friends.ui.RawAddFriendsActivity',
          matches:
            '[text="朋友推荐"] < LinearLayout + FrameLayout > [desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12675245',
        },
        {
          key: 5,
          activityIds: [
            'com.ss.android.ugc.aweme.main.MainActivity',
            'com.miui.home.launcher.Launcher',
          ],
          name: '全屏广告-关闭朋友推荐弹窗',
          matches:
            '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12525387',
            'https://i.gkd.li/i/12525389',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '更新提示-关闭更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'LinearLayout[childCount=3] > [text="以后再说"][index=0]',
      snapshotUrls: [
        'https://i.gkd.li/i/12534016',
        'https://i.gkd.li/i/13328599',
      ],
    },
    {
      key: 4,
      name: '局部广告-首页左上角广告',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules:
        'ViewGroup + FrameLayout[id=null] > FrameLayout[childCount=2][id!=null] > ImageView[desc="关闭"][clickable=true][id!=null]',
      snapshotUrls: 'https://i.gkd.li/i/12749276',
    },
    {
      key: 5,
      name: '全屏广告-广告弹窗',
      activityIds: 'com.android.launcher.Launcher',
      quickFind: true,
      rules:
        '[id="android:id/content"] >2 RelativeLayout[childCount<=5] > @ImageView[clickable=true][id!=null] - TextView[text="广告"][id!=null]',
      snapshotUrls: 'https://i.gkd.li/i/12769137',
    },
    {
      key: 6,
      name: '评价提示-去商店评分',
      desc: '点击[取消]',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="取消"] +2 [text="五星好评"]',
      snapshotUrls: 'https://i.gkd.li/i/13053628',
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/4554c785-39e0-4eac-9cfb-f1b1c2976008',
    },
    {
      key: 7,
      quickFind: true,
      name: '功能类-设置无声进入抖音弹窗',
      desc: '点击[拒绝]',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="拒绝"] + [text="去设置"]',
      snapshotUrls: 'https://i.gkd.li/i/13256087',
    },
    {
      key: 10,
      name: '通知提示-请求开启通知提示信息',
      desc: '自动点击“暂不”',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          name: '顶部卡片',
          matches:
            '@[text="暂不"][focusable=true] < LinearLayout - LinearLayout >(2) [text="开启朋友通知"]',
          snapshotUrls: 'https://i.gkd.li/i/12675129',
        },
        {
          name: '半幅弹窗',
          matches: '[text="及时获得消息提醒"] +2 [text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13669790',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-自动勾选原图',
      desc: '聊天发送图片时自动勾选原图',
      quickFind: true,
      activityIds:
        'com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity',
      rules: '[text="原图"][desc="未选中/复选框 原图"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12846036', // 未选中
        'https://i.gkd.li/i/12846040', // 已选中
      ],
    },
    {
      key: 12,
      name: '全屏广告-休息提醒',
      quickFind: true,
      rules: [
        {
          matches: '@[text="取消"] + [text*="提醒我"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13241564',
            'https://i.gkd.li/i/13372604',
            'https://i.gkd.li/i/14160675',
          ],
        },
        {
          matches: '[text="管理使用时间"] + Button[text="忽略提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/13372725',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-添加快捷方式到桌面',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '搜索快捷方式',
          activityIds:
            'com.ss.android.ugc.aweme.search.activity.SearchResultActivity',
          action: 'back',
          matches: 'ViewGroup[desc="添加搜索到桌面"]',
          snapshotUrls: 'https://i.gkd.li/i/13338556',
        },
        {
          name: '商城快捷方式',
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="添加抖音商城到桌面"] +2 LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13669682',
        },
        {
          name: '搜索组件',
          quickFind: true,
          activityIds:
            'com.ss.android.ugc.aweme.search.activity.SearchResultActivity',
          matches: '[text="暂不开启"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b06cba6d-cb80-4999-8c0b-309d86f7a7a3',
          snapshotUrls: 'https://i.gkd.li/i/14325749',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-视频播放中途插入的打招呼界面',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: 'FrameLayout > @[desc="关闭"] + ViewGroup > [text$="打个招呼"]',
      snapshotUrls: 'https://i.gkd.li/i/13379307',
    },
    {
      key: 15,
      name: '全屏广告-关闭商城推荐',
      desc: '点击"不感兴趣"',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="不感兴趣"][clickable=true] + [text="去商城搜索更多"]',
      snapshotUrls: 'https://i.gkd.li/i/13800207',
    },
    {
      key: 16,
      quickFind: true,
      name: '局部广告-拍同款弹窗',
      desc: '点击不感兴趣',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '@LynxFlattenUI[text="不感兴趣"] +4 [text="拍同款"]',
          snapshotUrls: 'https://i.gkd.li/i/13996724',
        },
      ],
    },
    {
      key: 17,
      name: '全屏广告-[去首页商城]弹窗',
      desc: '点击[知道了]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ss.android.ugc.aweme.live.LiveDummyActivity',
          matches: '[text="去首页商城，查订单更方便"] +2 [text="知道了"]',
          exampleUrls:
            'https://m.gkd.li/57941037/385f4262-d744-4482-887c-be2e1f0c0943',
          snapshotUrls: 'https://i.gkd.li/i/14533732',
        },
      ],
    },
  ],
});
