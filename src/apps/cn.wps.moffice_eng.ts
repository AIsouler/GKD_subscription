import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS',
  groups: [
    {
      key: 1,
      name: '分段广告-首页文档列表广告',
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.StartPublicActivity',
        'cn.wps.moffice.documentmanager.PreStartActivity',
        'cn.wps.moffice.main.local.HomeRootActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.mopub.ad.xiaomi:id/nativeclose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505350',
            'https://i.gkd.li/i/12505286',
          ],
        },
        {
          preKeys: [0],
          key: 99,
          matches: '[text="不喜欢此广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505365',
            'https://i.gkd.li/i/13259090',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'cn.wps.moffice.main.AfterLoginActivity',
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          ],
          matches: '[id="cn.wps.moffice_eng:id/afterlogin_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13259097',
            'https://i.gkd.li/i/12882712',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            'View[childCount=3] > Image[text!=null] +2 @TextView[clickable=true] <<n [vid="push_tips_ptr_super_webview"]',
          snapshotUrls: 'https://i.gkd.li/i/13945835',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'cn.wps.moffice.plugin.cloudPage.newpage.NewCloudSettingNewActivity',
          matches: '[vid="cloud_popup_close_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23786698',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="cn.wps.moffice_eng:id/close_new_func_guide_dialog_imageView"]',
          snapshotUrls: 'https://i.gkd.li/i/12882371',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-关闭[开启WPS云服务]弹窗',
      desc: '自动点击不开启',
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.cloud.roaming.login.core.QingLoginActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.base.w',
      ],
      rules: [
        {
          key: 1,
          matches:
            '[id="cn.wps.moffice_eng:id/cloud_protocol_dialog_not_start_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882536',
            'https://i.gkd.li/i/12882610',
            'https://i.gkd.li/i/12882678',
          ],
        },
        {
          key: 2,
          matches: '[id="cn.wps.moffice_eng:id/dialog_button_positive"]',
          snapshotUrls: 'https://i.gkd.li/i/12882554',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-文档末尾广告',
      fastQuery: true,
      activityIds: 'cn.wps.moffice.writer.multiactivity.Writer',
      rules: [
        {
          key: 1,
          matches:
            '[id="cn.wps.moffice_eng:id/doc_end_ad_container_main"] >2 [id="cn.wps.moffice_eng:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13513911',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[text="关闭当前广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13513914',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '[id="cn.wps.moffice_eng:id/home_banner_ad_spread_close" || vid="phone_message_close_button" || vid="close_home_ad_banner_iv" || vid="iv_item_close" || vid="iv_cloud_sync_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804525',
            'https://i.gkd.li/i/17893252',
            'https://i.gkd.li/i/18047731',
            'https://i.gkd.li/i/23577590',
            'https://i.gkd.li/i/23786789',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动签到',
      fastQuery: true,
      activityIds: 'cn.wps.moffice.main.push.explore.PushTipsWebActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[visibleToUser=true][text="签到"] <<n [vid="push_tips_ptr_super_webview"]',
          exampleUrls: 'https://e.gkd.li/c83fe3b0-74f2-45af-9f8d-6b70c622b424',
          snapshotUrls: 'https://i.gkd.li/i/16382069',
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            '[text="签到成功"] -2 View[childCount=1] > @Image[text!=null][childCount=0] <<n [vid="push_tips_ptr_super_webview"]',
          exampleUrls: 'https://e.gkd.li/c8c2f3cb-9bde-4a01-8eb6-145cf668993f',
          snapshotUrls: 'https://i.gkd.li/i/16382075',
        },
      ],
    },
    {
      key: 10,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches: [
            '[text="喜欢WPS Office吗？"]',
            '[text="以后再说"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23714159',
        },
      ],
    },
  ],
});
