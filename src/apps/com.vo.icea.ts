import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vo.icea',
  name: '飞韵听书',
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
          name: '【跳过】',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13445848',
        },
        {
          name: '【字节穿山甲SDK】',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13440325',
        },
      ],
    },
    {
      key: 5,
      name: '播放界面卡片式广告',
      desc: '需点击二次弹窗关闭原因',
      quickFind: true,
      activityIds: [
        'com.vo.icea.MainActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          name: '点击【反馈】',
          matches: 'WebView @[text="反馈"] - View > Image',
          snapshotUrls: 'https://i.gkd.li/import/13510973',
        },
        {
          preKeys: 0,
          name: '原因选【不感兴趣】',
          matches: '@LinearLayout[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13510972',
        },
      ],
    },
    {
      key: 6,
      name: '首页广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.vo.icea.MainActivity',
      rules: [
        //字节穿山甲广告SDK: key0-4
        {
          key: 0,
          name: '类型0',
          quickFind: true,
          matches: '[id="com.byted.pangle:id/tt_reward_full_count_down"]',
          snapshotUrls: 'https://i.gkd.li/import/13511052',
        },
        {
          key: 1,
          name: '类型1',
          matches:
            'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
          snapshotUrls: [
            'https://i.gkd.li/import/13511645',
            'https://i.gkd.li/import/13511059',
            'https://i.gkd.li/import/13511065',
            'https://i.gkd.li/import/13511708',
          ],
        },
        {
          key: 2,
          name: '类型2',
          matches: '[text="反馈"] -n View > Image[text=""][width<60]',
          snapshotUrls: [
            'https://i.gkd.li/import/13511052',
            'https://i.gkd.li/import/13511765',
          ],
        },
        {
          key: 3,
          name: '类型3',
          matches: '[text="反馈"] < View [text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13446063',
        },
      ],
    },
  ],
});
