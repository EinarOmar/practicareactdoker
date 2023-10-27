# Utiliza una imagen base adecuada para Node.js
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente de tu proyecto
COPY . .

# Exponer el puerto 3000 (el puerto que usa Vite de forma predeterminada)
EXPOSE 3000

# Comando para iniciar la aplicación Vite
CMD ["npm", "run", "dev"]
