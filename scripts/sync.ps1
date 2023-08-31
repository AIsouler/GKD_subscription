pnpm build
git add '.'
git commit -m 'chore: sync'
git push
npm publish
sleep 1s
curl -X PUT 'https://registry-direct.npmmirror.com/@gkd-kit/subscription/sync'
