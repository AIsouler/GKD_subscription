import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duokan.phone.remotecontroller',
  name: '万能遥控',
  groups: [
    {
      key: 0,
      name: '局部广告-底部横幅广告',
      activityIds:
        'com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2',
      rules:
        'ImageView[id=`com.duokan.phone.remotecontroller:id/image_close_banner`]',
    },
    {
      key: 4,
      name: '定位提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds:
        'com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2',
      rules:
        '[id="com.duokan.phone.remotecontroller:id/ll_permission"] [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/13642080',
    },
  ],
});
