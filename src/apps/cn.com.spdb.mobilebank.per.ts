import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.spdb.mobilebank.per',
  name: '浦发银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.com.spdb.mobilebank.per.activity.MainActivity',
      rules:
        '[id="cn.com.spdb.mobilebank.per:id/splash_tb_time"][text$="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12740308',
    },
    {
      key: 1,
      name: '消息中心-系统通知请求',
      desc: '自动点击关闭。',
      enable: false,
      activityIds:
        'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
      rules: '[text="去开启"] + View > Image[text.length=0]',
      snapshotUrls: 'https://i.gkd.li/import/13458535',
    },
  ],
});
