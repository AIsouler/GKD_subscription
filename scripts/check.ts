import subscription from '../src/subscription';
import { checkSubscription, checkApiVersion } from '@gkd-kit/tools';
import { checkDeprecatedGroupKeys } from '../src/appDeprecatedKeys';

await checkApiVersion();

checkSubscription(subscription);

checkDeprecatedGroupKeys(subscription.apps!);

export default subscription;
