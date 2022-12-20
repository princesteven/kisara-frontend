"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeatureName = void 0;
var helpers_1 = require("@react-frontends/v2/helpers");
/**
 * @function
 * @name featureName
 * @description creates a feature name out of a newly created scaffolding feature variable
 * @param featureName {string} feature name
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {String}
 */
var createFeatureName = function (featureName) {
    var convertedFeatureName = featureName.replace(/[^a-zA-Z0-9]+(.)/g, function (m, chr) { return chr.toUpperCase(); });
    return (0, helpers_1.ucfirst)(convertedFeatureName);
};
exports.createFeatureName = createFeatureName;
//# sourceMappingURL=index.js.map