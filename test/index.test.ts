// test/index.test.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { describe, expect, test, mock, spyOn } from 'bun:test';
    import { JSDOM } from 'jsdom';
    import { render } from '@minejs/jsx';
    import {
        Button,
    } from '../src';
    import type {
        ButtonProps,
    } from '../src';
    import {
        sizePaddingMap,
        sizeGapMap,
        labelSizeMap,
        variantClasses
    } from '../src/kit/constants';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    const dom               = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document         = dom.window.document;
    global.window           = dom.window as any;
    global.HTMLElement      = dom.window.HTMLElement;
    global.Element          = dom.window.Element;
    global.Text             = dom.window.Text;
    global.DocumentFragment = dom.window.DocumentFragment;
    global.Node             = dom.window.Node;
    global.MouseEvent       = dom.window.MouseEvent;

    // Mock Icon component since it's external
    mock.module('@cruxkit/icon', () => {
        return {
            Icon: (props: any) => {
                const el = document.createElement('i');
                el.setAttribute('data-icon-name', props.name);
                el.setAttribute('data-icon-size', props.size);
                return el;
            }
        };
    });

    // Mock Text component
    mock.module('@cruxkit/text', () => {
        return {
            Text: (props: any) => {
                const el = document.createElement('span');
                el.setAttribute('data-text-size', props.size);
                el.className = props.className || '';
                el.textContent = props.children;
                return el;
            }
        };
    });

    function renderButton(props: ButtonProps) {
        const container = document.createElement('div');
        document.body.appendChild(container);

        // Clear body for fresh start (optional, but good practice if appending to body)
        // But here we append container.

        const mounted = render(Button(props), container);
        const root    = container.firstElementChild as HTMLElement | null;

        if (!root) {
            throw new Error('Button did not render any element');
        }

        return { container, root, mounted };
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TEST ════════════════════════════════════════╗

    describe('@cruxkit/button', () => {

        test('renders with default props', () => {
            const { root } = renderButton({ text: 'Click me' });

            // Default variant is 'solid', color 'brand', size 'md'
            expect(root.tagName).toBe('BUTTON');

            expect(root.className).toContain('inline-flex');
            expect(root.className).toContain('items-center');
            expect(root.className).toContain('justify-center');

            // Check default size 'md'
            expect(root.className).toContain(`gap-${sizeGapMap['md']}`);
            expect(root.className).toContain(`px-${sizePaddingMap['md'].px}`);
            expect(root.className).toContain(`py-${sizePaddingMap['md'].py}`);

            // Check default variant 'solid' 'brand'
            const expectedClasses = variantClasses['solid']['brand'];
            expectedClasses.forEach(c => {
                expect(root.className).toContain(c);
            });

            // Check content
            expect(root.textContent).toContain('Click me');
        });

        test('renders children correctly', () => {
            const { root } = renderButton({ children: 'Child Content' });
            expect(root.textContent).toContain('Child Content');
        });

        test('applies variant classes correctly', () => {
            const variants = ['solid', 'outline', 'ghost', 'link', 'danger'] as const;
            const colors = ['brand', 'success', 'error'] as const;

            variants.forEach(variant => {
                colors.forEach(color => {
                    const { root } = renderButton({ variant, color, text: 'Test' });
                    const expectedClasses = variantClasses[variant][color];
                    expectedClasses.forEach(c => {
                        expect(root.className).toContain(c);
                    });
                });
            });
        });

        test('applies semantic variant defaults', () => {
            // Semantic variants: primary, secondary, success, etc.
            // They default hover to 'opacity'
            const { root } = renderButton({ variant: 'success', text: 'Success' });
            expect(root.className).toContain('hover:opacity-90');
            // Check base classes for success variant (usually maps to 'success' color implicitly or explicitly?)
            // In constants.ts: variantClasses['success']['brand'] (if color defaults to brand)
            // Button.tsx: color defaults to 'brand'.
            const expectedClasses = variantClasses['success']['brand'];
            expectedClasses.forEach(c => {
                expect(root.className).toContain(c);
            });
        });

        test('applies size classes correctly', () => {
            const sizes = ['sm', 'md', 'lg'] as const;
            sizes.forEach(size => {
                const { root } = renderButton({ size, text: 'Size' });
                expect(root.className).toContain(`gap-${sizeGapMap[size]}`);
                expect(root.className).toContain(`px-${sizePaddingMap[size].px}`);
                expect(root.className).toContain(`py-${sizePaddingMap[size].py}`);
                expect(root.className).toContain(`text-${labelSizeMap[size]}`);
            });
        });

        test('handles fullWidth prop', () => {
            const { root } = renderButton({ fullWidth: true, text: 'Full' });
            expect(root.className).toContain('w-full');
        });

        test('handles labelFullWidth prop', () => {
            // This prop affects the Text component inside
            const { root } = renderButton({ labelFullWidth: true, text: 'Label Full' });
            const textSpan = root.querySelector('span[data-text-size]'); // Mocked Text renders span with data-text-size
            expect(textSpan).toBeTruthy();
            expect(textSpan?.className).toContain('flex-1 text-center');
        });

        test('handles disabled state', () => {
            const onClick = mock();
            const { root } = renderButton({ disabled: true, text: 'Disabled', onClick });

            expect(root.className).toContain('opacity-50');
            expect(root.className).toContain('cursor-not-allowed');
            expect(root.className).toContain('pointer-events-none');

            // Simulate click
            root.click();
            expect(onClick).not.toHaveBeenCalled();
        });

        test('handles loading state', () => {
            const onClick = mock();
            const { root } = renderButton({ loading: true, text: 'Loading', onClick, leftIcon: 'plus' });

            expect(root.className).toContain('opacity-50');
            expect(root.className).toContain('cursor-not-allowed');
            expect(root.className).toContain('pointer-events-none');

            // Check for spinner
            const spinner = root.querySelector('i[data-icon-name="spinner"]');
            expect(spinner).toBeTruthy();

            // Check that leftIcon is NOT rendered
            const leftIcon = root.querySelector('i[data-icon-name="plus"]');
            expect(leftIcon).toBeFalsy();

            // Simulate click
            root.click();
            expect(onClick).not.toHaveBeenCalled();
        });

        test('renders leftIcon and rightIcon (string)', () => {
            const { root } = renderButton({
                text: 'Icon',
                leftIcon: 'arrow-left',
                rightIcon: { name: 'arrow-left', rotate: 180 }
            });

            const left = root.querySelector('i[data-icon-name="arrow-left"]');
            const right = root.querySelector('i[data-icon-name="arrow-left"]');

            expect(left).toBeTruthy();
            expect(right).toBeTruthy();
        });

        test('renders leftIcon and rightIcon (object)', () => {
            const { root } = renderButton({
                text: 'Icon',
                leftIcon: { name: 'arrow-left', size: 'lg' },
            });

            const left = root.querySelector('i[data-icon-name="arrow-left"]');
            expect(left).toBeTruthy();
            // Should use the size from the icon object if provided
            expect(left?.getAttribute('data-icon-size')).toBe('lg');
        });

        test('renders icon with default size when not specified in object', () => {
             const { root } = renderButton({
                text: 'Icon',
                size: 'sm',
                leftIcon: { name: 'arrow-left' },
            });

            const left = root.querySelector('i[data-icon-name="arrow-left"]');
            // Should use mapped size from button size 'sm' -> 'sm'
            expect(left?.getAttribute('data-icon-size')).toBe('sm');
        });

        test('handles hover effects', () => {
            const { root: root1 } = renderButton({ hover: 'opacity', text: 'Hover' });
            expect(root1.className).toContain('hover:opacity-90');

            const { root: root2 } = renderButton({ hover: 'scale', text: 'Hover' });
            expect(root2.className).toContain('hover:scale-105');

            const { root: root3 } = renderButton({ hover: 'shadow', text: 'Hover' });
            expect(root3.className).toContain('hover:shadow-md');
        });

        test('handles active effects', () => {
            const { root } = renderButton({ active: 'scale', text: 'Active' });
            expect(root.className).toContain('active:scale-95');
        });

        test('handles underline effects', () => {
            const { root: root1 } = renderButton({ underline: 'hover', text: 'Underline' });
            expect(root1.className).toContain('hover:underline');

            const { root: root2 } = renderButton({ underline: 'always', text: 'Underline' });
            expect(root2.className).toContain('underline');
        });

        test('handles uppercase prop', () => {
            const { root } = renderButton({ uppercase: true, text: 'UPPER' });
            expect(root.className).toContain('uppercase');
            expect(root.className).toContain('tracking-wide');
        });

        test('handles custom className', () => {
            const { root } = renderButton({ className: 'custom-class', text: 'Custom' });
            expect(root.className).toContain('custom-class');
        });

        test('handles events', () => {
            const onClick = mock();
            const onMouseEnter = mock();
            const onMouseLeave = mock();

            const { root } = renderButton({
                text: 'Events',
                onClick,
                onMouseEnter,
                onMouseLeave
            });

            root.click();
            expect(onClick).toHaveBeenCalled();

            const mouseEnter = new window.MouseEvent('mouseenter');
            root.dispatchEvent(mouseEnter);
            expect(onMouseEnter).toHaveBeenCalled();

            const mouseLeave = new window.MouseEvent('mouseleave');
            root.dispatchEvent(mouseLeave);
            expect(onMouseLeave).toHaveBeenCalled();
        });

        // Additional coverage for branches

        test('renderIcon returns null if no icon', () => {
            // Implicitly tested by default render not having icons
             const { root } = renderButton({ text: 'No Icon' });
             expect(root.querySelector('i')).toBeNull();
        });

        test('link variant defaults underline to hover', () => {
             const { root } = renderButton({ variant: 'link', text: 'Link' });
             expect(root.className).toContain('hover:underline');
        });

        test('solid variant defaults active to scale', () => {
             const { root } = renderButton({ variant: 'solid', text: 'Solid' });
             expect(root.className).toContain('active:scale-95');
        });

        test('semantic variant defaults hover to opacity', () => {
             const { root } = renderButton({ variant: 'primary', text: 'Primary' });
             expect(root.className).toContain('hover:opacity-90');
        });

    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
