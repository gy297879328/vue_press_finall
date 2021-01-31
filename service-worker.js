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
    "revision": "fea88cb0181b61f1bbd427a7d94260dd"
  },
  {
    "url": "about/index.html",
    "revision": "6c265301318527a91b1f65c648bbbf70"
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
    "url": "assets/img/java-jmm-hcyz.c15040ae.png",
    "revision": "c15040ae21d1ca8e8864feae3155ac7f"
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
    "url": "assets/img/synchronized_dxt.53e57720.png",
    "revision": "53e5772085060a35759482e01d08d010"
  },
  {
    "url": "assets/img/synchronized_dxtxx.aaa3288d.png",
    "revision": "aaa3288d6fa1555636af2c62f60b5be7"
  },
  {
    "url": "assets/img/synchronized_monenrty.54210a06.png",
    "revision": "54210a06b67b19b3cd6da5fbc06a82fc"
  },
  {
    "url": "assets/img/synchronized_st.a26737cd.png",
    "revision": "a26737cd2e2e384d0736a73f25ba8b8d"
  },
  {
    "url": "assets/img/synchronized_syt.e8d81793.jpg",
    "revision": "e8d8179331ecf9570d8e76310bd6988a"
  },
  {
    "url": "assets/img/synchronized_zjm.1834ba15.png",
    "revision": "1834ba159150a7c3012393042ded3c7e"
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
    "url": "assets/js/1.e900d5e3.js",
    "revision": "682ae31e0967283d20068d91d611b924"
  },
  {
    "url": "assets/js/10.a7ee40ac.js",
    "revision": "f28e0bf433d9d1cb7c9f3b5118bfc3cd"
  },
  {
    "url": "assets/js/11.41757858.js",
    "revision": "ef0873d62d12ec3f7be9c42590aa6477"
  },
  {
    "url": "assets/js/12.a36aed62.js",
    "revision": "6bafb6f8327bd961f94a288c5d85a278"
  },
  {
    "url": "assets/js/13.ae19b2c4.js",
    "revision": "5508edb409ad8a1a4af1e771088a5917"
  },
  {
    "url": "assets/js/14.6bc1777c.js",
    "revision": "f851bbbf8294017e8ebb0ad5bb370739"
  },
  {
    "url": "assets/js/15.4ebfb50a.js",
    "revision": "2d0052776a7160fb849d493d6e8a4c4d"
  },
  {
    "url": "assets/js/16.08eda434.js",
    "revision": "5ba0f34867f539d857a48735bef01065"
  },
  {
    "url": "assets/js/17.c758edc3.js",
    "revision": "32ef7871ba0ea264f50708cfcd7a25c9"
  },
  {
    "url": "assets/js/18.799be40c.js",
    "revision": "3a3fe05b88a90996f2b018b68e288fd4"
  },
  {
    "url": "assets/js/19.398ac5a3.js",
    "revision": "07c7dc1f29a1f2307ea5993ba4109bca"
  },
  {
    "url": "assets/js/20.17f6a44c.js",
    "revision": "bb92697bb6229af7f6255ebff4c194f5"
  },
  {
    "url": "assets/js/21.1bdb045f.js",
    "revision": "ec87c64cc582bd67b729b6adb44cad3d"
  },
  {
    "url": "assets/js/22.2481faa9.js",
    "revision": "20c70d905d32f51f3856fbba07065f47"
  },
  {
    "url": "assets/js/23.d6b8d55d.js",
    "revision": "a5dc64ea9a62a2b99be0031a44e2bb4d"
  },
  {
    "url": "assets/js/24.6b522f93.js",
    "revision": "186d346e3e6e603ece27e1456dec785a"
  },
  {
    "url": "assets/js/25.3e8206ed.js",
    "revision": "be80e77676b6c83b331b2962b5422ade"
  },
  {
    "url": "assets/js/26.0150afcc.js",
    "revision": "82324e6cd49ccfded6747869d710948a"
  },
  {
    "url": "assets/js/27.6f1f1a7b.js",
    "revision": "2d83eb5eef728f74635306c9a77b3b9c"
  },
  {
    "url": "assets/js/28.5fcba7be.js",
    "revision": "d454e5c6a19116ecdd165251018f86bd"
  },
  {
    "url": "assets/js/29.df896839.js",
    "revision": "0f0066d1e77b818ca4ddba066ea465b7"
  },
  {
    "url": "assets/js/3.5b4c4e3e.js",
    "revision": "054a37a9afe910a24050c65a9d87606e"
  },
  {
    "url": "assets/js/30.317fce6c.js",
    "revision": "b6303b69683581e0d9d01f702cdc51f2"
  },
  {
    "url": "assets/js/4.a7aa906d.js",
    "revision": "7c00cf71000e1fdda577e29f9cb4e6c1"
  },
  {
    "url": "assets/js/5.4a4d6e28.js",
    "revision": "10c375926534c2e81992d9f89b582292"
  },
  {
    "url": "assets/js/6.af38cc8d.js",
    "revision": "77ac69c78b5e1738fba3ee3dcb2f1b05"
  },
  {
    "url": "assets/js/7.f10407bb.js",
    "revision": "57428dd00b8b4ce990870607418142c5"
  },
  {
    "url": "assets/js/8.cf5d1a9c.js",
    "revision": "fc01d6c9f1f1076165195e82180f825c"
  },
  {
    "url": "assets/js/9.7bf83758.js",
    "revision": "99e5a32003284d0cdca6371cd8b3535a"
  },
  {
    "url": "assets/js/app.5fa29d39.js",
    "revision": "1d6d3f3e69ba605e06fd4a5144a702da"
  },
  {
    "url": "categories/index.html",
    "revision": "5d7594026f08cbc0d05f8325c70bd3bc"
  },
  {
    "url": "categories/java/index.html",
    "revision": "99bbb0acba124075cfb0dabade2d6f4e"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "b24fbca88eefbcfb99a122076822f4ec"
  },
  {
    "url": "categories/多线程/index.html",
    "revision": "11c17613d060d24f102a34f6c1adcbff"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "a6e4926af682ac87bfde0be41f025ea5"
  },
  {
    "url": "categories/网络安全/index.html",
    "revision": "fe54897036505ff0deb8dbf7b6b8f17d"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "0b2b02ab8a3b3a580da17b175ed5e171"
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
    "revision": "e9befe8a67d96ddb1d5b89d2ae8fd0f1"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "note/essay/20210118.html",
    "revision": "56d92ef1180a079c73b939f89c14bae4"
  },
  {
    "url": "note/essay/20210123.html",
    "revision": "d3110b8b9ec5510d107c884bb6dabbc9"
  },
  {
    "url": "note/essay/20210124.html",
    "revision": "70f8a159a9fc88961aeb8681a5a8d658"
  },
  {
    "url": "note/essay/20210130.html",
    "revision": "ef8b65b7aab77bf5cba3582e4144245d"
  },
  {
    "url": "note/index.html",
    "revision": "89fd68a43dc5a52dcae0700a23beefea"
  },
  {
    "url": "note/java/2021/morethread/concurrency_jmm.html",
    "revision": "de0f7b560b5eaa4b51e35ffb279445ec"
  },
  {
    "url": "note/java/2021/morethread/key_synchronized.html",
    "revision": "3f63dde1be0f4a60ff7839d312d468a6"
  },
  {
    "url": "note/java/2021/morethread/key_volatile.html",
    "revision": "fdf04688f5bef763c95b0335c707275a"
  },
  {
    "url": "note/java/2021/morethread/memory_barrier.html",
    "revision": "016977508660c1c0be2e19ce4d1e6578"
  },
  {
    "url": "note/java/2021/morethread/morethread_base_1.html",
    "revision": "36527258640a134840eda54c299e3a14"
  },
  {
    "url": "note/java/2021/morethread/morethread_base_2.html",
    "revision": "dd38a9e78338cf8196582f3f3e622e62"
  },
  {
    "url": "note/java/2021/morethread/并发.html",
    "revision": "26cd9b471e709505a5501524a0984eda"
  },
  {
    "url": "note/security/2021/security_csrf.html",
    "revision": "4488e6851b6542c98b9c82bcf9b99e84"
  },
  {
    "url": "note/security/2021/security_sql.html",
    "revision": "4f6d5f1c045a0c888156b0ce5a6d67b9"
  },
  {
    "url": "note/security/2021/security_xss_sql_jfinal.html",
    "revision": "422d8bd15c0e71cc87bc87561745830e"
  },
  {
    "url": "note/security/2021/security_xss.html",
    "revision": "a16c139576f0d2c2ab66f1d7ae420417"
  },
  {
    "url": "note/vuepress/2021/vuepress_final.html",
    "revision": "057f74e3f1cc329fbbbb718c3fa5d17e"
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
    "revision": "ea7b7dc6a2c0c270123827084da9ac5b"
  },
  {
    "url": "tag/java/index.html",
    "revision": "8149df1353eddc06f5ab7b9284436a8a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5d2101a3402080e0982252f8dd399e8c"
  },
  {
    "url": "tag/多线程/index.html",
    "revision": "c49596472c3e07006cc182d05164598c"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "d647561c73020a323db13dfba48c1963"
  },
  {
    "url": "tag/网络安全/index.html",
    "revision": "c8d1d275cf0b673b20b5905162edffad"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "85dd9ef779c6846ad6aebb28fa8fb5ee"
  },
  {
    "url": "timeline/index.html",
    "revision": "0599ba4a5bbc146540022d965aad3a83"
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
