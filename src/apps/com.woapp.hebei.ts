import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.woapp.hebei',
  name: '联通智家',
  groups: [
    {
      key: 1,
      name: '联通智家-AI功能推广广告',
      rules: [
        {
          activityIds: 'net.smartont.we.wohome.ui.home.view.TransparentH5Activity',
          matches: 'View > View > Image',
snapshotUrls:'https://i.gkd.li/snapshot/1765535805934'
        },
      ],
    },
  ],
});