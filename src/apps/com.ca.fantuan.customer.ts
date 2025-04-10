import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ca.fantuan.customer',
  name: 'Fantuan Delivery',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.app.orderdetail.view.OrderDetailActivity',
            '.app.p_address.city.view.SelectCityActivity',
          ],
          matches: [
            '[text*="开启消息通知"][visibleToUser=true]',
            '[vid="tv_cancel" || vid="iv_close"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/8dd09677-8a02-4496-8611-c37b70e981d7',
          snapshotUrls: [
            'https://i.gkd.li/i/19442163',
            'https://i.gkd.li/i/19460300',
          ],
        },
        {
          key: 1,
          activityIds: [
            '.app.mainv2.view.MainActivity',
            '.app.orderdetail.view.OrderDetailActivity',
            '.app.payresult_v2.view.OrderPaySuccessActivity',
          ],
          matches: '[vid="iv_notification_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8b4acc85-dacd-4ffc-a866-71e5b78c82b2',
          snapshotUrls: [
            'https://i.gkd.li/i/19442191',
            'https://i.gkd.li/i/19624918',
            'https://i.gkd.li/i/19676244',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '评价提示-下单后的评价弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.app.mainv2.view.MainActivity',
          matches: [
            '[text="写评价"][visibleToUser=true]',
            '[vid="close_iv"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/8bd038b0-c555-4ac5-b1c0-c31c351cd788',
          snapshotUrls: 'https://i.gkd.li/i/19442188',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.app.mainv2.view.MainActivity',
          matches: [
            '[vid="home_bottom_float_view"][visibleToUser=true]',
            '[vid="iv_close"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/a61401ed-245c-4942-9245-bae8fbb15abd',
          snapshotUrls: 'https://i.gkd.li/i/19459880',
        },
      ],
    },
  ],
});
