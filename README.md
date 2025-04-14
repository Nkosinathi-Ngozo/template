# 🚀 React Native + Expo Starter Guide

A comprehensive guide to creating new React Native apps using Expo, running existing ones, and setting up reusable component templates. This guide is designed to streamline the development process and provide a quick setup for new and existing apps.

---

## 📦 Requirements

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)  
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)
  
- [React Native](https://reactnative.dev/)  
  [![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)

- [Expo](https://expo.dev/)  
  [![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)

---

## 🆕 Creating a New React Native App (Using Expo)

Follow these steps to create a new Expo project:
# creating new react-native application (expo based)

## Create the Project
    ```bash
    npx create-expo-app app-name
    ```
## install expo-cli
    ```bash
    npm install -g expo-cli
    ```

## Go to project folder
    ```bash
    cd app-name
    ```
    
    
## Start the development server
    ```bash
    npx expo start
    ```


# Running existing react-native application (expo based)

## Create the Project
    ```bash
    npx create-expo-app app-name
    ```
## install expo-cli
   
   ```bash
    npm install -g expo-cli
   ```
    
    
## install packages
    
    ```bash
    npm install
    ```
    
## Go to project folder
    ```bash
    cd app-name
    ```
    
    
## Start the development server

    ```bash
    npx expo start
    ```


## 🧩 Reusable Component Templates

Here are some reusable components that can be used across various apps. They provide a consistent and faster development process. You can find them in the /components directory, and use them as needed in your project.

1. Button Component
Where to find: /components/Button.js

Usage: A customizable button that can be styled and used throughout your app. It supports a title, onPress function, and custom styling for text and button itself.

How to use: 




2. Input Field Component
Where to find: /components/InputField.js

Usage: A reusable input field component with customizable placeholder text and secure text entry (for password fields).

How to use: 



3. Card Component
Where to find: /components/Card.js

Usage: A flexible card component that supports an image, title, and description. It can be used for displaying content in a card layout.

How to use: 


4. Loading Spinner Component
Where to find: /components/LoadingSpinner.js

Usage: A simple loading spinner that can be shown when data is being loaded or a long process is running.

How to use: 


5. Header Component
Where to find: /components/Header.js

Usage: A reusable header component with an optional back button and customizable title. Useful for navigation screens.

How to use: 


6. Modal Component
Where to find: /components/CustomModal.js

Usage: A customizable modal dialog for displaying important messages or asking for confirmation.

How to use:

7. SnackBar/Toast Component
Where to find: /components/Snackbar.js

Usage: A toast or snackbar for displaying brief messages or notifications at the bottom of the screen. It can be shown for a duration before automatically disappearing.

How to use:

7. Accordion Component
Where to find: /components/Accordion.js

Usage: An accordion that allows expanding and collapsing content. Useful for settings or FAQs.

How to use:


8. Stepper/Progress Indicator Component
Where to find: /components/Stepper.js

Usage: A stepper or progress indicator that can be used to show the progression of a task or multi-step process (e.g., registration, checkout process).

How to use:

9. Date Picker Component
Where to find: /components/DatePicker.js

Usage: A date picker component to allow users to select dates, often used in forms.

How to use:


10. File Picker Component
Where to find: /components/FilePicker.js

Usage: A component that allows users to select files (images, PDFs, etc.) from their device or cloud storage.

How to use:

11. Slider Component
Where to find: /components/Slider.js

Usage: A customizable slider for selecting values in a range (e.g., volume control, price range).

How to use:

11. Tooltip Component
Where to find: /components/Tooltip.js

Usage: A tooltip component to provide additional information when a user hovers or taps an element.

How to use:

11. Search Bar Component
Where to find: /components/SearchBar.js

Usage: A reusable search bar component with options for custom styling and searching.


12. Bottom Navigation Menu
Where to find: /components/BottomNavigation.js

Usage: A bottom navigation bar that is commonly used to navigate between top-level views in your app (e.g., Home, Profile, Settings).

How to use:

13. Sidebar Menu (Drawer Navigation)
Where to find: /components/SidebarMenu.js

Usage: A side navigation menu (drawer) that can slide in from the left or right of the screen. It is typically used for more complex apps with a large number of navigation options.

How to use:

14. Top Tab Navigation
Where to find: /components/TopTabNavigation.js

Usage: A tab-based navigation system located at the top of the screen. Commonly used for switching between content that is part of the same screen or context, like categories or different data views.

How to use:


15. Modal Bottom Sheet
Where to find: /components/BottomSheetMenu.js

Usage: A bottom sheet modal is a sliding panel that can be used for additional actions like filters, settings, or options. It’s a popular UI element for showing contextual menus or additional options without taking over the whole screen.

How to use:



16. Floating Action Button (FAB) Menu
Where to find: /components/FloatingActionMenu.js

Usage: A floating action button (FAB) that can be used to provide quick actions. It can expand into a menu when clicked, displaying multiple action buttons.

How to use:



17. Hamburger Menu
Where to find: /components/HamburgerMenu.js

Usage: A collapsible sidebar menu that slides in when a hamburger icon is clicked. This is commonly used in mobile apps for navigation.

How to use:



18. Contextual Action Menu
Where to find: /components/ContextualActionMenu.js

Usage: A contextual action menu that appears when a user performs a long press or right-click on a specific element. Often used for deleting, editing, or performing actions on list items.

How to use:


19. Drawer Tab Navigation
Where to find: /components/DrawerTabNavigation.js

Usage: A navigation system where the menu slides from the side and contains multiple tabs within the menu, allowing for detailed categorization and access to different parts of the app.

How to use:



## How to Integrate These Components:
Folder Structure: All components can be found in the /components folder.

Custom Styling: Each component comes with a basic style template, but you can customize styles based on your app's theme or UI guidelines.

Props and Customization: Components are designed with flexibility in mind. Refer to the respective documentation (if available) or the source code to understand the props each component accepts.

Extendability: Feel free to extend and modify these components to fit your needs. These are designed to be modular and reusable across different projects.
