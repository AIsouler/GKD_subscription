import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.cntvnews',
  name: '央视新闻',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '右侧悬浮小卡片',
          quickFind: true,
          activityIds: 'com.torch.open.homeimpl.HomeActivity',
          matches: '[vid="btn_close"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/8c4308a3-4142-45a0-a085-af8ee89ead04',
          snapshotUrls: 'https://i.gkd.li/i/14368501',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-个性化推荐弹窗',
      desc: '点击[取消]',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.torch.open.homeimpl.HomeActivity',
          matches: '[text="是否开启个性化推荐？"] +3 * > [text="取消"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b3ee21aa-429d-4407-9b70-acecb222c354',
          snapshotUrls: 'https://i.gkd.li/i/14444961',
        },
      ],
    },
  ],
});
