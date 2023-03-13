const validateForm = () => {
    // Получаем значения полей ввода
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    // Регулярное выражение для проверки email
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  
    // Регулярное выражение для проверки пароля
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
    // Проверяем email
    if (!emailRegex.test(email)) {
      alert("Неверный адрес электронной почты");
      return false;
    }
  
    // Проверяем пароль
    if (!passwordRegex.test(password)) {
      alert("Пароль должен содержать не менее 8 символов, включая как минимум одну заглавную букву, одну строчную букву и одну цифру.");
      return false;
    }
  
    // Проверяем подтверждение пароля
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return false;
    }
  
    // Если все поля заполнены корректно, отправляем форму
    alert("Форма успешно отправлена");
    return true;
  };
  
  // код для отображения пароля
  const showPasswordCheckbox = document.getElementById("show-password");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  
  showPasswordCheckbox.addEventListener("change", () => {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
      confirmPasswordInput.type = "text";
    } else {
      passwordInput.type = "password";
      confirmPasswordInput.type = "password";
    }
  });
 
  
  const block = document.getElementById("block");

  const moveBlock = () => {
  let currentLeft = parseInt(block.style.left) || 0;
  let newLeft = currentLeft + 10;
  block.style.left = newLeft + "px";
  if (newLeft < window.innerWidth - block.offsetWidth) {
  requestAnimationFrame(moveBlock);
  }
  };
  
  moveBlock();
  