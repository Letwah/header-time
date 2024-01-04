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
    position: "before", // or "after"
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
      button.textContent = now.toLocaleTimeString(); // Format time as desired
    };

    updateTime();
    setInterval(updateTime, csCustomTimeBtn.buttons[0].updateTimeInterval);
  };

  const headerActionButton = document.querySelector(
    ".header-actions-action .btn"
  );
  const headerMenuButton = document.querySelector(".header-menu-cta .btn");

  csCustomTimeBtn.buttons.forEach((buttonData, index) => {
    const customButton = createButton(buttonData);
    if (index === 0) {
      updateButtonTime(customButton);
    }

    const mobileButton = buttonData.displayOnMobile
      ? createButton(buttonData)
      : null;

    if (csCustomTimeBtn.position === "before") {
      headerActionButton.before(customButton);
      if (mobileButton) headerMenuButton.before(mobileButton);
    } else {
      headerActionButton.after(customButton);
      if (mobileButton) headerMenuButton.after(mobileButton);
    }
  });
});
