cd ~/prod-app
npm run build:prod

rm -rf /var/www/html
mv ~/prod-app/build /var/www/html
