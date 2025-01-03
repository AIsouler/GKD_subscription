import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.alcidae.smarthome',
  name: '海雀',
  groups: [
    {
      key: 1,
      name: '通知提示-首页通知弹窗',
      desc: '点击[不再提醒]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
	  snapshotUrls: 'https://i.gkd.li/i/18291310',
      rules: [
		{
          activityIds: 'com.danale.video.mainpage.main.MainActivity',
          matches: '@LinearLayout[childCount=2] + @ImageButton[id="com.alcidae.smarthome:id/ibtn_close"][visibleToUser=true][clickable=true] <<n FrameLayout[id="android:id/content"]',
        },
        {
          activityIds: 'com.danale.video.mainpage.main.MainActivity',
          matches: '@TextView[text="不再提醒"] - @CheckBox[id="com.alcidae.smarthome:id/cb_not_show"][visibleToUser=true] < LinearLayout[childCount=2] <<n FrameLayout',
        },
      ],
    },
    {
      name: '通知提示',
      key: 4,
	  desc: '拒绝开启通知'
      snapshotUrls: [
        'https://i.gkd.li/i/18059150'
      ],
      rules: [
        {
          matches: [
            'TextView[id="com.alcidae.smarthome:id/danale_info_dialog_cancel_btn"][text="取消"]'
          ]
        }
      ]
    }
  ],
});
