// src/kit/button.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement }                                          from '@minejs/jsx';
    import { Container }                                                from '@cruxkit/container';
    import { Text }                                                     from '@cruxkit/text';
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

    const mountedElements = new WeakSet<HTMLElement>();

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

            as,
            text,
            children,

            className,
            onMount,
            onLoad,
            onClick,

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

        // Radius
        if (resolvedRadius !== 'none') {
             baseClasses.push(resolvedRadius === 'base' ? 'rounded' : `rounded-${resolvedRadius}`);
        } else {
            baseClasses.push('rounded-none');
        }

        // Shadow
        if (resolvedShadow !== 'none') {
            baseClasses.push(`shadow-${resolvedShadow}`);
        }

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
            <Container
                as={as || 'button'}
                className={baseClasses.join(' ')}
                {...rest}
                ref={(el: HTMLElement | null) => {
                    if (el) {
                        if (!mountedElements.has(el)) {
                            mountedElements.add(el);
                            onMount?.(el);
                            onLoad?.(el);
                        }
                    }
                }}
                onClick={(e: MouseEvent) => {
                    if (!disabled && !loading) {
                        onClick?.(e);
                    }
                }}
            >
                {loading && (
                    <span className="animate-spin mr-2">
                        <Icon name='spinner' size={iconSizeMap[size]} />
                    </span>
                )}

                {!loading ? renderIcon(leftIcon, size) : <></>}

                {content && (typeof content === 'string' || typeof content === 'number') ? (
                    <Text
                        size={labelSize}
                        className={labelFullWidth ? 'flex-1 text-center' : ''}
                    >
                        {content}
                    </Text>
                ) : content}

                {!loading ? renderIcon(rightIcon, size) : <></>}
            </Container>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
