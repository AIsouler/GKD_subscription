import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.netease.cloudmusic:id/skipBtn"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12700920'],
    },
    {
      enable: false,
      key: 1,
      name: '广告卡片',
      desc: '点击【x】-【直接关闭】',
      quickFind: true,
      matchDelay: 3000,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
            'com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2',
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
          ],
          matches: '[id="com.netease.cloudmusic:id/adTagView"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12829944',
            'https://gkd-kit.gitee.io/import/12723229',
            'https://gkd-kit.gitee.io/import/12829938',
            'https://gkd-kit.gitee.io/import/12829964',
            'https://gkd-kit.gitee.io/import/12829953',
          ],
        },
        {
          preKeys: 0,
          matches: '[text="直接关闭"]',
          snapshotUrls: ['https://i.gkd.li/import/12829967'],
        },
      ],
    },
    {
      key: 2,
      name: '我的页面-中间滚动广告',
      quickFind: true,
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules:
        '[id="com.netease.cloudmusic:id/auto_scroll_switcher"] + [id="com.netease.cloudmusic:id/close_btn"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12745666'],
    },
    {
      key: 3,
      name: '主页-免费听歌',
      quickFind: true,
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules: ['@ImageView + ViewGroup > TextView[text="VIP歌曲免费听30分钟"]'],
      snapshotUrls: ['https://i.gkd.li/import/12843383'],
    },
    {
      key: 4,
      name: '广告弹窗',
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '音乐专辑售卖广告弹窗',
          matches: 'WebView >n View > TextView + TextView + TextView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13188737',
        },
        {
          key: 1,
          name: '京东双十一广告弹窗',
          matches: '[text="广告"] < ViewGroup + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13229016',
        },
      ],
    },
    {
      enable: false,
      key: 5,
      name: 'VIP 弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] <2 ViewGroup < ViewGroup  + ScrollView [text ="会员套餐"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13189055',
            'https://gkd-kit.gitee.io/import/13260416',
          ],
        },
        {
          key: 1,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '@ImageView - ViewGroup > [text="解锁千万级会员曲库"]',
          snapshotUrls: 'https://i.gkd.li/import/13228955',
        },
        {
          key: 2,
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '@ImageView -2 ViewGroup [text="解锁更高音质"]',
          snapshotUrls: 'https://i.gkd.li/import/13230603',
        },
        {
          key: 3,
          name: 'VIP续费',
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          matches:
            'ImageView < @ViewGroup -3 ViewGroup [text="您的黑胶VIP已过期"]',
          snapshotUrls: 'https://i.gkd.li/import/13230605',
        },
      ],
    },
    {
      key: 6,
      name: '更新弹窗',
      quickFind: true,
      matchLauncher: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          ],
          matches: '[id="com.netease.cloudmusic:id/md_dialog_cm_close_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13233790',
            'https://i.gkd.li/import/13197457',
            'https://i.gkd.li/import/13228878',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '播放界面右上角-免费听歌',
      quickFind: true,
      activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
      rules:
        'TextView[text^="看视频，免费畅听VIP歌曲"] + [id="com.netease.cloudmusic:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13197457',
    },
  ],
});
