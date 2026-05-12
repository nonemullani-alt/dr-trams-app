function showDevice() {
  if (window.device) {
    alert(
      "Model: " + device.model +
      "\nPlatform: " + device.platform +
      "\nVersion: " + device.version
    );
  } else {
    alert("❌ Web Mode (Device plugin not active)");
  }
}

function testJS() {
  alert("🔥 JavaScript Working Fine!");
}

function testNotification() {
  if (cordova && cordova.plugins && cordova.plugins.notification) {
    cordova.plugins.notification.local.schedule({
      title: "Dr Trams",
      text: "Notification is working 🚀",
      foreground: true
    });
  } else {
    alert("❌ Notification plugin not found");
  }
}
