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
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12705270',
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
      key: 0,
      name: '评论区顶部公告横幅',
      rules:
        'LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[id="tv.danmaku.bili:id/close"][desc=`关闭`]',
      excludeActivityIds: [
        'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3', // 直播间
        'tv.danmaku.bili.MainActivityV2', // 主页
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12785461',
        'https://gkd-kit.gitee.io/import/12775156',
      ],
    },
    {
      quickFind: true,
      key: 2,
      name: '动态推荐广告卡片',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700222',
        },
        {
          preKeys: 1,
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700243',
        },
      ],
    },
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
            'https://gkd-kit.gitee.io/import/12642260', // n = 2
            'https://gkd-kit.gitee.io/import/12705266', // n = 3
            'https://i.gkd.li/import/12776568', // id="tv.danmaku.bili:id/more_layout"
            'https://gkd-kit.gitee.io/import/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
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
            'https://gkd-kit.gitee.io/import/12642261', // 屏蔽广告菜单弹窗
            'https://gkd-kit.gitee.io/import/12706768', // 首页点击[视频卡片右下角菜单图标]后出现的普通菜单弹窗, 限制标题 [text="屏蔽广告"] 避免误触此弹窗
          ],
        },
      ],
    },
    {
      quickFind: true,
      key: 6,
      name: '更新弹窗',
      activityIds: 'com.bilibili.app.preferences.BiliPreferencesActivity',
      rules: [
        '[id="tv.danmaku.bili:id/update_btn_confirm"] + [id="tv.danmaku.bili:id/update_btn_cancel"]',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12649689',
    },
    {
      quickFind: true,
      key: 7,
      matchTime: 10000,
      name: '视频内免流卡',
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        'TextView[text="B站免流星卡"] < LinearLayout - [id="tv.danmaku.bili:id/toast_x"]',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12892611',
    },
    {
      key: 8,
      name: '直播间卡片广告',
      desc: '直播间底部售卖卡片-点击右上角x',
      quickFind: true,
      matchTime: 1000,
      actionMaximum: 1,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: '[id="tv.danmaku.bili:id/shopping_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13200549',
    },
  ],
});
