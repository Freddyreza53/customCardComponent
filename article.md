# Custom Components In Action: Simple Card

The UI Builder experience is constantly evolving, and is new to many ServiceNow developers. For this reason, there are occasionally some issues that arise that can be difficult to solve or workaround. Recently, we developed a custom component for just this reason - to rapidly build a modular and reusable component tailored specifically to our requirements, providing a quick workaround for the issue we were encountering, and available for easy iteration and adjustment looking forward.

It is, by no means, a perfect component, but the journey of creating and deploying it taught us a lot about the Now UI Framework - we're happy to share our experience, and would love to hear about yours as well!

To keep it brief, we're not going to break down every part of the process in detail - for a more detailed explanation of the different aspects of custom component creation, check out [this series of articles](https://creator-dna.com/blog/custom-components-in-the-now-experience-ui-framework-part-1-creating-a-stateful-web-component) we're publishing on [CreatorDNA](https://creator-dna.com/)!

## The Problem

We had a simple use case - we needed to display a series of cards summarizing details about specific records, with the ability to click through them to navigate to the record view for that component. The **Data set** component was working well for displaying the information, but doesn't come configured with click event for the items themselves - and the process of adding that event was a long workaround that seemed to be blocked by an obscure UI bug. Our goal was to build a barebones custom component that would afford us complete control over the data being displayed and the events being dispatched - and to learn a bit about deployment/promotion in the process.

## The Process

### Building the Component

Our component was super simple, so we're not going to go into much detail about it here. We planned to use the UIB Repeater component to map our records to an array of custom cards, so when creating the element, we kept it simple - we configured our `now-ui.json` file to allow the UIB user to input the `sys_id` and `table` for a given custom card (to use when redirecting to the record page) as well as include properties for what shows up in the various parts of the card (headers, main content, logo, etc.).

<img src="images/article/article_1.png" alt="The now-ui.json file, configured with component properties."/>

>Note: All of these properties were set up to accept primitives. As we soon learned, that can get a little tiresome when it comes to referencing each specific thing in the repeater, and may not be appropriate for very complex components, but works fine and keeps things generic when you only have a few properties.



## Reflection

- Composition with the repeater
- Turns out, a lot of what we did wasn't strictly necessary.
