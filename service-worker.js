/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dce88f7215eaa89b58a9bb93b966ee5b"
  },
  {
    "url": "about/index.html",
    "revision": "4f121ec47524b88f59d252413eeb4ac1"
  },
  {
    "url": "assets/css/0.styles.b183a807.css",
    "revision": "80878da11471bfc12c86cd9a64c549bd"
  },
  {
    "url": "assets/img/20210123-1.dfcc135f.jpg",
    "revision": "dfcc135f16904bcd98c9a8213b35100f"
  },
  {
    "url": "assets/img/20210124-1.ff92cf99.jpg",
    "revision": "ff92cf99cdaa75b3dbb3b901a4979f08"
  },
  {
    "url": "assets/img/20210124-2.030ffe0d.jpg",
    "revision": "030ffe0d6e72d48681a1ced986b5076d"
  },
  {
    "url": "assets/img/20210124-3.26f77025.jpg",
    "revision": "26f77025cdd283d35cfe941829887922"
  },
  {
    "url": "assets/img/20210124-4.54a1d02a.jpg",
    "revision": "54a1d02aee3b48aa08014a3826465a9e"
  },
  {
    "url": "assets/img/addjoin.0bb5ee46.png",
    "revision": "0bb5ee46e64f797630f4026fd4982765"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/concurrency_tp.ca5368f1.png",
    "revision": "ca5368f1cf9376a4188335cb81655fe4"
  },
  {
    "url": "assets/img/csrf1.7f87e5cf.png",
    "revision": "7f87e5cf1dce85c3b7bf890503691c4f"
  },
  {
    "url": "assets/img/genhtml.6ba8625a.png",
    "revision": "6ba8625ab4eb682cafa55e0a7136a8c8"
  },
  {
    "url": "assets/img/gitee_dz.3d639538.png",
    "revision": "3d639538a42599a47179859448f69f86"
  },
  {
    "url": "assets/img/giteepage.feb078f5.png",
    "revision": "feb078f5352d9d7f9c3eafbadb6c7cca"
  },
  {
    "url": "assets/img/githubfinal.70a01b80.png",
    "revision": "70a01b801991aade8212839e667b06af"
  },
  {
    "url": "assets/img/githubsetting.e63c49d2.png",
    "revision": "e63c49d20923583265d5ac34330cbbbb"
  },
  {
    "url": "assets/img/java-jmm-06.fc8fe8fd.png",
    "revision": "fc8fe8fd89809158e2653f6f7defd963"
  },
  {
    "url": "assets/img/java-jmm-1.b098a84e.png",
    "revision": "b098a84eb7598d70913444a991d1759b"
  },
  {
    "url": "assets/img/java-jmm-3.24c77803.png",
    "revision": "24c7780383809d50c844132eb3e1be54"
  },
  {
    "url": "assets/img/java-jmm-4.95c5a415.png",
    "revision": "95c5a4151412207c36719817095e59a8"
  },
  {
    "url": "assets/img/java-jmm-5.f5e54ed7.png",
    "revision": "f5e54ed72c8e332a39c58c025c6a16e5"
  },
  {
    "url": "assets/img/localindex.0610c78f.png",
    "revision": "0610c78faf6471d7a13a8a53b8b44e8d"
  },
  {
    "url": "assets/img/nginx.ff1f9c4f.png",
    "revision": "ff1f9c4f45e6c6dda7913002b7a9d627"
  },
  {
    "url": "assets/img/nodeindex.ca8a9e4a.png",
    "revision": "ca8a9e4aafd3916af5973d5520936431"
  },
  {
    "url": "assets/img/sortorder.b4608e8a.png",
    "revision": "b4608e8ac57a4a3a1e1c28a65f438d3b"
  },
  {
    "url": "assets/img/sql_ym1.c14c36de.png",
    "revision": "c14c36de46334e8d3519f4b63c94331b"
  },
  {
    "url": "assets/img/start1.be764560.png",
    "revision": "be76456099fac92d16be29f35f779700"
  },
  {
    "url": "assets/img/taskmanage.bacaa58f.png",
    "revision": "bacaa58fa6399ffebad226f3cd8a5f0a"
  },
  {
    "url": "assets/img/theardstatus.84764db5.png",
    "revision": "84764db5c683d9cf822648ad9e6efcaa"
  },
  {
    "url": "assets/img/threadtupu.d6a8e628.png",
    "revision": "d6a8e6284a4075fac74d3727b54ae27f"
  },
  {
    "url": "assets/img/threadtupu2.21604ff9.png",
    "revision": "21604ff9f25cb787ec842efb8a7b77d8"
  },
  {
    "url": "assets/img/tupu.94476418.png",
    "revision": "944764187ae0f2e881d1fd68a58b3e60"
  },
  {
    "url": "assets/img/vssuedoc.bbf8bf5f.png",
    "revision": "bbf8bf5fda569f967f1a3760a15c265f"
  },
  {
    "url": "assets/img/vssuevue.c359a2de.png",
    "revision": "c359a2de0816f2678cb93e9b71d0d9b5"
  },
  {
    "url": "assets/img/wxm.1ea3fe37.png",
    "revision": "1ea3fe37911091fee0c4e87a87c556fd"
  },
  {
    "url": "assets/js/1.a7b6d44e.js",
    "revision": "e78744ec2fa6e7299774f5355879e316"
  },
  {
    "url": "assets/js/10.bd3cece1.js",
    "revision": "bc930046a58a1557d090cb89f97ea1a6"
  },
  {
    "url": "assets/js/11.6f631d09.js",
    "revision": "b90f4039e4c4dea782ed531ac0630b99"
  },
  {
    "url": "assets/js/12.82d848f4.js",
    "revision": "8720e8a23f7e40b1ec5a48c1f35ef9b6"
  },
  {
    "url": "assets/js/13.14a1cbd7.js",
    "revision": "863b172216cde76c0a24333e410b8ada"
  },
  {
    "url": "assets/js/14.771d1a60.js",
    "revision": "e3ecdce750437e7b5a41e2c37f847d1a"
  },
  {
    "url": "assets/js/15.fb9d95a2.js",
    "revision": "00caf126b721a539eb86728ff020554d"
  },
  {
    "url": "assets/js/16.5d9d647b.js",
    "revision": "782727ead9dbb83f2e386d084abc1f89"
  },
  {
    "url": "assets/js/17.54f5e2d3.js",
    "revision": "09c93e64cbf31019f5bf51e67f40e283"
  },
  {
    "url": "assets/js/18.40b17bd0.js",
    "revision": "b9b659c9464b5eafaf276438ccdcdc9c"
  },
  {
    "url": "assets/js/19.e1b0297c.js",
    "revision": "44b5d2f3c4b4481689341609460fca80"
  },
  {
    "url": "assets/js/20.ca6e93a2.js",
    "revision": "194e3b94ca679ad43ca0cf1e6d69f950"
  },
  {
    "url": "assets/js/21.58f1126e.js",
    "revision": "d16f6647df8c9ce1d5a111a4dda19db9"
  },
  {
    "url": "assets/js/22.f0c9238b.js",
    "revision": "d7e10b0bb368633d2f07697428b4d988"
  },
  {
    "url": "assets/js/23.6102cd12.js",
    "revision": "48bc0ef725c073a9d7f7b2b2359fbf1b"
  },
  {
    "url": "assets/js/24.7d2e0b19.js",
    "revision": "12a1ccf1398e104ec272e96e4ab79bcd"
  },
  {
    "url": "assets/js/25.4cc9f3f0.js",
    "revision": "d9cf158de2398ecf9c998f50c9d9df50"
  },
  {
    "url": "assets/js/3.042191c4.js",
    "revision": "19ec373dcefd845dd4b007efb18a2973"
  },
  {
    "url": "assets/js/4.29553a9b.js",
    "revision": "93590161071a2e3ff82ebf6078a59dfa"
  },
  {
    "url": "assets/js/5.f74924dd.js",
    "revision": "b435488ebb2cc6db2d7c115347af35fe"
  },
  {
    "url": "assets/js/6.c5619022.js",
    "revision": "d8c1240380994f207cb968c852f7c10b"
  },
  {
    "url": "assets/js/7.255d0fa4.js",
    "revision": "2be4b9dea68266f32405fc34592b29b3"
  },
  {
    "url": "assets/js/8.c3305b48.js",
    "revision": "4976aaaea5a577e2c6fd8a4d32f11a79"
  },
  {
    "url": "assets/js/9.ee4c401b.js",
    "revision": "c298bd1d6cb11d0d58d49cb3795c9348"
  },
  {
    "url": "assets/js/app.3684109b.js",
    "revision": "76a9e84ce3c9b24411770d16bf50c961"
  },
  {
    "url": "categories/index.html",
    "revision": "0d1726df88f53e779dcf9ea206e68e14"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c9089145ca7d847585781398c9430bda"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "57038a94775a27dd8cb81ef24d491c93"
  },
  {
    "url": "categories/多线程/index.html",
    "revision": "07a0d69ab86a0475c8b56b90e286a296"
  },
  {
    "url": "categories/网络安全/index.html",
    "revision": "c68fc5ef9d4b2353b671ecb8a3826acc"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "c9f3eb69adcc61601c002fc5b1076001"
  },
  {
    "url": "head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "a65383bf7f4afb6358aeb758fa13b449"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "note/essay/20210118.html",
    "revision": "258b5810ed6b75f8e006bd5e27dee490"
  },
  {
    "url": "note/essay/20210123.html",
    "revision": "225ece61e19d04500ca2763dd1c4ecc6"
  },
  {
    "url": "note/essay/20210124.html",
    "revision": "21f58173024a3b10e4862fc0f33e9863"
  },
  {
    "url": "note/index.html",
    "revision": "82d103458076cff8e20ef2200ebc6bf8"
  },
  {
    "url": "note/java/2021/morethread/concurrency_jmm.html",
    "revision": "c8b7846317b4dbdde52abf87491a2232"
  },
  {
    "url": "note/java/2021/morethread/morethread_base_1.html",
    "revision": "6519b56517e89b39033fb55ac7fb6820"
  },
  {
    "url": "note/java/2021/morethread/morethread_base_2.html",
    "revision": "feea2fb85f420c0a84749565bb1e0542"
  },
  {
    "url": "note/security/2021/security_csrf.html",
    "revision": "40678c72c5dd4492f77ae5d824a8bbbe"
  },
  {
    "url": "note/security/2021/security_sql.html",
    "revision": "acff4963955fe84f4c0b1a933fd92853"
  },
  {
    "url": "note/security/2021/security_xss_sql_jfinal.html",
    "revision": "83b4b4d8233a8b29b89b8308b22e2b6e"
  },
  {
    "url": "note/security/2021/security_xss.html",
    "revision": "20c434085134150933dedd196b21fe48"
  },
  {
    "url": "note/vuepress/2021/vuepress_final.html",
    "revision": "adceecd97bf831221c4060f49930bc9f"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "pg5.jpg",
    "revision": "341bda33769f7d662da9a2ddb9ed1d8d"
  },
  {
    "url": "pg6.jpg",
    "revision": "888e982924dd7b07a4dfb73caf669e38"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/index.html",
    "revision": "734dbf5b7757a6d6a2a8d599d5c47733"
  },
  {
    "url": "tag/java/index.html",
    "revision": "26e9b9351af2711d30cc930f8e3a59e9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f2a9a989180fda62ded4f9e5dcdb669e"
  },
  {
    "url": "tag/多线程/index.html",
    "revision": "4fb5c458cd32c12269f78a98e6d01d2e"
  },
  {
    "url": "tag/网络安全/index.html",
    "revision": "0ebb09431f5b08fc2d9f7915b4f457f3"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "414e2bfe2e43fb8a08a16e2ad671a0f3"
  },
  {
    "url": "timeline/index.html",
    "revision": "520ee91aafc3d7f29d6cab1f15a5f261"
  },
  {
    "url": "vuepress/fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
  },
  {
    "url": "vuepress/gzhewm.jpg",
    "revision": "86b976780326150031a02955955a0439"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "ab7a9c264c4e2e0cddbf8a3229e8b2a0"
  },
  {
    "url": "vuepress/head.png",
    "revision": "8919827e695ae6a739b646f05bb5d991"
  },
  {
    "url": "vuepress/myxgt.png",
    "revision": "73164c7794ad52812be3a7b66ce17b5f"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "bf80a6f75ed6aff874261bb1d13ff529"
  },
  {
    "url": "vuepress/topic1.png",
    "revision": "f820e00ff2379ef507258a87a6ae418d"
  },
  {
    "url": "vuepress/zanshang01.png",
    "revision": "19f90a3088cb6c2d9eca4bcd02feae9c"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
  },
  {
    "url": "vuepress/zpj80231-logo.png",
    "revision": "a2aa1799583b0104477b398b98b757c3"
  },
  {
    "url": "vuepress/zpj80231-logo2.png",
    "revision": "97de419e4928299047a1de1b2b249f63"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
