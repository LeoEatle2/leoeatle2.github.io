/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","1ab57fc1f33dd87db9b22124bbcb1f96"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","e3bc7f2194f024aac339864876b2cf38"],["/2016/09/02/The-inherit-in-javascript/index.html","8507a5789edd634408f8a939bdbadc34"],["/2016/09/20/令人伤心的博客碎片/index.html","13e01248d105b2ed96131ff03ffe8b57"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","7fbf26a666136277d23cbdd16c6c172b"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","2a9f6f477be2a957aff0c4c65eff7dd0"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","248933940104c9f63a14b000d3ec5a7b"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","57146578a3e6733f79c84a627d456f41"],["/2016/11/14/爬虫的意义在哪里？/index.html","f934f4e0a59afb9c3487f85213d4d682"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","95073ea84b7f680ab84cce9ef4583e26"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","f6049e11083f32e1bf9eeb0be726bed8"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","3dc16b5200f94029db9e00a5b1c7ac97"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","38e72c4025fb211885b8e9405f76aead"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","0c81f52e7c69aedff8565c767aa80dae"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","40af9c4092de37d97d9980e6c4776f14"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","ec946ed13d0a37a8f3ee8ada8462ffa2"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","386b23d06b8426fc4b49daf5dcf91179"],["/2016/11/28/SegmentFault开发文档笔记/index.html","10a2cc1d3705fa4e12d9837afe6b5daa"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","334219e6c194334b847ddec45b2ebc61"],["/2016/11/29/Twig模板引擎学习笔记/index.html","52e2770e3be8e0b0fdbdca1e997d447d"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","2ef6e6a7cc87a23bb9931eb229545029"],["/2016/11/30/compositionstart事件/index.html","9bc8be52d549cc7e475c90106fa45379"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","67f1b729d5c51542e5263d28669fcad5"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","cc480a6b460eabde4382109897891059"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","b43b7e0b9c836738f79838e890d62c2d"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","df5a16c5aba883e337c286c57bfabb59"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","cfaafccd4b4cc8e0e746c90d3fdecbd2"],["/2016/12/10/SFDC笔记/index.html","0371260fc5703084ec43f1da0c260ea8"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","a885590ed06cf5c886c08eaa595b6c34"],["/2016/12/13/深入浅出node-js-笔记/index.html","df7dacaad158d855c77792935bf78cbc"],["/2016/12/17/LeetCode-274-H-index/index.html","106983296ab52de196953710a829475f"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","fa79a109ba5b49c64b32e740bc892837"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","3f6f77b4e6434c6f7a88017a08f09843"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","1a47a1952929c791ad3618597104a05a"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","34a4667ad8be3fdb2b0826ffae7e45df"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","cb375477f6e8d23eac4d4028dae9e2e1"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","00b9c863e07accceb6be5f84b71d22c2"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","479c63d0284b9789631583aa2dd310a7"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","3e3db3f7d4f0e0ef26b2b357bac7f039"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","0a220ec640f9974d931d874160901034"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","6afb98f5b993473b20bc326675bb692e"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","f5ea32ecf9adc7f27cd4ca51fd19e15b"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","e75fc105ea03a3ff8a0d88deeaeaf7fc"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","350339cdb1a3515c2551b9da35d34661"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","e893f32a086e43ceb4e56e134baba931"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","99c8aad7315b9537df076617daabb8b3"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","ded4114c4d5b8304f8f2a2737bad975e"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","56fd8ce4252da3dc60b4f5531998b9cd"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","1046f64c1078bcb275e0db6097d009f0"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","ee9615f2c7f30e8b9d44fbe3c15c0e73"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","c923d8a6c3bd6018c251408ea256123c"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","50433189b1aaa706db8c8ab4fbc7e502"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","31b24ff234715a46d10fcd72eb588654"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","65d05e6fd6951db965bf0566f9a80665"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","71442033e016d7a81dd9494a04ef2c2a"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","d8e1fa540b6410499779d7fde67f5ef6"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","9041f67cfdd9d4f873535df55223a07f"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","57904698a2f86e79048dcfa6c7b48b82"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","e20d68642626f80ef2e9e20c432e0280"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","82d066b3441563f57b51648820207ad8"],["/2017/03/03/Google-Android-System-learning/index.html","52e0a0a4409a8cbd905c96302e43dd4b"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","7492e8a3b13efe010bf8c8ca05677b57"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","6c77d558509ed26e96d4553aef295f05"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","24495df90435e6095b092e594e913ac1"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","5929373421cd8e88a3aa4e4cf8833fe0"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","f58c9d0d37cf25ce8b3b4d35d0ae3904"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","73ef4fabbef86728ca3c1f3435eb144a"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","d3d417da4098a83c2d954b9f2ba47df1"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","7176f885d6058d8cc6631b7dee511738"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","a84163414a26068f740563420bc57a9f"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","68f8b64489154fb52578d0dcfc5dd650"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","bee7ec96ff2037e2a556ba37e749a39a"],["/2017/09/08/编写Webpack插件笔记/index.html","cd348b12c90547fcc7dece09d905284d"],["/2017/11/30/Mobx学习笔记/index.html","bf600247df5d2f1a473983e0e38f2018"],["/2017/11/30/Test-travis-ci/index.html","e6684a8f590009b0005593d4330b6e9c"],["/2017/12/01/Use-flow-type-in-React-project/index.html","d1c8a3eecb8e0fae8eddcbcc970ee958"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","ca8649e704f1bf50aa9e3520fd1f6ebc"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","4faeea2168dd1d60d9ef51d0169956b9"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","b62556d5ed3860a04b1c574166b46a95"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","6a625b0d277172fe47ca182fe00b7381"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","73510a6ca039c3a1beddc2861e704a03"],["/2018/07/31/SDT自我决定理论/index.html","5f3c742d1add388002c4cc6445b2b834"],["/2018/08/04/React16源码解析-As-required-order/index.html","9d8ef06eb1cba8f2d8fa8b454eb95927"],["/2018/08/05/React16源码解析（Fiber）/index.html","002415832651cf9d8e5126b74165f84b"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","eb91e5e1809f6b21a0401c1345508d6a"],["/2018/08/27/释放webpack的真正潜力/index.html","a8068e4f9ece9995e996c5051e00a706"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","234ba75c68a822b9e418c5c6194471f3"],["/2018/09/17/升级到Babel-7的经验/index.html","9e17e044014bd587c86dd75c4913b4f1"],["/2018/10/16/React-tip组件的设计/index.html","cebbc266f6f97e278801503e3a0af5b1"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","914c6c2a7562afb6416978cd26306f06"],["/2018/12/08/jenkins问题定位/index.html","6e6cafcc8e9287e669c629da717cce4e"],["/2018/12/21/React-SSR实践-压测/index.html","fe4b10378432aab85cc27aec726d05b0"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","09df1c35936ccd437c2e950e04d9806f"],["/2019/01/21/item2-profile-config/index.html","9784293ead4597985d573f7a1062e868"],["/2019/01/22/i18n-about-Access-Language/index.html","2c5833ddd69878459163b916780eedd1"],["/2019/02/27/Node-C-addon-学习笔记/index.html","48f730b060fcad80d2498fd74fe32170"],["/2019/05/16/Modern-Crusaders/index.html","a32b6ba24ef7f1086c414eb10caf35fc"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","b8ef3bc69b0b5e35e5f4ba5e7cf1e23f"],["/2019/08/28/关于docker使用的一些记录/index.html","74a3778c3325df5c5e44dd10ffa0daec"],["/2019/08/30/全干工程师的基本素养/index.html","dc3c1f9d59a0c7aa0cedf42d5856c4bb"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","7c8f59d6c9cbd7d6c311f4097f1e2884"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","2469c68e0db42d34968d1602cc07e7e7"],["/2019/12/02/One-example-of-Typescript-generics/index.html","1d2a8054ec5bbcc37f9585b16ef9560c"],["/2019/12/04/有趣的上网冲浪之旅/index.html","3691514aa0e1bd4a7d32980da5d13fe0"],["/2020/04/17/企业微信国际化方案总结/index.html","c5b803e2ede302f5d0728e5b878f6367"],["/2020/04/27/come-on-sweet-death/index.html","0028757f217a9a2a712829d3bc5451b7"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","0827b7beb9288ceae55c39371a2bbb93"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","1943c92942c02acd95e14e7ba2c4ad26"],["/2020/05/28/525-Contiguous-Array/index.html","262cbd233b98e0b17dbd08c725900398"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","b8cd3ac8b80115f2e2385900f0f41dc2"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","369cf4ec1def14c64cf158615392e8e0"],["/2020/07/21/Node-js-与-epoll/index.html","1caa5d31e432389df3e7828baf665d2e"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","6a910ecbc21c8d2ba01ab79192cff088"],["/2021/03/02/总结一些测试vue组件的经验/index.html","0813f6cf52ef4abe0161ba929e0d6a71"],["/2021/03/15/Purpose/index.html","aa89afe58821364f00db26c79e11a5d4"],["/2021/03/16/和安全团队的斗智斗勇/index.html","1eda3b2ae4bb52bd9bd638ce1e93732e"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","0c43db42c3190c56a3d82ec68a41f641"],["/2022/08/10/关于图片处理的一些事情/index.html","c70ac6573f38da812b716a31a2938466"],["/404.html","7ae509d6659131b83267e042593bb53a"],["/about/index.html","68d007576a2cb8d21e43094ec58b0c11"],["/alice/img/01-ee2afe4f.jpg","39e62f8071c9bdf639f9186586bac0d2"],["/alice/img/02-96824f07.jpg","64645e2c85a214b332a34ebe606e9594"],["/alice/img/03-23094728.jpg","63f66b53e5b6e683558e3f70322432d1"],["/alice/img/04-375511e8.jpg","96b4091365279ae4e8ae51178a1074a6"],["/alice/img/05-2c5411f3.jpg","762f319cf2c7c388422be056041c56d0"],["/alice/img/06-decdf5e5.jpg","c60bbd607622944fb62a9256b7271075"],["/alice/img/07-9961af6e.jpg","d56676e6cc1b0f04c47853c7b0e95210"],["/alice/img/08-1e8905b7.jpg","5b3d0a1a57c2c0a63a013468e1f5884d"],["/alice/img/09-539af5f7.jpg","43402b92a8631f8d20bef368cef62b18"],["/alice/img/10-6091866b.jpg","0ccaac8de2718f13fb14c7afbbed1148"],["/alice/img/11-3e7516be.jpg","1fe9a3e30382089df89fcfe8aeb08f79"],["/alice/img/12-44268290.jpg","77fdc8e64a1ca98b2a18b99da9080c7f"],["/alice/img/13-9709db5b.jpg","f3eb6bd562d4262be3d9c7b897e2fc01"],["/alice/img/14-8bc800ac.jpg","a82a48d79aee1576b8226886fbb1e0db"],["/alice/img/15-a4047faa.jpg","b5b18c458786814f17c82b9bf391d75c"],["/alice/img/16-90e2ffc1.jpg","e18cd3b54a177d07b7d18ff992c1fbfb"],["/alice/img/17-4368884f.jpg","7fd2ab2e166fff8492af153f18571f74"],["/alice/img/18-f5e3f4c2.jpg","ba37b92e8f7fd41aa6023cf543e2f439"],["/alice/img/19-f4abf441.jpg","b4f6d55cc6d899580f8512727b77da82"],["/alice/img/20-b507f3f1.jpg","49815bc5b293f2c529816f6d73957140"],["/alice/img/21-4443a8ca.jpg","45a1f9bee04a883bc38521f116906f7a"],["/alice/img/22-56791f9a.jpg","9081d516adf4ddc86a5815df6a84fd3b"],["/alice/img/23-4ed30ac3.jpg","f1fbcd83ee3324368ba221558161ffce"],["/alice/img/24-575b30a3.jpg","55222c430fe7e5ed765b07071e6e2a33"],["/alice/img/25-ba06fa1c.jpg","f48b11b2740c2394f290d3a79e64c7ed"],["/alice/img/26-19025568.jpg","e5f69935d8d8b58076328f7d3e84bdff"],["/alice/img/27-a4199bd1.jpg","353d507bda21f194a587fdc73866e948"],["/alice/img/28-f006b3bc.jpg","b8ed99d902f6a016c0166d1ebc746806"],["/alice/img/29-fdd6489b.jpg","8ac441b95700656fee98af35641c5ef9"],["/alice/img/30-6065962a.jpg","b5b1abbe5e92d87a8c200c850d840aed"],["/alice/img/31-3a7202d4.jpg","d25d4efee045e5a1fc4e40b67e8e8897"],["/alice/img/32-2ce354bd.jpg","4b72b9063aec44f022251b3d6fb5f2f4"],["/alice/img/33-3a4da03e.jpg","f7bafaf4d11aa6f484e7527ada4992c5"],["/alice/img/34-69bdf272.jpg","d38bebb6a697aa09cd13d66d46e001d3"],["/alice/img/35-f1c7565b.jpg","c1ac592eedeb8de92f221f9ad79c28d4"],["/alice/img/36-622e264d.jpg","21cb2723dc95eaa7fa018b49d8009746"],["/alice/img/37-baf33a74.jpg","fe03020abefec246fc5591a04326fcc8"],["/alice/index.html","43ea91ed2a6ff4a3ff369e87e1dbaf61"],["/archive/index.html","37d6c11e23cfdebd0ec8e10008a20365"],["/archives/2016/07/index.html","28cbe9dea7e4d9e7ccb25ffc07df1206"],["/archives/2016/08/index.html","a39bb8c0c86b17090806678340ec4375"],["/archives/2016/09/index.html","b1bbe47aa0c62661664e82b5f50e7c28"],["/archives/2016/11/index.html","f038e3e9a5e62ff7af03283de8b41390"],["/archives/2016/11/page/2/index.html","b4b8bd32b0d6f0b4b90be3e06a76a780"],["/archives/2016/12/index.html","119ce20bd00eecaf364cff35219e45d3"],["/archives/2016/12/page/2/index.html","bce196ecf9e8df06e79dec9b6400d3b3"],["/archives/2016/index.html","6684e0df081edf3993cb0fe7b6513dc4"],["/archives/2016/page/2/index.html","962f514dcff77774743cc56fff207ebd"],["/archives/2016/page/3/index.html","ce095eb3d73e6e8b7a69b60232feb92d"],["/archives/2016/page/4/index.html","05ac60ed87cc80bbedb9016e8c75469d"],["/archives/2017/01/index.html","8b2a7ded4271c26e20af8cba9108bc6b"],["/archives/2017/01/page/2/index.html","d8542faad40ff477b96d1c078fe53e7d"],["/archives/2017/02/index.html","7c30ac197c2e513b91a30be830eaaea3"],["/archives/2017/03/index.html","1fcd32edc56ce490951c63dce5f0677f"],["/archives/2017/04/index.html","d1a8cc2f90dafaf77a79bdb7e7c3a8ad"],["/archives/2017/06/index.html","562985f182c616d164e8bcde74f53831"],["/archives/2017/09/index.html","6d399db92bfd7519e2bc583902daa36e"],["/archives/2017/11/index.html","636a100758bac7dca985042532c5ffe8"],["/archives/2017/12/index.html","999151d4288bc5ff0534945c08f114ac"],["/archives/2017/index.html","0c896a785ef9bc60e0e4f0b75221fc0f"],["/archives/2017/page/2/index.html","c5d2453c6f0d275be9cce953c0c043b5"],["/archives/2017/page/3/index.html","5735620c1c9011b3e1e85b13c31a2bcc"],["/archives/2017/page/4/index.html","9a4f3e716963143ac4191db7c2d5a201"],["/archives/2018/06/index.html","570449cff7d7fedc83492e26cd33853f"],["/archives/2018/07/index.html","adcdf2c3a886946524b70c0526380e7e"],["/archives/2018/08/index.html","13a81804e3adddd12399f91372088c0d"],["/archives/2018/09/index.html","30d7bababcc92601c62886dbcc275e8b"],["/archives/2018/10/index.html","b590360e15c51c76cbbd9d300d9fd554"],["/archives/2018/11/index.html","00568df122e7287f4167f62e65420c6b"],["/archives/2018/12/index.html","f4829f1a435a20ab62824e325c9ddfb5"],["/archives/2018/index.html","f21319429169bc668cf90af95fa41809"],["/archives/2018/page/2/index.html","dd659a119fca26a1a389a128e67d83a2"],["/archives/2019/01/index.html","eec386b7d832ed81aa4a9e69fd99ef09"],["/archives/2019/02/index.html","812c1323c1e034e0d60ba38a4a13a59f"],["/archives/2019/05/index.html","08e5caed1b447abaaf5d4d9d607756bb"],["/archives/2019/08/index.html","f3619521e1bcd672bf4eaa55af936f5e"],["/archives/2019/10/index.html","e7cd0f7c8f2c1459c7252bf6913a9bc8"],["/archives/2019/11/index.html","2a9f7ad32ebbbf892a4a7fc7cfbd17c8"],["/archives/2019/12/index.html","fe4c9666cf5e5f76c2d82cb6a5c61969"],["/archives/2019/index.html","707a591070c880047e174e8b66b662da"],["/archives/2019/page/2/index.html","7088f2f6a948f0cef2c649844e6f9877"],["/archives/2020/04/index.html","c077da80f41c0e84ccb5d694c8d8504a"],["/archives/2020/05/index.html","d3f2335ff5fb8a01bbbdc7688aa81c0a"],["/archives/2020/06/index.html","4a3817942cf70b8d96b33008df65c168"],["/archives/2020/07/index.html","0e771d1305e99972e8e92b402337a5aa"],["/archives/2020/index.html","9e552913cc1acfba3e09c49678fe14ba"],["/archives/2021/01/index.html","4b6ed643289d2dadfc688bf3b714ffe4"],["/archives/2021/03/index.html","079dc18ae171f898dbc391ad9e2a8ce3"],["/archives/2021/10/index.html","46d35e67e89f63d051cdb922bc023b20"],["/archives/2021/index.html","650ae51df2304af9891b0f6e5e8a819b"],["/archives/2022/08/index.html","96af9f53b7bc5c28532dadb6c145dd2b"],["/archives/2022/index.html","70d66e4146d4f6b90e9aa5e29ef14fc4"],["/archives/index.html","7e50a7e6ec7ea737f81b86112460ea86"],["/archives/page/10/index.html","fd9d43755d234f47c5607a5b4a00fc9e"],["/archives/page/11/index.html","e776d388b7e6352a9ffceb57c5d836f0"],["/archives/page/12/index.html","d28ca316a0afd8769d99d2a2f1ca64df"],["/archives/page/2/index.html","f74753938331cb5e3f58b6b9c502a505"],["/archives/page/3/index.html","4fef38ea6528e048c532c4ed04b3341c"],["/archives/page/4/index.html","92d3e45b792432c17749142c86d66aa6"],["/archives/page/5/index.html","d859ebb2697280d05eba2c386f9aefb0"],["/archives/page/6/index.html","84cd8a6b02c139abea3cb8da49f229a0"],["/archives/page/7/index.html","e22961a84fdf12080db845bf11123944"],["/archives/page/8/index.html","8ff1e923676358aad46e28b493e7be21"],["/archives/page/9/index.html","8b62faf706232e63701fb6b4fac47a0f"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","ed584959ef97d06812fb5913e8864bd3"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","e37cfddd49bfbd61e173e961e6cc0078"],["/page/10/index.html","b864d93234ee1a78939e0d1eef456d71"],["/page/11/index.html","227a6fc3abc7b8a0031c0d6ad9398bd7"],["/page/12/index.html","efbac19c36fb251a05e03aede9630db7"],["/page/2/index.html","6ecd35bcd2aca2ddce3987eb8ef520c0"],["/page/3/index.html","4d2f3be4a93ab342d619287c485e0577"],["/page/4/index.html","5df48fd9ab245fb0a79f7eab41c6aa02"],["/page/5/index.html","70db9ea401f4394f270f5e4bc99d762c"],["/page/6/index.html","2f6cb0be61a9b50f544164ccd4a998a2"],["/page/7/index.html","55663e23c1b89c66504bbfaf5c4e418e"],["/page/8/index.html","83381e98c0d59973a6e84c43f246bf75"],["/page/9/index.html","f4f3c83a7399015d5ea46bf2ecb9545b"],["/sw-register.js","716b80c41b077b39c340ab7c99097dd5"],["/tags/Android/index.html","3547e7c64c17714cbc76a57c074d775d"],["/tags/Angular2/index.html","b897ec7ceac39df2b3346e9effdeeeb1"],["/tags/Babel/index.html","ca0a9b8e52a68b9d23631faa82357983"],["/tags/C/index.html","c83dda87a8cb9555a8cfb6bf39ea8883"],["/tags/CSS/index.html","d057fb8dd73fa966412adac70172601c"],["/tags/Coffeescript/index.html","59895e3bd4a06759bbea1d0aad153ea2"],["/tags/Compiler/index.html","e80e001474f55d162b7ba0892dd8bfb1"],["/tags/Component/index.html","8b324d759abcdfb34750af3464de2911"],["/tags/Design-Pattern/index.html","5eae733161ca715aba69945783e7ba0b"],["/tags/Docker/index.html","2a13c6d31a34bed6a8d5822a160c7908"],["/tags/ES6/index.html","02e779a4f5e90a80aeb8e2b68a72e7a6"],["/tags/Game/index.html","7bdaf4d2bb4c59230ed55a5b8e2d7b05"],["/tags/Gulp/index.html","3d0f4634eeca69559957bc6288253c1d"],["/tags/Hybird/index.html","476e8db2b22cd9331aa720b069dd25ed"],["/tags/JIT/index.html","f7ee48719287a1312d6e7a6acfc61d58"],["/tags/Javascirpt/index.html","a321c51fa065c06dbbb42287bac41388"],["/tags/Javascript/index.html","5b5f45252cc143de92fbecba4c3f182d"],["/tags/Jest/index.html","32d270ac05cbb8c8ef46273f22642b96"],["/tags/LeetCode/index.html","82e7fa0762cbfb38e57d17157f507951"],["/tags/LeetCode/page/2/index.html","e2a582572042dc55df580a2ac59c5c88"],["/tags/LeetCode/page/3/index.html","6bfe3381dd25c040a66debf2d6ad95e2"],["/tags/Leetcode/index.html","2900425e8f5bf6d2c15f15ae4d913e98"],["/tags/Linux/index.html","1952c021f15e51178f215eddef26366d"],["/tags/Lyrics/index.html","f0d3d5947bb5bb79666f0bc2165a7a08"],["/tags/Mobx/index.html","353ec173b223ffee4b7b5e31fec583ae"],["/tags/Mocha/index.html","52da7b36546926b4d0eb412f710264fc"],["/tags/Module/index.html","d3bff76832a2f1bde931006ba802c328"],["/tags/Node-js/index.html","9202a34bc7f5c2727d610a3cb2bd73b6"],["/tags/Node/index.html","eb1c0429dd06f808e858a8d45d191e77"],["/tags/Note/index.html","897e8a9d80367bcca12fd1be23054044"],["/tags/Object-C/index.html","43c0e3cb33ca098a5f06f0cf4d06bcb0"],["/tags/Objective-C/index.html","b86ccf2aa46e925d207311245f05dad5"],["/tags/PHP/index.html","0fabb768d61643d0996401cf978d89ab"],["/tags/Python/index.html","fc34f3c4a48dc7b1f49eba41cec34696"],["/tags/Python/page/2/index.html","90283dcfe11edba4ce102d1f353f7edf"],["/tags/Python/page/3/index.html","ed57d19afc0a103dcf74b30ee697e75c"],["/tags/React-js/index.html","2a9761c6b76e0cd240f2489d780f77c8"],["/tags/React/index.html","c524f6a4de924e70523e949da31df4d1"],["/tags/Redux/index.html","400282e596c76c510553e1600a67a5c7"],["/tags/Require-js/index.html","5649181b90137f95b285ed81a797704f"],["/tags/SSR/index.html","50c39debe8a42789fa43e9dfd35b558c"],["/tags/SegmentFault/index.html","fb562eaae08ee0486b2ff2c7c1f938c9"],["/tags/Swift/index.html","af2c04e130f86a01f441e575ffe26702"],["/tags/Template-Engine/index.html","3e53119e5ec6d53c980a8ab13d432b1d"],["/tags/Test/index.html","7f538745b931afe4dbbc67c3fd84752d"],["/tags/Twig/index.html","cdd4067ab232dfa91efd55b71480e146"],["/tags/Typescript/index.html","0f2865ec0e7860458cbd85b7c50f77f1"],["/tags/V8/index.html","bf54232e90bc2e11c5d6cbbb3a8073b0"],["/tags/WebAPI/index.html","35f0e576bae951a342c1a1893a7112ed"],["/tags/Webpack/index.html","181a964364c8be3cbf4015f4710d0b95"],["/tags/Webview/index.html","fa267ab02c25e37b5c14110843347be4"],["/tags/Windows/index.html","84a72000d70c8aa83b942376fbc640dd"],["/tags/babel/index.html","d6861b5537ca0b0ebe689c7427429e42"],["/tags/base64/index.html","9fdaaa7a842d4e2c3de012dd1b43bf8c"],["/tags/bootstrap/index.html","7aaae9d982fd3c702378a9cd10761c1e"],["/tags/ci/index.html","14409a2592bd236933e9d45191180cfa"],["/tags/codepen/index.html","c6410a87587e8b4c76e1bee9de443fe0"],["/tags/compact/index.html","4932db028fe4b25e49560d35dd4a3821"],["/tags/css/index.html","92edb45cf4f036df32a7b0875931445f"],["/tags/database/index.html","890083d0dd1009b241ef5fedb114e960"],["/tags/docker/index.html","4194e09bb589c921c27271d213df63f0"],["/tags/event/index.html","2ded056584435e2a93f4a867234c5caa"],["/tags/facebook/index.html","20e8477c34cf3a1008e7e83c10ede1c0"],["/tags/flask/index.html","81cba0f3640c95e82db647ef2a3ddc38"],["/tags/flow/index.html","e5acc2067a11680e22ce7b0663ef0df2"],["/tags/i18n/index.html","1aa70df52628ad6c7c26ff40405c690b"],["/tags/iOS/index.html","6a1166d8602f73c1ce59a0b32b8a210a"],["/tags/iOS/page/2/index.html","725172f388118ad67c51ea4d5745b718"],["/tags/index.html","1441a5206298011785c7175cf86a8be5"],["/tags/javascirpt/index.html","1d436598f7f3f1e77e4cd90250d03704"],["/tags/jest/index.html","1976203236dea97312019a5db54593ea"],["/tags/jquery/index.html","dfc50482ef213b6d15bcd6363cac8557"],["/tags/life/index.html","d372a61c2640f1512e71c6def83e9a25"],["/tags/lyrics/index.html","f46ef1ed2d3987ea3bdc39b8200122a6"],["/tags/node/index.html","02202fe4ddf3291f4916e84ccca2a1d4"],["/tags/npm/index.html","3739441b434e0f65084e0b717e198e9a"],["/tags/pwn/index.html","3c76c41b24a476a807f1df24091e1694"],["/tags/python/index.html","560ae64200ff153efad8f74bbdc306c7"],["/tags/reactive/index.html","c098dee565131d9df0dee31ef3bb64a4"],["/tags/shell/index.html","4b533d158fe150877142a4c5da87868f"],["/tags/ssh/index.html","06fa609cd59b392cd36ec622400dca71"],["/tags/svg/index.html","40594fce2182132d544391aeceb457a4"],["/tags/translate/index.html","b9d587fe7fbb11e0083b31323010cdb8"],["/tags/translation/index.html","c0276eaf21f6dead78bf2dbd4f791f96"],["/tags/typescript/index.html","d3f5a3878b79ebd115b2e432f949be3e"],["/tags/underscore/index.html","90cd8d00c7a85f48acb0b679a7386a6c"],["/tags/video-js/index.html","eb6b80df11a4508160405cf4f993d659"],["/tags/webpack/index.html","075f13599ffb4c1b28f4dc40601fd203"],["/tags/web安全/index.html","876276c78a14112dc52482ed80e29c29"],["/tags/函数式编程/index.html","950029daff3548cfab81d421f3dd87a3"],["/tags/各种开发者大会/index.html","253bc4d9be393a23b858427b1b5aa4b3"],["/tags/文档/index.html","726907da80cf77dfdcb28dba17bc5fd4"],["/tags/构建工具/index.html","67618757df4f405e45ff8e8e6f530094"],["/tags/测试/index.html","3529a769de6bdc9ea16348aab9378be7"],["/tags/生活/index.html","bb6de752120cf5fc076b7d3cc8272653"],["/tags/笔记/index.html","0de0c70223601550117b77c408bddcc1"],["/tags/读书笔记/index.html","7896eb09359788abaefa131e4713723a"],["/tags/逆向/index.html","3fe0fc9438a4d5849f325357b859409e"],["/tags/随笔/index.html","7f0344db1683565b6eef1baaeea632a3"],["/tags/－-Test-Karma/index.html","67912d248c54bfa7e1ea90f3bae3e4e8"],["/tags/－-杂谈/index.html","8c9b3f25a5662bd17e1dcfb9f6631cd5"],["/tags/－生活/index.html","7356e6e2cbb4c5dd5299a277751544db"]];
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
