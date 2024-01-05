document.addEventListener("DOMContentLoaded", () => {
  const csCustomTimeBtn = {
    buttons: [
      {
        text: "Current Time",
        class: "cs-studio-time-btn",
        displayOnMobile: false,
        updateTimeInterval: 1000, // Update every 1 second
      },
      // Add more buttons as needed
    ],
    position: "before",
  };

  const createButton = (buttonData) => {
    const button = document.createElement("a");
    button.textContent = buttonData.text;
    button.classList.add("btn", buttonData.class);

    if (buttonData.link) {
      button.href = buttonData.link;
    }

    if (buttonData.target) {
      button.target = buttonData.target;
    }

    return button;
  };

  const updateButtonTime = (button) => {
    const updateTime = () => {
      const now = new Date();
      const timeText = now.toLocaleTimeString();
      button.textContent = timeText;
    };

    updateTime();
    setInterval(updateTime, csCustomTimeBtn.buttons[0].updateTimeInterval);
  };

  // Only show if we on anything other than mobile
  if (!/Mobi|Android/i.test(navigator.userAgent)) {
    const headerActionButton = document.querySelector(
      ".header-actions-action .btn"
    );

    csCustomTimeBtn.buttons.forEach((buttonData, index) => {
      const customButton = createButton(buttonData);
      if (index === 0) {
        updateButtonTime(customButton);
      }

      if (csCustomTimeBtn.position === "before" && headerActionButton) {
        headerActionButton.before(customButton);
      } else if (headerActionButton) {
        headerActionButton.after(customButton);
      }
    });
  }
});
