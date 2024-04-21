import subscription from '../src/subscription';
import { checkSubscription } from '@gkd-kit/tools';
import { checkDeprecatedGroupKeys } from '../src/appDeprecatedKeys';

checkSubscription(subscription);

checkDeprecatedGroupKeys(subscription.apps!);

export default subscription;
