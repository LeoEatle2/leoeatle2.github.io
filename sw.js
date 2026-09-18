/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","1ab57fc1f33dd87db9b22124bbcb1f96"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","e3bc7f2194f024aac339864876b2cf38"],["/2016/09/02/The-inherit-in-javascript/index.html","8507a5789edd634408f8a939bdbadc34"],["/2016/09/20/令人伤心的博客碎片/index.html","13e01248d105b2ed96131ff03ffe8b57"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","7fbf26a666136277d23cbdd16c6c172b"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","2a9f6f477be2a957aff0c4c65eff7dd0"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","248933940104c9f63a14b000d3ec5a7b"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","57146578a3e6733f79c84a627d456f41"],["/2016/11/14/爬虫的意义在哪里？/index.html","f934f4e0a59afb9c3487f85213d4d682"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","95073ea84b7f680ab84cce9ef4583e26"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","f6049e11083f32e1bf9eeb0be726bed8"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","3dc16b5200f94029db9e00a5b1c7ac97"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","38e72c4025fb211885b8e9405f76aead"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","0c81f52e7c69aedff8565c767aa80dae"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","40af9c4092de37d97d9980e6c4776f14"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","ec946ed13d0a37a8f3ee8ada8462ffa2"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","386b23d06b8426fc4b49daf5dcf91179"],["/2016/11/28/SegmentFault开发文档笔记/index.html","10a2cc1d3705fa4e12d9837afe6b5daa"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","334219e6c194334b847ddec45b2ebc61"],["/2016/11/29/Twig模板引擎学习笔记/index.html","52e2770e3be8e0b0fdbdca1e997d447d"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","2ef6e6a7cc87a23bb9931eb229545029"],["/2016/11/30/compositionstart事件/index.html","9bc8be52d549cc7e475c90106fa45379"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","67f1b729d5c51542e5263d28669fcad5"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","cc480a6b460eabde4382109897891059"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","b43b7e0b9c836738f79838e890d62c2d"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","df5a16c5aba883e337c286c57bfabb59"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","cfaafccd4b4cc8e0e746c90d3fdecbd2"],["/2016/12/10/SFDC笔记/index.html","0371260fc5703084ec43f1da0c260ea8"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","a885590ed06cf5c886c08eaa595b6c34"],["/2016/12/13/深入浅出node-js-笔记/index.html","df7dacaad158d855c77792935bf78cbc"],["/2016/12/17/LeetCode-274-H-index/index.html","106983296ab52de196953710a829475f"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","fa79a109ba5b49c64b32e740bc892837"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","3f6f77b4e6434c6f7a88017a08f09843"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","1a47a1952929c791ad3618597104a05a"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","34a4667ad8be3fdb2b0826ffae7e45df"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","cb375477f6e8d23eac4d4028dae9e2e1"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","00b9c863e07accceb6be5f84b71d22c2"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","479c63d0284b9789631583aa2dd310a7"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","3e3db3f7d4f0e0ef26b2b357bac7f039"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","0a220ec640f9974d931d874160901034"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","6afb98f5b993473b20bc326675bb692e"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","f5ea32ecf9adc7f27cd4ca51fd19e15b"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","e75fc105ea03a3ff8a0d88deeaeaf7fc"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","350339cdb1a3515c2551b9da35d34661"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","e893f32a086e43ceb4e56e134baba931"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","99c8aad7315b9537df076617daabb8b3"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","ded4114c4d5b8304f8f2a2737bad975e"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","56fd8ce4252da3dc60b4f5531998b9cd"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","1046f64c1078bcb275e0db6097d009f0"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","ee9615f2c7f30e8b9d44fbe3c15c0e73"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","c923d8a6c3bd6018c251408ea256123c"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","50433189b1aaa706db8c8ab4fbc7e502"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","31b24ff234715a46d10fcd72eb588654"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","65d05e6fd6951db965bf0566f9a80665"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","71442033e016d7a81dd9494a04ef2c2a"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","d8e1fa540b6410499779d7fde67f5ef6"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","9041f67cfdd9d4f873535df55223a07f"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","57904698a2f86e79048dcfa6c7b48b82"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","e20d68642626f80ef2e9e20c432e0280"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","82d066b3441563f57b51648820207ad8"],["/2017/03/03/Google-Android-System-learning/index.html","52e0a0a4409a8cbd905c96302e43dd4b"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","7492e8a3b13efe010bf8c8ca05677b57"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","6c77d558509ed26e96d4553aef295f05"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","24495df90435e6095b092e594e913ac1"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","5929373421cd8e88a3aa4e4cf8833fe0"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","f58c9d0d37cf25ce8b3b4d35d0ae3904"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","73ef4fabbef86728ca3c1f3435eb144a"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","d3d417da4098a83c2d954b9f2ba47df1"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","7176f885d6058d8cc6631b7dee511738"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","a84163414a26068f740563420bc57a9f"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","68f8b64489154fb52578d0dcfc5dd650"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","bee7ec96ff2037e2a556ba37e749a39a"],["/2017/09/08/编写Webpack插件笔记/index.html","cd348b12c90547fcc7dece09d905284d"],["/2017/11/30/Mobx学习笔记/index.html","bf600247df5d2f1a473983e0e38f2018"],["/2017/11/30/Test-travis-ci/index.html","e6684a8f590009b0005593d4330b6e9c"],["/2017/12/01/Use-flow-type-in-React-project/index.html","d1c8a3eecb8e0fae8eddcbcc970ee958"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","ca8649e704f1bf50aa9e3520fd1f6ebc"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","4faeea2168dd1d60d9ef51d0169956b9"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","b62556d5ed3860a04b1c574166b46a95"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","6a625b0d277172fe47ca182fe00b7381"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","73510a6ca039c3a1beddc2861e704a03"],["/2018/07/31/SDT自我决定理论/index.html","5f3c742d1add388002c4cc6445b2b834"],["/2018/08/04/React16源码解析-As-required-order/index.html","9d8ef06eb1cba8f2d8fa8b454eb95927"],["/2018/08/05/React16源码解析（Fiber）/index.html","002415832651cf9d8e5126b74165f84b"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","eb91e5e1809f6b21a0401c1345508d6a"],["/2018/08/27/释放webpack的真正潜力/index.html","a8068e4f9ece9995e996c5051e00a706"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","234ba75c68a822b9e418c5c6194471f3"],["/2018/09/17/升级到Babel-7的经验/index.html","9e17e044014bd587c86dd75c4913b4f1"],["/2018/10/16/React-tip组件的设计/index.html","cebbc266f6f97e278801503e3a0af5b1"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","914c6c2a7562afb6416978cd26306f06"],["/2018/12/08/jenkins问题定位/index.html","6e6cafcc8e9287e669c629da717cce4e"],["/2018/12/21/React-SSR实践-压测/index.html","2a60a8239a17983c3fc4ec608df5328b"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","09df1c35936ccd437c2e950e04d9806f"],["/2019/01/21/item2-profile-config/index.html","9784293ead4597985d573f7a1062e868"],["/2019/01/22/i18n-about-Access-Language/index.html","2c5833ddd69878459163b916780eedd1"],["/2019/02/27/Node-C-addon-学习笔记/index.html","48f730b060fcad80d2498fd74fe32170"],["/2019/05/16/Modern-Crusaders/index.html","a32b6ba24ef7f1086c414eb10caf35fc"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","b8ef3bc69b0b5e35e5f4ba5e7cf1e23f"],["/2019/08/28/关于docker使用的一些记录/index.html","74a3778c3325df5c5e44dd10ffa0daec"],["/2019/08/30/全干工程师的基本素养/index.html","dc3c1f9d59a0c7aa0cedf42d5856c4bb"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","7c8f59d6c9cbd7d6c311f4097f1e2884"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","23c3ad8ca79d28503d48a8c961e8943c"],["/2019/12/02/One-example-of-Typescript-generics/index.html","1d2a8054ec5bbcc37f9585b16ef9560c"],["/2019/12/04/有趣的上网冲浪之旅/index.html","3691514aa0e1bd4a7d32980da5d13fe0"],["/2020/04/17/企业微信国际化方案总结/index.html","c5b803e2ede302f5d0728e5b878f6367"],["/2020/04/27/come-on-sweet-death/index.html","0028757f217a9a2a712829d3bc5451b7"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","0827b7beb9288ceae55c39371a2bbb93"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","1943c92942c02acd95e14e7ba2c4ad26"],["/2020/05/28/525-Contiguous-Array/index.html","262cbd233b98e0b17dbd08c725900398"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","b8cd3ac8b80115f2e2385900f0f41dc2"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","369cf4ec1def14c64cf158615392e8e0"],["/2020/07/21/Node-js-与-epoll/index.html","1caa5d31e432389df3e7828baf665d2e"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","6a910ecbc21c8d2ba01ab79192cff088"],["/2021/03/02/总结一些测试vue组件的经验/index.html","0813f6cf52ef4abe0161ba929e0d6a71"],["/2021/03/15/Purpose/index.html","aa89afe58821364f00db26c79e11a5d4"],["/2021/03/16/和安全团队的斗智斗勇/index.html","1eda3b2ae4bb52bd9bd638ce1e93732e"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","0c43db42c3190c56a3d82ec68a41f641"],["/2022/08/10/关于图片处理的一些事情/index.html","c70ac6573f38da812b716a31a2938466"],["/404.html","7ae509d6659131b83267e042593bb53a"],["/about/index.html","8f51a24760687913ec0caca3a2145622"],["/alice/img/01-ee2afe4f.jpg","39e62f8071c9bdf639f9186586bac0d2"],["/alice/img/02-96824f07.jpg","64645e2c85a214b332a34ebe606e9594"],["/alice/img/03-23094728.jpg","63f66b53e5b6e683558e3f70322432d1"],["/alice/img/04-375511e8.jpg","96b4091365279ae4e8ae51178a1074a6"],["/alice/img/05-2c5411f3.jpg","762f319cf2c7c388422be056041c56d0"],["/alice/img/06-decdf5e5.jpg","c60bbd607622944fb62a9256b7271075"],["/alice/img/07-9961af6e.jpg","d56676e6cc1b0f04c47853c7b0e95210"],["/alice/img/08-1e8905b7.jpg","5b3d0a1a57c2c0a63a013468e1f5884d"],["/alice/img/09-539af5f7.jpg","43402b92a8631f8d20bef368cef62b18"],["/alice/img/10-6091866b.jpg","0ccaac8de2718f13fb14c7afbbed1148"],["/alice/img/11-3e7516be.jpg","1fe9a3e30382089df89fcfe8aeb08f79"],["/alice/img/12-44268290.jpg","77fdc8e64a1ca98b2a18b99da9080c7f"],["/alice/img/13-9709db5b.jpg","f3eb6bd562d4262be3d9c7b897e2fc01"],["/alice/img/14-8bc800ac.jpg","a82a48d79aee1576b8226886fbb1e0db"],["/alice/img/15-a4047faa.jpg","b5b18c458786814f17c82b9bf391d75c"],["/alice/img/16-90e2ffc1.jpg","e18cd3b54a177d07b7d18ff992c1fbfb"],["/alice/img/17-4368884f.jpg","7fd2ab2e166fff8492af153f18571f74"],["/alice/img/18-f5e3f4c2.jpg","ba37b92e8f7fd41aa6023cf543e2f439"],["/alice/img/19-f4abf441.jpg","b4f6d55cc6d899580f8512727b77da82"],["/alice/img/20-b507f3f1.jpg","49815bc5b293f2c529816f6d73957140"],["/alice/img/21-4443a8ca.jpg","45a1f9bee04a883bc38521f116906f7a"],["/alice/img/22-56791f9a.jpg","9081d516adf4ddc86a5815df6a84fd3b"],["/alice/img/23-4ed30ac3.jpg","f1fbcd83ee3324368ba221558161ffce"],["/alice/img/24-575b30a3.jpg","55222c430fe7e5ed765b07071e6e2a33"],["/alice/img/25-ba06fa1c.jpg","f48b11b2740c2394f290d3a79e64c7ed"],["/alice/img/26-19025568.jpg","e5f69935d8d8b58076328f7d3e84bdff"],["/alice/img/27-a4199bd1.jpg","353d507bda21f194a587fdc73866e948"],["/alice/img/28-f006b3bc.jpg","b8ed99d902f6a016c0166d1ebc746806"],["/alice/img/29-fdd6489b.jpg","8ac441b95700656fee98af35641c5ef9"],["/alice/img/30-6065962a.jpg","b5b1abbe5e92d87a8c200c850d840aed"],["/alice/img/31-3a7202d4.jpg","d25d4efee045e5a1fc4e40b67e8e8897"],["/alice/img/32-2ce354bd.jpg","4b72b9063aec44f022251b3d6fb5f2f4"],["/alice/img/33-3a4da03e.jpg","f7bafaf4d11aa6f484e7527ada4992c5"],["/alice/img/34-69bdf272.jpg","d38bebb6a697aa09cd13d66d46e001d3"],["/alice/img/35-f1c7565b.jpg","c1ac592eedeb8de92f221f9ad79c28d4"],["/alice/img/36-622e264d.jpg","21cb2723dc95eaa7fa018b49d8009746"],["/alice/img/37-baf33a74.jpg","fe03020abefec246fc5591a04326fcc8"],["/alice/index.html","43ea91ed2a6ff4a3ff369e87e1dbaf61"],["/archive/index.html","9cd23d5289aabde25e6f68b7763639e9"],["/archives/2016/07/index.html","9e759df63240cab0f14e632f3698dbdd"],["/archives/2016/08/index.html","bbf27af7dfa0cd49f32dfc8da8fe2b9d"],["/archives/2016/09/index.html","0f906a98285b1d0446d5fbdb23e32480"],["/archives/2016/11/index.html","6a3756b1ae1fbb9d44d2d4116b76baa9"],["/archives/2016/11/page/2/index.html","226591d3f329bfd3ffd1de356afe35a4"],["/archives/2016/12/index.html","ff6257e8cff819783740673e3ad0f67f"],["/archives/2016/12/page/2/index.html","b51f785e76dde830f0f160c726e19eae"],["/archives/2016/index.html","73cff2ec35b363de11cf49f714232e40"],["/archives/2016/page/2/index.html","f90be2e0bc52b7fbf7f1385949763929"],["/archives/2016/page/3/index.html","8397063f4a196c05631334e3c93859aa"],["/archives/2016/page/4/index.html","4ab004321f0a0b63d230c675db1fa0cf"],["/archives/2017/01/index.html","131b86ef3a8075a6bbc505b86758eb1f"],["/archives/2017/01/page/2/index.html","51ae875627b2163a0e10a468e30e6424"],["/archives/2017/02/index.html","54ccadf47444d500596c4746eab448fb"],["/archives/2017/03/index.html","7513a1334bdf38e8f5f8d3ff32a96f88"],["/archives/2017/04/index.html","22d3402f28590b8caf1c125d4545c4a8"],["/archives/2017/06/index.html","b3dd0316e93bedb32a4cd2f3b56bcdfa"],["/archives/2017/09/index.html","c48feee657ef6a7396d35003d0fc9af3"],["/archives/2017/11/index.html","261deec29190760b8f02d682af27f8f0"],["/archives/2017/12/index.html","b7037f5209782df381db48bc66d85154"],["/archives/2017/index.html","acf9f31db0d1348c376ef4d9288fcfe3"],["/archives/2017/page/2/index.html","2e34b57502b4d2d13cfd2daac46ed331"],["/archives/2017/page/3/index.html","145a0d72189a2232091b0864c4eb5073"],["/archives/2017/page/4/index.html","8fe1a8daea6b55dbf3ddc78f53d8599e"],["/archives/2018/06/index.html","7dda6172de918e8b6d447f22aee09d5c"],["/archives/2018/07/index.html","2b2bc88ab461ce8523d60792f5361a2f"],["/archives/2018/08/index.html","f11955791935524031d955c3d92333fa"],["/archives/2018/09/index.html","8d62b4c4014f255fd3397839ce82c08c"],["/archives/2018/10/index.html","94674b792cbafc4c4d8c80af850c7106"],["/archives/2018/11/index.html","7539af9cf226af02e517ecdca9504758"],["/archives/2018/12/index.html","16099320958c33028539626427e75484"],["/archives/2018/index.html","6073f372b18688e8dfc1dc8c36493c24"],["/archives/2018/page/2/index.html","0eaff6d71d2f69b4932da68c48f395d3"],["/archives/2019/01/index.html","6ce8757712b05a48cada1844b894af3f"],["/archives/2019/02/index.html","8136a6eeb0a9d00cd8825e1ebd911a49"],["/archives/2019/05/index.html","336a34226e97b6fd47ac572cdd29a17f"],["/archives/2019/08/index.html","d93c54081d366a9f0e977fdaf31f643e"],["/archives/2019/10/index.html","4cd0bd77516cd91b9abdd684c3bed6a7"],["/archives/2019/11/index.html","2176d90756c359b35c2b4e28fbd01285"],["/archives/2019/12/index.html","7321e2db04d8765a30f40f67a875fb94"],["/archives/2019/index.html","b2db8db2ffc3301631e38ea2017c07d8"],["/archives/2019/page/2/index.html","0238b90539e7bc957f60e9953ab5cee1"],["/archives/2020/04/index.html","6a7384146bc9a646ec0103c49487c9f1"],["/archives/2020/05/index.html","0740920d678cefc1ec06f126ec193e54"],["/archives/2020/06/index.html","64b098811566680e7aaec4cbd29e7881"],["/archives/2020/07/index.html","f94e03afd715dde485620aa783c9c476"],["/archives/2020/index.html","1f0c008fe817c8036cf61188d94a2750"],["/archives/2021/01/index.html","394c8aa3c7d93af47dde45559cb8cf66"],["/archives/2021/03/index.html","ff97523db5e0417bd4a7b456a3305748"],["/archives/2021/10/index.html","bda31c4ebe1927aaeb18c7ab06bb7ee1"],["/archives/2021/index.html","b2c00bb2fa4442c84aa0d1f9e17f4a7b"],["/archives/2022/08/index.html","6750459b9499c85fc8c6f04a0df33f39"],["/archives/2022/index.html","2842318bf49c4714e952cb2a266e7c56"],["/archives/index.html","a3ac1b17cba8644f0fd9708fb07c2cd0"],["/archives/page/10/index.html","4daf27e84ca02aa7ef436c8beef91229"],["/archives/page/11/index.html","16b725d30a2e1f20844614c0afd61112"],["/archives/page/12/index.html","51f5df8f292a0caa0b2231f54d18c88c"],["/archives/page/2/index.html","e2318bd3391d76ba6900dc895f19bc55"],["/archives/page/3/index.html","86973924cfe7cb058e2e85e25c28ae53"],["/archives/page/4/index.html","c2632410b27c692c80bd5afd3bbdba0d"],["/archives/page/5/index.html","f52ca4e3347a26722a6bc1e1ac20c287"],["/archives/page/6/index.html","7f131c7df3e138538b2565904fa3b089"],["/archives/page/7/index.html","9dcd9920e107d2d87ca94c9fcf5e1425"],["/archives/page/8/index.html","5a3b9a3d21a19ce2f2c94bb40822857d"],["/archives/page/9/index.html","5049267f36e9f80df99e8bc8b7bd4d09"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","01489bf20c9a99c7fabdc1ef6a90006a"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","0f49724af3fdee92b4435d17eed59126"],["/page/10/index.html","db506f3d8c77c819dd188782d7e9864f"],["/page/11/index.html","7cb3d371b7431bc7e44648948a5c50a7"],["/page/12/index.html","d5094011d3043e22bb333dcc68975b51"],["/page/2/index.html","b0538df6fa1c86401fa0c132fe53aa14"],["/page/3/index.html","5c16e343d7443d5b56c39ce72720f92e"],["/page/4/index.html","e99a9b13dee4a01d800713a2ba846dd4"],["/page/5/index.html","c1090d694b43f1100e49b6d022a1cb88"],["/page/6/index.html","27ed10c9e7ceee7700ab2784c3df1c21"],["/page/7/index.html","f4e4146638b96d5bc1e2d1bf4e287755"],["/page/8/index.html","9d1810873699c5baa90665fac2fde152"],["/page/9/index.html","d72578e8fcb20a2a25d1890d38d40f14"],["/sw-register.js","25cc2a246908490205714c85a32ce457"],["/tags/Android/index.html","f26749206a001a09719455a8b4e976dd"],["/tags/Angular2/index.html","a83a97906f72003c7380a79f40479b7f"],["/tags/Babel/index.html","b97d17d21ead945d93a71ebbb1b95f3f"],["/tags/C/index.html","ce2ae200e8f47d3414ca509e10505ec2"],["/tags/CSS/index.html","62f4f25c878743cd432ff0c4118992c8"],["/tags/Coffeescript/index.html","a6bd1ec2d836599d03c5ecbb95200614"],["/tags/Compiler/index.html","ed8d60b064b3ff556c6fb168d2e2e7a7"],["/tags/Component/index.html","351f9440d724b027fce355c9a3c93afd"],["/tags/Design-Pattern/index.html","d0668502aab8980cdb68d1ed59821de9"],["/tags/Docker/index.html","204cc5355d20e44ae8e863014bd81ce1"],["/tags/ES6/index.html","e636139656a1198aa66c1a88c3beba34"],["/tags/Game/index.html","32cef0a0bee0837107b8d949fbd1a762"],["/tags/Gulp/index.html","6805dec7b2bdc12d8a764a7efbb64370"],["/tags/Hybird/index.html","5320eb0cf98108244e0138ad394fc2a7"],["/tags/JIT/index.html","c11fe23156b0486b6230f48f9e711627"],["/tags/Javascirpt/index.html","fe1d4e44c1bba43deda4dbb63cc4ea8e"],["/tags/Javascript/index.html","a222017e96e7fcbaf8baf166aa2e1b80"],["/tags/Jest/index.html","72c88cc20a7285d44548f13f776667cc"],["/tags/LeetCode/index.html","ee8e8dfc20e1e7e654f2d5cffda59bf5"],["/tags/LeetCode/page/2/index.html","ad21052a5667a127e5db132f776f3d3a"],["/tags/LeetCode/page/3/index.html","4cc5efd22a4bad29589b84f14e403da3"],["/tags/Leetcode/index.html","c3ad76036bc1c9a76240e9ba9d6f6158"],["/tags/Linux/index.html","6ddcb4170fcdc24d7fe516aecc999ad0"],["/tags/Lyrics/index.html","b34cc79dc4e1e6bb491d6f392df167b8"],["/tags/Mobx/index.html","f384bd71ff16b5eb9902a1ddce2d30b4"],["/tags/Mocha/index.html","a05c34d297922faf7ec4f2a38046eaad"],["/tags/Module/index.html","ed508a8b2e20f8fd972a184dc8026ac5"],["/tags/Node-js/index.html","afc361e5ee618145d5f031dd59a8870a"],["/tags/Node/index.html","d1154bf711dc7b04899577567856cc6a"],["/tags/Note/index.html","ffa6ecb148a72937a0600f1828dc6629"],["/tags/Object-C/index.html","6c58bb610e1dfac97f26b8f7935ae002"],["/tags/Objective-C/index.html","adb72423e4c3f392fff5ce79135c0b76"],["/tags/PHP/index.html","858f64a492b1ff13bda8b8d6675a35a3"],["/tags/Python/index.html","f2e34922b5c1708291e81ec53a8ec611"],["/tags/Python/page/2/index.html","d22759d3969cdd6d0844acec47dcfadc"],["/tags/Python/page/3/index.html","d27a685d7f3ab0a01d5938ef6748b419"],["/tags/React-js/index.html","ed263edf4c8ee3f69aa1f55bc53987c3"],["/tags/React/index.html","0be57ec84bace1c1958bc5dffa9c098d"],["/tags/Redux/index.html","9e0926c6022b6e19c95072d22a8181f3"],["/tags/Require-js/index.html","e882ba1774bf23710af96bea15f26af7"],["/tags/SSR/index.html","c758582557b7ed616a03eb8e2917f08e"],["/tags/SegmentFault/index.html","68e80de1c0aefd05c0a413386fb6f639"],["/tags/Swift/index.html","943c96e1392b0c15a353a073d48ed3ba"],["/tags/Template-Engine/index.html","f6da3f1f5873cfb248dd71e0a68640c6"],["/tags/Test/index.html","0afedff7b3826764bd3109ca60ae5de1"],["/tags/Twig/index.html","1589e3dc9e8917da5e10a73387ade360"],["/tags/Typescript/index.html","7cf12bc81659d6264ffc3b2ebf9515d4"],["/tags/V8/index.html","2717ef2895def9b9e7064915f4975202"],["/tags/WebAPI/index.html","b6c35af4012b464f8c83a150927c0df5"],["/tags/Webpack/index.html","1cb643309a1c91475b912abf1d0a2102"],["/tags/Webview/index.html","1e3a9f3c8b2f6e35f36bf477eea595f8"],["/tags/Windows/index.html","1887872410a90b1dd43bab0e69788e36"],["/tags/babel/index.html","34aa49f39f146e4fd97f6431c9c69f39"],["/tags/base64/index.html","c8ff81474f6f345d7d3ee7e5800a0d59"],["/tags/bootstrap/index.html","72dd3fa7cc2b85f15e01b657e21fb5df"],["/tags/ci/index.html","3dd05367c14b217d0a406c2fe6212197"],["/tags/codepen/index.html","bef67a75f3487fd8a825ee45dc43a69c"],["/tags/compact/index.html","c20ac301a8adef5362840b4d3fd4f28c"],["/tags/css/index.html","8d65ba40878cac1eaaf1dee58c1fbb9f"],["/tags/database/index.html","be88ae27b445f1813dc851217c576a9e"],["/tags/docker/index.html","9120802ca070c8486083df47d671caca"],["/tags/event/index.html","8afb98ddb11e996372b543e06578a762"],["/tags/facebook/index.html","be0cf7e0be5df8069a26ba74dc4673b6"],["/tags/flask/index.html","d8c8c0846a0a1e2302cb5e43b704ac31"],["/tags/flow/index.html","06f9d71c88610f89884b72e701800450"],["/tags/i18n/index.html","9580fe56e9c4ca25e8b0071b775d0ee6"],["/tags/iOS/index.html","739113be4c4595df1b397f89e1c4dbb8"],["/tags/iOS/page/2/index.html","958b3fafe2bfdd4edc8cea326a5568c4"],["/tags/index.html","76a9d75a1a6d7055cd5b45fcc39f4a7b"],["/tags/javascirpt/index.html","c06b653d84f18737f0777e8d7a587a08"],["/tags/jest/index.html","68a7deeba3ca7fdfa178f8aa1b1e50f6"],["/tags/jquery/index.html","718d6e0860763a8a15f1043217696202"],["/tags/life/index.html","27ba51cadc0a95d5510af2c67d97446f"],["/tags/lyrics/index.html","d9a4485c096e62aba230c8bd50e908fd"],["/tags/node/index.html","274c8c90c47c0b38771a32f99b41124e"],["/tags/npm/index.html","ebcb5801c327c07612c5b4b364b83d95"],["/tags/pwn/index.html","891b20c1a8dc53e3ec3cd8787dc3be7e"],["/tags/python/index.html","f390547d4a59d3141318893e9c6bac3d"],["/tags/reactive/index.html","b1f26703cc234e64bac031c853b3762e"],["/tags/shell/index.html","83eae742c8f383334a8707f279327078"],["/tags/ssh/index.html","15efb0dd59754b5c5c555bc85e3e5ce3"],["/tags/svg/index.html","1a282a215836c4909f9aeec3b58a0eb4"],["/tags/translate/index.html","921c245325887474896e7e4bff684c8b"],["/tags/translation/index.html","aeb65b156a05049d4b8ef5a10195b66a"],["/tags/typescript/index.html","6e6da95e4f496884033dcf68b4424642"],["/tags/underscore/index.html","af6ee3e5ccb7cb930a31399f9600284e"],["/tags/video-js/index.html","47a7a8bffa06cdd55156c088d31e38c5"],["/tags/webpack/index.html","86e5b24a03402c8b1894da221a37d3e1"],["/tags/web安全/index.html","5c3e0c04b1cb81a51a189c2763adba76"],["/tags/函数式编程/index.html","6657128c442264cef674d1c99556839a"],["/tags/各种开发者大会/index.html","2a9eeb03c0d08d546d7e501b46516a95"],["/tags/文档/index.html","ba94f999357d8dcea3f00801b25be45c"],["/tags/构建工具/index.html","1d6f539763d817aff2a9637eb81ad59a"],["/tags/测试/index.html","c1246973c345ff7b8b15f0a7ec7ab11d"],["/tags/生活/index.html","fd90152581a89e159f0ea8c40e339e03"],["/tags/笔记/index.html","ff112193509e4c45f7ab1cdbd114e159"],["/tags/读书笔记/index.html","b466ddc14dd237847e85a8e905f1a044"],["/tags/逆向/index.html","1e5a1157243fae51a93e285544d4f729"],["/tags/随笔/index.html","533fe30be7507eda9be99e1efe3f9885"],["/tags/－-Test-Karma/index.html","c0b2bf02b79c9aa4d9860a7b1512a585"],["/tags/－-杂谈/index.html","10cac26df38394c6fb5a3ddbc8500f55"],["/tags/－生活/index.html","24b6533f60a7a7ea5b71be965289e6fe"]];
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
