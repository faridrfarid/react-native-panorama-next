import * as React from "react";
import { ViewStyle } from "react-native";
export declare type PanoramaViewProps = {
    imageUrl: string;
    dimensions?: {
        width: number;
        height: number;
    };
    inputType?: "mono" | "stereo";
    enableTouchTracking?: boolean;
    onImageLoadingFailed?: () => void;
    onImageDownloaded?: () => void;
    onImageLoaded?: () => void;
    style: ViewStyle;
};
export declare const PanoramaView: React.FC<PanoramaViewProps>;
export default PanoramaView;
