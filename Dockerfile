FROM node:14

WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Instala dependencias
RUN npm install

# Configura las variables de entorno
ENV VITE_HOST 0.0.0.0
ENV VITE_PORT 3000

# Ejecuta tu proyecto Vite
CMD ["npm", "run", "start"]
