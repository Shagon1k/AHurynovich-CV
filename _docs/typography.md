# Typography
1. [ Typography configuration ](#typography-configuration)
2. [ Fonts configuration ](#fonts-configuration)
    2.1 [ Font families ](#font-families)
    2.2 [ Font weights ](#font-weights)
    2.3 [ Custom Fonts declarations ](#custom-fonts-declarations)

## Typography configuration
**Typography configuration**: [/src/client/styles/base/_mixins/typography.scss](/src/client/styles/base/_mixins/typography.scss)

Current **Typography setup** is the following:
- **Headings:**
    - h1 (`@mixin h1()`);
    - h2 (`@mixin h2()`);
    - h3 (`@mixin h3()`);
- **Titles:**
    - t1 (`@mixin t1()`);
    - t2 (`@mixin t2()`);
- **Body texts:**
    - b1 (`@mixin b1()`);
    - b2 (`@mixin b2()`);
    - b3 (`@mixin b3()`);

> ⚠️***Warn:** In case any text need to be added to Application, please try to use one of existing Typography mixins as much as possible.*

**Typography configuration** uses customized [Fonts configuration](#fonts-configuration).

## Fonts configuration
**Fonts configuration**: [/src/client/styles/base/_variables/fonts.scss](/src/client/styles/base/_variables/fonts.scss)

### Font families
Currently application have two **Font Families** in use:
- ***Body Text** ($ff-body-text)* - used for Application's body text (general text, titles, paragraphs, etc.);
    > 💡 ***Note**: Primary body text font family used - 'Raleway' (custom)*
- ***Headings** ($ff-headings)* - used for Application's headings;
    > 💡 ***Note**: Primary headings font family used - 'Moyenage' (custom)*


> ⚠️***Warn:** Please do not use any other Font Families except currently set up!*

### Font weights
Configured **Font Weights** are:
- ***Regular** (`$fw-regular`)* - weight = 400;
- ***Medium** (`$fw-medium`)* - weight = 500;
- ***Bold** (`$fw-bold`)* - weight = 700;

> ⚠️***Warn:** Please do not use any other Font Weights except currently set up!*

### Custom Fonts declarations
**Custom fonts** files: [/src/client/assets/fonts/](/src/client/assets/fonts/)
**Custom fonts** declarations: [/src/client/styles/fonts-declarations.scss](/src/client/styles/fonts-declarations.scss)

In order to have ability to use custom fonts, it is declared using ***special mixin***: ['font-face'](/src/client/styles/base/_mixins/font-face.scss). It takes 3 arguments: *'name' (Font Family name)*, *'src' (src to custom Font files)*, *'weight' (default Font weight)*. Src to custom Font files should include needed custom Font extensions in order to have all browser(s) capabilities support: EOT, TTF, WOFF, WOFF2.

> 💡 ***Note**: In case your custom Font is expected to be used with multiple styles (weights) and it has different declarations based on it (Regular, Medium, Bold) - it is better to declare separate Font Faces accordingly (with simmilar Font Family name). Otherwise browser will try to "fake" such styles, which sometimes looks in not the best way ([more information](https://css-tricks.com/typography-for-developers/#aa-remember-fonts-come-in-a-variety-of-styles)). Such Font Styles also include 'italic' style, but this is not the case for Application at the moment.*

#### How to add(replace) Custom Font
1. Download Custom Font. Make sure that it is free or buy if it is not;
    > 💡 ***Note**: Paid fonts is usually quite expensive.*
2. If you plan to use new Font in different specific styles (font weights, italic) - download all according Fonts styles separately (if exist);
3. If downloaded Custom Font and/or it's styles files miss one of necessary extensions (EOT, TTF, WOFF, WOFF2) - use special tools to prepare ones (e.g. [Web Fonts Generator](https://transfonter.org/));
4. Paste all new Custom Font files into **folder**: [/src/client/assets/fonts/](/src/client/assets/fonts/). Follow existing file name pattern: `[font-name]-[font-style].[extension]`;
    - If you add new Custom Font - just add new files;
    - If you replace one of existing Custom Fonts - don't forget to remove unnecessary files;
5. Update **Font Configuration**: [/src/client/styles/base/_variables/fonts.scss](/src/client/styles/base/_variables/fonts.scss)
    - If you add new Custom Font - add new variable for ***Font face name*** and update `$font-face-config`. Add/update ***Font families*** if needed.
    - If you replace one of existing Custom Fonts - just replace according ***Font face name***;
