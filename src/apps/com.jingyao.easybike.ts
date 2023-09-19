import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    // 预留 key 0-9
    {
      key: 10,
      name: '应用内活动、广告弹窗（大部分）',
      activityIds: ['com.hellobike.ads.widget.insert.dialog.HBAdvertDialog'],
      rules:
        'FrameLayout[id="com.jingyao.easybike:id/hbDialogLayout"] + ImageView[id="com.jingyao.easybike:id/actionDialogClose"][clickable=true]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12650028', // 哈啰出行保弹窗
        'https://gkd-kit.gitee.io/import/12650090', // 账单查看弹窗
      ],
    },
    {
      key: 11,
      name: '哈啰智能电动车-广告弹窗',
      activityIds: [
        'com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity',
      ],
      rules:
        '[id="com.jingyao.easybike:id/lottie_view"] < ViewGroup + [id="com.jingyao.easybike:id/btn_close"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12650163'],
    },
    {
      key: 12,
      name: '右侧悬浮广告',
      activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
      rules:
        '@[id="com.jingyao.easybike:id/closeFloatArea"] + [id="com.jingyao.easybike:id/floatADContainer"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12650071'],
    },
  ],
});
