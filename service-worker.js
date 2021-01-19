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
    "revision": "65e5812e1504920110fe970bc0f72056"
  },
  {
    "url": "about/index.html",
    "revision": "36c479bc9e8b9ab73d699b70cae6524b"
  },
  {
    "url": "assets/css/0.styles.6385e97d.css",
    "revision": "85d3f7e69f351787f656b8e68a86e3e2"
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
    "url": "assets/js/1.5a7fa8e5.js",
    "revision": "c9c5a68957d995ffd529682fbc81a447"
  },
  {
    "url": "assets/js/10.5ae7c2b8.js",
    "revision": "e8971bb3c72320103a167d848ab55c95"
  },
  {
    "url": "assets/js/11.20a59b79.js",
    "revision": "e394d685eda531e856ae414a94fe6240"
  },
  {
    "url": "assets/js/12.c2e65ede.js",
    "revision": "db7ad6b7d416decdb8022ee059fdf9e1"
  },
  {
    "url": "assets/js/13.f61d7525.js",
    "revision": "8a05ba968a91d00e312fe800862dff54"
  },
  {
    "url": "assets/js/14.075acf0d.js",
    "revision": "83fc20655246d01a2def8f498d68a6bd"
  },
  {
    "url": "assets/js/15.2d29e68e.js",
    "revision": "cbd76643e6cc711d2efe8568f46b19db"
  },
  {
    "url": "assets/js/16.e576b347.js",
    "revision": "f4d81a9a28a889c04347cf49364d5393"
  },
  {
    "url": "assets/js/17.334457bf.js",
    "revision": "ab1d141542af9345f27a9c8963a7b5b4"
  },
  {
    "url": "assets/js/18.510071ed.js",
    "revision": "ff03d5f42a8cfd911ec3e2eb75e1c648"
  },
  {
    "url": "assets/js/19.97c1ad5a.js",
    "revision": "fdc62af5b560dcdc9de9215d298dd34f"
  },
  {
    "url": "assets/js/20.4a7605be.js",
    "revision": "29a37d3bf69582a79b6e96ed40bff4d4"
  },
  {
    "url": "assets/js/21.766ced9c.js",
    "revision": "125247a02bb2f8056adbb27213f3a59b"
  },
  {
    "url": "assets/js/22.a0e5b695.js",
    "revision": "7807fa87445502ec8aa49d1da726bf03"
  },
  {
    "url": "assets/js/23.f3342759.js",
    "revision": "3b894918726a70ea3ae2d9cc95bc166d"
  },
  {
    "url": "assets/js/3.c6200a4b.js",
    "revision": "116ec711de5b0cfa04e5ffb5390fecf4"
  },
  {
    "url": "assets/js/4.0501a00c.js",
    "revision": "e3d92287f4cc93a636f0e181cd23d557"
  },
  {
    "url": "assets/js/5.60405ca2.js",
    "revision": "bf114cf5b2ad78e36f576406e72b996b"
  },
  {
    "url": "assets/js/6.3991bba3.js",
    "revision": "aabd9f11dd92f056f08d6b51bff27076"
  },
  {
    "url": "assets/js/7.30990d59.js",
    "revision": "d4d41e8ebe2c080d32741147302e751c"
  },
  {
    "url": "assets/js/8.ad6d6b4a.js",
    "revision": "b26f0c36b9739a057780b5d32b497933"
  },
  {
    "url": "assets/js/9.22c7e067.js",
    "revision": "560f799889442303065ad40e6be7f654"
  },
  {
    "url": "assets/js/app.c306db4e.js",
    "revision": "047045e5fb6782e097a4c4677674ebd9"
  },
  {
    "url": "categories/index.html",
    "revision": "9460d2252b91c3de1541e69118d94577"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9263473facc1caa9d26b7a548d276088"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "310928246be3fb159d5747a6aaf73123"
  },
  {
    "url": "categories/多线程/index.html",
    "revision": "4a8495bef3f4e62fd8566e4bb26ce230"
  },
  {
    "url": "categories/网络安全/index.html",
    "revision": "17b1cc0dd9d943867a1656baecfb0edf"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "96bcf8601d37e1ac17a88e5c5fed5799"
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
    "revision": "5fdca73ceaa2566ab4a28db77f6eb258"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "note/essay/20201119.html",
    "revision": "74fda0fb159476e654db3a6f8a38e3b0"
  },
  {
    "url": "note/index.html",
    "revision": "97342a0b6eddf9d6d71e326dd378f238"
  },
  {
    "url": "note/java/2021/morethread/concurrency_jmm.html",
    "revision": "5d07ede1590cc39b36e97b2d27b8b36b"
  },
  {
    "url": "note/java/2021/morethread/morethread_base_1.html",
    "revision": "d3c41bf16d6eb62aa99b0e105f17d520"
  },
  {
    "url": "note/java/2021/morethread/morethread_base_2.html",
    "revision": "8c245e6ab29995b1b8631a188e9ef9a9"
  },
  {
    "url": "note/security/2021/security_csrf.html",
    "revision": "f52c5e04fd749e4e70bf5e05d79aa3ac"
  },
  {
    "url": "note/security/2021/security_sql.html",
    "revision": "f44f83545a4dc69bedf874659592174d"
  },
  {
    "url": "note/security/2021/security_xss_sql_jfinal.html",
    "revision": "4032f26029a4c9bb931c1f266c9c7e4d"
  },
  {
    "url": "note/security/2021/security_xss.html",
    "revision": "45df87bdaa54a1b3e04ceb522ea2fe40"
  },
  {
    "url": "note/vuepress/2021/vuepress_final.html",
    "revision": "90b7d38b252c3b7f248904f6a16dd8ab"
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
    "revision": "3de0d9f681c24725af7890475418e75f"
  },
  {
    "url": "tag/java/index.html",
    "revision": "a0ba5faa2f534fe1c6dc039a2a9305d3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "696b06e8b02990f565c91bea98837796"
  },
  {
    "url": "tag/多线程/index.html",
    "revision": "4943e76c9b882e7d5973957921c825c1"
  },
  {
    "url": "tag/网络安全/index.html",
    "revision": "0af5d79598b4ef182689782f09f7d667"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "78af49e860dd896456529465642f9ff7"
  },
  {
    "url": "timeline/index.html",
    "revision": "81eb9e2d5b1a8ddc9cbce47a426a9467"
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
