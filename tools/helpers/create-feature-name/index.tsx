import { ucfirst } from '../index';
import { pluralize, singularize } from 'inflection';

/**
 * @function
 * @name createFeatureName
 * @description creates a feature name out of a newly created scaffolding feature variable
 * @param featureName {string} feature name
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @author Muhammad Mwinchande
 * @returns {String}
 */
export const createFeatureName = (featureName: string, pluraled = false) => {
    let convertedFeatureName = featureName.replace(
        /[^a-zA-Z0-9]+(.)/g,
        (m, chr) => chr.toUpperCase()
    );
    return pluraled
        ? pluralize(ucfirst(convertedFeatureName), '')
        : singularize(ucfirst(convertedFeatureName), '');
};
