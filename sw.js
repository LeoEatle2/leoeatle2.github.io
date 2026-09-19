/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","e2443d2e8bce24144e3e7f95b42d29db"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","d849da7cd15ca9948b7894f1533196ea"],["/2016/09/02/The-inherit-in-javascript/index.html","0351765e4d8b604721881d0b2b1d8374"],["/2016/09/20/令人伤心的博客碎片/index.html","571b61a224b52304ade5978fab43941c"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","a92d94d97bdc9ab3e3be71e9698b526f"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","47cc54842b8fe784c71c413d6f296c2d"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","e91adb8e6f1ffa9ebb17cef1f0a46e21"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","62ae79dd95611a23d3ad8c4a05b64b68"],["/2016/11/14/爬虫的意义在哪里？/index.html","4be0c11f3bda3bb40bd3278da4205872"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","981457519dee8014f51ab7ca59684232"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","77024a422cd7182054de830adf06c616"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","97fea3d71ad34d99483b2fb7419b3f2e"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","ccb5bd02e8fa1ee0bd6dbae689a22a24"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","7deaf85ca52a2def15598af66371236b"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","eada7a95b313c9af22235cff62532ac2"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","d9f9e590e0f0d54cd5eb93d2ac3e07ab"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","d1c61ffb88e9b40ef7d5a743fb14c232"],["/2016/11/28/SegmentFault开发文档笔记/index.html","539271f8c835f4e67ca3b083c63943e6"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","f8f5fcf9be9eec8278f9d5745f6f1b61"],["/2016/11/29/Twig模板引擎学习笔记/index.html","8ebf95dfdfdf9e19f94f1266365cd367"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","1d4b40dcba887460a125fd782a13284c"],["/2016/11/30/compositionstart事件/index.html","fe5e1f81529cf1f69c2aedf0c73780dc"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","5b1144e53b8c3a4f470f3f18eef99504"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","f0af6ff698e41721904da8509313eefe"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","d235e7195d79fd495a4cc514f812e368"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","a810158eb84029a7cbee6a32aac75ca9"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","2f7266746224a5b4d54665ac2cafc874"],["/2016/12/10/SFDC笔记/index.html","cf1887542fd2ea3e5ec1ce304e22987a"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","057a8f7f43856ad97dd4ac4543154191"],["/2016/12/13/深入浅出node-js-笔记/index.html","cbf6b738cd464d468f76e7d8cffc7445"],["/2016/12/17/LeetCode-274-H-index/index.html","4f9e4cfabdda2bf4616405a50c88e773"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","03984c8bd59cbb15f41258f934553a9e"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","be6b29b567013bc13a0a6cf03fe50817"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","44fa2e4ca78ab89d6215e47b0c7d3b3c"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","78a6b4080f4c3cc9fad14863d05d98fa"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","c6c52e8d163191d418c76d6927e4d88d"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","1c52a1dcc8cdfc06a4f8a5607db70ecd"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","c1f7dd14665b01a5fceb77374ba76a48"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","8af456386bc01355d9eace06ba1274f6"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","ed14493e16e2521c68603deb40b2e277"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","f75c775d90b4fea53a009359b5a1b945"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","2bc360c997025cf8649e5f3c76823e6c"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","f2ffcaf1f1bfdc5c1aa661d2aa3de6fb"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","c87dcb5ad533b51f14c61113c6f5dde4"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","729060132a9be5b04cceda16a95b322c"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","afc23331c0426dfd253421fdb563e262"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","5f348527953b9c07a07538f3ccfcd4cd"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","2519eec15affd71b05e11c4d915e96de"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","8449b55c98d0d2fc841256482c76fad9"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","bf0864f664d5f532329c8bbda91e151a"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","3a7aff64d997a9ae71eb5234ce7d1dae"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","41ab6964b916223d36207f239ec3b63b"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","5bbeb9cb94cf094e3e9373ddda3b5744"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","9e049aef727a6a9c63262e799eaac6e2"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","cd5dec6d970bce1e14477cd0cb4c213d"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","ec1ce6dd55fbdaaff4a0565feb62a57f"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","749ebaf0f63573317282e8447b1c34dd"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","d970cf19986fe925febb01eb7cddb42f"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","6f1d3a18386aee828e82200fecc70b1d"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","648a9aa4743ded0ce07e73230a2aa2e4"],["/2017/03/03/Google-Android-System-learning/index.html","bbd5a1713805ef7481b2eb89213df2b5"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","e3c93893862ae5e594a2b7fe11b5755b"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","5b8b5773fc019072239d0b1f8cdf6e22"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","7b601a2b576d971fc825aa6b1dea1528"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","6bf8c6ee17ec5b3691007fe732fb2935"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","5430105bd439d6fa10f69fa4fe53bb7e"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","1aba64e6c4e772ab9f4f7b3fb60b3d90"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","65e07f6f2f2efdb7b64ac96f8c2d7ad4"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","b1131a8666e17fa461c9efd006dd366e"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","928cb8150dd1101c17ae20930a9b1469"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","06c72f4b00bd08b386aeda0648c0482f"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","03b4b33886a13987e84bc7acceb86a6a"],["/2017/09/08/编写Webpack插件笔记/index.html","5dc5880b9809a5051743d23d17d7b820"],["/2017/11/30/Mobx学习笔记/index.html","9a3cadfdca76850a1094668148c97323"],["/2017/11/30/Test-travis-ci/index.html","086a23e233b41eb3b41ad7cf6040b1fc"],["/2017/12/01/Use-flow-type-in-React-project/index.html","97e490c19ddf4b35f0c6fa71f04cafa3"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","55156dcf32b15b95cb5f12096fcd34f7"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","3bd1a996a3d669a80a3f197788453933"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","291a9f21f0f55070dfd3dd37782cd09d"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","838b2ba3901a4815ae8a993332b7c181"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","05aaf1034cb4787227bfb2c66db4988f"],["/2018/07/31/SDT自我决定理论/index.html","75f3812a023ba1be38027f6bcf748517"],["/2018/08/04/React16源码解析-As-required-order/index.html","281dabc7a763c8d261b8e6bb2f6a6ddc"],["/2018/08/05/React16源码解析（Fiber）/index.html","d902d7bcc65f8534d0852bf82effc91b"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","1b55308b472e57f2855775bfea4a4897"],["/2018/08/27/释放webpack的真正潜力/index.html","5e119d9305bae83703c8bf042812bf3c"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","20bd488512e0f92950edfbf5167a74cd"],["/2018/09/17/升级到Babel-7的经验/index.html","0d06b70e28533a12c2ac68326c0ae378"],["/2018/10/16/React-tip组件的设计/index.html","fd9ba19211b57b5c58a8aaa2aea04e44"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","37d43a51d556d2f28b88b5bd482397bd"],["/2018/12/08/jenkins问题定位/index.html","28a4790e962867cfee1115fd1cdb1cfd"],["/2018/12/21/React-SSR实践-压测/index.html","3a40db7122af81ed1606e956219cb133"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","821d0f78f6e7fa1d7a09a4ed54f052dc"],["/2019/01/21/item2-profile-config/index.html","14cd383dc431de523bf3452ffa388357"],["/2019/01/22/i18n-about-Access-Language/index.html","1b645d55d5c4423bb0565cabc1495b8c"],["/2019/02/27/Node-C-addon-学习笔记/index.html","5419df25a5b7c92cf701ad4356ff59b1"],["/2019/05/16/Modern-Crusaders/index.html","911c5fca7a1167503396cf8d769edd1e"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","ca0f30e7eb782f749178170a89b53764"],["/2019/08/28/关于docker使用的一些记录/index.html","50a1180e95e8ca9100121cad33d5c9ad"],["/2019/08/30/全干工程师的基本素养/index.html","51d87d15034eb8fc5213c45fc146a8ea"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","57a346e6bece74250707398f8510356e"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","2ba29e5d71536568b01feb8dc72e2abf"],["/2019/12/02/One-example-of-Typescript-generics/index.html","a8f1f3f7e2f84bf0f2032d792ba6380a"],["/2019/12/04/有趣的上网冲浪之旅/index.html","795a5677038b67ca6c3f3add0b237197"],["/2020/04/17/企业微信国际化方案总结/index.html","7fd4267646e208f3168147e5e8866e7a"],["/2020/04/27/come-on-sweet-death/index.html","042e959b340c5d44a486a7e0333adc3d"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","5f83fe52a7cf068e2eab0e6f5f8c87ca"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","624ed3a59fcaa0774399a2639295d91d"],["/2020/05/28/525-Contiguous-Array/index.html","0db15c70c12301a8884276241b8c0cb1"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","2e694d48db19f62f44f7e0ba12207cfd"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","a81d4623a025b48bbe3fcb2b14e87f84"],["/2020/07/21/Node-js-与-epoll/index.html","f05f19e1d824837f24b81129760a23cb"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","fb69372dd0c2bac6d786dd867c77ab7e"],["/2021/03/02/总结一些测试vue组件的经验/index.html","727d603fa07c4d71e990f08f331e511e"],["/2021/03/15/Purpose/index.html","4bd11a0ae33b4dd4bec84c3c9c744209"],["/2021/03/16/和安全团队的斗智斗勇/index.html","997ed36b5cde0213e35af118700ad606"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","30789631fa234a19b609772182926c81"],["/2022/08/10/关于图片处理的一些事情/index.html","89598e767f8a97572668404bebae7e67"],["/404.html","3a01778ae401dcb29ad2d4771148e65a"],["/about/index.html","eddc33cf39f9ea8eb916f282459d06be"],["/alice/img/01-ee2afe4f.jpg","39e62f8071c9bdf639f9186586bac0d2"],["/alice/img/02-96824f07.jpg","64645e2c85a214b332a34ebe606e9594"],["/alice/img/03-23094728.jpg","63f66b53e5b6e683558e3f70322432d1"],["/alice/img/04-375511e8.jpg","96b4091365279ae4e8ae51178a1074a6"],["/alice/img/05-2c5411f3.jpg","762f319cf2c7c388422be056041c56d0"],["/alice/img/06-decdf5e5.jpg","c60bbd607622944fb62a9256b7271075"],["/alice/img/07-9961af6e.jpg","d56676e6cc1b0f04c47853c7b0e95210"],["/alice/img/08-1e8905b7.jpg","5b3d0a1a57c2c0a63a013468e1f5884d"],["/alice/img/09-539af5f7.jpg","43402b92a8631f8d20bef368cef62b18"],["/alice/img/10-6091866b.jpg","0ccaac8de2718f13fb14c7afbbed1148"],["/alice/img/11-3e7516be.jpg","1fe9a3e30382089df89fcfe8aeb08f79"],["/alice/img/12-44268290.jpg","77fdc8e64a1ca98b2a18b99da9080c7f"],["/alice/img/13-9709db5b.jpg","f3eb6bd562d4262be3d9c7b897e2fc01"],["/alice/img/14-8bc800ac.jpg","a82a48d79aee1576b8226886fbb1e0db"],["/alice/img/15-a4047faa.jpg","b5b18c458786814f17c82b9bf391d75c"],["/alice/img/16-90e2ffc1.jpg","e18cd3b54a177d07b7d18ff992c1fbfb"],["/alice/img/17-4368884f.jpg","7fd2ab2e166fff8492af153f18571f74"],["/alice/img/18-f5e3f4c2.jpg","ba37b92e8f7fd41aa6023cf543e2f439"],["/alice/img/19-f4abf441.jpg","b4f6d55cc6d899580f8512727b77da82"],["/alice/img/20-b507f3f1.jpg","49815bc5b293f2c529816f6d73957140"],["/alice/img/21-4443a8ca.jpg","45a1f9bee04a883bc38521f116906f7a"],["/alice/img/22-56791f9a.jpg","9081d516adf4ddc86a5815df6a84fd3b"],["/alice/img/23-4ed30ac3.jpg","f1fbcd83ee3324368ba221558161ffce"],["/alice/img/24-575b30a3.jpg","55222c430fe7e5ed765b07071e6e2a33"],["/alice/img/25-ba06fa1c.jpg","f48b11b2740c2394f290d3a79e64c7ed"],["/alice/img/26-19025568.jpg","e5f69935d8d8b58076328f7d3e84bdff"],["/alice/img/27-a4199bd1.jpg","353d507bda21f194a587fdc73866e948"],["/alice/img/28-f006b3bc.jpg","b8ed99d902f6a016c0166d1ebc746806"],["/alice/img/29-fdd6489b.jpg","8ac441b95700656fee98af35641c5ef9"],["/alice/img/30-6065962a.jpg","b5b1abbe5e92d87a8c200c850d840aed"],["/alice/img/31-3a7202d4.jpg","d25d4efee045e5a1fc4e40b67e8e8897"],["/alice/img/32-2ce354bd.jpg","4b72b9063aec44f022251b3d6fb5f2f4"],["/alice/img/33-3a4da03e.jpg","f7bafaf4d11aa6f484e7527ada4992c5"],["/alice/img/34-69bdf272.jpg","d38bebb6a697aa09cd13d66d46e001d3"],["/alice/img/35-f1c7565b.jpg","c1ac592eedeb8de92f221f9ad79c28d4"],["/alice/img/36-622e264d.jpg","21cb2723dc95eaa7fa018b49d8009746"],["/alice/img/37-baf33a74.jpg","fe03020abefec246fc5591a04326fcc8"],["/alice/index.html","43ea91ed2a6ff4a3ff369e87e1dbaf61"],["/archive/index.html","5412a6b130e28185ee4a774368e7ca89"],["/archives/2016/07/index.html","f2938f13e8b657237d88c937946dcadf"],["/archives/2016/08/index.html","1d4497a6c64071942e1287c125d66a6c"],["/archives/2016/09/index.html","c4a0ed6d3175610d2caeea32796cab9e"],["/archives/2016/11/index.html","bb5710e6dc5f2ad724ae67bf72416a1f"],["/archives/2016/11/page/2/index.html","6b7460e780a949c3261089581f9d0740"],["/archives/2016/12/index.html","0fb0ce920bd72f79b76d57c151142ca3"],["/archives/2016/12/page/2/index.html","315ea704fadb5a92f77d3d8d292ea17e"],["/archives/2016/index.html","67d7968062330964d8003b5886f35fd9"],["/archives/2016/page/2/index.html","e12a138fb517941a1ca096ba308405cd"],["/archives/2016/page/3/index.html","f8684d20e042dd80e6cf4ce8b96a2a73"],["/archives/2016/page/4/index.html","30427e8162e64f3afbc2baa30a39979b"],["/archives/2017/01/index.html","f6eb3daf16344522f01127a1b411899d"],["/archives/2017/01/page/2/index.html","19c907e8025783269cf77ed44f9dca46"],["/archives/2017/02/index.html","d0be84cdd22c5bc52da04988f6b53580"],["/archives/2017/03/index.html","ff3c563a113ce350962d33d593720693"],["/archives/2017/04/index.html","6b68abee13d8bd4749724fdafab10ac6"],["/archives/2017/06/index.html","5ab4d7e9d6bec8acddbfc62f7dc1ce24"],["/archives/2017/09/index.html","cdf54226892e42264ae7b10af8cc4ee6"],["/archives/2017/11/index.html","68662503bf86a7b256e994742620536c"],["/archives/2017/12/index.html","4cecff0f383eb07f1d0dedba7eff3169"],["/archives/2017/index.html","8ad82ea0adbd6c3707e912a074810f41"],["/archives/2017/page/2/index.html","1861123bb6662659f8bf782b2ffb17ff"],["/archives/2017/page/3/index.html","4f3ee828323ca634709662f6b1d22eee"],["/archives/2017/page/4/index.html","d85b329eeb4861b96e8a41430e7ab27a"],["/archives/2018/06/index.html","71b6126445d12677a9fa9e7bece5fb55"],["/archives/2018/07/index.html","2c0bf2bad9308dee67d79168ba600eef"],["/archives/2018/08/index.html","345b9c6527246943974c5f286dec6960"],["/archives/2018/09/index.html","f1d2d2e262a2027c1f0cc99073438578"],["/archives/2018/10/index.html","306662c47b8eb11f70a43d8cacb79bcc"],["/archives/2018/11/index.html","3a8240affc5a915cd5c92ba7d5089a95"],["/archives/2018/12/index.html","71009f70c7861958c905fa0c67db25be"],["/archives/2018/index.html","dd01b2a2f771621ab3ebb11d7a5862e1"],["/archives/2018/page/2/index.html","40867f152f4d4b1817ecd75a378d0612"],["/archives/2019/01/index.html","346e476f97a624f98ddbda1aa679a525"],["/archives/2019/02/index.html","bb28ed49f468b0cd8e011254f255b275"],["/archives/2019/05/index.html","45a56618c00da3595b1619273a8b61fb"],["/archives/2019/08/index.html","7fc48b7b058c9a7955c56bc498d7fda3"],["/archives/2019/10/index.html","f85d5336630555b994329ed7228b9c38"],["/archives/2019/11/index.html","2b2d90e588f4a3bf2ab0c51e7efd46e6"],["/archives/2019/12/index.html","e10218b71fdb4fd0cf4036d270ee40a6"],["/archives/2019/index.html","0f02cb0505598ec5b5c9a2d207f076d6"],["/archives/2019/page/2/index.html","b5dc36a30deb78fb01624665fa1a6e1a"],["/archives/2020/04/index.html","e30677b044772f6d75a9aa820e49199e"],["/archives/2020/05/index.html","033629e4ecc1e06da2d64a3c822e15c8"],["/archives/2020/06/index.html","e096d60b98149657d98ba69f133c9857"],["/archives/2020/07/index.html","ca939b83fdc50b3d2e816590b7959e0e"],["/archives/2020/index.html","4e0ad165d57e99c095c1063d9a8656dd"],["/archives/2021/01/index.html","e66fe594ddd7c56012898fa341b43e77"],["/archives/2021/03/index.html","bf4584f2239514b88a814daddcf51c96"],["/archives/2021/10/index.html","e6983f0650a65cc3e793ddef05a53f8d"],["/archives/2021/index.html","cb1144a88718198e65134e997faa5a8f"],["/archives/2022/08/index.html","eab371642ac29c1034a071143e2b33fd"],["/archives/2022/index.html","e0dd4c1a30077d9fa89149eb0f1567aa"],["/archives/index.html","d18e72e6552286599ef3ee9a23cd1995"],["/archives/page/10/index.html","e6acc580096fed94305ea796ab2871b7"],["/archives/page/11/index.html","c37f9bcef2b6d478a4d674304dfc6485"],["/archives/page/12/index.html","ee6723faf1b02881a38b8945dc10a107"],["/archives/page/2/index.html","3dbc05513b7e7e1e9a363d0e2053f3cb"],["/archives/page/3/index.html","77efc8dc41da601d28faf5cf4f30afae"],["/archives/page/4/index.html","6a93e22e10dfb4d02073a5f02a00b8c0"],["/archives/page/5/index.html","f69b4c93706a1dc947c05d7de83006ff"],["/archives/page/6/index.html","8852136f3e7dee76de634efaa09cf360"],["/archives/page/7/index.html","23abe0c05ada44e0b72e199bf9bc5ac3"],["/archives/page/8/index.html","2cf9975b7f288a7e520d0f195b20e0ae"],["/archives/page/9/index.html","94253cd290351fc7142f638dc0ca7f46"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","4faa301c0e3a42aa1cbaf3bcf767d7bd"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","93b84dec0d1d1008b09f82514efdc5aa"],["/page/10/index.html","628e781f2b56ec93d8b21e16fe39c938"],["/page/11/index.html","521d618dffe20070fec25279b6dc9758"],["/page/12/index.html","19a37e710e53073de97aecd84849785e"],["/page/2/index.html","52680f4a02e9d5830188715fc88940c1"],["/page/3/index.html","c680e49e07fa3aae12e6577934e99d77"],["/page/4/index.html","4ce0e596c1d2175702d4cdfb1343b147"],["/page/5/index.html","02ed674d7cb3cb8122032639ff567f00"],["/page/6/index.html","4555eb074933d02fbc7a85e2c3d6f3c5"],["/page/7/index.html","acf36cc35912c68b4beba1b54c174f6c"],["/page/8/index.html","5a9173a0c3858e5eeb5d56e635f19d6f"],["/page/9/index.html","48fd852d3e268a76b2bf2f8237633534"],["/sw-register.js","490a731e987e967463c7f90a242a5aae"],["/tags/Android/index.html","270223cc6e897ea70ceeed900c97760d"],["/tags/Angular2/index.html","5d7694c2578ed2b405ba3f0331684d4a"],["/tags/Babel/index.html","409eb3bd330169009a641342564de512"],["/tags/C/index.html","728555b4e2b6864e54bf2cba23ec592e"],["/tags/CSS/index.html","00a9782ca596b9ade81521659fd1b626"],["/tags/Coffeescript/index.html","16edfbfb4c8d358d08f2fc922b55395c"],["/tags/Compiler/index.html","a34d0981e33dbe52802f38bfabb5e349"],["/tags/Component/index.html","5858c73f9da99259e87ee98a5339d100"],["/tags/Design-Pattern/index.html","2b2d46ff549e651e219428e947f0eb35"],["/tags/Docker/index.html","87c3e19bb3428e0a709f3693eb3dc274"],["/tags/ES6/index.html","fe6940d6e1f78af563d2420f3941f074"],["/tags/Game/index.html","c65f5076718c77fba01b5b0b2efac22e"],["/tags/Gulp/index.html","7e8e8be6bcb63d600a90368c9854d4c8"],["/tags/Hybird/index.html","1f00ad8941e80f503e59751f9e712e30"],["/tags/JIT/index.html","dee1c09736b21ad873f59916508e65cf"],["/tags/Javascirpt/index.html","9a22b4c97c770118eef1cba9c9421827"],["/tags/Javascript/index.html","f696ca9a65f46c0219fb837d51d9dba7"],["/tags/Jest/index.html","83e95c6f5faf1f52a43d0ac9534f0f9d"],["/tags/LeetCode/index.html","477515877eea6ee156fd9ab115a4aeca"],["/tags/LeetCode/page/2/index.html","30c085a4d14151225a52636a9d792fe2"],["/tags/LeetCode/page/3/index.html","01ca2e15ab9bfde6815476fc0a643f9a"],["/tags/Leetcode/index.html","7d5faf6796e8c743d616c090c0c5733b"],["/tags/Linux/index.html","f39ea9e837371ee548e21e9686b44739"],["/tags/Lyrics/index.html","d75d8b9402ac1d3fefb317aca42b1ed5"],["/tags/Mobx/index.html","a3f494d1c8cd088ee74518ee2f0c7b63"],["/tags/Mocha/index.html","18a138a3703f8921f11142fc03b1498c"],["/tags/Module/index.html","510ce913f367798d04642fa6f7b0da0f"],["/tags/Node-js/index.html","179122dd9298bf4506d912e583553721"],["/tags/Node/index.html","4493d54769ca228642b5bde0c2cb5838"],["/tags/Note/index.html","e92233f42ef0d6147d13d2ac073380ee"],["/tags/Object-C/index.html","49c026e5210e60494731216870dc41b1"],["/tags/Objective-C/index.html","8168e39b39acffc22b75d5503aa3fabb"],["/tags/PHP/index.html","aad235d3401f10e8fc940ec8111555e7"],["/tags/Python/index.html","530f8823c8556fb2454fd2648024a82d"],["/tags/Python/page/2/index.html","711f3b8727a5bdad32cd0282c42ec560"],["/tags/Python/page/3/index.html","8c24dd57e2490213cfe3ba76a1a904bd"],["/tags/React-js/index.html","9e35b42825d2b0373c94f42b06e0971c"],["/tags/React/index.html","fd6f4dfb5f8b35187ac7a8bb161e9f0b"],["/tags/Redux/index.html","f5e973ffdb5f1ec222337a0b721ca802"],["/tags/Require-js/index.html","23c6472c72e989c9b4d7f685067ccc3d"],["/tags/SSR/index.html","c7004336e3faeef6ba264ba47b3f645c"],["/tags/SegmentFault/index.html","73edb98b3bae97b26fa04daed4db8da0"],["/tags/Swift/index.html","41accbbda80c82a2b3adb80d1a6332fa"],["/tags/Template-Engine/index.html","18c36949866b0b07ed0bee1ca39eb7c0"],["/tags/Test/index.html","3adaa145a639f350c28c1011bad1bfe6"],["/tags/Twig/index.html","f1376fe30749e1f29d62d475e546242b"],["/tags/Typescript/index.html","56270172f821fe00312b62b51020b2e2"],["/tags/V8/index.html","578b53f5c72056090725f4d72cb03562"],["/tags/WebAPI/index.html","aa64a4f2c754cd66bb7bf59a03cb2d3e"],["/tags/Webpack/index.html","080688a18285bf4384e70b155b58f7a1"],["/tags/Webview/index.html","28f2b3c287cee6631fb7774581a7c7be"],["/tags/Windows/index.html","d183e4b1699cef1f871f4f6b74027190"],["/tags/babel/index.html","d773d5710f4f965414d49240ffc4b228"],["/tags/base64/index.html","b5aad0886c94eabdcc2cd7971f4091b3"],["/tags/bootstrap/index.html","0522aff2a3d2bba8f532b3d2f0d48dd5"],["/tags/ci/index.html","2ce7009de6de2accda037de5188df9a7"],["/tags/codepen/index.html","b19c4a19d4d3c498c0a0034442f33205"],["/tags/compact/index.html","7a49279ff441f0b0e882fc8dfa3d53e5"],["/tags/css/index.html","536723a909db52a07c94ae79f1fc53c6"],["/tags/database/index.html","18855a9c28b73603507124bc2b6512f3"],["/tags/docker/index.html","38ab673e449bdbb033f504a6da9be5ac"],["/tags/event/index.html","302a173a2cb04cb024f65bc8f57fe95e"],["/tags/facebook/index.html","5ec1a3a9255b464b0e351023aef83c65"],["/tags/flask/index.html","722b239454d0d0f639f5074e0f87e038"],["/tags/flow/index.html","9d40866d4035da6cb932124333a36408"],["/tags/i18n/index.html","64ac767b3cd258ba8c4eebf3ae49e514"],["/tags/iOS/index.html","b0e36b539c2122af8ae38edd46962afd"],["/tags/iOS/page/2/index.html","f7c75dcc46c73b41bb21524737c27288"],["/tags/index.html","ee678d76352af672ccf17f459f29898a"],["/tags/javascirpt/index.html","e494333c8bcb90957709417d1ea612a1"],["/tags/jest/index.html","a30d550bdab6c1bc050e4aba109291c2"],["/tags/jquery/index.html","e08865e179a988e5f37dc118c6d12d3f"],["/tags/life/index.html","a87ac384ed7a36283db45840cf2236a1"],["/tags/lyrics/index.html","c2935dc5cce7430c3399f70f6727523c"],["/tags/node/index.html","89972f426b21ef1e3dfe08485624d039"],["/tags/npm/index.html","fe0a213cbbb28db6e15277ae6021a9cf"],["/tags/pwn/index.html","e1c68b117f37659a6a45c9bfbc9aad26"],["/tags/python/index.html","e05949f330ffaee1b4a89115ee8a93a8"],["/tags/reactive/index.html","57c0c1fc52c8dc7c0e383aa835692b2e"],["/tags/shell/index.html","212d054e808f3e67c18743f7f0b2825c"],["/tags/ssh/index.html","7c943195632ac78b56f6b98979ce2ad5"],["/tags/svg/index.html","ab5e11f176967528ee015af7b7308796"],["/tags/translate/index.html","a4fd73acd8ab6e643e6672e0ecd7674b"],["/tags/translation/index.html","b951ba927d4c243bda59a8fb8480e059"],["/tags/typescript/index.html","a43ecb7ee238f2e8177473d0a8e21e51"],["/tags/underscore/index.html","603b652e05c2afabf4968c1ba0eed430"],["/tags/video-js/index.html","c338461db07ced26a6cba3c3e269f33f"],["/tags/webpack/index.html","0d3711fea65ff9e137d1c469b42f7ab9"],["/tags/web安全/index.html","564cf5ff058f208b2c1b536846d62852"],["/tags/函数式编程/index.html","bff928cdb4d6411b14461619a2e4ef96"],["/tags/各种开发者大会/index.html","6be9bc6a464a7274bd4b7b2de0806586"],["/tags/文档/index.html","e05c3cc31d64097893d72ab304905a20"],["/tags/构建工具/index.html","32e88f24b38c318817b7bb88f42c4793"],["/tags/测试/index.html","1c3521247806facbf456c9f27ded79f4"],["/tags/生活/index.html","3d159eb2cc52692db7ac4775b7b24e6a"],["/tags/笔记/index.html","2c88eb206d6acdf73f6148a3065718f5"],["/tags/读书笔记/index.html","fe9ff2ccc9b072b0eece01d465084306"],["/tags/逆向/index.html","fe7178774859b431e8fdc5534c2614eb"],["/tags/随笔/index.html","6891c97673d42ac015bedba0adc1925d"],["/tags/－-Test-Karma/index.html","3202a22813f6e6b620ab157e28fb8f8e"],["/tags/－-杂谈/index.html","530d3cfb5990bb83e5cdaa073bba76a2"],["/tags/－生活/index.html","a7e597ca2730975fd15436989a204aa9"]];
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
