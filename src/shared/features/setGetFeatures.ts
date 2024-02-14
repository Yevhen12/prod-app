import { FeatureFlags } from '../types/featureFlags';

let featureFlags: FeatureFlags;

export const setFeaturesFlags = (newFeatures?: FeatureFlags) => {
  if (newFeatures) {
    featureFlags = newFeatures;
  }
};

export const getFeatureFlags = () => {
  return featureFlags;
};

export const getFeatureFlag = (flag: keyof FeatureFlags) => {
  return featureFlags[flag];
};
