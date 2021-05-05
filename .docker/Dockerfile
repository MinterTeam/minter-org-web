FROM node:lts as builder

ARG APP_ENV=${APP_ENV}
ARG APP_ID_API_URL=${APP_ID_API_URL}
ARG APP_ID_COOKIE_DOMAIN=${APP_ID_COOKIE_DOMAIN}
ARG APP_IMAGE_API_URL=${APP_IMAGE_API_URL}
ARG APP_GOOGLE_SIGNIN_CLIENT_ID=${APP_GOOGLE_SIGNIN_CLIENT_ID}

ARG BUILD_BRANCH_ENV_PREFIX

WORKDIR /app
COPY . .
# Two steps to copy .env.master only if no .env exists
# (it is needed to support docker-compose with local env and kubernetes prod build at the same time)
# 1. just copy
COPY .env${BUILD_BRANCH_ENV_PREFIX} .env
# 2. overwrite .env back if it exists (dummy package.json to ensure COPY not to fail)
COPY package.json .en[v] ./
RUN npm ci && npm run production

FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/.docker/vhost.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
