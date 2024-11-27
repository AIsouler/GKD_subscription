import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.lieju.lws.escanu',
    name: '易视看',
    groups: [
        {
            key: 1,
            name: '[ChangeMe]规则名称-2024-11-27 15:25:31',
            desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
            rules: [
                {
                    fastQuery: true,
                    activityIds: 'com.jooan.biz_am.launcher.SplashActivity',
                    matches: '@View <3 FrameLayout < FrameLayout < FrameLayout < FrameLayout < RelativeLayout < [vid="fl_ad"]',
                    exampleUrls: 'https://e.gkd.li/831a390f-d9f1-41a7-b868-18d44f6508f6',
                    snapshotUrls: 'https://i.gkd.li/i/17930494',
                },
            ],
        },
        {
            key: 2,
            name: '[ChangeMe]规则名称-2024-11-27 15:26:21',
            desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
            rules: [
                {
                    fastQuery: true,
                    activityIds: 'com.jooan.qiaoanzhilian.ui.activity.gun_ball.GunBallCameraPlayerNewActivity',
                    matches: '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
                    exampleUrls: 'https://e.gkd.li/31f635a2-59ec-4be8-99c3-c8a5093e6218',
                    snapshotUrls: 'https://i.gkd.li/i/17930496',
                },
            ],
        },
        {
            key: 3,
            name: '[ChangeMe]规则名称-2024-11-27 15:30:05',
            desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
            rules: [
                {
                    fastQuery: true,
                    activityIds: 'com.jooan.qiaoanzhilian.ali.view.main_page.NewMainDeviceListActivity',
                    matches: '@TextView < LinearLayout < ListView < LinearLayout < ScrollView < [id="android:id/content"]',
                    exampleUrls: 'https://e.gkd.li/58bb8471-6382-42bd-9f92-c48562bd74f5',
                    snapshotUrls: 'https://i.gkd.li/i/17930497',
                },
            ],
        },
        {
            key: 4,
            name: '[ChangeMe]规则名称-2024-11-27 15:38:49',
            desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
            rules: [
                {
                    fastQuery: true,
                    activityIds: 'com.jooan.qiaoanzhilian.ali.view.main_page.NewMainDeviceListActivity',
                    matches: '@ImageView <2 ViewGroup <2 ViewGroup <2 ViewGroup < FrameLayout < FrameLayout <4 FrameLayout < FrameLayout < [vid="native_express_container"]',
                    exampleUrls: 'https://e.gkd.li/74e32ebd-573f-4b3b-87a0-c4d1f53fad84',
                    snapshotUrls: 'https://i.gkd.li/i/17930498',
                },
            ],
        },
        {
            key: 5,
            name: '[ChangeMe]规则名称-2024-11-27 15:39:52',
            desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
            rules: [
                {
                    fastQuery: true,
                    activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
                    matches: '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
                    exampleUrls: 'https://e.gkd.li/bfc00a4c-a9d1-4568-8c31-540030176023',
                    snapshotUrls: 'https://i.gkd.li/i/17930499',
                },
            ],
        },
        {
            key: 6,
            name: '[ChangeMe]规则名称-2024-11-27 15:40:45',
            desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
            rules: [
                {
                    fastQuery: true,
                    activityIds: 'com.jooan.qiaoanzhilian.ali.view.main_page.NewMainDeviceListActivity',
                    matches: '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
                    exampleUrls: 'https://e.gkd.li/fe4de90d-8cc7-4c57-94fc-561ad5e33a88',
                    snapshotUrls: 'https://i.gkd.li/i/17930503',
                },
            ],
        },
        {
            key: 7,
            name: '[ChangeMe]规则名称-2024-11-27 15:41:20',
            desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
            rules: [
                {
                    fastQuery: true,
                    activityIds: 'com.jooan.qiaoanzhilian.ali.view.main_page.NewMainDeviceListActivity',
                    matches: '@ImageView < ViewGroup <2 ViewGroup <2 ViewGroup <2 ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [vid="ksad_container"]',
                    exampleUrls: 'https://e.gkd.li/ddc3d0fe-a5fd-418b-977d-4f51f60c6e73',
                    snapshotUrls: 'https://i.gkd.li/i/17930504',
                },
            ],
        },
    ],
});
