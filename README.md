<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.1.4-black"/>
    <a href="https://github.com/cruxkit-org"><img src="https://img.shields.io/badge/🔥-@cruxkit-black"/></a>
    <br>
    <img src="https://img.shields.io/badge/coverage-98.12%25-brightgreen" alt="Test Coverage" />
    <img src="https://img.shields.io/github/issues/cruxkit-org/button?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/cruxkit-org/button?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀
    - #### Why ?
        > A small, focused Button primitive for the **Cruxkit** ecosystem. It exposes a
        > single, strongly‑typed API that works across apps, sites, and design systems
        > built on `@minejs/jsx`, so you don’t reimplement button variants, sizes, and
        > states in every project.

    - #### When ?
        > Use it whenever you need a consistent, theme‑aware button: primary actions,
        > subtle ghost or outline actions, link‑styled buttons, or full‑width CTAs. It
        > fits best in projects already using `@cruxkit/container`, `@cruxkit/text`, and
        > `@cruxkit/icon`.

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

        ```tsx
        <Button text="Click me" />
        ```

    - ### With options

        ```tsx
        <Button variant="solid" color="brand" size="md">
            Save
        </Button>

        <Button
            variant="outline"
            color="success"
            size="sm"
            fullWidth
            leftIcon="check"
            rightIcon={{ name: 'arrow-right' }}
        >
            Continue
        </Button>

        <Button
            as="a"
            href="https://example.com"
            variant="link"
            color="brand"
            onMount={(el) => {
                console.log('Button mounted', el);
            }}
        >
            Learn more
        </Button>
        ```

    <br>
    <br>

- ## Documentation 📑


    - ### API ⛓️

        - #### Functions

            ```tsx
            // A polymorphic button component that supports multiple variants, colors, sizes, and states.
            export function Button(props: ButtonProps): JSXElement
            ```

        - #### Types

            ```tsx
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

                leftIcon?               : IconProps | IconName;
                rightIcon?              : IconProps | IconName;

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
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Related 🔗

        - ##### [@minejs/jsx](https://github.com/minejs-org/jsx)

        - ##### [@mineui/utils](https://github.com/mineui-org/utils)

        - ##### [@cruxkit/text](https://github.com/cruxkit-org/text)

        - ##### [@cruxkit/icon](https://github.com/cruxkit-org/icon)

        - ##### [@cruxkit/container](https://github.com/cruxkit-org/container)

        - ##### [@cruxkit/..](https://github.com/cruxkit-org)


<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->
