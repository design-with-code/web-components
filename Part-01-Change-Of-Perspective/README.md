# Designing with Code – Part 1: Change of Perspective

Let’s assume you’re a designer. You know your design tools inside out and use them every day for ideation, exploration, prototyping, testing, and specifications. You work diligently to create a great design that is usable, desirable, technically feasible, and compliant with all standards and guidelines. You’re as well prepared as you can be.

But then comes the moment of truth: you show your designs to your engineering team and wait for their verdict...

“This is not feasible” has been the death sentence for many great design ideas.

You can mitigate this risk by working together with your engineers very early on, iterating with them if they have time for you, and investigating the technical documentation, samples, and sandboxes. Great UI kits in your design tools and detailed design guidelines also prevent you from going too far, and many design tools invest in the design-to-developer handover to bridge this gap.

Still, wouldn’t it be great to be more independent as a designer? Wouldn’t it be good to really know what’s feasible instead of guessing? And to engage with engineers on a more equal footing?

The only way to achieve this is to get your hands dirty and start designing with code. This might sound intimidating at first, but with a bit of help, it’s not too hard and can be extremely satisfying in the long run.  

This series of articles is aimed at designers who want to learn a bit more about the technology behind the SAP design system and how it can be used to enhance the way we design.  

## Travel broadens the mind

In 2023, after many years working as a design system expert on the SAP Fiori design system, I had the opportunity to join one of SAP’s product areas for six months as a fellow product designer. I was excited to change perspective from someone who provides design guidelines to someone consuming those guidelines. I was tasked with creating a new application, which is a rare and lucky situation, given that the bulk of design work is focused on incremental enhancements for existing applications.  

First off, let me say that this was a great experience, and I wish I’d done it much earlier. It was so rewarding to work together with and learn from product managers who were deep experts in their domain. We had regular reviews with customers, who would help us validate our ideas and correct our course immediately. I was able to tap into the extensive knowledge and experience of my design colleagues, who supported me in understanding the background of many product design decisions and in finding solutions. Not least, we were lucky to be co-located with the engineering team, who were also very supportive and helped to clarify technical issues as they occurred. Optimal conditions for a designer to thrive! [Thank you!]

### Exploration Phase

After gaining an initial understanding of the task at hand and defining the information architecture, persona, use cases, and process flows, I was ready to start the design exploration. The use case mapped very well to an established floorplan in the SAP Fiori design guidelines. I used this floorplan as a basis and focused on the information and functionality within.  

It’s amazing how fast the number of frames can grow during exploration, especially if you don’t spend enough time on componentization. Keeping the files clean during the exploration phase is extremely hard because everything is still in flux. Applying even the slightest change can mean adapting a multitude of frames. Also, in customer reviews I was always under pressure to have a consistent screen flow available for presentation. As I refined more and more of the interactivity, the prototype became even more complex and harder to maintain.  

At some point, I was so frustrated with keeping all parts of the prototype in sync that I started looking for an alternative that would save me work. While I do have some programming skills in HTML and JavaScript, I wouldn’t claim that I’m even close to being a developer. I wasn’t sure at all whether I would be able to create the prototype functionality in code. But the pain was substantial enough to make me try. Using SAP Web Components helped me a lot, with more than 60 components that already implement our design system. The library also contains the CSS variables from the Horizon theme, so I only needed to take care of the content, layout, and interactivity.  

Since I was only trying to create a frontend prototype, and not a productive application, I was able to set up a very simple environment that would fit into a folder and could be shared as a ZIP file.  

From this moment on, the iteration speed increased tremendously. Especially for the interactive parts, I was able to apply improvements very fast, and would always be able to present a working prototype to customers. By being able to interact with the prototype, people felt much more like they were interacting with the final product. They were more likely to spot issues and were inspired to think about enhancements. The most satisfying thing for me was the fact that table contents were generated from data. This meant that changes in the design had to be made in one place only and would be available consistently throughout the application, which. This saved me a huge amount of time. By having access to the original UI components and theme variables, it was easy to stay within the design system.

### Specification Phase

As the design stabilized, the detailed specification work started. I used my design tool to document the design details for the handover to engineering. This allowed me to share more context and reasoning behind the design decisions and to receive comments. I was also able to document alternatives.

I had used SAP Web Components in my prototype because it was easy for me to set up and use. But the final product would use a different frontend technology called SAPUI5, one of the reference technologies for SAP Fiori. I already knew SAPUI5 by heart from a design perspective but had never looked at it from a developer’s perspective. SAPUI5 offers a wealth of floorplans, patterns, and components that implement the SAP design system, but is more restrictive on designs outside of this system.  

While creating the specification, I had to evaluate the feasibility of my designs in SAPUI5 by creating smaller code snippets in a sandbox environment. Going back and forth between the sandbox, design tool, and my older prototype was tedious and time-consuming.

The experience with the previous prototype had given me confidence, so I decided to create another prototype in SAPUI5 to make sure my specification would work out.

Again, I found a way to set up an environment with minimal dependencies and installation effort. I gathered my sandbox snippets and other examples from my existing prototype that I could use as a basis. After some initial issues and a lot of help, I managed to build a version of my application in the actual target technology, SAPUI5. My initial fears about the complexity and steep learning curve turned out to be unjustified.

During this stage, my discussions with engineering intensified and we were able to correct some of the false assumptions I’d made in my first iteration. We were now using the target technology to do detailed work on interactive behaviors, refinements of the responsive behavior, user validations, and reviews with accessibility experts and screen reader users. In the process, we revealed some bugs and identified enhancements needed in the standard components. Many of the issues we were able to spot would normally have only come up much later during implementation. Now, they were being eradicated upfront.

### Limitations

I’m not claiming that the prototypes I had created would replace the work of a frontend developer. I believe that my code quality was terrible and that I completely ignored many aspects that are second nature to experienced frontend developers.  

Nevertheless, getting my hands into the code and putting together the actual components into a running prototype felt extremely powerful to me. The magic moment when code turns into experience is something I don’t want to miss any more. I envy you developers for that power, seriously ;-)

My initial fears that the setup and implementation would be far too complex turned out to be baseless. And the effort of scanning through documentation and tutorials was offset several times over by the efficiency I gained. Had I been given more guidance in the beginning, it would have been less effort, and I would have been able to avoid many of the pitfalls on the way.

I know that one reason I was able to invest the time and effort was also because I was a fellow in another organization, unencumbered by the usual designer workload. It’s hard to take the risk of diving into a new approach while you have development teams waiting for your specifications.

### Try it for Yourself – “Designing with Code” Series

To make it easier for other designers to take the plunge and build their own prototypes, I decided to create a series of articles on how to start designing with code.

* I will investigate the interplay between design tools and code, and how you can make the most out of combining both when designing SAP Fiori applications.
* I will give you an overview of three different ways to build prototypes for SAP Fiori applications, using either plain vanilla HTML, JavaScript + SAP Web Components, the SAPUI5 framework, or the popular Angular NG JavaScript framework.  
* Later on, I will address specific topics like accessibility or responsiveness, and how designing with code can help you arrive at good solutions.

## Summary and Outlook

Design tools have improved tremendously over the past years, and we can expect them to become even more powerful soon. However, nothing compares to the real thing. Like a sculptor who creates exploratory clay models, this is merely an approximation of the genuine bronze piece, with its unique tactile sensations, radiance, mass, and solidity.

Creating prototypes in code can’t replace the design tool but it can complement your design process with a more realistic picture of the final product.  
Realistic interactivity matches the exact timing and motions of the actual components and gives you a better impression of how these components work together in an interaction flow. This can also include simulating loading times and system failures.

* Building an interactive prototype helps you identify gaps in your specification that you may have missed and that would usually be raised later by the engineers, such as error handling or empty states.
* Accessibility and keyboard interactions can be tested and refined with different users and interaction devices. Some interactions that seem to be clear will turn out to be unusable for a screen reader user.  
* Using an underlying data structure for the information displayed in the prototype reduces the effort for modifications. Usually, changes only need to be applied in a single place to take effect everywhere, as opposed to fixing multiple screens in a screen flow.
* Ensuring the feasibility of designs by using the actual components and their features improves the communication with engineering. This can also include identifying specific improvements and enhancements that are outside of the standard functionality.

Designing with code deepens your understanding of the actual matter our products are made of. This can be hard in the beginning but will be extremely rewarding in the long run as you start to feel more empowered. I hope this will motivate you to read through the next article in this series about building a bridge from your design tool into the development environment.
