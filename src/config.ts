import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 0,
  version: 0,
  name: 'AIsouler的GKD订阅',
  author: 'AIsouler',
  supportUri: 'https://github.com/AIsouler/subscription',
  updateUrl:
    'https://registry.npmmirror.com/@gkd-kit/subscription/latest/files',
  checkUpdateUrl:
    'https://registry.npmmirror.com/@gkd-kit/subscription/latest/files/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
