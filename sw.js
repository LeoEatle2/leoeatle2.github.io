/**
 * 注销脚本，替代原来的 hexo-service-worker。
 *
 * 站点已经不再使用 Service Worker，但此前注册过的访客浏览器里仍留着旧的
 * worker 和缓存，不会自己消失。浏览器在导航时会重新拉取本文件，发现内容
 * 变化后安装这一版；它清空全部缓存并注销自己，站点从此直接走网络。
 *
 * 等老访客基本都访问过之后，本文件可以连同这段说明一起删除。
 */

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (key) { return caches.delete(key); }));
      })
      .then(function () {
        return self.registration.unregister();
      })
  );
});
