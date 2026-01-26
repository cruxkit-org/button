import { JSXProps, JSXElement } from '@minejs/jsx';
import { IconProps, IconName } from '@cruxkit/icon';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
type ButtonColor = 'brand' | 'success' | 'warning' | 'error' | 'neutral' | 'info';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonHoverEffect = 'none' | 'opacity' | 'scale' | 'shadow';
type ButtonActiveEffect = 'none' | 'scale';
type ButtonUnderline = 'none' | 'hover' | 'always';
interface ButtonProps extends Omit<JSXProps, 'children' | 'color'> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    hover?: ButtonHoverEffect;
    active?: ButtonActiveEffect;
    underline?: ButtonUnderline;
    uppercase?: boolean;
    fullWidth?: boolean;
    labelFullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    leftIcon?: IconProps | IconName;
    rightIcon?: IconProps | IconName;
    text?: string | number;
    children?: JSXElement | string | number;
    onClick?: (e: MouseEvent) => void;
    onMouseEnter?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
}

/**
 * Button Component
 *
 * A versatile button component with support for variants, colors, sizes, and icons.
 * Now features enhanced style controllers for effects and interactions.
 *
 * @param {ButtonProps } props                      - The properties for the button.
 * @param {ButtonVariant } [props.variant='solid']  - Visual style variant.
 *   - `solid`: Filled background (default).
 *   - `outline`: Border with transparent background.
 *   - `ghost`: Transparent background, hover effect.
 *   - `link`: Looks like a text link.
 *   - `primary`, `secondary`, `success`, `warning`, `danger`, `info`: Semantic variants.
 * @param {ButtonColor } [props.color='brand']  - Color theme.
 *   - `brand`, `success`, `warning`, `error`, `neutral`, `info`.
 * @param {ButtonSize } [props.size='md']       - Button size.
 *   - `sm`: Small.
 *   - `md`: Medium.
 *   - `lg`: Large.
 * @param {ButtonHoverEffect } [props.hover] - Hover effect.
 *   - `opacity`: Reduces opacity on hover.
 *   - `scale`: Scales up slightly on hover.
 *   - `shadow`: Adds shadow on hover.
 *   - `none`: No hover effect.
 *   - Defaults depend on variant (e.g., semantic variants default to `opacity`).
 * @param {ButtonActiveEffect } [props.active='scale'] - Click/Active effect.
 *   - `scale`: Scales down slightly on click.
 *   - `none`: No active effect.
 * @param {string } [props.shadow]              - Box shadow style (e.g., 'sm', 'md', 'lg', 'none'). Defaults based on variant.
 * @param {string } [props.radius='base']       - Border radius (e.g., 'none', 'sm', 'base', 'md', 'lg', 'full').
 * @param {ButtonUnderline } [props.underline]  - Underline style for text.
 *   - `hover`: Underline on hover.
 *   - `always`: Always underlined.
 *   - `none`: No underline.
 * @param {boolean} [props.uppercase=false]         - If true, transforms text to uppercase.
 * @param {boolean} [props.fullWidth=false]         - If true, the button takes up the full width of its container.
 * @param {boolean} [props.labelFullWidth=false]    - If true, the label text takes up the remaining space (useful with icons).
 * @param {boolean} [props.disabled=false]          - If true, disables interaction and applies disabled styles.
 * @param {boolean} [props.loading=false]           - If true, shows a loading spinner and disables interaction.
 * @param {IconProps | IconName} [props.leftIcon]   - Icon to display on the left side.
 * @param {IconProps | IconName} [props.rightIcon]  - Icon to display on the right side.
 * @param {string} [props.as='button']              - The HTML element or component to render as.
 * @param {string | number} [props.text]            - The text content of the button.
 * @param {JSXElement | string | number} [props.children]   - Child elements (overrides text).
 * @param {string} [props.className]                        - Additional CSS classes.
 * @param {(e: MouseEvent) => void} [props.onClick]         - Click handler.
 * @param {(e: MouseEvent) => void} [props.onMouseEnter]    - Mouse enter handler.
 * @param {(e: MouseEvent) => void} [props.onMouseLeave]    - Mouse leave handler.
 */
declare function Button(props: ButtonProps): JSXElement;

export { Button, type ButtonActiveEffect, type ButtonColor, type ButtonHoverEffect, type ButtonProps, type ButtonSize, type ButtonUnderline, type ButtonVariant };
