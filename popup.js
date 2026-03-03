document.getElementById('revealBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const attendanceFrame = document.querySelector('iframe[src*="attendance-student"]');
      
      if (attendanceFrame) {
        const newSrc = attendanceFrame.src.replace('attendance-student', 'attendance-lecturer');
        attendanceFrame.src = newSrc;
        console.log("Successfully redirected iframe to Lecturer View.");
      } else {
        console.log("Attendance iframe not found on this page.");
      }
    }
  });
});