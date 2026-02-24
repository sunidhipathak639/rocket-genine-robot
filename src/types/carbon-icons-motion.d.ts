declare module '@carbon/icons-motion' {
  import { ComponentType } from 'react';

  export interface MotionIconProps {
    size?: number;
    isAnimating?: boolean;
    className?: string;
  }

  export const IdeaMotion: ComponentType<MotionIconProps>;
  export const LayersMotion: ComponentType<MotionIconProps>;
  export const ChatMotion: ComponentType<MotionIconProps>;
  export const GlobeMotion: ComponentType<MotionIconProps>;
  export const SettingsMotion: ComponentType<MotionIconProps>;
  export const MagicWandMotion: ComponentType<MotionIconProps>;
  export const DashboardMotion: ComponentType<MotionIconProps>;
  export const ImageSearchMotion: ComponentType<MotionIconProps>;
  export const LaunchMotion: ComponentType<MotionIconProps>;
  export const ArrowRightMotion: ComponentType<MotionIconProps>;
}
