FROM node:lts as builder

ARG APP_ENV=${APP_ENV}
ARG APP_ID_API_URL=${APP_ID_API_URL}
ARG APP_ID_COOKIE_DOMAIN=${APP_ID_COOKIE_DOMAIN}
ARG APP_IMAGE_API_URL=${APP_IMAGE_API_URL}
ARG APP_GOOGLE_SIGNIN_CLIENT_ID=${APP_GOOGLE_SIGNIN_CLIENT_ID}

WORKDIR /app
COPY . .
RUN npm ci && npm run production

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/.docker/vhost.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
