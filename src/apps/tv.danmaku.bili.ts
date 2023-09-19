import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      desc: '开屏广告,切回APP开屏广告',
      rules: 'TextView[id=`tv.danmaku.bili:id/count_down`]',
    },
    {
      key: 0,
      name: '评论区顶部公告横幅',
      rules:
        'LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[desc=`关闭`]',
      excludeActivityIds: [
        'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      ],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      rules: 'TextView[text*=`青少年模式`] + TextView[text=`我知道了`]',
    },
    {
      key: 2,
      name: '动态推荐卡片',
      rules: [
        {
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
        },
      ],
    },
    {
      key: 3,
      name: '点击关闭广告后出现的弹窗',
      rules: [
        {
          activityIds: 'com.bilibili.lib.ui.menu',
          matches:
            'TextView[text=`广告质量差`||text=`推广质量差`][id^=`tv.danmaku.bili:id/reason`]',
        },
      ],
    },
    {
      key: 4,
      name: '视频底部广告',
      activityIds: [
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
      ],
      rules: [
        '[id=`tv.danmaku.bili:id/reason1_layout`] > [id=`tv.danmaku.bili:id/reason1`][text*=`广告`]',
        {
          name: '点击屏蔽广告原因',
          matches:
            '[id="tv.danmaku.bili:id/menu_text"][text="屏蔽广告"] < [id="tv.danmaku.bili:id/title"] + [id="tv.danmaku.bili:id/dislike_reasons"] >2 [id="tv.danmaku.bili:id/reason1_layout"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12642261',
        },
        {
          name: '点击广告卡片右侧菜单图标',
          matches:
            '[id=`tv.danmaku.bili:id/ad_tint_frame`][desc^=`UP主推荐广告`] @[id=`tv.danmaku.bili:id/more`] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12642260',
        },
      ],
    },
    {
      key: 5,
      name: '推荐页-可跳过广告',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: ['[id=`tv.danmaku.bili:id/click_skip`]'],
    },
    {
      key: 6,
      name: '更新弹窗',
      activityIds: 'com.bilibili.app.preferences.BiliPreferencesActivity',
      rules: [
        '[id="tv.danmaku.bili:id/update_btn_confirm"] + [id="tv.danmaku.bili:id/update_btn_cancel"]',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12649689',
    },
  ],
});
