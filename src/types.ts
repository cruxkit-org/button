// src/types.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement }          from '@minejs/jsx';
    import type { ContainerAs }         from '@cruxkit/container';
    import type { IconProps, IconName } from '@cruxkit/icon';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export type ButtonVariant  = 'solid' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
    export type ButtonColor    = 'brand' | 'success' | 'warning' | 'error' | 'neutral' | 'info';
    export type ButtonSize     = 'sm' | 'md' | 'lg';

    export type ButtonRadius       = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
    export type ButtonShadow       = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'inner';
    export type ButtonHoverEffect  = 'none' | 'opacity' | 'scale' | 'shadow';
    export type ButtonActiveEffect = 'none' | 'scale';
    export type ButtonUnderline    = 'none' | 'hover' | 'always';

    export interface ButtonProps {
        variant?                : ButtonVariant;
        color?                  : ButtonColor;
        size?                   : ButtonSize;
        
        hover?                  : ButtonHoverEffect;
        active?                 : ButtonActiveEffect;
        shadow?                 : ButtonShadow;
        radius?                 : ButtonRadius;
        underline?              : ButtonUnderline;
        uppercase?              : boolean;

        fullWidth?              : boolean;
        labelFullWidth?         : boolean;
        disabled?               : boolean;
        loading?                : boolean;

        leftIcon?               : IconProps | IconName;
        rightIcon?              : IconProps | IconName;

        as?                     : ContainerAs;

        text?                   : string | number;
        children?               : JSXElement | string | number;

        className?              : string;
        id?                     : string;
        type?                   : 'button' | 'submit' | 'reset';
        href?                   : string;
        target?                 : string;
        rel?                    : string;

        'aria-label'?           : string;
        role?                   : string;

        onMount?                : (e: HTMLElement) => void;
        onLoad?                 : (e: HTMLElement) => void;
        onClick?                : (e: MouseEvent) => void;
        onMouseEnter?           : (e: MouseEvent) => void;
        onMouseLeave?           : (e: MouseEvent) => void;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
