import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.taobao.etao.app.homev4.HomeV4Activity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches:
            '[text="更新提示"] < LinearLayout < LinearLayout +(2) ScrollView >(2) [text="取消"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12684250',
            'https://gkd-kit.gitee.io/import/12684244', // activityId: 'com.miui.home.launcher.Launcher'
          ],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求打开系统通知提示信息',
      desc: '自动点击提示信息的x按钮',
      rules: [
        {
          activityIds: ['com.taobao.sns.app.message.MessageActivity'],
          matches:
            '[text^="打开消息通知"] + [text="去开启"] + ImageView[clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12684278'],
        },
        {
          activityIds: ['com.taobao.etao.mine.MetaXMineActivity'],
          matches:
            '[text^="打开消息通知"] + FrameLayout > [text="去开启"] < FrameLayout + ImageView[clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12684351'],
        },
      ],
    },
  ],
});
