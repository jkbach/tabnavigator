# Tab navigator
## Description
Chromium for Mac has a great shortcut (`⌘ + ]`)that allows walking left and right
through open tabs. Windows and Linux distributions of Chromium lack this
feature. This extension adds such functionality, bound to a different,
Linux-friendly shortcut.

## Usage
By default, `Ctrl + Shift + [h|l]` will navigate left and right, respectively.
Different shortcuts can be configured by going to
`chrome://extensions/shortcuts`.

## Installation
1. Go to `chrome://extensions` (or `brave://extensions` for Brave browser) and
   make sure "Developer mode" is activated.
2. Click "Load unpacked".
3. In the file browser, navigate to the top-level directory of this repository.
4. "Select "Open" (or the file browser's equivalent).
5. (Maybe). Sometimes Chrome refuses to recognize the "suggested" command
   shortcuts in `manifest.json`. In this case, the shortcuts will not work.
   To manually add them (or modify them), go to
   `chrome://extensions/shortcuts`.
