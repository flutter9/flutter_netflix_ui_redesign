'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "9fd6d8f03235ac1454f66ab9febd923a",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/toystory_0.jpg": "dcecb48b824b853a01aa294faea805f5",
"/assets/assets/images/nutcracker_1.jpg": "b4b9bfacaf6fbef0af7078421116fa83",
"/assets/assets/images/endgame.jpg": "79f9a6f365305025c38d8576599e9539",
"/assets/assets/images/spiderman_2.jpg": "7f36b97d7931555d7a4270e29f3822fd",
"/assets/assets/images/spiderman.jpg": "0a16b197bc9d3f5b7e7763bb0bf91747",
"/assets/assets/images/nutcracker_2.jpg": "dd0ca8d95c155ae4b5670902f5edd9df",
"/assets/assets/images/stranger_things.jpg": "2e7664a697bd3ad7cfbb0db3463b70d9",
"/assets/assets/images/cobra_kai.jpg": "92f846b4dd84a30b88ff470d97671f15",
"/assets/assets/images/spiderman_1.jpg": "8f86368f301318d1dcf59fc0ca0a9e34",
"/assets/assets/images/toystory_1.jpg": "9fa3f35f7223b5013e03451d8a95f5d3",
"/assets/assets/images/nutcracker.jpg": "ad71bbac41028bd589f90d2d918831fc",
"/assets/assets/images/toystory.jpg": "1e883f4fdbe8fc35a3c152bc2838a50c",
"/assets/assets/images/netflix_logo.png": "a1f673e7df715f16dae49f4874009082",
"/assets/assets/images/erased.jpg": "2d5aeefdaba7548f85af8aa19de30931",
"/assets/assets/images/nutcracker_0.jpg": "9ed413290854fa4b4d918ebb7f4ff776",
"/assets/assets/images/toystory_2.jpg": "7df9125175dbcd25fad83dafe7336cae",
"/assets/assets/images/spiderman_0.jpg": "e50098de69458b5dd1ce6040dd41087c",
"/assets/assets/images/shigatsu_wa_kimi_no_uso.jpg": "2b9701b0f04d6f2a358e7821bb1c8a46",
"/assets/assets/images/oitnb.jpg": "17b81306988d0fbe39da72121c97996c",
"/assets/assets/images/seven_deadly_sins.jpg": "6403b2448ee3661694b5e7b37d6a9a49",
"/assets/assets/images/plastic_memories.png": "b9190f22aa9d71701ad28393c3a7789e",
"/assets/assets/images/daredevil.jpg": "fed0574e73b1f4f5dafba78a0bcbfe5b",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "19b0e432e4dd4f6b3ad36473edb9705a",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "1c25f5ad28a75a87a6857f957d91c397",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
