import subscription from '../src/subscription';
import { checkSubscription, checkApiVersion } from '@gkd-kit/tools';

await checkApiVersion();

checkSubscription(subscription);

export default subscription;
