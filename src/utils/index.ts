export  const notify = (url:string) => {
  if (!("Notification" in window)) {
  } else if (Notification.permission === "granted") {
    // 检查是否已授予通知权限；如果是的话，创建一个通知
    const notification = new Notification("Welcome To CSS PlayGround!",{
      icon: url
    });
    // …
  } else if (Notification.permission !== "denied") {
    // 我们需要征求用户的许可
    Notification.requestPermission().then((permission) => {
      // 如果用户接受，我们就创建一个通知
      if (permission === "granted") {
        const notification = new Notification("Welcome To CSS PlayGround!");
        // …
      }
    });
  }

}