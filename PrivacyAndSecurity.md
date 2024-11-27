# Permissions for AutoBDD Extension

This document explains the permissions required by the **AutoBD** and how they are used.

## List of Permissions

The following permissions are requested by the **AutoBDD** extension:

1. **`tabs`**
2. **`activeTab`**
3. **`storage`**
4. **`downloads`**
5. **`clipboardWrite`**

### 1. **`tabs` Permission**

The `tabs` permission allows the extension to interact with the browser tabs and retrieve information about the tabs that are open in the user's browser. This permission allows the extension to:

- Get information about the current active tab.
- Potentially interact with the content of the web page within the tab (**AutoBDD**  interacts with the current page to get the page source and extract xpath information).
  
**Why it's needed:**
- **AutoBDD**  interacts with the current page to get the page source and extract xpath information.

### 2. **`activeTab` Permission**

The `activeTab` permission allows the extension to interact with the currently active tab without needing broad access to all tabs in the browser. With this permission, the extension can:

- Access the currently active tab in the browser to perform specific actions (e.g., executing scripts, gathering tab information).
  
**Why it's needed:**
- This permission is typically used for background actions where the extension needs access to the currently active tab to interact with it. In the case of **AutoBDD**, we want to generate xpath for element with the user actions and hence the permission is required

### 3. **`storage` Permission**

The `storage` permission allows the extension to use the `chrome.storage` API to store data in the browser’s local storage. This permission allows:

- Saving user preferences or settings within the extension (e.g., custom file names or other configuration options).
- Storing and retrieving small amounts of data for the extension’s functionality.

**Why it's needed:**
- **AUtoBDD**Use this permission to store user list of all xpaths generated in a given sesstion .However, this extension does **not** store or track any personal data or user content outside of the current session.

### 4. **`downloads` Permission**

The `downloads` permission allows the extension to initiate file downloads from the browser. This is critical for enabling users to download the text they input as a `.txt` file.

**Why it's needed:**
- **AutoBDD** requires this permission in order to trigger the download of the steps that is performed by the user

### 5. **`clipboardWrite` Permission**

The `clipboardWrite` permission allows the extension to write data to the user's clipboard. This permission enables actions such as copying text content to the clipboard for user convenience.

**Why it's needed:**
- **AutoBDD** does not currently provide clipboard functionality, but **`clipboardWrite`** is included for potential future enhancements. For example, in the future, the extension could allow users to copy the generated content directly to the clipboard instead of downloading it as a file. This would allow for easy pasting of the text elsewhere without needing to download the file.

### Example Use Case for `clipboardWrite`:
- If the user does not want to download the text as a file but simply wants to quickly copy the content to the clipboard (e.g., for pasting into an email or document), the extension could provide a feature to copy the content directly to the clipboard without needing a download.

**Important Note:**
- The `clipboardWrite` permission is requested in case this feature is added in the future. At the moment, it does not actively perform any action, but it is an essential part of the extension's capabilities should clipboard functionality be implemented.

## Summary

These permissions allow **AUto** to function properly while ensuring the following:

- **Minimal data access**: The extension does not collect, share, or track any personal user data.
- **No excessive permissions**: Permissions are only requested for the functionality that is necessary for the extension to work.
- **User control**: The extension offers complete control over the input data and allows the user to initiate actions such as downloading text files or copying to the clipboard.

## Conclusion

These permissions are essential for providing a smooth and functional user experience with the **AutoBDD**. The extension is designed with privacy in mind and ensures that all interactions are focused on generating and downloading text files based on the content provided by the user.

Sneha Sharma

_Last updated: [27-nov-2024]_
