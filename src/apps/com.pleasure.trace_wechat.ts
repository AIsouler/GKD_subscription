import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pleasure.trace_wechat',
  name: '微拾',
  groups: [
    {
      enable: false,
      key: 5,
      name: '分段广告-我的页面卡片式广告',
      desc: '需点击二次弹窗确认',
      quickFind: true,
      activityIds: 'com.camellia.trace.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '点击【x】',
          matches:
            'View < @FrameLayout[desc^="dislike"] <<n [id="com.pleasure.trace_wechat:id/adsuyi_id_view_response"]',
          snapshotUrls: 'https://i.gkd.li/import/13479466',
        },
        {
          preKeys: 0,
          name: '关闭原因【不感兴趣】',
          matches:
            '@LinearLayout > [id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13479469',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-【字节】广告弹窗',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: '[text="反馈"] -2 @View > Image',
      snapshotUrls: 'https://i.gkd.li/import/13479468',
    },
  ],
});
