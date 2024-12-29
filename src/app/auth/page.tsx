export default async function Page() {
  const isReg = true;
  return (
    <div>
      {isReg ? (
        <div>
          <p>Регистрация</p>

          <input placeholder="Укажите ваше имя" />
          <input placeholder="Придумайте пароль" />
          <input placeholder="Подтвердите пароль" />
        </div>
      ) : (
        <div>
          <div>Авторизация</div>

          <input placeholder="Введите имя" />
          <input placeholder="Введите пароль" />
        </div>
      )}
    </div>
  );
}
