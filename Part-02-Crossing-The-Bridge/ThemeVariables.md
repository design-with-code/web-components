## Theme Variables

### What Are Theme Variables?

To style elements in your application that are no components, you have to use CSS (Cascading Style Sheets). Creating CSS holds a risk as it might conflict with the predefined values that come with the theme (e.g., Horizon) and especially with color values, this can lead to issues when switching themes (e.g., from Morning Horizon (Light) to Evening Horizon (Dark)). Fortunately, there is a way to access the official CSS variables that are used to style the SAP components in all major SAP UI technologies, so that you can avoid these conflicts from the start.

When switching a theme, only the values for the variables are exchanged while the variables are used in a consistent way.

For example, if you look at the variable for the background color in [css_variable.css](https://github.com/SAP/theming-base-content/blob/master/content/Base/baseLib/sap_horizon/css_variables.css) for *Morning Horizon* the color value is a light gray.

```css
--sapBackgroundColor: #f5f6f7;
```

In the [css_variables.css](https://github.com/SAP/theming-base-content/blob/master/content/Base/baseLib/sap_horizon_dark/css_variables.css) for *Eveneing Horizon*, the exact same background color variable is mapped to a dark gray.

```css
 --sapBackgroundColor: #12171c;
```

In other words, there is no need for you to change the CSS when switching themes as long as you used the variables. Accross all themes, these variables are available and mapped to the corresponding values.

### Using Theme Variables

The theme variables don't only define colors but also other CSS parameters like line height, width, shadows, fonts, etc.

If you would like to create a page header for your application, there currently is no web component available that you could use for that purpose. You could now create a `div` element and give it the `class`-Attribute *headerContainer*. In the corresponding CSS file you would now create a class definition with the following style attributes taken from the `css_variables.css` file.

```css
.headerContainer{
  background-color: var(--sapShellColor);
  border-color: var(--sapShell_BorderColor);
  box-shadox: var(---sapShell_Shadow);
}
```

Finding the right variable is sometimes a bit cumbersome though. Using the find function and searching through the `css_variables.css`in VSCode is not optimal, but the most reliable option I have found so far.
