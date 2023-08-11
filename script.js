function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;
  
  const clockText = document.getElementById('clock-text');
  clockText.textContent = time;
}

// 更新时钟，每秒钟执行一次
setInterval(updateClock, 1000);

// 初始加载时立即更新一次
updateClock();
function copyEmail() {
  const emailText = document.querySelector('.copy-email');
  const email = emailText.textContent;

  const tempInput = document.createElement('input');
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  alert('Email copied to clipboard: ' + email);
}
// 监听鼠标滚动事件
