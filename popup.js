document.getElementById('revealBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    func: () => {
        
      const frames = document.querySelectorAll('iframe');
      frames.forEach(frame => {
        if (frame.src.includes('attendance-student')) {
          frame.src = frame.src.replace('attendance-student', 'attendance-lecturer');
        }
      });

      const targets = document.querySelectorAll('.attendance-student');
      targets.forEach(el => {
        el.classList.replace('attendance-student', 'attendance-lecturer');
      });
    }
  });
});