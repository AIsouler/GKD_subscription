import { defineAppConfig } from '../types';

export default defineAppConfig({
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
  ],
});
