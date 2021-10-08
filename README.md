# StoreFe


## Project Guidelines
### Angular
* STORE schematics: 
use this schematics to create new lazy loaded pages
```
npm install
```
```
ng g store:page pagename --route=routePath 
```
| Options | Alias | Description | Required |
| ------------- |:-------------:| -----:| -----:|
| --route=routePath | --r | adds path to app.routing.module | true |
| --basic | --b | add basic structure to page | false |
| --fullPage | --full | removes header and footer and adds custom header to page | false |
| --accordion | --a | adds accordion component to page | false |
| --stepper | --s | adds a stepper component to page| false |

* don’t submit any code that has errors
* when loading CMS content only load current language content
* using onchange / docheck functions is not ideal so try to avoid them and never use them together
* split long components into a number of smaller ones (eg. every section in one component)
* test UI in desktop browsers (chrome, firefox, safari, edge)
* test UI in mobile (IOS simulator)

### HTML and CSS
* no inline style.
* use bootstrap [gird](https://getbootstrap.com/docs/4.0/layout/grid/) (container, row, col)
* use bootstrap [utilities classes](https://getbootstrap.com/docs/4.0/utilities) (d-flex, p-1)
* use bootstrap [breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/) (col-md-12, media query mixins)
* use common style and reusable components. [here](https://localhost:4200/templates).
* no fixed size or position (float, absolute, width). controlling size and position with grid will help with mobile view and arabic.
* replace right and left with start and end. 
  * add ``` @import 'src/common-style/mixins';``` 
  * margin-left -> @include margin-start(2px);
  * margin-right -> @include margin-end(2px);
  * padding-left -> @include padding-start(2px);
  * padding-right -> @include padding-end(2px);
  * text-align: left -> text-align: start
  * background-position: left -> background-position: var(--start)
  * justify-content: left / start -> justify-content: flex-start
  * float: left -> float: var(--start) // not recommended
  * left: 2px -> @include start(2px); // not recommended
* if you need to target a specific browser use ```@include browser(edge)``` (all options are listed in mixin file)
* Use svgs when creating icons.
* Use pngs when adding images.
* Use [TinyPNG](https://tinypng.com/) to reduce images size. (if image's size is greater than 5mb contact Iain to provide a smaller image)
