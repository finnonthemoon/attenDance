document.getElementById('revealBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const targets = document.querySelectorAll('.attendance-student');
      targets.forEach(el => {
        el.classList.replace('attendance-student', 'attendance-lecturer');
      });
    }
  });
});