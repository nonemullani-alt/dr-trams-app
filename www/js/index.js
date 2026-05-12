function testNotification() {
  if (cordova && cordova.plugins && cordova.plugins.notification) {
    cordova.plugins.notification.local.schedule({
      title: "Dr Trams",
      text: "Notification is working!",
      foreground: true
    });
  } else {
    alert("❌ Notification plugin not found");
  }
}
