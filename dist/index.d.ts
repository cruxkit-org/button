import { JSXElement } from '@minejs/jsx';
import { ContainerAs } from '@cruxkit/container';
import { IconProps, IconName } from '@cruxkit/icon';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
type ButtonColor = 'brand' | 'success' | 'warning' | 'error' | 'neutral' | 'info';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
type ButtonShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'inner';
type ButtonHoverEffect = 'none' | 'opacity' | 'scale' | 'shadow';
type ButtonActiveEffect = 'none' | 'scale';
type ButtonUnderline = 'none' | 'hover' | 'always';
interface ButtonProps {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    hover?: ButtonHoverEffect;
    active?: ButtonActiveEffect;
    shadow?: ButtonShadow;
    radius?: ButtonRadius;
    underline?: ButtonUnderline;
    uppercase?: boolean;
    fullWidth?: boolean;
    labelFullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    leftIcon?: IconProps | IconName;
    rightIcon?: IconProps | IconName;
    as?: ContainerAs;
    text?: string | number;
    children?: JSXElement | string | number;
    className?: string;
    id?: string;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    target?: string;
    rel?: string;
    'aria-label'?: string;
    role?: string;
    onMount?: (e: HTMLElement) => void;
    onLoad?: (e: HTMLElement) => void;
    onClick?: (e: MouseEvent) => void;
    onMouseEnter?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
}

/**
 * Button Component
 *
 * A versatile button component with support for variants, colors, sizes, and icons.
 * Now features enhanced style controllers for effects and interactions.
 */
declare function Button(props: ButtonProps): JSXElement;

export { Button, type ButtonActiveEffect, type ButtonColor, type ButtonHoverEffect, type ButtonProps, type ButtonRadius, type ButtonShadow, type ButtonSize, type ButtonUnderline, type ButtonVariant };
