/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","e2443d2e8bce24144e3e7f95b42d29db"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","d849da7cd15ca9948b7894f1533196ea"],["/2016/09/02/The-inherit-in-javascript/index.html","0351765e4d8b604721881d0b2b1d8374"],["/2016/09/20/令人伤心的博客碎片/index.html","571b61a224b52304ade5978fab43941c"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","a92d94d97bdc9ab3e3be71e9698b526f"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","47cc54842b8fe784c71c413d6f296c2d"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","e91adb8e6f1ffa9ebb17cef1f0a46e21"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","62ae79dd95611a23d3ad8c4a05b64b68"],["/2016/11/14/爬虫的意义在哪里？/index.html","4be0c11f3bda3bb40bd3278da4205872"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","981457519dee8014f51ab7ca59684232"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","77024a422cd7182054de830adf06c616"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","97fea3d71ad34d99483b2fb7419b3f2e"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","ccb5bd02e8fa1ee0bd6dbae689a22a24"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","7deaf85ca52a2def15598af66371236b"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","eada7a95b313c9af22235cff62532ac2"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","d9f9e590e0f0d54cd5eb93d2ac3e07ab"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","d1c61ffb88e9b40ef7d5a743fb14c232"],["/2016/11/28/SegmentFault开发文档笔记/index.html","539271f8c835f4e67ca3b083c63943e6"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","f8f5fcf9be9eec8278f9d5745f6f1b61"],["/2016/11/29/Twig模板引擎学习笔记/index.html","8ebf95dfdfdf9e19f94f1266365cd367"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","1d4b40dcba887460a125fd782a13284c"],["/2016/11/30/compositionstart事件/index.html","fe5e1f81529cf1f69c2aedf0c73780dc"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","5b1144e53b8c3a4f470f3f18eef99504"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","f0af6ff698e41721904da8509313eefe"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","d235e7195d79fd495a4cc514f812e368"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","a810158eb84029a7cbee6a32aac75ca9"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","2f7266746224a5b4d54665ac2cafc874"],["/2016/12/10/SFDC笔记/index.html","cf1887542fd2ea3e5ec1ce304e22987a"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","057a8f7f43856ad97dd4ac4543154191"],["/2016/12/13/深入浅出node-js-笔记/index.html","cbf6b738cd464d468f76e7d8cffc7445"],["/2016/12/17/LeetCode-274-H-index/index.html","4f9e4cfabdda2bf4616405a50c88e773"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","03984c8bd59cbb15f41258f934553a9e"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","be6b29b567013bc13a0a6cf03fe50817"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","44fa2e4ca78ab89d6215e47b0c7d3b3c"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","78a6b4080f4c3cc9fad14863d05d98fa"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","c6c52e8d163191d418c76d6927e4d88d"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","1c52a1dcc8cdfc06a4f8a5607db70ecd"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","c1f7dd14665b01a5fceb77374ba76a48"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","8af456386bc01355d9eace06ba1274f6"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","ed14493e16e2521c68603deb40b2e277"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","f75c775d90b4fea53a009359b5a1b945"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","2bc360c997025cf8649e5f3c76823e6c"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","f2ffcaf1f1bfdc5c1aa661d2aa3de6fb"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","c87dcb5ad533b51f14c61113c6f5dde4"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","729060132a9be5b04cceda16a95b322c"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","afc23331c0426dfd253421fdb563e262"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","5f348527953b9c07a07538f3ccfcd4cd"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","2519eec15affd71b05e11c4d915e96de"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","8449b55c98d0d2fc841256482c76fad9"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","bf0864f664d5f532329c8bbda91e151a"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","3a7aff64d997a9ae71eb5234ce7d1dae"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","41ab6964b916223d36207f239ec3b63b"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","5bbeb9cb94cf094e3e9373ddda3b5744"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","9e049aef727a6a9c63262e799eaac6e2"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","cd5dec6d970bce1e14477cd0cb4c213d"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","ec1ce6dd55fbdaaff4a0565feb62a57f"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","749ebaf0f63573317282e8447b1c34dd"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","d970cf19986fe925febb01eb7cddb42f"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","6f1d3a18386aee828e82200fecc70b1d"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","648a9aa4743ded0ce07e73230a2aa2e4"],["/2017/03/03/Google-Android-System-learning/index.html","65a803f4e80ee9c7c54f1b2cfe063f4d"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","e3c93893862ae5e594a2b7fe11b5755b"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","5b8b5773fc019072239d0b1f8cdf6e22"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","7b601a2b576d971fc825aa6b1dea1528"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","6bf8c6ee17ec5b3691007fe732fb2935"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","5430105bd439d6fa10f69fa4fe53bb7e"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","1aba64e6c4e772ab9f4f7b3fb60b3d90"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","65e07f6f2f2efdb7b64ac96f8c2d7ad4"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","b1131a8666e17fa461c9efd006dd366e"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","928cb8150dd1101c17ae20930a9b1469"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","06c72f4b00bd08b386aeda0648c0482f"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","03b4b33886a13987e84bc7acceb86a6a"],["/2017/09/08/编写Webpack插件笔记/index.html","5dc5880b9809a5051743d23d17d7b820"],["/2017/11/30/Mobx学习笔记/index.html","9a3cadfdca76850a1094668148c97323"],["/2017/11/30/Test-travis-ci/index.html","086a23e233b41eb3b41ad7cf6040b1fc"],["/2017/12/01/Use-flow-type-in-React-project/index.html","97e490c19ddf4b35f0c6fa71f04cafa3"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","55156dcf32b15b95cb5f12096fcd34f7"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","3bd1a996a3d669a80a3f197788453933"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","291a9f21f0f55070dfd3dd37782cd09d"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","838b2ba3901a4815ae8a993332b7c181"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","05aaf1034cb4787227bfb2c66db4988f"],["/2018/07/31/SDT自我决定理论/index.html","75f3812a023ba1be38027f6bcf748517"],["/2018/08/04/React16源码解析-As-required-order/index.html","281dabc7a763c8d261b8e6bb2f6a6ddc"],["/2018/08/05/React16源码解析（Fiber）/index.html","d902d7bcc65f8534d0852bf82effc91b"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","1b55308b472e57f2855775bfea4a4897"],["/2018/08/27/释放webpack的真正潜力/index.html","5e119d9305bae83703c8bf042812bf3c"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","20bd488512e0f92950edfbf5167a74cd"],["/2018/09/17/升级到Babel-7的经验/index.html","0d06b70e28533a12c2ac68326c0ae378"],["/2018/10/16/React-tip组件的设计/index.html","fd9ba19211b57b5c58a8aaa2aea04e44"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","37d43a51d556d2f28b88b5bd482397bd"],["/2018/12/08/jenkins问题定位/index.html","28a4790e962867cfee1115fd1cdb1cfd"],["/2018/12/21/React-SSR实践-压测/index.html","3a40db7122af81ed1606e956219cb133"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","821d0f78f6e7fa1d7a09a4ed54f052dc"],["/2019/01/21/item2-profile-config/index.html","14cd383dc431de523bf3452ffa388357"],["/2019/01/22/i18n-about-Access-Language/index.html","1b645d55d5c4423bb0565cabc1495b8c"],["/2019/02/27/Node-C-addon-学习笔记/index.html","5419df25a5b7c92cf701ad4356ff59b1"],["/2019/05/16/Modern-Crusaders/index.html","911c5fca7a1167503396cf8d769edd1e"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","ca0f30e7eb782f749178170a89b53764"],["/2019/08/28/关于docker使用的一些记录/index.html","50a1180e95e8ca9100121cad33d5c9ad"],["/2019/08/30/全干工程师的基本素养/index.html","51d87d15034eb8fc5213c45fc146a8ea"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","57a346e6bece74250707398f8510356e"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","2ba29e5d71536568b01feb8dc72e2abf"],["/2019/12/02/One-example-of-Typescript-generics/index.html","a8f1f3f7e2f84bf0f2032d792ba6380a"],["/2019/12/04/有趣的上网冲浪之旅/index.html","795a5677038b67ca6c3f3add0b237197"],["/2020/04/17/企业微信国际化方案总结/index.html","7fd4267646e208f3168147e5e8866e7a"],["/2020/04/27/come-on-sweet-death/index.html","042e959b340c5d44a486a7e0333adc3d"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","5f83fe52a7cf068e2eab0e6f5f8c87ca"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","624ed3a59fcaa0774399a2639295d91d"],["/2020/05/28/525-Contiguous-Array/index.html","0db15c70c12301a8884276241b8c0cb1"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","2e694d48db19f62f44f7e0ba12207cfd"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","a81d4623a025b48bbe3fcb2b14e87f84"],["/2020/07/21/Node-js-与-epoll/index.html","f05f19e1d824837f24b81129760a23cb"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","fb69372dd0c2bac6d786dd867c77ab7e"],["/2021/03/02/总结一些测试vue组件的经验/index.html","727d603fa07c4d71e990f08f331e511e"],["/2021/03/15/Purpose/index.html","4bd11a0ae33b4dd4bec84c3c9c744209"],["/2021/03/16/和安全团队的斗智斗勇/index.html","997ed36b5cde0213e35af118700ad606"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","30789631fa234a19b609772182926c81"],["/2022/08/10/关于图片处理的一些事情/index.html","89598e767f8a97572668404bebae7e67"],["/404.html","3a01778ae401dcb29ad2d4771148e65a"],["/about/index.html","3ec89e3a7fe9422340ba7a9cb72bcc62"],["/alice/img/01-ee2afe4f.jpg","39e62f8071c9bdf639f9186586bac0d2"],["/alice/img/02-96824f07.jpg","64645e2c85a214b332a34ebe606e9594"],["/alice/img/03-23094728.jpg","63f66b53e5b6e683558e3f70322432d1"],["/alice/img/04-375511e8.jpg","96b4091365279ae4e8ae51178a1074a6"],["/alice/img/05-2c5411f3.jpg","762f319cf2c7c388422be056041c56d0"],["/alice/img/06-decdf5e5.jpg","c60bbd607622944fb62a9256b7271075"],["/alice/img/07-9961af6e.jpg","d56676e6cc1b0f04c47853c7b0e95210"],["/alice/img/08-1e8905b7.jpg","5b3d0a1a57c2c0a63a013468e1f5884d"],["/alice/img/09-539af5f7.jpg","43402b92a8631f8d20bef368cef62b18"],["/alice/img/10-6091866b.jpg","0ccaac8de2718f13fb14c7afbbed1148"],["/alice/img/11-3e7516be.jpg","1fe9a3e30382089df89fcfe8aeb08f79"],["/alice/img/12-44268290.jpg","77fdc8e64a1ca98b2a18b99da9080c7f"],["/alice/img/13-9709db5b.jpg","f3eb6bd562d4262be3d9c7b897e2fc01"],["/alice/img/14-8bc800ac.jpg","a82a48d79aee1576b8226886fbb1e0db"],["/alice/img/15-a4047faa.jpg","b5b18c458786814f17c82b9bf391d75c"],["/alice/img/16-90e2ffc1.jpg","e18cd3b54a177d07b7d18ff992c1fbfb"],["/alice/img/17-4368884f.jpg","7fd2ab2e166fff8492af153f18571f74"],["/alice/img/18-f5e3f4c2.jpg","ba37b92e8f7fd41aa6023cf543e2f439"],["/alice/img/19-f4abf441.jpg","b4f6d55cc6d899580f8512727b77da82"],["/alice/img/20-b507f3f1.jpg","49815bc5b293f2c529816f6d73957140"],["/alice/img/21-4443a8ca.jpg","45a1f9bee04a883bc38521f116906f7a"],["/alice/img/22-56791f9a.jpg","9081d516adf4ddc86a5815df6a84fd3b"],["/alice/img/23-4ed30ac3.jpg","f1fbcd83ee3324368ba221558161ffce"],["/alice/img/24-575b30a3.jpg","55222c430fe7e5ed765b07071e6e2a33"],["/alice/img/25-ba06fa1c.jpg","f48b11b2740c2394f290d3a79e64c7ed"],["/alice/img/26-19025568.jpg","e5f69935d8d8b58076328f7d3e84bdff"],["/alice/img/27-a4199bd1.jpg","353d507bda21f194a587fdc73866e948"],["/alice/img/28-f006b3bc.jpg","b8ed99d902f6a016c0166d1ebc746806"],["/alice/img/29-fdd6489b.jpg","8ac441b95700656fee98af35641c5ef9"],["/alice/img/30-6065962a.jpg","b5b1abbe5e92d87a8c200c850d840aed"],["/alice/img/31-3a7202d4.jpg","d25d4efee045e5a1fc4e40b67e8e8897"],["/alice/img/32-2ce354bd.jpg","4b72b9063aec44f022251b3d6fb5f2f4"],["/alice/img/33-3a4da03e.jpg","f7bafaf4d11aa6f484e7527ada4992c5"],["/alice/img/34-69bdf272.jpg","d38bebb6a697aa09cd13d66d46e001d3"],["/alice/img/35-f1c7565b.jpg","c1ac592eedeb8de92f221f9ad79c28d4"],["/alice/img/36-622e264d.jpg","21cb2723dc95eaa7fa018b49d8009746"],["/alice/img/37-baf33a74.jpg","fe03020abefec246fc5591a04326fcc8"],["/alice/index.html","43ea91ed2a6ff4a3ff369e87e1dbaf61"],["/archive/index.html","26aa0419dab62d632b9321d068bfbea9"],["/archives/2016/07/index.html","1c7ebcc47941fa6f040600d77ed5eb45"],["/archives/2016/08/index.html","e311ade978ca310ed4bb9d79d02774c9"],["/archives/2016/09/index.html","e4dbcbcd8023afcbd48e7a7616973872"],["/archives/2016/11/index.html","2582796b60f22c8afc05f6160aac23ac"],["/archives/2016/11/page/2/index.html","a8db49153f8d594b575236b9df5a2772"],["/archives/2016/12/index.html","292669195fb3f62a7a6ab436a0637524"],["/archives/2016/12/page/2/index.html","166cb933afa1593a004e6df97eb1427e"],["/archives/2016/index.html","e10a7bd05966625849b7754992db82c9"],["/archives/2016/page/2/index.html","22824d03e3fed972de01108b1f097b0b"],["/archives/2016/page/3/index.html","ddc098974bbfe52dd0d4a5f4ee5ed197"],["/archives/2016/page/4/index.html","7f665505bda4d7a45cab9f399976aecf"],["/archives/2017/01/index.html","70ebc0d184e48c807a7ed7d0e7940e5c"],["/archives/2017/01/page/2/index.html","07f17acb001b900a0722c28318554c53"],["/archives/2017/02/index.html","1c6cf22dff1a99f806fa851986d22d5b"],["/archives/2017/03/index.html","6518a007732e375b438a79459cf42b3b"],["/archives/2017/04/index.html","a19275c28022b8069b74785fa5aa9843"],["/archives/2017/06/index.html","85b00e30d7abc6961fdedf2d0fe0b5d6"],["/archives/2017/09/index.html","e87429ac9bd6d4f693bc47d90cde5ac2"],["/archives/2017/11/index.html","f58be54daec83babe264eabf40020156"],["/archives/2017/12/index.html","9e21a071f433c7e6ac824f96cbaef7b6"],["/archives/2017/index.html","423fdef8c0bbd8bce4c7b3eb3b73341c"],["/archives/2017/page/2/index.html","59f46c26291b73e07f24262fdc465390"],["/archives/2017/page/3/index.html","fe7e3b79efe694539ed8c235d43aed10"],["/archives/2017/page/4/index.html","19413fb2fee926cff430ba9511c15e82"],["/archives/2018/06/index.html","9f215c8fcfe8de1efdfc9b2f03a19c1a"],["/archives/2018/07/index.html","0b3120bbdd3ddae5dc5a2bce76e49271"],["/archives/2018/08/index.html","01a5c5bfff726c697ba8747d188d0501"],["/archives/2018/09/index.html","164271850034d46a13e56de053788367"],["/archives/2018/10/index.html","a5a2818ae9728033b19493a8db9bf6a2"],["/archives/2018/11/index.html","4c9d49dda1643d63712e1044705e3858"],["/archives/2018/12/index.html","56f0b7d54f28a45c3afe42ef737ba3c3"],["/archives/2018/index.html","077376889d27d226c310e03334a03d20"],["/archives/2018/page/2/index.html","3e7ec5eadd1fcefaa4ea5e93772a0ec3"],["/archives/2019/01/index.html","e5c29265ae0a798c402056110b4e1767"],["/archives/2019/02/index.html","cdea21417d855c693a59fdc880e6aea6"],["/archives/2019/05/index.html","f371dbab5eb4b8b664ea3f3ec363054d"],["/archives/2019/08/index.html","541f3cbab6c9548d6d7f4ee50d2b11d1"],["/archives/2019/10/index.html","fe1ee6e23fcd5da4a24eeed7d8e7a5b5"],["/archives/2019/11/index.html","509969e2bc62a1998b7ff30ab21fac80"],["/archives/2019/12/index.html","54d05d367220db05655c72fb6d3dfa7f"],["/archives/2019/index.html","512c758a3e3c6a2c9e1b2345362a70eb"],["/archives/2019/page/2/index.html","6f056d2d44417a4a8ca5f645ab258d78"],["/archives/2020/04/index.html","9ae107077c72741b88fae11e62fbbba6"],["/archives/2020/05/index.html","b9f22cf53d6a3da8aaaf1e3e1ddcbf4d"],["/archives/2020/06/index.html","bc118855245283f1ecfa254a7ba86be1"],["/archives/2020/07/index.html","6f93544a19e35de24f735d14d3ccdb80"],["/archives/2020/index.html","30d78844018c614cb381a254faacc17b"],["/archives/2021/01/index.html","1823b51db03503eacdbad985659c357b"],["/archives/2021/03/index.html","b6e3437e8fd2e9fd37d46ac92ebd8682"],["/archives/2021/10/index.html","0e6cbc6f06bc573f635f55884ded8a00"],["/archives/2021/index.html","9fda2c8cdbc046e0353c9838d34ab304"],["/archives/2022/08/index.html","4d965022a0748d637e1c34b79594abbb"],["/archives/2022/index.html","3bda02c2fe213fa228716b21224cabe9"],["/archives/index.html","371ebe3a30a09b36d92e9f70edd99467"],["/archives/page/10/index.html","10a4d23fb4c02100df77db6852a242d7"],["/archives/page/11/index.html","a0e5c16831a71461399a8d1b26002d7e"],["/archives/page/12/index.html","de994da6908c03fea5a668358bece0e7"],["/archives/page/2/index.html","d38f4cdf6879d211f73238d1715d2f8e"],["/archives/page/3/index.html","888f5837ec453653dbf6283e7ece74ca"],["/archives/page/4/index.html","1f090f09704bd168e30a822f34dad2a8"],["/archives/page/5/index.html","4881f48a803c137bed90262116fbc3ec"],["/archives/page/6/index.html","bb29bbf5449e6e63c6cb695baaca7cc9"],["/archives/page/7/index.html","a40801a43da68bbc1a77f4a40dd7cbc1"],["/archives/page/8/index.html","75cd3b6ba1bd6d0dc5d3702ce710d591"],["/archives/page/9/index.html","6b891da2cbf0953db5fc6cca254581cb"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","4e33302321b0c2dc0ca48ffe2a9d8ca7"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","60081dbd2f9d295d8f7766d8f0456d11"],["/page/10/index.html","ca873aa5b2b157840c68eeea52581576"],["/page/11/index.html","60d99ee4cd8ff453178ead72c3340dd0"],["/page/12/index.html","bc4118e48d9cee5af62f1ab8dc1118d4"],["/page/2/index.html","aa706273668883a4305c57bfdea2a416"],["/page/3/index.html","5beee4fe6bb01fcdb7b9549fce6c7b74"],["/page/4/index.html","bcda2b337e4b0d22ca51ec8d9ad2b203"],["/page/5/index.html","2c86a3fa8b23b117817bb0a3d85eae1e"],["/page/6/index.html","ffaace67643cd0f9989219fe3c3054fb"],["/page/7/index.html","7eabc32ee8f0437bd11e81d95f856e78"],["/page/8/index.html","9f8acdd63d4a96ed9846b77f0fe3b37c"],["/page/9/index.html","7c4921f1b4f23df3dc2130e84c0ee7f4"],["/sw-register.js","adb5231eaad87fdb0623885a949422b0"],["/tags/Android/index.html","181d25b4d45f73f6624bb417f92d4866"],["/tags/Angular2/index.html","8897d208f3fcacd529d1fc6e889f4f8f"],["/tags/Babel/index.html","7c4f33864ee28edb5e4debe96476f7fe"],["/tags/C/index.html","177a0c542c10e1663c8a7d68a454998c"],["/tags/CSS/index.html","cbdcd12236c766e33aa8022f74c5dbb4"],["/tags/Coffeescript/index.html","f1ac570009dab8d5724fea199ec3b284"],["/tags/Compiler/index.html","0832993bc63b2884367ba724d5322dcf"],["/tags/Component/index.html","09803e81824241678f7d7bcf19e9a1d5"],["/tags/Design-Pattern/index.html","c6b830cd9347a2789e412f9abbabdd55"],["/tags/Docker/index.html","1ea421aeee9918ea76c7b899bd6780bd"],["/tags/ES6/index.html","eb338e55d10e3f02906bce7967ee04d0"],["/tags/Game/index.html","d2fbffdd9fc9300014c657cb39e23edc"],["/tags/Gulp/index.html","b0b6bc18e7e51f4e6f9020fe233a4c52"],["/tags/Hybird/index.html","6b58f25a003dff59921e42bcf3c94f7e"],["/tags/JIT/index.html","b8af72c39b3d909c1b265ce9229583ae"],["/tags/Javascirpt/index.html","d04d15d9d24e90d5a5dccd2055c5706e"],["/tags/Javascript/index.html","1630b1eea32e5482c86caabfe92b6240"],["/tags/Jest/index.html","e791c993fbf4724de385f66ef80a85ed"],["/tags/LeetCode/index.html","08726e9f8f972ef4f19b7f3cc80f4249"],["/tags/LeetCode/page/2/index.html","652ce618b30fa032091fd9d0b3923858"],["/tags/LeetCode/page/3/index.html","dec02d05b658f264223d60401860d270"],["/tags/Leetcode/index.html","7e6a3322186a62b2f977e47ef78412f8"],["/tags/Linux/index.html","3f3df1029318ab31dfb257e686db86d8"],["/tags/Lyrics/index.html","1e5dcd5638f10476ae598191980e3a02"],["/tags/Mobx/index.html","db45f968e483e75694f3bbc9d8e1d8e2"],["/tags/Mocha/index.html","7395bd7afe3ba086d7a66a1e21769bda"],["/tags/Module/index.html","db118730c1521ae606c2cc2dd687fc17"],["/tags/Node-js/index.html","0953c4d4501498b8ca01a59d2245a692"],["/tags/Node/index.html","e67edcb8730f54e22e2872bc43548d04"],["/tags/Note/index.html","1fc6b6066c411258f80ddf6118ed71da"],["/tags/Object-C/index.html","a18b72ca18dbe4ee4e622156733f4274"],["/tags/Objective-C/index.html","449a174517403f42ec9a4db321ced036"],["/tags/PHP/index.html","d4e3daf3a2c947018b7a156fc39a66ec"],["/tags/Python/index.html","5cfbca9cee7cd5b4e938f72ff920d1e9"],["/tags/Python/page/2/index.html","31923a1a982b808ae04b95ff20c6b0e6"],["/tags/Python/page/3/index.html","1600503f93252a0c7cea8ff47aebbc16"],["/tags/React-js/index.html","74243a05ccdfe7a6769d0b65e3d581f6"],["/tags/React/index.html","fd7e4d947247036dd5f18a9f8481de9c"],["/tags/Redux/index.html","ed43ae6a84286f7e2b8d1b1b3cfa76a3"],["/tags/Require-js/index.html","d19815c4498c936c126994be3804a872"],["/tags/SSR/index.html","18b2ead524ab67d42b3ac985882dd3e0"],["/tags/SegmentFault/index.html","6c43314571501111db179f43a228a459"],["/tags/Swift/index.html","8c800aad22f4f9e8306b610ab6814c4a"],["/tags/Template-Engine/index.html","c21398766870e81ad8705fdd11e9d9e8"],["/tags/Test/index.html","3d6451d63d809d6b55ca887acda95d72"],["/tags/Twig/index.html","d5d4416bd85013a2c447800fd8848fe4"],["/tags/Typescript/index.html","55f22b34f85155f1d9a2523480acab60"],["/tags/V8/index.html","ac5ba74c6f704168eeb02a7ba52b0a5a"],["/tags/WebAPI/index.html","e0965da113147b05c7ea6025cd35c4d0"],["/tags/Webpack/index.html","aee2edc0be2a548f4c94b1e4f6ac3906"],["/tags/Webview/index.html","669f1147ffef675ecb1c95e4e88d6d6a"],["/tags/Windows/index.html","74e51a9befa8beb8e413c0bb8df66dc5"],["/tags/babel/index.html","89dd2cd16c4fccfd749642f9270b3682"],["/tags/base64/index.html","d68e6dbc685d857f047dc9f2e0e6d8d2"],["/tags/bootstrap/index.html","2f989d9d0f0ba44671366e764bdd4c0d"],["/tags/ci/index.html","fd243e17244e3dae4ce307197afe18e8"],["/tags/codepen/index.html","e53a68bdd0f0e2ea829a2dd6748b6efb"],["/tags/compact/index.html","a24746c0cbee906dabf5d39191fd32c3"],["/tags/css/index.html","4f685e95945deedce2cf367275d43a9f"],["/tags/database/index.html","edb33a5ffc675d48e065b805265a8796"],["/tags/docker/index.html","fb263b0e3d5c9a7fbe0c5b6d79375075"],["/tags/event/index.html","d65ac29c845949b008c39c580247c233"],["/tags/facebook/index.html","79f943c1ede8fda1711926ae16ea6773"],["/tags/flask/index.html","44ef69b0ff3320dda60143b743a54ac9"],["/tags/flow/index.html","eda4774924a9a9649d025fb26b2d4f4e"],["/tags/i18n/index.html","94c3cb5f808b4f9c41740c77258935dc"],["/tags/iOS/index.html","587e2edffeb544beadf935987077bc4d"],["/tags/iOS/page/2/index.html","ae3a96102abc52d850d0df47e247d4f4"],["/tags/index.html","531ba94feb582808274c2b38afa7764f"],["/tags/javascirpt/index.html","d7770ab47a45267de6ffe38f6ae427bb"],["/tags/jest/index.html","9f141a5b34e06e0e7deba0829a43a76f"],["/tags/jquery/index.html","5288837466d6dd2cb69b0edbdfdab338"],["/tags/life/index.html","639da3a550b7383912fd5a775e2d3383"],["/tags/lyrics/index.html","91a99cb998526c56192d5dedd1e15e77"],["/tags/node/index.html","add77987a0b8cd66076fc7c8921d9749"],["/tags/npm/index.html","e4f810a768f7262ecca7f2966d5866b1"],["/tags/pwn/index.html","fac516159fcb1bfc57ae7ae8fe3a187b"],["/tags/python/index.html","f048676cf838120fefa43d4c5614a9df"],["/tags/reactive/index.html","b7cf3e463b19bc1ee84eaddc1fec794b"],["/tags/shell/index.html","e0e5b8814ba1166d51b90fa89ab1f616"],["/tags/ssh/index.html","f34d9b612f2739e0353e812741773f6c"],["/tags/svg/index.html","e76d5f8b916e58455f1f0971a73f833d"],["/tags/translate/index.html","0bab6d51c3fb349fa834a6f75d6ae92c"],["/tags/translation/index.html","2d5d33f0e696cf1a055ab5d934354571"],["/tags/typescript/index.html","07d4bb6b82b0bf3776841b781a2ee7a1"],["/tags/underscore/index.html","0939ba94abc9a0afa5cd6600d6670a13"],["/tags/video-js/index.html","31f47534b78a1a7183e4567d12b88e49"],["/tags/webpack/index.html","b523af2cec46d1daa3ec0e97aef47d7a"],["/tags/web安全/index.html","a2427aa254896a31541968f8f6f48a88"],["/tags/函数式编程/index.html","6211b3afdea0ad427cce3836d7b9e2e5"],["/tags/各种开发者大会/index.html","fe5ee4d1c0c9e04da11977904770b319"],["/tags/文档/index.html","5ecba3b244f0db2a3bf9f37576cdbf29"],["/tags/构建工具/index.html","2132bc352acab5167fd932db1a4d4efa"],["/tags/测试/index.html","91e6550913aff1c2bbfe5f92ac004616"],["/tags/生活/index.html","590adfeb4e20ebd304eb2339a34712ef"],["/tags/笔记/index.html","d4b61d7f1defdb2e97e61d8f62bd1936"],["/tags/读书笔记/index.html","fe7e89557bbaf766c28f0daa78cd929b"],["/tags/逆向/index.html","30abe3586b68bccf0e3bdfe374e05fdc"],["/tags/随笔/index.html","dc8bc4026522c165c26eadb5bbc2751d"],["/tags/－-Test-Karma/index.html","3f20ef9f7bf1eb91e12fc67422e31fe9"],["/tags/－-杂谈/index.html","2d5cb652f64f110f73f4498c3ed13658"],["/tags/－生活/index.html","c45ace0198c21e6b289953c1d9191f02"]];
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
