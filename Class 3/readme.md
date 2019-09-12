# Bootstrap equal columns 
- If we have a grid where all of the columns have equal width, bootstrap will automatically calculate its width and present them without the need of a specification.

# Display Properties
- ### [Block](https://css-tricks.com/wp-content/uploads/2011/09/block.png)
	* Take full-width (100% width) by default
	* Each gets displayed in a new line
	* Width & height properties can be set
	* Can contain other block or inline elements 
- ### [Inline elements](https://css-tricks.com/wp-content/uploads/2011/09/inlinepadding.png)
  *  Take only as much space as they need
  * Displayed side by side
  * Don’t accept width or height properties, and top-bottom margin
  * Can be a parent of other inline elements
- ### [Inline-block](https://css-tricks.com/wp-content/uploads/2011/09/inline-block.png)
  * Behaves like a block (we can set width and height and put margins)
  * Takes only as much space as they need (like an inline element)
  * Can be placed side by side


# Flexbox
- CSS Flexible Box Layout, commonly known as Flexbox, is a CSS3 web layout model. The flex layout allows responsive elements within a container to be automatically arranged depending upon screen size. It lets you have control directly to the parent in order to control all of its children in a similar way and lets you have a responsive layout only by adapting a few lines of code.


  - Main parent property: [display: flex](https://miro.medium.com/max/1371/1*ifh1BiMPRpuZW7M0IgKn2Q.gif) | inline-flex;
  - Other parent properties: 
    - flex-direction: [row]([https://miro.medium.com/max/1371/1*ifh1BiMPRpuZW7M0IgKn2Q.gif](https://miro.medium.com/max/1371/1*ifh1BiMPRpuZW7M0IgKn2Q.gif)) | [row-reverse](https://miro.medium.com/max/1371/1*ldTiFlfqnNWCUKSGBrFQWA.gif) | [column](https://miro.medium.com/max/1601/1*6NUIFlnX9SAanhWeOwt3Bg.gif) | column-reverse;
    - [flex-wrap](https://miro.medium.com/max/1371/1*4hLqiU88qnEh1ATONlCXXA.gif): nowrap | wrap | wrap-reverse;
    - flex-flow: <‘flex-direction’> || <‘flex-wrap’> <- shorthand property;
    - [justify-content](https://miro.medium.com/max/2095/1*wyQwuPQq3CBP4p8lDX4sGQ.gif): flex-start | [flex-end](https://miro.medium.com/max/1371/1*_f0MFEMH2eHqOizU3H-ojg.gif) | [center](https://miro.medium.com/max/1371/1*wQqJLrONR-EwnVvAzsu6oA.gif) | [space-between](https://miro.medium.com/max/1371/1*sqMyo7ci5q6SbphollmQmA.gif) | [space-around](https://miro.medium.com/max/1371/1*Yci5P9msWj3JzuksrL9rXw.gif) | space-evenly | start | end | left | right;
    - [align-items](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg): align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end;
    - [align-content](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg): flex-start | flex-end | center | space-between | space-around | [space-evenly](https://miro.medium.com/max/1371/1*fhYwLvT31aGgc98PmiboyQ.gif) | stretch | start | end | baseline | first baseline | last baseline

## Homework
- After this class, your job would be to exercise today's material by playing [this game](https://flexboxfroggy.com/). Please send me an email, after you finish, with a screenshot of the last level and the amount of time you needed to complete all levels.

## Additional Links

> * [Additional link about display properties](https://medium.com/better-programming/understanding-css-display-none-block-inline-and-inline-block-63f6510df93)
> * [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
> * [Follow this amazing tutorial](https://medium.com/@js_tut/flexbox-the-animated-tutorial-8075cbe4c1b2) for more info about this display property.
> * [Mache Project Example](http://codeart.rocks/joka/mache/)
