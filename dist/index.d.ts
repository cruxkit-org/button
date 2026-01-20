import { JSXElement } from '@minejs/jsx';
import { ContainerAs } from '@cruxkit/container';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonColor = 'brand' | 'success' | 'warning' | 'error' | 'neutral';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    leftIcon?: JSXElement;
    rightIcon?: JSXElement;
    icon?: JSXElement;
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
declare function Button(props: ButtonProps): JSXElement;

export { Button, type ButtonColor, type ButtonProps, type ButtonSize, type ButtonVariant };
