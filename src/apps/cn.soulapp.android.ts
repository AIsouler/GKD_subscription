import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.soulapp.android',
  name: 'Soul',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter', // 在极少数情况下, 即使节点是 clickable 的, APP 也不会响应节点点击事件, 此时需要手动设置 `clickCenter`
          matches: '[id="cn.soulapp.android:id/c_ad_skip_view_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12833280',
            'https://i.gkd.li/import/12850094',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="cn.soulapp.android:id/btn_sure"]',
          snapshotUrls: 'https://i.gkd.li/import/12834093',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-广场页卡片广告',
      quickFind: true,
      activityIds: ['cn.soulapp.android.component.startup.main.MainActivity'],
      rules: [
        {
          matches:
            '[id="cn.soulapp.android:id/sl_ad_root"] >n [id="cn.soulapp.android:id/fl_tag_container"]',
          snapshotUrls: 'https://i.gkd.li/import/12838000',
        },
      ],
    },
    {
      key: 3,
      name: '评价提示-app评分',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches:
            '[id="cn.soulapp.android:id/score_message"] +3 [id="cn.soulapp.android:id/cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13425057',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[id="cn.soulapp.android:id/img_close"] -2 RelativeLayout > [text="升级到最新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/13693361',
        },
      ],
    },
    {
      key: 5,
      name: '通知提示-请求开启通知弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="消息通知显示消息内容"] +3 [vid="img_close"]',
      snapshotUrls: 'https://i.gkd.li/import/14332334',
    },
    {
      key: 6,
      name: '局部广告-帖子详情页卡片广告',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds:
            'cn.soulapp.android.component.square.post.base.detail.PostDetailActivity',
          matches: '@ImageView[visibleToUser=true] <2 * < [vid="tvAdClose"]',
          snapshotUrls: 'https://i.gkd.li/import/14332294',
        },
        {
          key: 1,
          activityIds:
            'cn.soulapp.android.component.square.post.base.detail.PostDetailActivity',
          matches: '@[clickable=true][visibleToUser=true] >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14359616',
        },
      ],
    },
  ],
});
