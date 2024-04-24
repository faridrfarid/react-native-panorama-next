"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanoramaView = void 0;
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var PanoramaView = function (_a) {
    var onImageLoadingFailed = _a.onImageLoadingFailed, onImageDownloaded = _a.onImageDownloaded, onImageLoaded = _a.onImageLoaded, dimensions = _a.dimensions, inputType = _a.inputType, props = __rest(_a, ["onImageLoadingFailed", "onImageDownloaded", "onImageLoaded", "dimensions", "inputType"]);
    var _onImageLoadingFailed = function () {
        if (onImageLoadingFailed) {
            onImageLoadingFailed();
        }
    };
    var _onImageLoaded = function () {
        if (onImageLoaded) {
            onImageLoaded();
        }
    };
    var _onImageDownloaded = function () {
        if (onImageDownloaded) {
            onImageDownloaded();
        }
    };
    if (react_native_1.Platform.OS === "android" && !dimensions) {
        console.warn('The "dimensions" property is required for PanoramaView on Android devices.');
        return null;
    }
    if (react_native_1.Platform.OS === "ios" && inputType === "stereo") {
        console.warn("The stereo inputType is currently only supported on Android devices.");
    }
    return (<NativePanoramaView {...props} dimensions={dimensions} inputType={inputType} onImageDownloaded={_onImageDownloaded} onImageLoaded={_onImageLoaded} onImageLoadingFailed={_onImageLoadingFailed}/>);
};
exports.PanoramaView = PanoramaView;
exports.default = exports.PanoramaView;
var NativePanoramaView = react_native_1.requireNativeComponent("PanoramaView");
