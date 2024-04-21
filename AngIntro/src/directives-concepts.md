# Directives

## What are directives?

In Angular, directives are markers on a DOM element that tell Angular to do something to that element.

html dom ---> directive ---> dom

Directives are components without a view

Components are directives, with a view

It means that everything we can do with a directive, we can also do with a component, but not everything we can do with
a component we can do with a directive.


## Types of directives

1. Component Directive

A component in Angular is a type of directive that is typically used to create reusable UI components. Components have their own templates and behavior and can be used as custom HTML elements in other components or templates.

2. Structural Directive

Structural directives in Angular change the structure of the DOM by adding, removing, or manipulating elements. Examples include *ngIf, *ngFor, and *ngSwitch, which respectively conditionally include or exclude elements, iterate over lists, and switch between multiple views.

like *ngIf, *ngFor

3. Attribute Directive

Attribute directives in Angular modify the appearance or behavior of an element, component, or another directive. They are used by applying them as attributes to elements in the HTML template. Examples include ngStyle and ngClass, which respectively allow you to dynamically set CSS styles and classes based on component data.

Basically we can only change the appearance of a DOM element, not its structure

like ngStyle and ngClass

4. Custom Directive

Custom directives in Angular are created by developers to extend the functionality of Angular. They can be either attribute directives or structural directives. Custom directives are useful for encapsulating and reusing behavior across multiple components. Creating a custom directive involves creating a directive class with the @Directive decorator and specifying how the directive should behave using the @Input and @Output decorators
