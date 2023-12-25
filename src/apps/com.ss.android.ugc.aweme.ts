import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13460370',
        },
        {
          actionMaximumKey: 0,
          matches: '[desc="跳过广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13216121',
        },
      ],
    },
    {
      key: 0,
      name: '关闭青少年弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'Button[text=`开启青少年模式`] + * > Button[text!=null]',
    },
    {
      key: 1,
      name: '关闭用户推荐',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[id="com.ss.android.ugc.aweme:id/desc"][text="减少此类推荐"]',
          snapshotUrls: 'https://i.gkd.li/import/12520962',
        },
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="换一个"] - FrameLayout[clickable=true] > ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12520943'],
        },

        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="你可能感兴趣"] < LinearLayout + [text="隐藏"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12675396'],
        },
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[text="朋友推荐"] +(2) @FrameLayout > [desc="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12675129',
        },
        {
          activityIds:
            'com.ss.android.ugc.aweme.friends.ui.RawAddFriendsActivity',
          matches:
            '[text="朋友推荐"] < LinearLayout + FrameLayout > [desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12675245',
        },
      ],
    },
    {
      key: 2,

      quickFind: true,
      activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
      name: '关闭朋友推荐弹窗',
      rules: '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme:id/close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12525387',
        'https://i.gkd.li/import/12525389',
      ],
    },
    {
      key: 3,
      name: '关闭更新弹窗',

      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="以后再说"] +2 [text="立即升级"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12534016',
        'https://i.gkd.li/import/13328599',
      ],
    },
    {
      key: 4,
      name: '首页左上角广告',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules:
        'ViewGroup + FrameLayout[id=null] > FrameLayout[childCount=2][id!=null] > ImageView[desc="关闭"][clickable=true][id!=null]',
      snapshotUrls: 'https://i.gkd.li/import/12749276',
    },
    {
      key: 5,
      name: '广告弹窗',
      quickFind: true,
      rules:
        '[id="android:id/content"] >2 RelativeLayout[childCount<=5] > @ImageView[clickable=true][id!=null] - TextView[text="广告"][id!=null]',
      snapshotUrls: 'https://i.gkd.li/import/12769137',
    },
    {
      key: 6,
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      name: '去商店评分',
      desc: '点击[取消]',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="取消"] +2 [text="五星好评"]',
      snapshotUrls: 'https://i.gkd.li/import/13053628',
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/4554c785-39e0-4eac-9cfb-f1b1c2976008',
    },
    {
      key: 7,
      enable: false,
      quickFind: true,
      name: '设置无声进入抖音',
      desc: '点击[拒绝]',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="拒绝"] + [text="去设置"]',
      snapshotUrls: 'https://i.gkd.li/import/13256087',
    },
    {
      enable: false,
      key: 10,
      name: '请求开启通知提示信息',
      desc: '自动点击“暂不”',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          name: '顶部卡片',
          matches:
            '@[text="暂不"][focusable=true] < LinearLayout - LinearLayout >(2) [text="开启朋友通知"]',
          snapshotUrls: 'https://i.gkd.li/import/12675129',
        },
        {
          name: '半幅弹窗',
          matches: '[text="及时获得消息提醒"] +2 [text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/import/13669790',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '自动勾选原图',
      desc: '聊天发送图片时自动勾选原图',
      quickFind: true,
      activityIds:
        'com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity',
      rules: '[text="原图"][desc="未选中/复选框 原图"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12846036', // 未选中
        'https://i.gkd.li/import/12846040', // 已选中
      ],
    },
    {
      enable: false,
      key: 12,
      name: '休息提醒',
      quickFind: true,
      rules: [
        {
          matches: '[text="可进入使用管理助手更改设置"] -2 Button[text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13241564',
            'https://i.gkd.li/import/13372604',
          ],
        },
        {
          matches: '[text="管理使用时间"] + Button[text="忽略提醒"]',
          snapshotUrls: 'https://i.gkd.li/import/13372725',
        },
      ],
    },
    {
      key: 13,
      name: '添加快捷方式到桌面',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '搜索快捷方式',
          activityIds:
            'com.ss.android.ugc.aweme.search.activity.SearchResultActivity',
          action: 'back',
          matches: 'ViewGroup[desc="添加搜索到桌面"]',
          snapshotUrls: 'https://i.gkd.li/import/13338556',
        },
        {
          name: '商城快捷方式',
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="添加抖音商城到桌面"] +2 LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13669682',
        },
      ],
    },
    {
      key: 14,
      name: '视频播放中途插入的打招呼界面',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: 'FrameLayout > @[desc="关闭"] + ViewGroup > [text$="打个招呼"]',
      snapshotUrls: 'https://i.gkd.li/import/13379307',
    },
  ],
});
