import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'so.tita',
  name: 'tita搜索',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'so.tita.view.activity.HomeActivity',
          matches:
            '[id="so.tita:id/flyt_banner"] >n FrameLayout > FrameLayout +n FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12800404',
        },
        {
          key: 1,
          activityIds: [
            'so.tita.view.activity.HomeActivity',
            'so.tita.view.activity.EpisodeActivity',
            'so.tita.view.activity.SearchActivity',
          ],
          matches: [
            '[id="so.tita:id/flyt_native"] >n LinearLayout > FrameLayout + LinearLayout + FrameLayout[visibleToUser=true]',
            '[id="so.tita:id/flyt_native"] >n FrameLayout > ImageView +n FrameLayout > ImageView[visibleToUser=true]',
          ],
          actionDelay: 1000,
          snapshotUrls: [
            'https://i.gkd.li/i/12800504', // so.tita.view.activity.HomeActivity
            'https://i.gkd.li/i/12800437', // so.tita.view.activity.EpisodeActivity
            'https://i.gkd.li/i/12800682', // so.tita.view.activity.SearchActivity
            'https://i.gkd.li/i/12800590', // 限定 ImageView[visibleToUser=true]，防止在节点不可见时触发规则
            'https://i.gkd.li/i/12800794', // 限定 FrameLayout[visibleToUser=true]，防止广告仅部分可见时触发 clickCenter 事件，误触其他节点
            'https://i.gkd.li/i/12800914', // 延迟 1000 毫秒触发规则，防止界面切换过程中触发 clickCenter 事件点击到广告区域
          ],
        },
        {
          key: 2,
          activityIds: [
            'so.tita.view.activity.WebVersionActivity',
            'so.tita.view.activity.RankListActivity',
            'so.tita.view.activity.CollectActivity',
            'so.tita.view.activity.HistoryActivity',
            'so.tita.view.activity.AllDownParentActivity',
            'so.tita.view.activity.EpisodeActivity',
            'so.tita.view.activity.KSYPlayerActivity',
          ],
          matches: '@ImageView < FrameLayout + ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/12800486', // so.tita.view.activity.WebVersionActivity
            'https://i.gkd.li/i/12800559', // so.tita.view.activity.RankListActivity
            'https://i.gkd.li/i/12800633', // so.tita.view.activity.CollectActivity
            'https://i.gkd.li/i/12800655', // so.tita.view.activity.HistoryActivity
            'https://i.gkd.li/i/12800673', // so.tita.view.activity.AllDownParentActivity
            'https://i.gkd.li/i/12800732', // so.tita.view.activity.EpisodeActivity
            'https://i.gkd.li/i/12800739', // so.tita.view.activity.KSYPlayerActivity
          ],
        },
        {
          key: 3,
          activityIds: [
            'so.tita.view.activity.RankListActivity',
            'so.tita.utils.cast.ui.CastPlayActivity',
          ],
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/12800543', // so.tita.view.activity.RankListActivity
            'https://i.gkd.li/i/12800571', // so.tita.utils.cast.ui.CastPlayActivity
          ],
        },
        {
          key: 4,
          activityIds: [
            'so.tita.view.activity.CollectActivity',
            'so.tita.view.activity.HistoryActivity',
            'so.tita.view.activity.AllDownParentActivity',
          ],
          matches:
            'ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/12800616', // so.tita.view.activity.CollectActivity
            'https://i.gkd.li/i/12800642', // so.tita.view.activity.HistoryActivity
            'https://i.gkd.li/i/12800659', // so.tita.view.activity.AllDownParentActivity
          ],
        },
      ],
    },
    {
      key: 10,
      name: '未分类-观看视频去除广告提示弹窗',
      activityIds: 'so.tita.view.activity.HomeActivity',
      rules: '@[text="取 消"] + View + [text="确 定"]',
      snapshotUrls: 'https://i.gkd.li/i/12800350',
    },
  ],
});
