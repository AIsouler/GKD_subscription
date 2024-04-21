import { updateDist } from '@gkd-kit/tools';
import { updateReadMeMd } from './updateReadMeMd';
import subscription from './check';

await updateDist(subscription);

await updateReadMeMd();
