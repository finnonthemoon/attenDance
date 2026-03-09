document.getElementById('revealBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    func: () => {
      const attendanceFrame = document.querySelector('iframe[src*="attendance-student"]');
      
      if (attendanceFrame) {
        const newSrc = attendanceFrame.src.replace('attendance-student', 'attendance-lecturer');
        attendanceFrame.src = newSrc;
        console.log("Redirecting to Lecturer View...");
        
        return; 
      }

      const codeElement = document.querySelector('.cm-message strong');

      if (codeElement) {
          const attendanceCode = codeElement.innerText;
          alert("Found Code: " + attendanceCode);
          

          const inputBox = document.querySelector('input[placeholder*="XX-XX-XX"]');
          if (inputBox) {
              inputBox.value = attendanceCode;
          }
      } else {
          console.log("Code not found. If the page is still loading, try clicking again in a second.");
      }
    }
  });
});