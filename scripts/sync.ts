const r = await fetch(
  `https://registry-direct.npmmirror.com/@gkd-kit/subscription/sync`,
  {
    method: 'PUT',
  },
);
console.log(await r.json());
console.log(`同步 npmmirror 成功`);

export {};
