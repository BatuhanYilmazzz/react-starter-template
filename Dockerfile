FROM node:10.19 as build-stage

WORKDIR /app

COPY ./ .

RUN yarn

RUN yarn build

FROM nginx as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 81

CMD ["nginx", "-g", "daemon off;"]
