// src/types.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement }          from '@minejs/jsx';
    import type { ContainerAs }         from '@cruxkit/container';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export type ButtonVariant  = 'solid' | 'outline' | 'ghost' | 'link';
    export type ButtonColor    = 'brand' | 'success' | 'warning' | 'error' | 'neutral';
    export type ButtonSize     = 'sm' | 'md' | 'lg';

    export interface ButtonProps {
        variant?                : ButtonVariant;
        color?                  : ButtonColor;
        size?                   : ButtonSize;
        fullWidth?              : boolean;
        disabled?               : boolean;
        loading?                : boolean;

        leftIcon?               : JSXElement;
        rightIcon?              : JSXElement;
        icon?                   : JSXElement;

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
