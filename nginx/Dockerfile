FROM nginx

MAINTAINER egor.shurkhovetskyi@gmail.com

COPY nginx.conf etc/nginx/nginx.conf

COPY wschat.conf etc/nginx/conf.d

WORKDIR /etc/nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]