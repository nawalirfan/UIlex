# Contributing to UIlex

Thank you for your interest in contributing to UIlex! We appreciate your efforts to improve our community-driven project. Please follow the guidelines below to ensure a smooth contribution process.

## General Guidelines

- **Maintain high standards**: Ensure that your contributions align with the overall quality of the project.
- **Follow existing coding standards**: We have applied coding standards throughout the project; please adhere to them.
- **Add your own creative elements**: We encourage you to be innovative and bring unique ideas to the project that add value to others.
- **Ensure reusability**: Components should be designed for reuse, providing value not only to others but also to yourself in future projects.

## Specific Instructions for Adding Reusable Components

To add a new reusable component to the project, please follow these steps:

1. **Create Unique Components**:
   - Your components must be your own creation and not derived from other libraries.
   - Ensure that your components are unique and provide value.

2. **Component Structure**:
   - Think of a unique name for your component and ensure it doesn't already exist in the project.
   - Create a folder with your component's name inside `src/reusable-components/[buttons, texts, etc.]`.
   - Inside this folder, add the following files:
     - **`ComponentName.jsx`**: Your main component file. Follow the naming convention already established in the project.
     - **`code.js`**: Add the code and usage examples for your component.
     - **`YourComponentPage.jsx`**: Create a page for your component, following the examples already present in the project.

3. **Update Navigation and Routes**:
   - In `lib/navlinks.js`, add your component’s navigation link.
   - In `App.jsx`, add your component’s route, wrapped in the `Main` component.

4. **Testing**:
   - Check your page to ensure everything looks good and functions properly.

5. **Making a Pull Request**:
   - Once you are satisfied with your component, go ahead and create your Pull Request (PR).
   - Don’t forget to include a screenshot of your component's page in your PR description.
   - Please submit PRs to the `dev` branch only.

You are always welcome to raise any issues you find and Thank you again for contributing to UIlex! Your efforts help us build a better community.
