import type { RawGlobalGroup } from './types';

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    actionMaximum: 1,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10]',
        action: 'clickCenter',
      },
      {
        key: 1,
        matches:
          '[id*="skip"||((text*="跳过"||text*="skip")&&text.length<10)||desc*="skip"||desc*="跳过"][editable=false]',
        action: 'clickCenter',
      },
    ],
    apps: [
      {
        id: 'com.android.systemui',
        enable: false,
      },
      {
        id: 'com.miui.aod',
        enable: false,
      },
      {
        id: 'com.miui.home',
        enable: false,
      },
    ],
  },
];
export default globalGroups;
