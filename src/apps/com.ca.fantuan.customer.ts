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
            '.app.mainv2.view.MainActivity',
            '.app.orderdetail.view.OrderDetailActivity',
            '.app.p_address.city.view.SelectCityActivity',
            '.app.payresult_v2.view.OrderPaySuccessActivity',
            '.app.main.view.MainActivityV2',
          ],
          matches: [
            '[text*="开启消息通知" || text*="开启系统通知"][visibleToUser=true]',
            '[vid="tv_cancel" || vid="iv_close" || vid="iv_notification_close"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/8dd09677-8a02-4496-8611-c37b70e981d7',
          snapshotUrls: [
            'https://i.gkd.li/i/19442163',
            'https://i.gkd.li/i/19460300',
            'https://i.gkd.li/i/19442191',
            'https://i.gkd.li/i/19624918',
            'https://i.gkd.li/i/19676244',
            'https://i.gkd.li/i/20633831',
            'https://i.gkd.li/i/22441592',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.app.mainv2.view.MainActivity',
          matches: [
            '[text="写评价" || text="您对饭团外卖的评价如何"][visibleToUser=true]',
            '[vid="close_iv" || vid="iv_dialog_close"][visibleToUser=true]',
          ],
          exampleUrls: [
            'https://e.gkd.li/8bd038b0-c555-4ac5-b1c0-c31c351cd788',
            'https://e.gkd.li/43231b54-3fd3-4c1d-9217-8721f86153ba',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19442188',
            'https://i.gkd.li/i/20598853',
          ],
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
