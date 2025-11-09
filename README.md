# Предварительные настройки

1. Выполните в директории с проектом команду:
```shell
nvm use
```

2. Добавьте в файл ~/.huskyrc следующие настройки:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

3. Установите postgres и создайте базу данных

[Официальный сайт](https://www.postgresql.org/download/)

```shell
# Запустите программу psql
sudo -u <username> psql

# Создайте базу данных
create database <dbname>;

# Создайте пользователя для БД
create user <user> with encrypted password '<password>';

# Выдайте пользователю права к БД
grant all privileges on database <dbname> to <user>;

# Разрешите пользователю создавать БД
alter user <user> createdb;
```

4. Скопируйте и настройте файл [env.example](./backend/env.example)

```shell
cp ./backend/env.example ./backend/.env
```
* user - созданный на 3-м шаге пользователь
* password - его пароль для доступа к БД
* host - хост расположения БД (обычно localhost)
* port - порт расположения БД (обычно 5432)
* dbname - название созданной на 3-м шаге БД