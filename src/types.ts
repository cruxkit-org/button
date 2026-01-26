// src/types.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXProps, JSXElement } from '@minejs/jsx';
    import type { IconProps, IconName     } from '@cruxkit/icon';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export type ButtonVariant       = 'solid' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
    export type ButtonColor         = 'brand' | 'success' | 'warning' | 'error' | 'neutral' | 'info';
    export type ButtonSize          = 'sm' | 'md' | 'lg';

    export type ButtonHoverEffect   = 'none' | 'opacity' | 'scale' | 'shadow';
    export type ButtonActiveEffect  = 'none' | 'scale';
    export type ButtonUnderline     = 'none' | 'hover' | 'always';

    export interface ButtonProps extends Omit<JSXProps, 'children' | 'color'> {
        variant?                : ButtonVariant;
        color?                  : ButtonColor;
        size?                   : ButtonSize;

        hover?                  : ButtonHoverEffect;
        active?                 : ButtonActiveEffect;
        underline?              : ButtonUnderline;
        uppercase?              : boolean;

        fullWidth?              : boolean;
        labelFullWidth?         : boolean;
        disabled?               : boolean;
        loading?                : boolean;

        leftIcon?               : IconProps | IconName;
        rightIcon?              : IconProps | IconName;

        text?                   : string | number;
        children?               : JSXElement | string | number;

        // Explicitly define common event handlers for better DX
        onClick?                : (e: MouseEvent) => void;
        onMouseEnter?           : (e: MouseEvent) => void;
        onMouseLeave?           : (e: MouseEvent) => void;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
