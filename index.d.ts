// @author https://github.com/Rillus/react-map-interaction/blob/7e75bb2caca581c5054ad2141fcb42f99ca24d30/index.d.ts

declare module 'react-map-interaction' {
  type Translation = {
    x: number;
    y: number;
  };

  export type MapInteractionProps = {
    children?: ({
      scale,
      translation,
    }: {
      scale: number;
      translation: Translation;
    }) => import('react').ReactNode;

    value?: {
      scale: number;
      translation: Translation;
    };

    defaultValue?: {
      scale: number;
      translation: Translation;
    };

    disableZoom?: boolean;

    disablePan?: boolean;

    translationBounds?: {
      xMin?: number;
      xMax?: number;
      yMin?: number;
      yMax?: number;
    };

    onChange?: ({
      scale,
      translation,
    }: {
      scale: number;
      translation: Translation;
    }) => void;

    minScale?: number;
    maxScale?: number;
  };
  export const MapInteraction: import('react').FC<MapInteractionProps>;

  export type MapInteractionCSSProps = import('react').PropsWithChildren<
    Omit<MapInteractionProps, 'children'>
  >;
  export const MapInteractionCSS: import('react').FC<MapInteractionCSSProps>;

  export default MapInteraction;
}
