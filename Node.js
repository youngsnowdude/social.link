# Для Ubuntu/Debian
sudo apt update && sudo apt upgrade -y
sudo apt install curl git -y

# Установка Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y

# Проверка
node -v   # должно быть v20.x.x
npm -v    # должно быть 10.x.x
