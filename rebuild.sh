forever stop creative5
forever start --id=creative5 server/server.js
mv -f dist/img ../img
npm run build
mv -f ../img dist/img
