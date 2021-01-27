FROM node:15.2.0-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.17.1-alpine AS prod-stage
COPY --from=builder /app/dist/admin-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
