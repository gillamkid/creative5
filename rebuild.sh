forever stop creative5
mv -f dist/img ../img
npm run build
mv -f ../img dist/img
forever start --id=creative5 server/server.js

