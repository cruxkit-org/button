<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.3-black"/>
    <a href="https://github.com/cruxkit-org"><img src="https://img.shields.io/badge/🔥-@cruxkit-black"/></a>
    <br>
    <img src="https://img.shields.io/badge/coverage-99%25-brightgreen" alt="Test Coverage" />
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
        <Button>
            Click me
        </Button>
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
            */
            export function Button(props: ButtonProps): JSXElement
            ```

        - #### Types

            ```tsx
            export type IconSize        = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number;

            export type IconData        = Record<string, unknown>;
            export { iconCatalog };
            export type IconName        = CatalogIconName;

            interface IconConfigBase {
                size?                   : IconSize
                color?                  : string
                spin?                   : boolean
                pulse?                  : boolean
                rotate?                 : 0 | 90 | 180 | 270
                flip?                   : 'horizontal' | 'vertical' | 'both'
                [key: string]           : unknown
            }

            export interface NamedIconConfig extends IconConfigBase {
                name                    : IconName
                svg?                    : never
                viewBox?                : never
            }

            export interface CustomIconConfig extends IconConfigBase {
                name?                   : string
                svg                     : string
                viewBox?                : string
            }

            export type IconConfig      = NamedIconConfig | CustomIconConfig;

            export type IconProps       = IconConfig | IconName;
            ```

        - #### Constants

            ```tsx
            export const sizeMap: Record<string, string> = {
                xs                      : '0.75rem',
                sm                      : '1rem',
                md                      : '1.25rem',
                lg                      : '1.5rem',
                xl                      : '2rem',
                xxl                     : '2.5rem'
            };
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
