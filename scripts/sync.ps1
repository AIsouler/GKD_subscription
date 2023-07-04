pnpm build
git add '.'
git commit -m 'chore: sync'
git push
npm publish
sleep 1s
curl -I 'https://npmmirror.com/sync/@gkd-kit/subscription'
