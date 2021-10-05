# Stage 0, based on Node.js, to build and compile Angular
FROM node:lts as node

COPY . .

RUN npm i -g @angular/cli
RUN npm i

EXPOSE 4200
CMD ["npm", "run", "docker"]
