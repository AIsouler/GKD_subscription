import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'lab.vie.two',
  name: 'LIBVIO',
  groups: [
    {
      key: 1,
      name: '未分类-账号注册说明弹窗',
      desc: '每次打开app的弹窗提示，自动点击【我知道了】',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc="账号注册说明"] +2 [desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13379070',
    },
  ],
});
