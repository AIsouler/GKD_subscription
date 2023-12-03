import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.wps.moffice_eng',
  name: 'WPS',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.wps.moffice.documentmanager.PreStartActivity',
      rules: [
        {
          key: 0,
          matches: '[id=`cn.wps.moffice_eng:id/splash_skip`]',
          snapshotUrls: [], // 需要补充快照
        },
        {
          key: 1,
          matches: '[id="cn.wps.moffice_eng:id/splash_jump"]',
          snapshotUrls: 'https://i.gkd.li/import/13188596',
        },
      ],
    },
    {
      key: 1,
      name: '首页-文档列表广告',
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/57787554-0443-4bc0-9f29-1759aae07b9b',
      ],
      activityIds: [
        'cn.wps.moffice.main.StartPublicActivity',
        'cn.wps.moffice.documentmanager.PreStartActivity',
        'cn.wps.moffice.main.local.HomeRootActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id$="/nativeclose"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12505350',
            'https://i.gkd.li/import/12505286',
          ],
        },
        {
          preKeys: 0,
          matches: '[text="关闭当前广告"||text="不喜欢此广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12505365',
            'https://i.gkd.li/import/13259090',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '首页-弹窗广告',
      quickFind: true,
      activityIds: [
        'cn.wps.moffice.main.AfterLoginActivity',
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      ],
      rules: '[id="cn.wps.moffice_eng:id/afterlogin_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13259097',
        'https://i.gkd.li/import/12882712',
      ],
    },
    {
      enable: false,
      key: 3,
      name: '升级提示',
      activityIds: [
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
        'cn.wps.moffice.main.local.HomeRootActivity',
      ],
      rules:
        '[id="cn.wps.moffice_eng:id/close_new_func_guide_dialog_imageView"]',
      snapshotUrls: 'https://i.gkd.li/import/12882371',
    },
    {
      enable: false,
      key: 4,
      name: '开启WPS云服务',
      desc: '自动点击不开启',
      activityIds: [
        'cn.wps.moffice.main.cloud.roaming.login.core.QingLoginActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.base.w',
      ],
      rules: [
        {
          matches:
            '[id="cn.wps.moffice_eng:id/cloud_protocol_dialog_not_start_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12882536',
            'https://i.gkd.li/import/12882610',
            'https://i.gkd.li/import/12882678',
          ],
        },
        {
          matches: '[id="cn.wps.moffice_eng:id/dialog_button_positive"]',
          snapshotUrls: 'https://i.gkd.li/import/12882554',
        },
      ],
    },
    {
      key: 5,
      name: '文档末尾广告',
      activityIds: [
        'cn.wps.moffice.writer.multiactivity.Writer', //Writer1,Writer2...
      ],
      rules: [
        {
          key: 1,
          matches:
            '[id="cn.wps.moffice_eng:id/doc_end_ad_container_main"] >2 [id="cn.wps.moffice_eng:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13513911',
        },
        {
          preKeys: 1,
          key: 2,
          matches: '[text="关闭当前广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13513914',
        },
      ],
    },
  ],
});
