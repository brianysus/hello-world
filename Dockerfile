FROM nginx

COPY dist /usr/share/nginx/html

RUN service nginx start