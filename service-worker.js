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
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "about/index.html",
    "revision": "a23f1b89a5bc715221a587f9afb25514"
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
    "url": "assets/js/1.b9ff76a6.js",
    "revision": "de00c20c2fc8b72587ea6f3e8f3b9df3"
  },
  {
    "url": "assets/js/10.a28be346.js",
    "revision": "f165ecef1f78bd7f042a66aa6efac32e"
  },
  {
    "url": "assets/js/11.cebf82dc.js",
    "revision": "0e396412926f8f386429b308fda38e0f"
  },
  {
    "url": "assets/js/12.de14a662.js",
    "revision": "49587888d6cc5676d72a0ec02ea54da0"
  },
  {
    "url": "assets/js/13.49d2e423.js",
    "revision": "50565209f5f52346c0996210e2d770db"
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
    "url": "assets/js/16.1d62211a.js",
    "revision": "6c1dfd547ba0cdb9e30dea8aa1ca2b30"
  },
  {
    "url": "assets/js/17.54f5e2d3.js",
    "revision": "09c93e64cbf31019f5bf51e67f40e283"
  },
  {
    "url": "assets/js/18.0e4df14f.js",
    "revision": "c97e3e1fbfb52edef53d1bed81b80688"
  },
  {
    "url": "assets/js/19.e1b0297c.js",
    "revision": "44b5d2f3c4b4481689341609460fca80"
  },
  {
    "url": "assets/js/20.5dccd485.js",
    "revision": "a890ecf0273b60f97761537be6771cde"
  },
  {
    "url": "assets/js/21.16ce1092.js",
    "revision": "6ed3425a245355dc41f8726d935447f1"
  },
  {
    "url": "assets/js/22.5165b931.js",
    "revision": "2d76feb75679e0182fcbf3e1869d893d"
  },
  {
    "url": "assets/js/23.d6dd1938.js",
    "revision": "0a292374b58ab34bdea43a961ef9428e"
  },
  {
    "url": "assets/js/24.e9569602.js",
    "revision": "2049b4a42ae6a11108ed4610eecb031a"
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
    "url": "assets/js/6.88ca500f.js",
    "revision": "95305ba1e849f6e8ec77f9af883e2e6f"
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
    "url": "assets/js/app.18f447e7.js",
    "revision": "93715cc64cacba8828293ca3e1016959"
  },
  {
    "url": "categories/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "categories/多线程/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "categories/网络安全/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
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
    "revision": "0b5c97c2e085fc7dedf6bbfeb2164b8a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "note/essay/20210118.html",
    "revision": "1b8e50b3f9b4b2642aa5c2eac6fec575"
  },
  {
    "url": "note/essay/20210123.html",
    "revision": "70c9239324368dfa37e22e7ffa117a51"
  },
  {
    "url": "note/essay/20210124.html",
    "revision": "bbf2bbeb4725e66f9482cb665882b469"
  },
  {
    "url": "note/index.html",
    "revision": "b5b5af5bba1bcfa997c661bc84648afa"
  },
  {
    "url": "note/java/2021/morethread/concurrency_jmm.html",
    "revision": "f1b711351d2780db7d2021e4ea32d27b"
  },
  {
    "url": "note/java/2021/morethread/morethread_base_1.html",
    "revision": "614a2753778a4be797905ede5e93dec1"
  },
  {
    "url": "note/java/2021/morethread/morethread_base_2.html",
    "revision": "374c4fd5d9dae0f90567099e600c133d"
  },
  {
    "url": "note/security/2021/security_csrf.html",
    "revision": "a47390e24a72505e973bf402cbad5f06"
  },
  {
    "url": "note/security/2021/security_sql.html",
    "revision": "a6d9658fccd74afb57b1431047adc538"
  },
  {
    "url": "note/security/2021/security_xss_sql_jfinal.html",
    "revision": "81b4783c630827934d9c4eab7374e36e"
  },
  {
    "url": "note/security/2021/security_xss.html",
    "revision": "7e4fa05d67214e4f09e4946485f427a6"
  },
  {
    "url": "note/vuepress/2021/vuepress_final.html",
    "revision": "414ed10e3c576b727b640e8ab2ee16df"
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
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "tag/java/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "tag/多线程/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "tag/网络安全/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "76130a3803836288771b76fc41cfd5d9"
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
