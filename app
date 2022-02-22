server {
	listen 80;
	listen [::]:80;

	server_name app.mrkbzlab.local;

	location / {
		proxy_pass http://mrkbzlab.local:8000;
	}

	location /app {
        rewrite ^/app(.*) /$1 break;
		proxy_pass http://mrkbzlab.local:8002;
	}
}