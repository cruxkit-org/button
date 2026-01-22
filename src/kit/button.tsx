// src/kit/button.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement }                                          from '@minejs/jsx';
    import { Container }                                                from '@cruxkit/container';
    import { Text }                                                     from '@cruxkit/text';
    import { Icon, type IconProps, type IconName, type IconConfig }     from '@cruxkit/icon';
    import type { ButtonProps, ButtonSize, ButtonColor, ButtonVariant } from '../types';
    
// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    const sizePaddingMap: Record<ButtonSize, { px: 3 | 4 | 6; py: 1 | 2 | 3 }> = {
        sm: { px: 3, py: 1 },
        md: { px: 4, py: 2 },
        lg: { px: 6, py: 3 }
    };

    const sizeGapMap: Record<ButtonSize, 1 | 2> = {
        sm: 1,
        md: 2,
        lg: 2
    };

    const labelSizeMap: Record<ButtonSize, 'sm' | 'md' | 'lg'> = {
        sm: 'sm',
        md: 'md',
        lg: 'lg'
    };

    const iconSizeMap: Record<ButtonSize, 'sm' | 'md' | 'lg'> = {
        sm: 'sm',
        md: 'md',
        lg: 'lg'
    };

    const variantClasses: Record<ButtonVariant, Record<ButtonColor, string[]>> = {
        solid: {
            brand: [
                'bg-brand',
                'text-inverse',
                'border',
                'border-transparent',
                'hover:bg-brand-hover',
                'active:bg-brand-active',
                'active:scale-95',
                'shadow-sm',
                'hover:shadow-md'
            ],
            success: [
                'bg-success',
                'text-inverse',
                'border',
                'border-transparent',
                'hover:bg-success-hover',
                'active:bg-success-active',
                'active:scale-95',
                'shadow-sm',
                'hover:shadow-md'
            ],
            warning: [
                'bg-warning',
                'text-inverse',
                'border',
                'border-transparent',
                'hover:bg-warning-hover',
                'active:bg-warning-active',
                'active:scale-95',
                'shadow-sm',
                'hover:shadow-md'
            ],
            error: [
                'bg-error',
                'text-inverse',
                'border',
                'border-transparent',
                'hover:bg-error-hover',
                'active:bg-error-active',
                'active:scale-95',
                'shadow-sm',
                'hover:shadow-md'
            ],
            neutral: [
                'bg-surface',
                'text-1',
                'border',
                'border-1',
                'hover:bg-raised',
                'active:bg-tertiary',
                'active:scale-95',
                'shadow-sm',
                'hover:shadow-md'
            ]
        },
        outline: {
            brand: [
                'bg-transparent',
                'text-brand',
                'border',
                'border-brand',
                'hover:bg-brand-subtle',
                'active:bg-brand-subtle',
                'active:scale-95'
            ],
            success: [
                'bg-transparent',
                'text-success',
                'border',
                'border-success',
                'hover:bg-success-subtle',
                'active:bg-success-subtle',
                'active:scale-95'
            ],
            warning: [
                'bg-transparent',
                'text-warning',
                'border',
                'border-warning',
                'hover:bg-warning-subtle',
                'active:bg-warning-subtle',
                'active:scale-95'
            ],
            error: [
                'bg-transparent',
                'text-error',
                'border',
                'border-error',
                'hover:bg-error-subtle',
                'active:bg-error-subtle',
                'active:scale-95'
            ],
            neutral: [
                'bg-transparent',
                'text-1',
                'border',
                'border-1',
                'hover:bg-raised',
                'active:bg-tertiary',
                'active:scale-95'
            ]
        },
        ghost: {
            brand: [
                'bg-transparent',
                'text-brand',
                'border',
                'border-transparent',
                'hover:bg-brand-subtle',
                'active:bg-brand-subtle',
                'active:scale-95'
            ],
            success: [
                'bg-transparent',
                'text-success',
                'border',
                'border-transparent',
                'hover:bg-success-subtle',
                'active:bg-success-subtle',
                'active:scale-95'
            ],
            warning: [
                'bg-transparent',
                'text-warning',
                'border',
                'border-transparent',
                'hover:bg-warning-subtle',
                'active:bg-warning-subtle',
                'active:scale-95'
            ],
            error: [
                'bg-transparent',
                'text-error',
                'border',
                'border-transparent',
                'hover:bg-error-subtle',
                'active:bg-error-subtle',
                'active:scale-95'
            ],
            neutral: [
                'bg-transparent',
                'text-1',
                'border',
                'border-transparent',
                'hover:bg-raised',
                'active:bg-tertiary',
                'active:scale-95'
            ]
        },
        link: {
            brand: [
                'bg-transparent',
                'text-brand',
                'border',
                'border-transparent',
                'hover:underline',
                'underline-offset-4',
                'decoration-2',
                'px-1'
            ],
            success: [
                'bg-transparent',
                'text-success',
                'border',
                'border-transparent',
                'hover:underline',
                'underline-offset-4',
                'decoration-2',
                'px-1'
            ],
            warning: [
                'bg-transparent',
                'text-warning',
                'border',
                'border-transparent',
                'hover:underline',
                'underline-offset-4',
                'decoration-2',
                'px-1'
            ],
            error: [
                'bg-transparent',
                'text-error',
                'border',
                'border-transparent',
                'hover:underline',
                'underline-offset-4',
                'decoration-2',
                'px-1'
            ],
            neutral: [
                'bg-transparent',
                'text-1',
                'border',
                'border-transparent',
                'hover:underline',
                'underline-offset-4',
                'decoration-2',
                'px-1'
            ]
        }
    };

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    const mountedElements            = new WeakSet<HTMLElement>();
    const loadedElements             = new WeakSet<HTMLElement>();

    type ButtonContainerProps = {
        as?: unknown;
        display?: string;
        align?: string;
        justify?: string;
        gap?: number;
        px?: number;
        py?: number;
        radius?: string;
        className?: string;
        ref?: (element: HTMLElement | null) => void;
    } & Record<string, unknown>;

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
    * A polymorphic button component that supports multiple variants, colors, sizes, and states.
    *
    * @param props              - The properties for the Button component.
    * @param props.variant      - Visual style variant: `'solid' | 'outline' | 'ghost' | 'link'`.
    * @param props.color        - Color theme: `'brand' | 'success' | 'warning' | 'error' | 'neutral'`.
    * @param props.size         - Size scale: `'sm' | 'md' | 'lg'`.
    * @param props.fullWidth    - Whether the button spans the full width of its container.
    * @param props.disabled     - Whether the button is disabled.
    * @param props.loading      - Whether the button is in a loading state (disables interaction).
    * @param props.leftIcon     - Optional icon placed to the left of the label (string name or IconProps).
    * @param props.rightIcon    - Optional icon placed to the right of the label (string name or IconProps).
    * @param props.as           - Element type to render: `'button' | 'a' | any polymorphic component`.
    * @param props.children     - Button label content.
    * @param props.className    - Additional CSS classes appended to the built-in styles.
    * @param props.type         - HTML button type attribute (only applied when `as="button"`).
    * @param props.restProps    - Any other props are forwarded to the underlying element.
    *
    * @returns A JSX element representing the styled button.
    *
    * @example
    * ```tsx
    * <Button variant="solid" color="brand" size="md" onClick={handleClick}>
    *   Save
    * </Button>
    * ```
    */
    export function Button(props: ButtonProps): JSXElement {
        const {
            variant     = 'solid',
            color       = 'brand',
            size        = 'md',
            fullWidth   = false,
            disabled    = false,
            loading     = false,
            leftIcon,
            rightIcon,
            as          = 'button',
            text,
            children,
            className,
            type        = 'button',
            onMount,
            onLoad,
            ...restProps
        } = props;

        const baseClasses = [
            'inline-flex',
            'items-center',
            'justify-center',
            'font-medium',
            'transition-all',
            'duration-150',
            'select-none',
            'focus:outline-none',
            'focus-visible:ring',
            'focus-visible:ring-offset-2'
        ];

        const stateClasses = [];

        if (loading || disabled) {
            stateClasses.push('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        }

        if (fullWidth) {
            stateClasses.push('w-full');
        }

        const paletteClasses = variantClasses[variant][color];

        const classes = [
            ...baseClasses,
            ...stateClasses,
            ...paletteClasses,
            className
        ]
            .filter(Boolean)
            .join(' ');

        const padding   = sizePaddingMap[size];
        const gap       = sizeGapMap[size];
        const labelSize = labelSizeMap[size];

        const content: JSXElement[] = [];

        const left  = renderIcon(leftIcon, size);
        const right = renderIcon(rightIcon, size);

        if (left) {
            content.push(left);
        }

        const isKeyLikeText = typeof text === 'string' && text.includes('.');
        const label         = children ?? (isKeyLikeText ? '--' : text);

        if (label !== undefined && label !== null && label !== '') {
            content.push(
                <Text as="span" size={labelSize} data-role="btn-label" className='flex items-center'>
                    {label}
                </Text>
            );
        }

        if (right) {
            content.push(right);
        }

        const elementType = as;

        const elementTypeProps =
            elementType === 'button'
                ? { type }
                : {};


        const handleRef =
            (onMount || onLoad)
                ? (element: HTMLElement | null) => {
                    if (!element) return;

                    if (onMount && !mountedElements.has(element)) {
                        mountedElements.add(element);
                        onMount(element);
                    }

                    if (onLoad && !loadedElements.has(element)) {
                        loadedElements.add(element);

                        const runLoad = () => {
                            onLoad(element);
                        };

                        if (typeof requestAnimationFrame === 'function') {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(runLoad);
                            });
                        } else {
                            setTimeout(runLoad, 0);
                        }
                    }
                }
                : undefined;

        const containerProps: ButtonContainerProps = {
            as,
            display   : 'inline-flex',
            align     : 'center',
            justify   : 'center',
            gap,
            px        : padding.px,
            py        : padding.py,
            radius    : 'md',
            className : classes,
            ...elementTypeProps,
            ...restProps
        };

        if (handleRef) {
            containerProps.ref = handleRef;
        }

        return (
            <Container {...(containerProps as Record<string, unknown>)}>
                {content}
            </Container>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
