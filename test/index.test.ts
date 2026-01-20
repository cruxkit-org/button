// test/index.test.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { describe, expect, test } from 'bun:test';
    import { JSDOM } from 'jsdom';
    import { render } from '@minejs/jsx';
    import {
        Button,
    } from '../src';
    import { Icon } from '@cruxkit/icon';
    import type {
        ButtonProps,
    } from '../src';

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

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TEST ════════════════════════════════════════╗

    describe('@cruxkit/button', () => {
        function renderButton(props: ButtonProps) {
            const container = document.createElement('div');
            document.body.appendChild(container);

            const mounted = render(Button(props), container);
            const root     = container.firstElementChild as HTMLElement | null;

            if (!root) {
                throw new Error('Button did not render any element');
            }

            return { container, root, mounted };
        }

        test('renders with default configuration', () => {
            const { root, mounted } = renderButton({
                text: 'Click me'
            });

            expect(root.tagName).toBe('BUTTON');
            expect(root.textContent?.trim()).toBe('Click me');
            expect(root.className).toContain('inline-flex');
            expect(root.className).toContain('bg-brand');

            mounted.unmount();
        });

        test('prefers children over text when both are provided', () => {
            const { root, mounted } = renderButton({
                text    : 'From text',
                children: 'From children'
            });

            expect(root.textContent?.trim()).toBe('From children');

            mounted.unmount();
        });

        test('applies fullWidth and state styles', () => {
            const fullWidth = renderButton({
                children : 'Wide',
                fullWidth: true
            });

            expect(fullWidth.root.className).toContain('w-full');

            fullWidth.mounted.unmount();

            const disabled = renderButton({
                children: 'Disabled',
                disabled: true
            });

            expect(disabled.root.className).toContain('opacity-50');
            expect(disabled.root.className).toContain('cursor-not-allowed');
            expect(disabled.root.className).toContain('pointer-events-none');

            disabled.mounted.unmount();

            const loading = renderButton({
                children: 'Loading',
                loading : true
            });

            expect(loading.root.className).toContain('opacity-50');
            expect(loading.root.className).toContain('cursor-not-allowed');
            expect(loading.root.className).toContain('pointer-events-none');

            loading.mounted.unmount();
        });

        test('supports all sizes', () => {
            const sizes: ButtonProps['size'][] = ['sm', 'md', 'lg'];

            for (const size of sizes) {
                const instance = renderButton({
                    size,
                    children: `Size ${size}`
                });

                expect(instance.root.textContent).toContain(`Size ${size}`);

                instance.mounted.unmount();
            }
        });

        test('supports different variants', () => {
            const outline = renderButton({
                variant : 'outline',
                color   : 'brand',
                children: 'Outline'
            });

            expect(outline.root.className).toContain('border-brand');

            outline.mounted.unmount();

            const ghost = renderButton({
                variant : 'ghost',
                color   : 'brand',
                children: 'Ghost'
            });

            expect(ghost.root.className).toContain('text-brand');

            ghost.mounted.unmount();

            const link = renderButton({
                variant : 'link',
                color   : 'brand',
                children: 'Link'
            });

            expect(link.root.className).toContain('hover:underline');

            link.mounted.unmount();
        });

        test('renders icons from passed elements', () => {
            const withIcons = renderButton({
                leftIcon : Icon('a') as any,
                rightIcon: Icon('ain') as any,
                children : 'With icons'
            });

            const iconSpans = withIcons.root.querySelectorAll('span.inline-flex.shrink-0');
            expect(iconSpans.length).toBeGreaterThanOrEqual(2);
            expect(withIcons.root.innerHTML).toContain('svg'); // Icon renders an svg

            withIcons.mounted.unmount();
        });

        test('skips label when children is empty', () => {
            const { root, mounted } = renderButton({
                children: ''
            });

            expect(root.textContent?.trim()).toBe('');

            mounted.unmount();
        });

        test('supports polymorphic as prop', () => {
            const { root, mounted } = renderButton({
                as      : 'a',
                href    : 'https://example.com',
                children: 'Link button'
            });

            expect(root.tagName).toBe('A');
            expect(root.getAttribute('href')).toBe('https://example.com');

            mounted.unmount();
        });

        test('calls onMount with underlying element', () => {
            let calls          = 0;
            let mountedElement = null as HTMLElement | null;

            const { root, mounted } = renderButton({
                children: 'Mounted',
                onMount : (el: HTMLElement) => {
                    calls++;
                    mountedElement = el;
                }
            });

            expect(calls).toBe(1);
            expect(mountedElement).not.toBeNull();
            expect(mountedElement).toBeInstanceOf(HTMLElement);
            expect(mountedElement).toBe(root);

            mounted.unmount();
        });

        test('renders as icon button when icon prop is provided', () => {
            const { root, mounted } = renderButton({
                icon: Icon('a') as any,
                size: 'md'
            });

            // Check for equal padding (square shape)
            // md size has py: 2, so px should also be 2
            expect(root.className).toContain('px-2');
            expect(root.className).toContain('py-2');

            // Check if icon is rendered
            const spans = root.querySelectorAll('span.inline-flex.shrink-0');
            expect(spans.length).toBeGreaterThanOrEqual(1);

            mounted.unmount();
        });
    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
