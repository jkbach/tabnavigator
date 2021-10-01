// Returns the number of tabs open in the current window.
async function countTabs() {
  const allTabs = await chrome.tabs.query({currentWindow: true});
  return allTabs.length;
}

chrome.commands.onCommand.addListener(async (command) => {
  const [currTab] = await chrome.tabs.query({active: true, currentWindow: true});
  let targetIndex;
  if (command === "tab-left") {
    if (currTab.index === 0) {
      // wrap to the end
      const tabCount = await countTabs();
      targetIndex = tabCount - 1;
    } else {
      targetIndex = currTab.index - 1;
    }
  } else if (command === "tab-right") {
    const tabCount = await countTabs();
    if (currTab.index === tabCount - 1) {
      // wrap to the beginning
      targetIndex = 0;
    } else {
      targetIndex = currTab.index + 1;
    }
  }

  const [moveTo] = await chrome.tabs.query({index: targetIndex, currentWindow: true});
  chrome.tabs.update(moveTo.id, {active: true});
});
