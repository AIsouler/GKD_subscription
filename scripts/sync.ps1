try {
    pnpm build
} catch {
    Write-Host "An error occurred: $_"
    return
}
git add '.'
git commit -m 'chore: sync'
git push
npm publish
sleep 1s
curl -X PUT 'https://registry-direct.npmmirror.com/@gkd-kit/subscription/sync'
