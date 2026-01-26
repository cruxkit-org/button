<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.3.1-black"/>
    <a href="https://github.com/cruxkit-org"><img src="https://img.shields.io/badge/🔥-@cruxkit-black"/></a>
    <br>
    <img src="https://img.shields.io/badge/coverage-99.05%25-brightgreen" alt="Test Coverage" />
    <img src="https://img.shields.io/github/issues/cruxkit-org/button?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/cruxkit-org/button?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀

    - #### Why ?
        > A lightweight, reactive button kit, built for [`@cruxjs`](https://github.com/cruxjs-org) ecosystem.

    - #### When ?
        > When you need a flexible, theme-ready button with built-in variants, colors, sizes, hover/active effects, icons, loading states, and full TypeScript support—without writing custom styles or logic.

    <br>
    <br>

- ## Quick Start 🔥

    > install [`hmm`](https://github.com/minejs-org/hmm) first.

    ```bash
    # in your terminal
    hmm i @cruxkit/button
    ```

    ```ts
    // in your ts files
    import { Button } from `@cruxkit/button`;
    ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
    <br>


    - ### Basic usage

        ```jsx
        <Button text="Click me" />
        ```

    - ### With options

        ```jsx
        // Variants & Colors
        <Button variant="solid" color="brand" text="Solid Brand" />
        <Button variant="outline" color="success" text="Outline Success" />
        <Button variant="ghost" color="error" text="Ghost Error" />
        <Button variant="link" text="Read More" />

        // Sizes
        <Button size="sm" text="Small" />
        <Button size="lg" text="Large" />

        // Icons
        <Button leftIcon="plus" text="Add Item" />
        <Button rightIcon={name:"arrow-left", rotate: 180} text="Continue" />

        // States & Effects
        <Button loading text="Processing..." />
        <Button disabled text="Not Allowed" />
        <Button hover="scale" active="scale" shadow="md" text="Interactive" />
        <Button fullWidth text="Full Width" />
        ```

    <br>
    <br>

- ## Documentation 📑


    - ### API ⛓️

        - #### Functions

            ```tsx
            export function Button(props: ButtonProps): JSXElement
            ```

        - #### Types

            ```tsx
            export type ButtonVariant       = 'solid' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
            export type ButtonColor         = 'brand' | 'success' | 'warning' | 'error' | 'neutral' | 'info';
            export type ButtonSize          = 'sm' | 'md' | 'lg';

            export type ButtonHoverEffect   = 'none' | 'opacity' | 'scale' | 'shadow';
            export type ButtonActiveEffect  = 'none' | 'scale';
            export type ButtonUnderline     = 'none' | 'hover' | 'always';

            export interface ButtonProps extends Omit<JSXProps, 'children' | 'color'> {
                variant?                : ButtonVariant;
                color?                  : ButtonColor;
                size?                   : ButtonSize;

                hover?                  : ButtonHoverEffect;
                active?                 : ButtonActiveEffect;
                underline?              : ButtonUnderline;
                uppercase?              : boolean;

                fullWidth?              : boolean;
                labelFullWidth?         : boolean;
                disabled?               : boolean;
                loading?                : boolean;

                leftIcon?               : IconProps | IconName;
                rightIcon?              : IconProps | IconName;

                text?                   : string | number;
                children?               : JSXElement | string | number;

                // Explicitly define common event handlers for better DX
                onClick?                : (e: MouseEvent) => void;
                onMouseEnter?           : (e: MouseEvent) => void;
                onMouseLeave?           : (e: MouseEvent) => void;
            }
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Related 🔗

        - ##### [@minejs/jsx](https://github.com/minejs-org/jsx)

        - ##### [@mineui/utils](https://github.com/mineui-org/utils)

        - ##### [@cruxkit/text](https://github.com/cruxkit-org/text)

        - ##### [@cruxkit/icon](https://github.com/cruxkit-org/icon)


<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->
