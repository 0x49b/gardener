
FROM nginx

COPY ./www /usr/share/nginx/html
COPY ./src/assets /usr/share/nginx/html/assets

EXPOSE 80