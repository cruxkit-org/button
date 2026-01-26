// src/kit/button.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement }                                          from '@minejs/jsx';
    import { Icon, type IconProps, type IconName, type IconConfig }     from '@cruxkit/icon';
    import type { ButtonProps, ButtonSize }                             from '../types';
    import {
        sizePaddingMap,
        sizeGapMap,
        labelSizeMap,
        iconSizeMap,
        variantClasses
    } from './constants';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    function renderIcon(icon: IconProps | IconName | undefined, size: ButtonSize): JSXElement | null {
        if (!icon) return null;

        const iconSize = iconSizeMap[size];

        if (typeof icon === 'string') {
            return (
                <span className="inline-flex shrink-0">
                    <Icon name={icon as IconName} size={iconSize} />
                </span>
            );
        }

        const resolvedSize = ((icon as IconProps) as IconConfig).size ?? iconSize;

        return (
            <span className="inline-flex shrink-0">
                <Icon {...icon} size={resolvedSize} />
            </span>
        );
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
    export function Button(props: ButtonProps): JSXElement {
        const {
            variant = 'solid',
            color   = 'brand',
            size    = 'md',

            // Style Controllers
            hover,
            active,
            shadow,
            radius,
            underline,
            uppercase,

            fullWidth,
            labelFullWidth,
            disabled,
            loading,

            leftIcon,
            rightIcon,

            as = 'button',
            text,
            children,

            className,
            onClick,
            onMouseEnter,
            onMouseLeave,

            ...rest
        } = props;

        // 1. Resolve Defaults based on Variant
        const isSemantic      = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'].includes(variant);
        const isSolid         = variant === 'solid';
        const isLink          = variant === 'link';

        const resolvedShadow    = shadow    ?? ((isSemantic || isSolid) ? 'sm' : 'none');
        const resolvedActive    = active    ?? 'scale';
        // Legacy variants (solid/outline/ghost) have built-in color hovers, so we default to 'none' to avoid double effects
        // Semantic variants use opacity hover by default
        const resolvedHover     = hover     ?? (isSemantic ? 'opacity' : 'none');
        const resolvedUnderline = underline ?? (isLink ? 'hover' : 'none');
        const resolvedRadius    = radius    ?? 'base'; // Default to base rounded

        // 2. Compose Classes
        const baseClasses = [
            'inline-flex', 'items-center', 'justify-center',
            'transition-all', 'duration-200',
            'focus:outline-none',
            'font-medium'
        ];

        // State Classes
        if (disabled || loading) {
            baseClasses.push('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        } else {
            baseClasses.push('cursor-pointer');
        }

        // Size Classes
        if (fullWidth) baseClasses.push('w-full');
        baseClasses.push(`gap-${sizeGapMap[size]}`);
        baseClasses.push(`px-${sizePaddingMap[size].px}`);
        baseClasses.push(`py-${sizePaddingMap[size].py}`);
        baseClasses.push(`text-${labelSizeMap[size]}`); // Ensure text size matches button size

        // Variant & Color Classes (from Constants)
        const variantStyle = variantClasses[variant]?.[color] || [];
        baseClasses.push(...variantStyle);

        // Hover Effects
        if (resolvedHover === 'opacity') baseClasses.push('hover:opacity-90');
        if (resolvedHover === 'scale')   baseClasses.push('hover:scale-105');
        if (resolvedHover === 'shadow')  baseClasses.push('hover:shadow-md');

        // Active Effects
        if (resolvedActive === 'scale')  baseClasses.push('active:scale-95');

        // Underline
        if (resolvedUnderline === 'hover')  baseClasses.push('hover:underline', 'underline-offset-4', 'decoration-2');
        if (resolvedUnderline === 'always') baseClasses.push('underline', 'underline-offset-4', 'decoration-2');

        // Uppercase
        if (uppercase) baseClasses.push('uppercase', 'tracking-wide');

        // Custom ClassName
        if (className) baseClasses.push(className);


        // 3. Render
        const content = children || text;
        const labelSize = labelSizeMap[size];

        return (
            <div
                as={as}
                className={baseClasses.join(' ')}
                radius={resolvedRadius}
                shadow={resolvedShadow}
                onClick={(e: MouseEvent) => {
                    if (!disabled && !loading) {
                        onClick?.(e);
                    }
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...rest}
            >
                {loading && (
                    <span className="animate-spin mr-2">
                        <Icon name='spinner' size={iconSizeMap[size]} />
                    </span>
                )}

                {!loading ? renderIcon(leftIcon, size) : <></>}

                {content && (typeof content === 'string' || typeof content === 'number') ? (
                    <div
                        as              ='span'
                        textWeight      ='extrabold'
                        textAlign       ={labelFullWidth ? 'center' : 'center'}
                        textTransform   ='uppercase'
                        color           ='brand'
                        textSize        ={labelSize}
                        className       ={labelFullWidth ? 'flex-1' : ''}
                        children        ={content}
                    />
                ) : content}

                {!loading ? renderIcon(rightIcon, size) : <></>}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
