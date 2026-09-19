/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","144482f1eefd064bd00698668a88b931"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","585440f37f0b932c7b934b54b88727ca"],["/2016/09/02/The-inherit-in-javascript/index.html","4cec381e0d47818e432c338bfa642b80"],["/2016/09/20/令人伤心的博客碎片/index.html","b072a30914d7339b775689c8432e2311"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","cd742f21921deaeb2cc5cf5f97a416c9"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","f78d2bf4bf42e22e9b13667a9d9216f1"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","0faef47f3c3945fe8c1b927894780e84"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","1457aef8c45b551fbab4911e4f8c80ad"],["/2016/11/14/爬虫的意义在哪里？/index.html","b91b918a455f8296a728122f1ce41110"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","1f9d20d5a5dbd1a5977adc3339b38756"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","12d0888bf05ecd19b762646619605a11"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","5aac009fe4555b65812243561ecff5cf"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","2c16c529810319739e6c09cd5726a0b9"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","86ec44fb8ec10b932a814db27f448458"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","a1e9401b2553b9bddc9052260fadd6b4"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","cc5bb07afa1f8dfd7b2a45caa769f7fa"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","57b062a1e6ceda9e31a8d93a5c20b2a2"],["/2016/11/28/SegmentFault开发文档笔记/index.html","e242249a505c0301c4c661965f5b5f7a"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","b981223960dfb236ed6a944c95f89688"],["/2016/11/29/Twig模板引擎学习笔记/index.html","4778d10b1262905f2063e70bdd9c853b"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","77c434c4089a9bb84cf0dc875b8a1322"],["/2016/11/30/compositionstart事件/index.html","840111ae54d4fa5fe76b4dc4c3fc329b"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","0c4311ae8f92829eff726d9738eeebbd"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","e8a594fed0bc7cb0da0e214a186850ea"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","a3693927a5873327d544e9206b28cfc4"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","185a014cd9d77e01e799591e815932db"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","5cad873fd7778533fa1367f8a3f39ab2"],["/2016/12/10/SFDC笔记/index.html","e5b52bc254b79f2b3af103ff4d29f098"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","829b6bdbea7def0a088dc28fb17d65d5"],["/2016/12/13/深入浅出node-js-笔记/index.html","ec99e1746ac038086bd8f5f242261cb4"],["/2016/12/17/LeetCode-274-H-index/index.html","6f1c0ff1c02891b514883c29847c77c4"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","b9edf07985c713a2a303f9384e4e17eb"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","ba8bedde27ef77c928fbcf0ed4e02273"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","66113c8c643d6f81d61bd9623508d538"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","2c27d744c8a6abad73e92c7c7f2899e9"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","e53081df560ec966a38efa5a7353261b"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","203a26df9ed5d67c7388b69224ce6d0f"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","808713e068a2a86502a949838821c76b"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","b9cf08329cb48d0bde04f892ddbb0992"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","823c0a738691fcf78c42ab4d3d453339"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","c4a4d4bbf25c3fe10de8192122547a3c"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","9536c137d2f281259133a64f345cea03"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","9db1054d085ba86b1f4a86d59d3ca6d1"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","410e49c05f89db81f4fecf81ffb5f059"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","c00c59745a46f65994d4c2f0d9c544c2"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","fa2e0fcf7d0ea03fb18360c6a8fb4b5a"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","556b796a0cc367d1ea05d97b7921205a"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","354d4e2fb7f2e9dc78bdc0ff8afdbf72"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","1cc13d485352e2bb16ea057bcbf68077"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","da59bf1e13a63a0399320e077d55928a"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","48f46a311c0bb74ba2a646dc816991c9"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","53bf9b03bdc8905d29ddc89bc4882714"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","84e4607acc2d0e6656a5958ea909d8d9"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","b3c2da9a32e319db0d87ed3f3d89a48e"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","232e20c37b0959ecd9dbbd4fec835e6b"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","b8a2d40083b83ce801afe9739a5c9dad"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","aa78816ddd5f18242f7eb6db1efffb06"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","624982cced06ba89a8dce0757054ec43"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","10888675af63f8994693426d2f1201f3"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","552d4dee9d2eb7f6d3a0588c5df8f834"],["/2017/03/03/Google-Android-System-learning/index.html","36a8ff2e86406679b79867bfe2b510ac"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","eaa55bb1b070a7992b8aaa5d99e140e1"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","c01c6ed64fc0f6826ec0c772daf156ce"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","dceb8f5322ba7b2081ea05379dd004e5"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","ced8463fa81c019f5483e890ecf5b11e"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","3ca029e6523d3718c33fcffa0c11a706"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","5fd9a30b9d0ee7ee7c8e85f8cb81c815"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","db23b1957d541c600f3d856776dcb67e"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","fd61a92b527d8097b173c807d546ea97"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","170d3e497083c1e2e6d68fb616e2277f"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","ea7263e25ea4badabf7ad35e75439e5c"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","c8fad48a3aa0e3486ff97741dde9bc8b"],["/2017/09/08/编写Webpack插件笔记/index.html","f0426f7d11c451c637306e31ee12f1be"],["/2017/11/30/Mobx学习笔记/index.html","26f1a9c61c222bae2a06a3c73325d4b5"],["/2017/11/30/Test-travis-ci/index.html","87ae98cab88b6c345813c436abde501c"],["/2017/12/01/Use-flow-type-in-React-project/index.html","5c3ebf2fed6a98d320f9898d496675ca"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","8b3cba710cfe40aa1ada9798fcf55129"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","e1da9e3ea3ee7208cb14bc28fa45ac52"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","bd44c336c5f27562038f9b437e59dca6"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","c98a55bd851d69a7e6a7eed7d3a84d38"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","2ddda297ac7a0eca1faf444efcc92a1f"],["/2018/07/31/SDT自我决定理论/index.html","c4c1c10ad43bf590fda255c819f29113"],["/2018/08/04/React16源码解析-As-required-order/index.html","6fbdf98437bfbab11889f7b5a5abdc9c"],["/2018/08/05/React16源码解析（Fiber）/index.html","d8fe9d2c050c8ca01c6604ab5ced222a"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","e98c5671d84fd4f3c7cd9ff89225d1dc"],["/2018/08/27/释放webpack的真正潜力/index.html","731b120d7f3eb4f419679dba7179437e"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","f61e0cfa7c4fb436a0750014d906e4f6"],["/2018/09/17/升级到Babel-7的经验/index.html","52f25d3065b79915d41cca82e00de47d"],["/2018/10/16/React-tip组件的设计/index.html","f342ce183a96809de519b82f649d3492"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","df2e83f5ca71dfaf44c1fbee3dfadeb6"],["/2018/12/08/jenkins问题定位/index.html","159c8859acefd4405b42f9c1ac7d9ee3"],["/2018/12/21/React-SSR实践-压测/index.html","b070e078436d7f0bafd2f6cdbb64eaef"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","b0f9391bb0f0af871d837263b8ba04a1"],["/2019/01/21/item2-profile-config/index.html","e4d19c1093e0fef7b81710de43daa4a9"],["/2019/01/22/i18n-about-Access-Language/index.html","2317209a8cac22f41adf749078d54614"],["/2019/02/27/Node-C-addon-学习笔记/index.html","c45fe0b99e392ad62356db90bd8cf7f7"],["/2019/05/16/Modern-Crusaders/index.html","3486098424b87d5597625026faa75fdf"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","3b5903b9e2b05d2babcf53797e6b23bd"],["/2019/08/28/关于docker使用的一些记录/index.html","5ce37c1ba1e365deeefe2a356be88bed"],["/2019/08/30/全干工程师的基本素养/index.html","ac1bd7238c461e047706d590f36f5629"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","fb69cf57181a5da68ac2ac7f8eb4903b"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","bb4ec2a6cba6a7ecf29f806b1d61d0b1"],["/2019/12/02/One-example-of-Typescript-generics/index.html","68d5a0a40ebc2f587a950e9e7806cbae"],["/2019/12/04/有趣的上网冲浪之旅/index.html","ee350da284b023332cb48e0baef6de84"],["/2020/04/17/企业微信国际化方案总结/index.html","3a234eb3d4ee7d3d544c863acf6b9752"],["/2020/04/27/come-on-sweet-death/index.html","2d37cb08f202a0bee4cb1cc934918618"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","5c2a35d02340893808a8487589105dff"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","c516e37e5d2fdcca701ce66999233c51"],["/2020/05/28/525-Contiguous-Array/index.html","1677b7443e5f4872c55143b678bc3e02"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","df782772fba666e3faab8be2f626a3c6"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","3b5b224c807b13398b1dff57d4519be0"],["/2020/07/21/Node-js-与-epoll/index.html","fb34b513daaee513c3af625a9745f6aa"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","04f43656834ed945ddd07e1e50ea1852"],["/2021/03/02/总结一些测试vue组件的经验/index.html","42ee0ab11a9a48f280a9aeeffea4d5d7"],["/2021/03/15/Purpose/index.html","6db3c4fa8c4ebe5ba9c6dd1c60eccb95"],["/2021/03/16/和安全团队的斗智斗勇/index.html","c833c03029677cf59b9a2553d221074f"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","d8467d7df481a830c7264b2448f727c6"],["/2022/08/10/关于图片处理的一些事情/index.html","fe574ca31661f24e5b9da56310f1c4a4"],["/404.html","f25b5de5aa8300dab0eb2721c626c6dc"],["/about/index.html","502345f4bda4b5f65e5540d7d804e77e"],["/alice/img/01-ee2afe4f.jpg","39e62f8071c9bdf639f9186586bac0d2"],["/alice/img/02-96824f07.jpg","64645e2c85a214b332a34ebe606e9594"],["/alice/img/03-23094728.jpg","63f66b53e5b6e683558e3f70322432d1"],["/alice/img/04-375511e8.jpg","96b4091365279ae4e8ae51178a1074a6"],["/alice/img/05-2c5411f3.jpg","762f319cf2c7c388422be056041c56d0"],["/alice/img/06-decdf5e5.jpg","c60bbd607622944fb62a9256b7271075"],["/alice/img/07-9961af6e.jpg","d56676e6cc1b0f04c47853c7b0e95210"],["/alice/img/08-1e8905b7.jpg","5b3d0a1a57c2c0a63a013468e1f5884d"],["/alice/img/09-539af5f7.jpg","43402b92a8631f8d20bef368cef62b18"],["/alice/img/10-6091866b.jpg","0ccaac8de2718f13fb14c7afbbed1148"],["/alice/img/11-3e7516be.jpg","1fe9a3e30382089df89fcfe8aeb08f79"],["/alice/img/12-44268290.jpg","77fdc8e64a1ca98b2a18b99da9080c7f"],["/alice/img/13-9709db5b.jpg","f3eb6bd562d4262be3d9c7b897e2fc01"],["/alice/img/14-8bc800ac.jpg","a82a48d79aee1576b8226886fbb1e0db"],["/alice/img/15-a4047faa.jpg","b5b18c458786814f17c82b9bf391d75c"],["/alice/img/16-90e2ffc1.jpg","e18cd3b54a177d07b7d18ff992c1fbfb"],["/alice/img/17-4368884f.jpg","7fd2ab2e166fff8492af153f18571f74"],["/alice/img/18-f5e3f4c2.jpg","ba37b92e8f7fd41aa6023cf543e2f439"],["/alice/img/19-f4abf441.jpg","b4f6d55cc6d899580f8512727b77da82"],["/alice/img/20-b507f3f1.jpg","49815bc5b293f2c529816f6d73957140"],["/alice/img/21-4443a8ca.jpg","45a1f9bee04a883bc38521f116906f7a"],["/alice/img/22-56791f9a.jpg","9081d516adf4ddc86a5815df6a84fd3b"],["/alice/img/23-4ed30ac3.jpg","f1fbcd83ee3324368ba221558161ffce"],["/alice/img/24-575b30a3.jpg","55222c430fe7e5ed765b07071e6e2a33"],["/alice/img/25-ba06fa1c.jpg","f48b11b2740c2394f290d3a79e64c7ed"],["/alice/img/26-19025568.jpg","e5f69935d8d8b58076328f7d3e84bdff"],["/alice/img/27-a4199bd1.jpg","353d507bda21f194a587fdc73866e948"],["/alice/img/28-f006b3bc.jpg","b8ed99d902f6a016c0166d1ebc746806"],["/alice/img/29-fdd6489b.jpg","8ac441b95700656fee98af35641c5ef9"],["/alice/img/30-6065962a.jpg","b5b1abbe5e92d87a8c200c850d840aed"],["/alice/img/31-3a7202d4.jpg","d25d4efee045e5a1fc4e40b67e8e8897"],["/alice/img/32-2ce354bd.jpg","4b72b9063aec44f022251b3d6fb5f2f4"],["/alice/img/33-3a4da03e.jpg","f7bafaf4d11aa6f484e7527ada4992c5"],["/alice/img/34-69bdf272.jpg","d38bebb6a697aa09cd13d66d46e001d3"],["/alice/img/35-f1c7565b.jpg","c1ac592eedeb8de92f221f9ad79c28d4"],["/alice/img/36-622e264d.jpg","21cb2723dc95eaa7fa018b49d8009746"],["/alice/img/37-baf33a74.jpg","fe03020abefec246fc5591a04326fcc8"],["/alice/index.html","43ea91ed2a6ff4a3ff369e87e1dbaf61"],["/archive/index.html","89af3d66d283aa6e6aa5b8c9eccdbb37"],["/archives/2016/07/index.html","c7200fd7368157d8a20e2a404d278950"],["/archives/2016/08/index.html","cffa6ccb8abd0ebf3e50a21c602d066b"],["/archives/2016/09/index.html","0e622a975b93f23c3bd3b30c3fe758d6"],["/archives/2016/11/index.html","e8e39cc277f3e8e2e7a68fb55cb2a610"],["/archives/2016/11/page/2/index.html","ba3a278d5e767993e8b057f5ad9586c5"],["/archives/2016/12/index.html","c1dd24dfc3f16f82f036ac71e69f0d34"],["/archives/2016/12/page/2/index.html","b38fc392b0d6d7b45a294b693c8e7836"],["/archives/2016/index.html","5081f00f476503e8bd419c8f8faf2dd2"],["/archives/2016/page/2/index.html","b05c02be2cfebd326781bc50add5ea96"],["/archives/2016/page/3/index.html","db2d0bcb865ef80e84a74c6d3a6c0c6e"],["/archives/2016/page/4/index.html","634d9563acfdda9fa86e36f49c33f05d"],["/archives/2017/01/index.html","fca15807ec95a51fd18ee40b029aaec7"],["/archives/2017/01/page/2/index.html","343c58034d2de930d28cafeed2f5977a"],["/archives/2017/02/index.html","89f03be0194fcdb6eac11c07ab3cbfcb"],["/archives/2017/03/index.html","6646491aac51facbecb24a5b53c452cc"],["/archives/2017/04/index.html","24de674cbad5c75faeb505e02fafbe82"],["/archives/2017/06/index.html","611724c47b62cc163bde3d8463bc4853"],["/archives/2017/09/index.html","0101a97849f8701fed85d55aa2a4d147"],["/archives/2017/11/index.html","dbea32eac26381229ccf24e008731e53"],["/archives/2017/12/index.html","ffe233b476069c401164b3f73b7f5c71"],["/archives/2017/index.html","5fc355e6836550d687a35bcca9203d2a"],["/archives/2017/page/2/index.html","8e981b89382028b7b8ede737f913be20"],["/archives/2017/page/3/index.html","8c2e4e01780994840e83af342ea9149c"],["/archives/2017/page/4/index.html","9d4f28bb0664914bf2320a8a2e705b8a"],["/archives/2018/06/index.html","9fbddbff6da41209d6fd07798fe70581"],["/archives/2018/07/index.html","03b24f59828f951e25f513358687f180"],["/archives/2018/08/index.html","88d1457010e26bbd3620b0a02d7846ae"],["/archives/2018/09/index.html","b2b0daa246ca78e6f002285671097a35"],["/archives/2018/10/index.html","a7da60c660ab49cd86b2502bbf356eea"],["/archives/2018/11/index.html","3a033d6661322a292dff446219c1805a"],["/archives/2018/12/index.html","2a05c6f98c0c7d368e9fee3f0636e1c5"],["/archives/2018/index.html","9c629c300da5b5fc308aa0da25f5e02f"],["/archives/2018/page/2/index.html","dc8c7ab7cc1a6f24c5c38666ff540f63"],["/archives/2019/01/index.html","02cc5bc941dd17aa7dc44d204fa4b629"],["/archives/2019/02/index.html","63332000a41c2d0ec20b9ee401bdfff8"],["/archives/2019/05/index.html","34e747f5d2c047832fbd2e1ae1903225"],["/archives/2019/08/index.html","a1345bfd046c1dc61278d6198cf523c2"],["/archives/2019/10/index.html","91334ed5fc0031987f47fe90c543074d"],["/archives/2019/11/index.html","c463ad4c30e233b186db3dcbedb3418f"],["/archives/2019/12/index.html","5151812e1ecf92157a6d3992d8c97fa6"],["/archives/2019/index.html","c247a3c0d5e08187b20648fd3b71633a"],["/archives/2019/page/2/index.html","5f1e7d06b8ebe23b13936abf6c5af6e3"],["/archives/2020/04/index.html","fe15f7265f7e3cad31a425b9a60869d9"],["/archives/2020/05/index.html","eb34c26039f1226166809c9d08a42362"],["/archives/2020/06/index.html","b289b392b4706bb0624fcd501e03c344"],["/archives/2020/07/index.html","ae6acef989b61e12f094c9a046e1fc1d"],["/archives/2020/index.html","ba81eb7a30842cc21cb4768aa32ee0ab"],["/archives/2021/01/index.html","857f84d98ce98b00732051ac5d8bd042"],["/archives/2021/03/index.html","ba43de96086fa0150abeae3a7505e921"],["/archives/2021/10/index.html","eb71f69f7a4e2d8eb5eae2481b3a1af9"],["/archives/2021/index.html","ff21ae5787acdd3c40d0fc4332db01a7"],["/archives/2022/08/index.html","bdaeb7c4dd10232e6fe342279b17274b"],["/archives/2022/index.html","4b96e5fb0eb69af59d9e9213b84ce2a8"],["/archives/index.html","fcd6c3589300586228b38aac0b40b966"],["/archives/page/10/index.html","9db9ddf47e72063c6c5d35abd964d70f"],["/archives/page/11/index.html","e610097e852f62f32b0b0282f5cf4f73"],["/archives/page/12/index.html","73f581e6d78d6985ee74bcfaafb3456b"],["/archives/page/2/index.html","20c3f8aed525bd30e43c550d12cc6950"],["/archives/page/3/index.html","8b467293f1ac6cd180e655a3c197cf0b"],["/archives/page/4/index.html","86f69c63763fd6520e06548777aec6f9"],["/archives/page/5/index.html","d4c4fa6abd1b8eddd1adb1ae2a085d64"],["/archives/page/6/index.html","7c344b8451173e685a3745d9c7bc559c"],["/archives/page/7/index.html","c4fa5e4cf4b783239e66b477d2ae64ff"],["/archives/page/8/index.html","549920f766d15b1eeed6f8a725fc3fd6"],["/archives/page/9/index.html","7c93e293ecad7f7299450e641b1073fb"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","ae416507a45f53b8f8a2d0901a9b04d6"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","46277f555709065ae04255301348153a"],["/page/10/index.html","6e673eda7289933a87b40b82508379c9"],["/page/11/index.html","b9c2e45160f92e4e8cd2bfad3687c802"],["/page/12/index.html","4d6e011fabe7266e9896de2449b5a599"],["/page/2/index.html","9d63c85373671e196309236669ccf72b"],["/page/3/index.html","20bda0eeadf4f15600ccd52803b59238"],["/page/4/index.html","667c3514a87ef315f65bb28ee7019386"],["/page/5/index.html","6711bea6a416837eee5602a62e615f21"],["/page/6/index.html","b677a365e4063f61d60c20874e7ba4b3"],["/page/7/index.html","3d9371619eb1aacbf182d82b80ae7a3a"],["/page/8/index.html","2528c9caf5bcd75431ab02b952db4153"],["/page/9/index.html","675660cf877f6e1b1f2260cbd0435082"],["/sw-register.js","adb5231eaad87fdb0623885a949422b0"],["/tags/Android/index.html","2e2711ba59550ad480d8d12871c00f19"],["/tags/Angular2/index.html","4e4c6ae90f8471476ab950f6b9bb9368"],["/tags/Babel/index.html","048de77f5ed5d982a794b6244aa9c196"],["/tags/C/index.html","d534d6ce32a896b69e867cc5519898ec"],["/tags/CSS/index.html","42f19f72e9cd6b1f9dcf4e25a44e7d52"],["/tags/Coffeescript/index.html","15f5ea1fc9d73c64d364d7efcb051fde"],["/tags/Compiler/index.html","cf21c3a6bb0acfc1d2f92fda508190fc"],["/tags/Component/index.html","63fe716113c32da6ab52e3d61f530840"],["/tags/Design-Pattern/index.html","37873edbd77448ac1586fc63113d50e6"],["/tags/Docker/index.html","ae19ca6bd15cc5f2c0e4c47727f59661"],["/tags/ES6/index.html","ff9f5faa54264ba662280eec0ff39c02"],["/tags/Game/index.html","84e29de21dcb3bd7236f840361abde6a"],["/tags/Gulp/index.html","df71c4cdfb81c626b79587afd4a8cfac"],["/tags/Hybird/index.html","338434ff61a85e9a945d2e9207e5a219"],["/tags/JIT/index.html","d1f25abdf0088bceee3bfd2b4f2cf2ce"],["/tags/Javascirpt/index.html","f8f298e664d2782ddb93c4fa13a3c59d"],["/tags/Javascript/index.html","920c14f765ac79528f0c4dfa023a4667"],["/tags/Jest/index.html","a78948d7561315d362d04e234295ec9e"],["/tags/LeetCode/index.html","df4a67b7ca39d9042d99c5dffd3f7f0d"],["/tags/LeetCode/page/2/index.html","656a995fc6fe9c1046164490f7ef5adf"],["/tags/LeetCode/page/3/index.html","8188a76eea13e4eb1e1ea9036f891242"],["/tags/Leetcode/index.html","8cf59ff0433e33c4e4e9a9cb2c55888e"],["/tags/Linux/index.html","a1be5ba1977360ba45f751bfad0606a1"],["/tags/Lyrics/index.html","5bd0864d434dcebe1b2d33126062171e"],["/tags/Mobx/index.html","aaae2e50437452d96f1588a3302500bb"],["/tags/Mocha/index.html","6a8417e31ef5eee7292e7fdcf9513dca"],["/tags/Module/index.html","f0c8b2e58a5a2ff01dd9ff2af57d1826"],["/tags/Node-js/index.html","1f5b83cd695dfec1cdb04757237d16ed"],["/tags/Node/index.html","c59271035bd4d186ced8b7aa15fab9f6"],["/tags/Note/index.html","71941e3dd8a8f75adb585680ca75507e"],["/tags/Object-C/index.html","a63d52ab366294103139de42ff68d5ea"],["/tags/Objective-C/index.html","b8c24ec1d921b30b54927cd33c39deb2"],["/tags/PHP/index.html","da9070f20b788eceeb93c44894cb7392"],["/tags/Python/index.html","66af655ea2ee26f0ba4c5e6a0a0fc792"],["/tags/Python/page/2/index.html","a4f576efdffc9d89c259618339ee361b"],["/tags/Python/page/3/index.html","f62b5f45a61b6f825023dd2614d583f2"],["/tags/React-js/index.html","0ffdce4187807aa434e372cde9ed4c9d"],["/tags/React/index.html","f929c5f9fe255ea03acaaa3ad05efb79"],["/tags/Redux/index.html","ef93aaaee5948f18332f207bdeb1a1aa"],["/tags/Require-js/index.html","6f697eb399b7364d738e1b9b5814a4e9"],["/tags/SSR/index.html","d29e8f219665a34a7f46c39a57aa7d45"],["/tags/SegmentFault/index.html","60301cb0a7def11c89e613c0a34a6388"],["/tags/Swift/index.html","b8db2518eff446874d2c5c7b86491042"],["/tags/Template-Engine/index.html","2ed893fed5c119d956abd813b2f528c2"],["/tags/Test/index.html","d9b9b71d7d9fdafd6bc6497f2621df7e"],["/tags/Twig/index.html","c2ec99b390d69b4e666abe40015c2c70"],["/tags/Typescript/index.html","961c06d828b6c2a7b8026b7a280a8a13"],["/tags/V8/index.html","1f564b0f1043413e06eba6c7bf7b92c1"],["/tags/WebAPI/index.html","7100f622e22c0a1c3a9846f3c302dd1f"],["/tags/Webpack/index.html","afb56f789e1c0e1d3712711558901a3d"],["/tags/Webview/index.html","5010a7382e27619a246027fad4395bd8"],["/tags/Windows/index.html","4aa5e4e6b342fb9bb9330617592a2fe7"],["/tags/babel/index.html","3607a8118ae13ecdd4c943e5011ff178"],["/tags/base64/index.html","b60a489458e80b48aca7e26ca0cf9e48"],["/tags/bootstrap/index.html","d28f8bff4ed15217c98b5baf693fb3cc"],["/tags/ci/index.html","29b400dd2f08adc63050ee1158299f71"],["/tags/codepen/index.html","321733c4169356ad7bab0e520b80143e"],["/tags/compact/index.html","0f5382cdd6b8aa033c80d8b9f4457582"],["/tags/css/index.html","076c732311dd810fcbc334f4e1eeafec"],["/tags/database/index.html","649d266d53fed2135a7ffde0cd64d495"],["/tags/docker/index.html","457f48a507345b49b88ddd4e3d89f103"],["/tags/event/index.html","0d147d419acfddc723cb2bd57fe4866d"],["/tags/facebook/index.html","82ec3e8b4b49370e2c2c2104b7752364"],["/tags/flask/index.html","607395d1eeacbbb7ac8bd5663b185eab"],["/tags/flow/index.html","39457c8ce5436b6c5393c0b5920bb509"],["/tags/i18n/index.html","ac3696197a17a065a09931cab6627c48"],["/tags/iOS/index.html","35dc4ac451cb099c1520a428fb131c97"],["/tags/iOS/page/2/index.html","4a7ea559dda08d3c5589f2955266d855"],["/tags/index.html","7e90f2b901080dd33e7c2209c42217e8"],["/tags/javascirpt/index.html","fa6261f15fffde248c887e369ca3406d"],["/tags/jest/index.html","729acd52dae8fe73b6f5f742a4d5172a"],["/tags/jquery/index.html","302955edd4f4b76286b7f2b1d3770939"],["/tags/life/index.html","3bd993824b9b891de33c37e27c0b4995"],["/tags/lyrics/index.html","d34d8fcb9ee2074bd700b4bc89f9be92"],["/tags/node/index.html","c7db4789b0d7a4dbf700b731ef8f845a"],["/tags/npm/index.html","f11846078397ba7a40b8f39baf1089e1"],["/tags/pwn/index.html","c77e41e067f973dbc69c32c5ac7c78d0"],["/tags/python/index.html","c6464cf93aca6a94fd534988e199d052"],["/tags/reactive/index.html","f04709794e412f83a0af4f1f950a9b69"],["/tags/shell/index.html","c6082e1a63979b0e33ee194d9bde2734"],["/tags/ssh/index.html","d410dc68580b7bfb48f7937d09dee3a2"],["/tags/svg/index.html","c8ea3843fab67f8ae516e4743a5d9cf0"],["/tags/translate/index.html","6f2af07dc484dfd41ad92d2e80ac9ba6"],["/tags/translation/index.html","b821f5eba7d32b9e1a47af932591c93d"],["/tags/typescript/index.html","740749ac2f46b55d22165a417c3344d0"],["/tags/underscore/index.html","97555d3c8f318bd9b37c25090d4bbbbc"],["/tags/video-js/index.html","86affac3ef71fd12fbfc26980489c34b"],["/tags/webpack/index.html","96ccf809f89453df8c361c6b77d3a21c"],["/tags/web安全/index.html","9a8d638bf8861527311911427caa5014"],["/tags/函数式编程/index.html","b288e66d4e4f0d7c4f7e3055db36fcd1"],["/tags/各种开发者大会/index.html","8e6ee895787f9d90e7ec3d9da2c5abd1"],["/tags/文档/index.html","5c127c6055607e8860487ca61c275201"],["/tags/构建工具/index.html","6dd013b62381d9fc5a9e5de3039f8dee"],["/tags/测试/index.html","a37e02333ef81e96e28d54b06210401e"],["/tags/生活/index.html","f501dba6cc6821ae7e19342aaa3c6ae2"],["/tags/笔记/index.html","88d70093d05d5388597eac534b5919e3"],["/tags/读书笔记/index.html","856154b2a72eb39ef470bd764365fbad"],["/tags/逆向/index.html","032cbcbcc765401f2824027140a77728"],["/tags/随笔/index.html","96f16cbb9c58ae2a8ca65c7ec8383e88"],["/tags/－-Test-Karma/index.html","908c97928775b1b2dda44761a0be6ccd"],["/tags/－-杂谈/index.html","8b89710d0f5e3652a73bf7634b5ad1b4"],["/tags/－生活/index.html","ddb03ab6ffcc8064d0415280993af260"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
