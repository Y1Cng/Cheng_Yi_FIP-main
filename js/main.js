console.log("JS File Linked");
console.log("JS File Linked");

// main.js 表单验证逻辑 
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 清除之前的错误信息
      clearErrors();
      
      // 验证字段
      let isValid = true;
      
      // 验证名字
      const firstName = document.getElementById('first-name');
      if (!firstName.value.trim()) {
        showError('first-name-error', 'Please enter your first name');
        isValid = false;
      }
      
      // 验证姓氏
      const lastName = document.getElementById('last-name');
      if (!lastName.value.trim()) {
        showError('last-name-error', 'Please enter your last name');
        isValid = false;
      }
      
      // 验证邮箱
      const email = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError('email-error', 'Please enter your email address');
        isValid = false;
      } else if (!emailRegex.test(email.value)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
      }
      
      // 验证电话
      const phone = document.getElementById('phone');
      if (phone.value.trim()) {
        const phoneRegex = /^[0-9\-\+]{9,15}$/;
        if (!phoneRegex.test(phone.value)) {
          showError('phone-error', 'Please enter a valid phone number');
          isValid = false;
        }
      }
      
      // 验证评论
      const comments = document.getElementById('comments');
      if (!comments.value.trim()) {
        showError('comments-error', 'Please enter your comments or questions');
        isValid = false;
      }
      
      if (isValid) {
        // 表单提交成功
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // 模拟提交过程
        setTimeout(function() {
          alert('Thank you for your message! We will get back to you soon.');
          form.reset();
          submitBtn.textContent = 'Submit';
          submitBtn.disabled = false;
        }, 1500);
      }
    });
  }
  
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
      element.textContent = '';
      element.style.display = 'none';
    });
  }
});



// 为Contact 锚点链接  添加滚动后高亮效果
// 监听锚点点击
document.addEventListener('DOMContentLoaded', function() {
  // 检查URL中是否有锚点
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      // 当用户点击锚点链接时，为目标元素添加高亮动画
      targetElement.classList.add('highlight');
      
      // 动画持续2秒后 自动移除高亮类
      setTimeout(() => {
        targetElement.classList.remove('highlight');
      }, 2000);
    }
  }
  
  // 监听所有锚点链接点击
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // 添加高亮动画
        targetElement.classList.add('highlight');
        
        // 2秒后移除高亮类
        setTimeout(() => {
          targetElement.classList.remove('highlight');
        }, 2000);
      }
    });
  });
});