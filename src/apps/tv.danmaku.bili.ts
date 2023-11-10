import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  deprecatedKeys: [3, 5],
  groups: [
    {
      key: -1,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      name: '开屏广告',
      desc: '开屏广告,任意界面切回APP开屏广告',
      rules: '[id="tv.danmaku.bili:id/count_down"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12705270',
    },
    {
      quickFind: true,
      key: 0,
      name: '评论区顶部公告横幅',
      rules:
        'LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[id="tv.danmaku.bili:id/close"][desc=`关闭`]',
      excludeActivityIds: [
        'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3', // 直播间
        'tv.danmaku.bili.MainActivityV2', // 主页
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12785461',
        'https://i.gkd.li/import/12775156',
      ],
    },
    {
      quickFind: true,
      key: 1,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      name: '青少年模式弹窗',
      rules: 'TextView[text*=`青少年模式`] + TextView[text=`我知道了`]',
    },
    {
      quickFind: true,
      key: 2,
      name: '动态推荐广告卡片',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      matchDelay: 5000,
      rules: [
        {
          key: 1,
          matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
          snapshotUrls: 'https://i.gkd.li/import/12700222',
        },
        {
          preKeys: 1,
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://i.gkd.li/import/12700243',
        },
      ],
    },
    // key = 3已弃用
    {
      key: 4,
      name: '视频底部广告',
      desc: '点击[视频底部,评论区顶部]的广告卡片右侧菜单按钮,选择屏蔽广告原因',
      activityIds: [
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules: [
        {
          quickFind: true,
          key: 0,
          name: '点击广告卡片右侧菜单图标',
          matches:
            'FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"] >n [id^="tv.danmaku.bili:id/more"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642260', // n = 2
            'https://i.gkd.li/import/12705266', // n = 3
            'https://i.gkd.li/import/12776568', // id="tv.danmaku.bili:id/more_layout"
            'https://i.gkd.li/import/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
          ],
        },
        {
          quickFind: true,
          preKeys: 0,
          key: 1,
          name: '点击屏蔽广告',
          matches:
            '[id="tv.danmaku.bili:id/menu_text"][text="屏蔽广告"] < [id="tv.danmaku.bili:id/title"] + [id="tv.danmaku.bili:id/dislike_reasons"] >2 [id="tv.danmaku.bili:id/reason1_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642261', // 屏蔽广告菜单弹窗
            'https://i.gkd.li/import/12706768', // 首页点击[视频卡片右下角菜单图标]后出现的普通菜单弹窗, 限制标题 [text="屏蔽广告"] 避免误触此弹窗
          ],
        },
      ],
    },
    // key = 5已弃用
    {
      quickFind: true,
      key: 6,
      name: '更新弹窗',
      actionMaximum: 1,
      matchDelay: 5000,
      activityIds: [
        'com.bilibili.app.preferences.BiliPreferencesActivity',
        'tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity',
        'tv.danmaku.bili.MainActivityV2',
      ],
      rules: [
        {
          key: 1,
          matches: '[id="tv.danmaku.bili:id/update_btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12649689', // com.bilibili.app.preferences.BiliPreferencesActivity
            'https://i.gkd.li/import/13212209', // tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity
            'https://i.gkd.li/import/13228977',
          ],
        },
      ],
    },
    {
      quickFind: true,
      key: 7,
      matchTime: 10000,
      name: '视频悬浮广告',
      desc: '领取大会员月卡,B站免流星卡',
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      actionMaximum: 1,
      rules: ['[id="tv.danmaku.bili:id/toast_x"]'],
      snapshotUrls: [
        'https://i.gkd.li/import/12892611',
        'https://i.gkd.li/import/13308344',
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb',
      ],
    },
    {
      key: 8,
      name: '直播间卡片广告',
      desc: '直播间底部售卖卡片-点击右上角x',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: '[id="tv.danmaku.bili:id/shopping_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13200549',
    },
    {
      key: 9,
      enable: false,
      name: '请求通知权限弹窗',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      quickFind: true,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[text="打开推送通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13229159',
    },
    {
      key: 10,
      enable: false,
      name: '首页-推荐视频卡片广告', // 流程与 key=4 视频底部广告 基本一致
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击广告卡片右下角菜单按钮',
          matches:
            '[id="tv.danmaku.bili:id/ad_tint_frame"] [id="tv.danmaku.bili:id/more"]',
          snapshotUrls: 'https://i.gkd.li/import/13256570',
        },
        {
          name: '点击[不感兴趣]',
          preKeys: 0,
          matches: '[id="tv.danmaku.bili:id/menu_layout"] [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13256605',
        },
      ],
    },
  ],
});
