import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.copymanga.app',
  name: '拷貝漫畫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 30000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length<6]',
          snapshotUrls: [
            'https://i.gkd.li/import/12504489',
            'https://i.gkd.li/import/12504507',
            'https://i.gkd.li/import/12852509',
            'https://i.gkd.li/import/12504492',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '内部弹窗广告',
      matchLauncher: true,
      activityIds: [
        'com.copymanga.app.MainActivity',
        'com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity',
      ],
      delay: 400,
      rules: [
        {
          key: 1,
          activityIds: 'com.kwad.components.ad.interstitial',
          matches: '@ViewGroup[clickable=true][visibleToUser=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12504486',
            'https://i.gkd.li/import/12504488',
          ],
        },
        {
          key: 2,
          matches: [
            '[text^="立即" || text^="领取" || text^="了解" || text*="看"]', //软件正常元素都用的des,只有广告用text
            '[id="android:id/content"] >2 FrameLayout[childCount=4|| childCount=3||childCount=2] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > [name="android.view.View" || name="android.widget.ImageView"][text=null][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12504520',
            'https://i.gkd.li/import/12661019',
            'https://i.gkd.li/import/13193877',
            'https://i.gkd.li/import/12892156',
            'https://i.gkd.li/import/12504501',
            'https://i.gkd.li/import/13246786',
            'https://i.gkd.li/import/13259082', // text^="领取"
            'https://i.gkd.li/import/13372542', // View
          ],
        },
        {
          key: 3,
          matches: [
            '[text^="京东"]',
            '[text^="扭"]',
            'ImageView[index=0][depth=9]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13233178',
            'https://i.gkd.li/import/13259085',
          ],
        },
        {
          key: 4,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -2 @View - Image',
          snapshotUrls: 'https://i.gkd.li/import/12925052',
        },
        {
          key: 5,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -4 @View < View[childCount=7]',
          snapshotUrls: 'https://i.gkd.li/import/12925095',
        },
        {
          key: 6,
          matches:
            '[id="com.copymanga.app:id/video_view"] + [id="com.copymanga.app:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13332719',
        },
        {
          key: 7,
          // desc: '二步跳过广告_步骤1',
          quickFind: true,
          matches: '[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13344156', // step1
          ],
        },
        {
          key: 8,
          preKeys: [7],
          // desc: '二步跳过广告_步骤2',
          matches: 'ImageView < ViewGroup[clickable=true][childCount=1]',
          snapshotUrls: [
            'https://i.gkd.li/import/13344156', // step2
          ],
        },
      ],
    },
    {
      key: 2,
      name: '加入书架按钮下面的广告',
      activityIds: 'com.copymanga.app.MainActivity',
      rules: [
        {
          name: '点击右上角x',
          matches: 'ImageView[id="com.copymanga.app:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/12504525',
        },
        {
          name: '点击右下角x',
          matches:
            'FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/12851671',
            'https://i.gkd.li/import/12909005',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '关闭赞助提示',
      activityIds: 'com.copymanga.app.MainActivity',
      rules: [
        {
          matches: '@[desc="就这样吧"] + [desc^="赞助免广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12851627',
        },
      ],
    },
    {
      key: 4,
      name: '自动确认线路',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc="进入拷贝漫画"]',
          snapshotUrls: 'https://i.gkd.li/import/13233179',
        },
      ],
    },
    {
      key: 5,
      name: '关闭提示',
      matchTime: 30000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc="系统提示"] +n [desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/import/13233180',
        },
      ],
    },
  ],
});
