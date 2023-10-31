# Designing with Code – Part 2: Crossing the Bridge

Modern design tools like Figma offer component libraries and styles that support the design process across large teams and organizations. Ideally, the design artifacts are kept consistent with the corresponding development artifacts to facilitate the handover and improve communication between design and development.

How well they match is best experienced and validated by designers themselves once they have a foot on both sides of the chasm.

This is the second article in the Designing with Code series, where I want to help designers get started with code-based prototyping to complement and extend their design process, and to help narrow the gap between design and implementation. In part one, I outlined the benefits of venturing further into development and encouraged designers to embrace the challenge.

In this second article, I will shed some light on practices that help designers prepare for implementation by utilizing the capabilities of their design tools. I will focus on Figma as the design tool that is most widely used in today’s interaction design community.

## Library

One of the most important things you can do to keep your design in sync with what’s technically feasible is to use design components that are structurally similar to their technical counterparts.

For most technical component libraries that are available for use in productive development there are equivalent component libraries in the major design tools. For SAP’s UI technologies, we make component libraries available via the SAP Fiori Design Guidelines. When choosing the relevant library, it’s also important to distinguish between different technologies like SAPUI5 and SAP Web Components, which can support different component sets and features.

However, because technology is constantly evolving, you’ll still need to compare the design components to the current implementation in the target technology and version to be completely certain. In doing so, you might also spot issues that you can report back to the design team delivering the component set.
But what does it mean to keep design components in sync with their siblings in the code?

If you refer to the API documentation of a UI technology ([SAPUI5](https://sapui5.hana.ondemand.com/#/api), [SAP Web Components](https://sap.github.io/ui5-webcomponents/)), you’ll usually find the sections below. Let’s look at how these code elements can be mapped in design tools.

* **Properties** – Properties allow you to influence the presentation and functionality of a component. It’s important to note that properties usually accept a certain data type, such as a simple text (string), a true/false option (Boolean), or more complex structures.
The same properties should be also available in the design components – with the same data types – to make sure that designs match the implementation.
* **Aggregations** (also: slots, children) – These are usually references to other elements that can be embedded into the parent component. Some components, like panels, are primarily designed to be containers for other elements. For more complex components like tables, different parts of the component are defined as nested elements that can be put into specific slots.
This nesting is more difficult to control in design tools like Figma. As a result, many design libraries keep containers completely open and offer a list of items that can be hidden. Alternatively, they make use of a “swap instance” feature, where placeholders can be replaced by custom components.
There are advantages to each of these options and in many cases the best approach is to pick one option and stick with it. But this is definitely one of the areas where it can become extremely hard to keep design component libraries in sync with their implementation.
* **Methods** (also: functions) – Methods are pieces of logic that can be called from outside a component.
  * So-called “getter” and “setter” methods are typically used to access properties, especially when setting a property requires some logic to transform or validate the data. Otherwise, properties are accessed directly. Methods can require arguments, which must be supplied to the method to be executed. This might be a value you want to set, like setEnabled(true), where true is the argument.
  * Other methods can trigger behavior that is built into a component. This might go beyond just setting a property, like opening a popover.
Design tools don’t usually support modeling methods. Instead, where methods affect properties, you should either expose the properties or offer variants of the component. Methods might also become relevant in an interactive prototype. In this case, it’s up to the product designer to ensure that the design is aligned with the implementation.
* **Events** (also: call-back) – Events are triggered by the component, either when a user interacts with the component or when the code changes the properties. Events describe the interactive behavior of a component, or to be more precise, the interactions to which a component reacts. The actual behavior is then triggered by the event and can either be part of the component’s inbuilt behavior or part of the component’s behavior in your application.
  * In design libraries, the inbuilt component behavior is taken care of by the people who create the library and can’t usually be influenced from the outside. One example is the check/uncheck behavior of a checkbox (Figma tutorial in interactive components).
  * If you are building an interactive prototype and want to depict component behavior defined in your application, the variety of events you can use is determined by the design tool. Figma offers a set of standard triggers that can be used to control the prototype, such as “on click”, “on drag”, and so on. But these events are generic and have no deeper understanding of the component itself.
Design tools offer different levels of event handling. The interactive behavior within the component should be in sync with the interactive behavior of the implementation. However, the extent to which components can react to non-standard interactions is limited (for example, resizing or overflow). This will often need to be managed by using different component variants. The interactive behavior of a component in a prototype relies on the same set of standard interactions and must be handled by the designer to ensure the behavior is consistent with the actual code.

Especially when it comes to interactivity, design tools face the difficult choice of going down the rabbit hole of mimicking code and exacerbating complexity, or keeping things simple. This is the exact point where prototyping with code becomes the better alternative.

The API documentation is not a fun read at all. Fortunately, today’s UI libraries usually come with interactive examples that are either embedded into the documentation directly (like the [API documentation for SAP Web Components using Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-button--docs)) or available in a separate sample page (like [SAPUI5 demo kit with interactive samples](https://sapui5.hana.ondemand.com/#/controls)). Nevertheless, because the API documentation usually is generated from the actual code, it is still the single source of truth if you want to make sure that your design matches implemented functionality.

To summarize: By keeping the design components in sync with the technical components, you can simplify the communication between design and development significantly. If you use component libraries provided by the publisher of the technology, make sure that you chose the right component set for your target technology. If not, you’ll need to check your components against the API documentation and samples provided for your target technology.

## Styles, Variables, and Tokens

If you want to be sure that your designs look exactly like the implementation, you just take screenshots of the control and pick the colors directly from there, right?

Fortunately, not. The support of styles and, more recently, design tokens has enabled tool chains that apply consistent styles to different targets based on a single definition.

For many years now, the visual appearance of SAP’s user interfaces has been based on themes. The basic idea of a theme is to have a defined set of parameters or variable names that represent the style aspects of the components in the design system. For example, the background color of an emphasized button maps to the variable ``sapButton_Emphasized_Background``. The component itself only uses the variable name and not the actual color value. The color value is then assigned to the variable in a separate style sheet. By swapping out the style sheet, the same variable can be assigned to another color value without touching any other part of the implementation. In this way, color values, fonts, shadows, borders, and any other aspect of the design can be decoupled from the application code, allowing users to switch between light and dark themes, or to a specific accessibility theme like high-contrast white (HCW) or black (HCB). This technology has been made available across the SAP’s product portfolio and can be found in the [theming base content](https://github.com/SAP/theming-base-content). You can rely on this whenever you work with SAP’s UI technologies, and we will come back to this later.

In design tools, the themes were originally made available as style libraries that you could add to your project directly or via the related UI kit. Different style libraries were available for light and dark themes, but they were hard to maintain and keep in sync with development. In addition, whenever you use UI kits, it’s important to avoid applying your own style properties and limit them only to components that you have created.

Maintaining different theme implementations and keeping them in sync has now become much easier with design tokens. Although design tokens have already been around for a while, we’ve only recently seen the emergence of tools that allow you to integrate design tokens into the productive toolchain.

What tokens do is very similar to the theming concept described above. The difference is in the way the parameter structure can be formalized, and in how calculations that derive specific color values from base colors can be defined in independently of the technology. In a token hierarchy, you start with a few reference tokens, from which you derive more specific base tokens. These base tokens are then specified further into component-specific tokens that are equivalent to the theme variables described above (for more about design tokens, check out the [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/design-tokens/) and the [SAP design token repository](https://github.tools.sap/themedesigner/theming-content-base-design-tokens)).

Today, design tokens can be used not only to generate SCSS, LESS or CSS on the development side, but also consumed in design tools that now support tokens, like Figma. We can expect design token support to make its way into other tools as well, which will make it easier for everyone involved in the value chain to use theme variables defined in a single source consistently.

To wrap this up: it is better to avoid using color values directly in your designs. Instead, always try to use styles that come with the design kit. If there is no design kit or no styles are available, consider creating your own style library to keep styles consistent. Resources like a theme definition or style sheets could give you the required color values. If you can make use of design tokens, you can try to incorporate them into your design tool. For Figma, there are several plugins that provide design token integration.

## Structure and Layout

If you were to still design a user interface in a traditional way, it would be sufficient to think of the screen as a two-dimensional canvas, on which you place the UI elements. This is how the first UI builders worked when we were still designing for standard screen resolutions and desktop computers. This time has long gone, and we have learned that the logical structure and nesting of components enables our applications to be much more flexible and responsive, easier to maintain, and more accessible. We must start to think about this structure and flexibility at the design stage when we create static explorations. This will help to guide our designs and simplify the implementation later.

With the introduction of auto layouts, Figma has made it much easier for designers to anticipate and prepare the logical grouping and usage of flexible layouts needed to implement user interfaces that can react gracefully to resizing.

The code equivalent to auto layout is the CSS flexbox, which is almost a 1:1 translation of the auto layout properties into respective CSS properties. In the following diagram, you can see how the auto layout translates into the CSS properties flex-direction and align-items.

!--- IMAGE HERE

As you can see, the auto layout is translated into the CSS property flex, which is the flexbox layout that can dynamically arrange elements into either a row (default) or a column, defined by the CSS property flex-direction. The beauty of both the flexbox and the auto layout is that by controlling the dimensions of the container, the elements within are laid out automatically by distributing the available space based on rules that can be controlled via CSS. This way, designs can adjust to different screen sizes automatically within certain ranges.

In the picture below, you can see how the align-items property allows you to control the alignment of the elements in the flexbox layout along the main axis of the layout. This means that for a column layout, where the main axis is vertical, align-items takes care of the horizontal alignment of the items along the vertical axis. For the row layout, the same property takes care of the vertical layout along the horizontal axis.

I must admit that I find this super confusing even though it is logical, especially when you want to combine this with the opposite alignment orthogonal to the main axis, which is controlled by the justify-contents property.

While you are in Figma, all this is nicely hidden away, and if you base your prototype on your design specifications, looking into Figma’s code perspective helps you create the correct layouts.

!--- IMAGE HERE

If you work with Figma, always aim to create a flexible layout and a meaningful component structure. This will make it easier for engineers to transfer the designs into code and also help you to prepare prototypes.

Exploring the different auto layout options (padding, gaps for the space between elements in the layout, alignment) and content layout behaviors (growing, hugging content vs. fixed sizes) already gives you a good understanding of the basic flexbox concepts. Using the CSS generated in the code view will help you to get started with laying out the elements in your prototype.

## Summary and Outlook

Creating prototypes in code doesn’t mean that you can skip the design phase. Design tools give you the freedom to ignore gravity for a while. Explorations in design tools are faster, less expensive, and more inclusive to stakeholders than prototypes in code.

But as the designs stabilize and feasibility becomes more important, using design tools in the right way can help you prepare prototypes that can save time and reduce communication efforts:

* Using component libraries that are consistent with the actual components in the target technology gives you a good understanding of available options before you branch out and invent new components (which always comes at a cost).
* Using style libraries or even design tokens to style elements in your design instead of picking hex values manually will avoid surprises once the implementation starts.
* Using the styles in the foreseen way and keeping them semantically and structurally consistent will ensure that the final design is maintainable and upgrade safe.
* Thinking of the structure of the user interface elements on the screen, the logical grouping, and flexible layouts not only keeps your designs more robust but also prepares you for implementation using CSS properties like flexbox.

If you follow these rules, you’ll be well-prepared when you start to create your own prototypes. When building prototypes, getting the component layout right is a significant part of the effort. This is something you can prepare for in advance by utilizing the capabilities of your design tool.

Now, that was again a lot of theory, right? No more, you will soon get your hands dirty. In the next article of this series, we will take a first look into setting up a simple prototype using SAP Web Components.

## Appendix

* [Theme Variables](./ThemeVariables.md) - explains what theme variable asre and how to use them
* [Theme Tokens for Horizon](./sap_horizon.json) - Tokens are used to formalize the theme so that it can be used in various tools.
* [Theme CSS Variables](./theme-variables.css) - slightly edited file that contains the definition of the CSS variables for the theme including the color values etc.
