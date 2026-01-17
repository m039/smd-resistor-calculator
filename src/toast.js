class BulmaToast {
  constructor() {
    this.container = document.getElementById('klever-toasts');
  }

  show(message, type = 'is-info', duration = 3000) {
    const notif = document.createElement('div');
    notif.className = `klever-toast notification ${type}`;
    
    // Добавляем контент и кнопку закрытия
    notif.innerHTML = `
      <button class="delete" aria-label="close"></button>
      ${message}
    `;

    // Вешаем обработчик на крестик
    notif.querySelector('.delete').addEventListener('click', () => {
      this._hide(notif);
    });

    // Добавляем в контейнер
    this.container.appendChild(notif);

    // Запускаем анимацию появления
    setTimeout(() => {
      notif.classList.add('is-showing');
    }, 10);

    // Автоскрытие через заданное время
    setTimeout(() => {
      this._hide(notif);
    }, duration);
  }

  _hide(notif) {
    notif.classList.remove('is-showing');
    
    // Удаляем элемент после анимации
    setTimeout(() => {
      notif.remove();
    }, 400);
  }
}

export default {
  createToast: () => new BulmaToast()
}