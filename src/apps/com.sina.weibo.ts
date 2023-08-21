import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.sina.weibo',
  groups: [
    {
      key: 0,
      name: '微博-开屏广告',
      activityIds: 'com.sina.weibo.mobileads.view.',
      rules: ['@RelativeLayout > TextView[text=`跳过`]'],
    },
    {
      key: 1,
      name: '微博-评论区顶部-相关推荐',
      activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
      rules: 'ImageView[id=`com.sina.weibo:id/iv_ad_x`]',
    },
    {
      key: 2,
      name: `微博-关闭不感兴趣广告弹窗`,
      activityIds: `com.sina.weibo.view.bottomsheet.dialog.`,
      rules: [[`[text="为何会看到此广告"]`, `[text="不感兴趣"]`]], // 1688889362832
    },
  ],
};
