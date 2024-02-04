import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 666,
  version: 0,
  name: 'AIsouler的GKD订阅',
  author: 'AIsouler',
  supportUri: 'https://github.com/AIsouler/GKD_subscription',
  updateUrl:
    'https://raw.gitmirror.com/AIsouler/GKD_subscription/main/dist/AIsouler_gkd.json5',
  checkUpdateUrl:
    'https://raw.gitmirror.com/AIsouler/GKD_subscription/main/dist/AIsouler_gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
