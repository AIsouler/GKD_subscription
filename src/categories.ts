import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([
  {
    key: 0,
    name: '开屏广告',
    enable: true,
  },
  {
    key: 1,
    name: '青少年模式',
    enable: false,
  },
  {
    key: 2,
    name: '更新提示',
    enable: false,
  },
  {
    key: 3,
    name: '评价提示',
    enable: false,
  },
  {
    // 软件用于告知用户信息的弹窗，具体表现为公告弹窗一类
    key: 4,
    name: '通知提示',
    enable: false,
  },
  {
    // 各种权限请求，如定位权限、通知权限等
    key: 5,
    name: '权限提示',
    enable: false,
  },
  {
    // 不影响使用的广告, 所有的广告卡片及悬浮广告按钮
    key: 6,
    name: '局部广告',
    enable: false,
  },
  {
    // 不关闭广告就无法进行其他操作的广告弹窗, 它阻碍用户操作
    key: 7,
    name: '全屏广告',
    enable: false,
  },
  {
    // 如微信朋友圈广告/酷安帖子广告/贴吧帖子广告
    // 需要分阶段多步操作才能关闭, 会造成屏幕闪烁, 影响用户体验
    key: 8,
    name: '分段广告',
    enable: false,
  },
  {
    // 非广告, 点击某些功能按钮
    key: 9,
    name: '功能类',
    enable: false,
  },
  {
    // 分类不明确
    key: 10,
    name: '其他',
    enable: false,
  },
]);
