# Game Helper Web App

## Content
* [Tech stack](tech-stack)
* [Project Structure](project-structure)
* [Coding standards](coding-standards)
    - [Globally reusable functionalities](globally-reusable-functionalities)
    - [Components structure](components-structure)
* [Pull Request](pull-requests)

### <a name="tech-stack"></a>Tech Stack
* **Package Manager**: yarn
* **Language**: TypeScript
* **UI**: React.js
* **Styling**: Tailwind CSS & SCSS
* **Testing**: Jest & Cypress

### <a name="project-structure"></a>Project Structure
* **.husky:** contains all of the husky hooks used in this project
* **.storybook:** storybook configuration
* **cypress:** contains the integration & e2e tests
* **public:** static assets
* **src:** main codebase

### <a name="coding-standards"></a>Coding Standards
#### <a name="exports"></a>Exports
Please avoid default exports unless they are mandatory. Named exports provide consistency throughout the project by avoiding typos.

#### <a name="globally-reusable-functionalities"></a>Globally reusable functionalities
For globally reusable functionalities (hooks, contexts, utility functions) there is a dedicated folder in the main codebase (src folder).\
Each hook/utility function should have a test file that has the ".test.ts" suffix that ensures the functionality is the desired one.\
For hooks & utilities the kebab case will be used (my-custom-hook.ts, my-utility-fun.ts).\

#### <a name="components-structure"></a>Components structure
Each component should have the ".tsx" suffix for consistency and for an easier file identification.\
A component must have its own folder which contains the main file and a story file that has the ".stories.tsx" suffix.\
A component can have a "hooks" folder, a "contexts" folders, a "utilities" folder that are specific to that component only. For those 3 folders the rules from [Globally reusable functionalities](globally-reusable-functionalities) apply, besides the location of those files, which as explained, will be in a dedicated folder inside the consuming component's folder.\
Camel case (CamelCaseExample) will be used for the namings of the component's folder, main file and story.

### <a name="pull-requests"></a>Pull Request
To do: Add description

