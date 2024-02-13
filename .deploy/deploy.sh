cd ~/prod-app
npm run build:prod

mv ~/prod-app/build /var/www/
rm -rf /var/www/html
mv /var/www/build /var/www/html
