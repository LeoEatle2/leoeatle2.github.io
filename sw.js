/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","d25609ba531894ff769e6e5d92e3f435"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","7d8604595ce00adf736a2cf01d346a13"],["/2016/09/02/The-inherit-in-javascript/index.html","f64e2ccf7552aa92c42e0913be31be24"],["/2016/09/20/令人伤心的博客碎片/index.html","d4081740782effa74b82fa93594dc127"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","8839c84e1f4663c1a065d107e933c778"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","315cb80f54d40e77b905bc200ef5f6d6"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","56db978cc314b927e65d5d95089d2f17"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","2a2b0cb0d472128fac28cd1209966504"],["/2016/11/14/爬虫的意义在哪里？/index.html","42f9066446c8117ba452ee604ef0a839"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","66de9c850940f3d9a6033bf4b3da4cfe"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","2c27657c9706ac4395231cdd5de732b1"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","5176a6dd79851613448b199aca766e47"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","58d384880dd10f2f0deb5ccec0e63174"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","bb5d47f6621cb3d287fc28b479aeca10"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","b99358fe3910007c67a62187248887df"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","29ea2152846f6cee3a9474dfe93e2d25"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","9abaa6b2d4ce1b7080348573baa527e1"],["/2016/11/28/SegmentFault开发文档笔记/index.html","12fac492597a94ed12ffeb4400b61bb2"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","605a41bb7fd1b2a2a304d3fb3f5e860a"],["/2016/11/29/Twig模板引擎学习笔记/index.html","ec2897d72ac14b75476dcc45716a26ed"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","b37b16ff43c96a576253aeb347a7e6fb"],["/2016/11/30/compositionstart事件/index.html","402fc61e6172b15534d56b7e464319a9"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","f59327003b6bcbfcab91822463b115c7"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","79e7e39a83a46d0f0954e21a9018ca5e"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","7060efc86dd63a2fe0e87afdce227b89"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","8d21592002326d6cd29d4a329bf50620"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","18f6ffebe890b70cc472e028123eedf4"],["/2016/12/10/SFDC笔记/index.html","893def54cebd97919fa1ebb3c37d9f72"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","0bc613e4160916d72d0c62784f9fe272"],["/2016/12/13/深入浅出node-js-笔记/index.html","9f31664f4f9d4456f1bc9164a466dfc6"],["/2016/12/17/LeetCode-274-H-index/index.html","1d808cd13810e9b882fae8443d972111"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","ce200b958c9dae44386ad4f8bbf374a0"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","b64bbd683dc1c8d6e09ff872590c8dca"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","44d44b92efb96426fdfed12eeee52981"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","dac7ad986d05c76f04234a7584c791ea"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","ef0f6dcf96f92b92db3d6d6b2ca5ca2f"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","95262175655cdcc00119ec8005552aad"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","f0feae53b50b20f4e5cf781d5215fb33"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","9ee46da592c22dfa775db15030557788"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","bb574a0b360b4d2e896a05490981b060"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","ea670fc8dbcfe98ad94d57be1b387c9d"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","3203b9c777fa800639c23c21c0fc00d2"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","0a854e1ef9be32b438fa3c5b918b791a"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","1d4ceacb1b09809bca0ba238c39d7525"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","59bcdf78d870478ceed24d728c29032e"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","e69c423faad81522fd5832bac42de3b0"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","989902c6bc7aa794457175bd5e3f0db5"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","4e539fbab68f1eb1876db7ca8c9b88f6"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","2ee255e17704e8de8c5d9e46c069da6b"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","7faf804392a8c886a906d39bae8d4957"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","59ea0253037f43cde2618a49db1abc7c"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","2dac26a5ee1ebb81c702a6efa227ab37"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","83d87d6a91b7ffa97353301b36cf867c"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","9134dd19ca09a2d0b8e0456057e92c83"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","df2813f1b95fdca2e795a625ffc4da92"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","a4741a6c9aaa6405923cac055f4c30a5"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","1343613742dd29f125b7e07e80dfa903"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","c3bcaa9ed260d88197d7d31bf9f83449"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","f2242440c872cdb5b024aec59b871e18"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","c1b0d6c0e278c05952d650ca87a90a1a"],["/2017/03/03/Google-Android-System-learning/index.html","a244d9f9a4c18e90e27432ede6f67b8a"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","1fcfaa03beb0b9b0da7257cc7b99dbd2"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","def06441b6c7f7a4d2927ba528420fc6"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","e7042ee1c38a35b35fa41e51b30c94ce"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","028d2436e8606f6d50e49a19ddd9aa91"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","664df74bd16e491a3c3966f6c4171fab"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","8a0179136e179011365506d3014b519e"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","d0f990631b18e1e6916decbf2fae710e"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","608c7e5f257f413fbddf4ddcb171e241"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","aa7ad2e6139cd4cff8481392ea92c9d1"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","ce65d8144e96074c3dd492923b9529f4"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","f2da6ecabb15b42545911042654e87ce"],["/2017/09/08/编写Webpack插件笔记/index.html","5c6df30843d2bf39f068beae0b96c8da"],["/2017/11/30/Mobx学习笔记/index.html","4fa52396baf380bb8d575b0858f6275c"],["/2017/11/30/Test-travis-ci/index.html","b4af33e3cd49e63b080c376530b502b8"],["/2017/12/01/Use-flow-type-in-React-project/index.html","47008d335312b5d50188b040e82d893c"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","0c34d4c9834907acc175394e19f738e1"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","38ddcb0d9aba30749f9a2a5b7e4e531e"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","607c6e6eef6447ae101ca811f0453bd2"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","3f36d707263310f42a83686ba640b953"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","8ad542fc1a7d8a923ab100f741f9661c"],["/2018/07/31/SDT自我决定理论/index.html","dac468db5884fc11fa03934e05a8fdd6"],["/2018/08/04/React16源码解析-As-required-order/index.html","26e76b7982dd1b011ff63459c1dcb7af"],["/2018/08/05/React16源码解析（Fiber）/index.html","80939894a9e9c6ab658a1eeb1ac2f070"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","fbf3b98f4c8fe263749c8225c8431347"],["/2018/08/27/释放webpack的真正潜力/index.html","48d15639f10058c754f18c5b3aa95edb"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","9ac9a251a728501abe3379c51f873372"],["/2018/09/17/升级到Babel-7的经验/index.html","008c00a57f1b3932a430d9ea8d6a58f3"],["/2018/10/16/React-tip组件的设计/index.html","b0d906ff0bd76d5ce8ad7cc7f282bd24"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","054c4ae94e5ceb4250b347b1cd79340d"],["/2018/12/08/jenkins问题定位/index.html","273347b008806bfd88dbe969a7f7aac2"],["/2018/12/21/React-SSR实践-压测/index.html","f6f3b12c6e75fac5657cb1ba6af313f3"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","34610459c1c1efb41095467333c08253"],["/2019/01/21/item2-profile-config/index.html","afb1efd2b61d3dce301dbb7e0e961290"],["/2019/01/22/i18n-about-Access-Language/index.html","4abeba391f0f6d307094486e8711fe38"],["/2019/02/27/Node-C-addon-学习笔记/index.html","46c90fe197417c301c82225f88266cf5"],["/2019/05/16/Modern-Crusaders/index.html","0d284590684aaaa5b1833fcc3e7f2aa2"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","c67332e626d25bb49ed971169e5d5654"],["/2019/08/28/关于docker使用的一些记录/index.html","5ed8da8564d3bbbac3ac4ae93735a31b"],["/2019/08/30/全干工程师的基本素养/index.html","e5e56976127260e877c8b9e7cbcc348a"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","7ad4fc5d388212ed0500603b352a4dbb"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","b2e7496f0a1ffe00cc0dcb40d0e04ceb"],["/2019/12/02/One-example-of-Typescript-generics/index.html","f671cacf718ceaec1e48987b6a542669"],["/2019/12/04/有趣的上网冲浪之旅/index.html","3ea477fecf9e6b871d7feda25eb49734"],["/2020/04/17/企业微信国际化方案总结/index.html","88a31e2e68f41b16e248c75864399ac7"],["/2020/04/27/come-on-sweet-death/index.html","e7db3b483f3b46b67d195e32625b1575"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","f3c2dcea4ccf861e3c24b0c97280ce11"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","dc68a50e490cb4f0f9d25a66ac054343"],["/2020/05/28/525-Contiguous-Array/index.html","f8f5554eeb532c8ba94822518f424688"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","9708a41a4483c98c50a707ea42693b47"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","2e3a32cbfa36b54795d3498eebcf844a"],["/2020/07/21/Node-js-与-epoll/index.html","d82a8966436c82a6aac38e26247a4b5b"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","572e30dff6f27001027e0ba3f78d100e"],["/2021/03/02/总结一些测试vue组件的经验/index.html","b93ce111810d296fb7806627880bb9f9"],["/2021/03/15/Purpose/index.html","27d74465e34f7227c38860f68ab9e30e"],["/2021/03/16/和安全团队的斗智斗勇/index.html","cf211496878ddc261ffe08ca54d13bc9"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","52e42a9d5ba20967d8551f1e5a0e31e5"],["/2022/08/10/关于图片处理的一些事情/index.html","340d2c8667079b9ee31a36d7851a61dd"],["/404.html","8fb9f3b56368f15dfb375f85dac2b538"],["/about/index.html","27e8109f4eaadc426a81c4fbd1198a51"],["/alice-mobile.js","3542ace51acad3f12506a2c18f1928cb"],["/alice/img/01-ee2afe4f.jpg","39e62f8071c9bdf639f9186586bac0d2"],["/alice/img/02-96824f07.jpg","64645e2c85a214b332a34ebe606e9594"],["/alice/img/03-23094728.jpg","63f66b53e5b6e683558e3f70322432d1"],["/alice/img/04-375511e8.jpg","96b4091365279ae4e8ae51178a1074a6"],["/alice/img/05-2c5411f3.jpg","762f319cf2c7c388422be056041c56d0"],["/alice/img/06-decdf5e5.jpg","c60bbd607622944fb62a9256b7271075"],["/alice/img/07-9961af6e.jpg","d56676e6cc1b0f04c47853c7b0e95210"],["/alice/img/08-1e8905b7.jpg","5b3d0a1a57c2c0a63a013468e1f5884d"],["/alice/img/09-539af5f7.jpg","43402b92a8631f8d20bef368cef62b18"],["/alice/img/10-6091866b.jpg","0ccaac8de2718f13fb14c7afbbed1148"],["/alice/img/11-3e7516be.jpg","1fe9a3e30382089df89fcfe8aeb08f79"],["/alice/img/12-44268290.jpg","77fdc8e64a1ca98b2a18b99da9080c7f"],["/alice/img/13-9709db5b.jpg","f3eb6bd562d4262be3d9c7b897e2fc01"],["/alice/img/14-8bc800ac.jpg","a82a48d79aee1576b8226886fbb1e0db"],["/alice/img/15-a4047faa.jpg","b5b18c458786814f17c82b9bf391d75c"],["/alice/img/16-90e2ffc1.jpg","e18cd3b54a177d07b7d18ff992c1fbfb"],["/alice/img/17-4368884f.jpg","7fd2ab2e166fff8492af153f18571f74"],["/alice/img/18-f5e3f4c2.jpg","ba37b92e8f7fd41aa6023cf543e2f439"],["/alice/img/19-f4abf441.jpg","b4f6d55cc6d899580f8512727b77da82"],["/alice/img/20-b507f3f1.jpg","49815bc5b293f2c529816f6d73957140"],["/alice/img/21-4443a8ca.jpg","45a1f9bee04a883bc38521f116906f7a"],["/alice/img/22-56791f9a.jpg","9081d516adf4ddc86a5815df6a84fd3b"],["/alice/img/23-4ed30ac3.jpg","f1fbcd83ee3324368ba221558161ffce"],["/alice/img/24-575b30a3.jpg","55222c430fe7e5ed765b07071e6e2a33"],["/alice/img/25-ba06fa1c.jpg","f48b11b2740c2394f290d3a79e64c7ed"],["/alice/img/26-19025568.jpg","e5f69935d8d8b58076328f7d3e84bdff"],["/alice/img/27-a4199bd1.jpg","353d507bda21f194a587fdc73866e948"],["/alice/img/28-f006b3bc.jpg","b8ed99d902f6a016c0166d1ebc746806"],["/alice/img/29-fdd6489b.jpg","8ac441b95700656fee98af35641c5ef9"],["/alice/img/30-6065962a.jpg","b5b1abbe5e92d87a8c200c850d840aed"],["/alice/img/31-3a7202d4.jpg","d25d4efee045e5a1fc4e40b67e8e8897"],["/alice/img/32-2ce354bd.jpg","4b72b9063aec44f022251b3d6fb5f2f4"],["/alice/img/33-3a4da03e.jpg","f7bafaf4d11aa6f484e7527ada4992c5"],["/alice/img/34-69bdf272.jpg","d38bebb6a697aa09cd13d66d46e001d3"],["/alice/img/35-f1c7565b.jpg","c1ac592eedeb8de92f221f9ad79c28d4"],["/alice/img/36-622e264d.jpg","21cb2723dc95eaa7fa018b49d8009746"],["/alice/img/37-baf33a74.jpg","fe03020abefec246fc5591a04326fcc8"],["/alice/index.html","43ea91ed2a6ff4a3ff369e87e1dbaf61"],["/archive/index.html","49a2783ba6352c4718f7b7ae88874e6b"],["/archives/2016/07/index.html","d13d50eddbfa648daa38a6d0e5cfe6ef"],["/archives/2016/08/index.html","c36f5f5d18944b3225fb52d34c7af02c"],["/archives/2016/09/index.html","6c50b6e7049b63ae2f9024108f23c68e"],["/archives/2016/11/index.html","6f550601be97e3954483493fdb8f2e79"],["/archives/2016/11/page/2/index.html","d84266bbf21f380ba1be1dc21fe3471a"],["/archives/2016/12/index.html","bebfe81565b6bc573990b06a530a6332"],["/archives/2016/12/page/2/index.html","bc4672c2642870fd7ac8b8c0bf88b4ff"],["/archives/2016/index.html","b6963976f36705f2c97653c3430ffbd0"],["/archives/2016/page/2/index.html","29362ad1307d297c902de5d0f50af95e"],["/archives/2016/page/3/index.html","2dfed6ea682eb67b978833c81801a839"],["/archives/2016/page/4/index.html","c23f05f6241cc4f40b6c6783785ae57e"],["/archives/2017/01/index.html","f0c937e7127ab3b2e6f7800475b85995"],["/archives/2017/01/page/2/index.html","9645ccbc80708ff4694d415bb898c086"],["/archives/2017/02/index.html","626b15fa0669b1a580411f8888fa4bc2"],["/archives/2017/03/index.html","55757dacaa0af0ad900498a6f5b8be51"],["/archives/2017/04/index.html","06b0d88fc14d5913d79afc24a4319ac7"],["/archives/2017/06/index.html","385b0b7bce11f00461cefcce73bc80b7"],["/archives/2017/09/index.html","0a1e4e8768bf5e8f0c4979fba62645ba"],["/archives/2017/11/index.html","2b878b4773250ba6a67e9ee970a8aa90"],["/archives/2017/12/index.html","e737bcffa91efee8b29dc2f066c2476f"],["/archives/2017/index.html","e63e2cfe99b3d0c787630d7457266a75"],["/archives/2017/page/2/index.html","c3373f3393e4d1b37afc97c3d5eba063"],["/archives/2017/page/3/index.html","3ed47939161e476e97b9c35af77f926f"],["/archives/2017/page/4/index.html","5bf1191034caeb300d86e50fd9f31d2b"],["/archives/2018/06/index.html","134eaa4e4b4744f5c1bb826901439b81"],["/archives/2018/07/index.html","ae0d1dd071af03bc3b43cb23a1edab8e"],["/archives/2018/08/index.html","7a7047fa39b0f8701f9745bbf15eeaae"],["/archives/2018/09/index.html","5fcb93ee5cbfd9c2396baae2bd038f33"],["/archives/2018/10/index.html","e51c1a59b8de38bbd9c50f5b4fa61bf5"],["/archives/2018/11/index.html","d755956168d8eb0c40f73012f076fcf1"],["/archives/2018/12/index.html","c7cf2e0c7e773635c6fe874b9bddd8f8"],["/archives/2018/index.html","ff506b405974c561ac5fc735fe0be36a"],["/archives/2018/page/2/index.html","36887fd515fdfbe2e4dfb2358f6e7a60"],["/archives/2019/01/index.html","e1b3717a314fad0490f893ea14984f79"],["/archives/2019/02/index.html","ac71622f4c01f556fa3731c349e54c99"],["/archives/2019/05/index.html","b11efdbe81e08b8b2d55e2808570c3eb"],["/archives/2019/08/index.html","1c614ddc3841b7028c7f816ba6bec92f"],["/archives/2019/10/index.html","673d70c907d82397ff206a4c1f88aef9"],["/archives/2019/11/index.html","3b974ab002932351e9194bbdb7fd87ed"],["/archives/2019/12/index.html","c99836f7c444584bf6fc44c4f7533594"],["/archives/2019/index.html","fd7c70e2b0ab8fcfcc05d626dceda408"],["/archives/2019/page/2/index.html","60434a311772a9bdb597eda9dc66e9f5"],["/archives/2020/04/index.html","5d1ed3542a47f97fecb13b850da19839"],["/archives/2020/05/index.html","024f51a2929877d2a3118a0ecd13b35c"],["/archives/2020/06/index.html","205b1f5be40e4be41f7560c61ed7895b"],["/archives/2020/07/index.html","3bebcf3a3df266eff0ffefbb9bc92b17"],["/archives/2020/index.html","05d60c98c4d198acedd5da5ed3db84d5"],["/archives/2021/01/index.html","54ef1aa75548653c8efd0aa1dcf6c051"],["/archives/2021/03/index.html","6919559f1f62e5b3aee04b3186dec1ec"],["/archives/2021/10/index.html","cbfc57b24151d103169ef66e2cf61644"],["/archives/2021/index.html","a8886eeb1a6c7a5403f3c701699a11e0"],["/archives/2022/08/index.html","01eb232e7d7e4ace75e155933b2040e0"],["/archives/2022/index.html","7e2826108e54a3b20322c2b0240aa1bd"],["/archives/index.html","45927583844ae079595c573791f1ba35"],["/archives/page/10/index.html","39148e6541edf143ee5682aec5648786"],["/archives/page/11/index.html","e87ec70458269cff297a366765b4e72d"],["/archives/page/12/index.html","cb373ca0b68b02ede3b4cd6eed36a090"],["/archives/page/2/index.html","cf30ecf82b024b34af15f9392783c50c"],["/archives/page/3/index.html","f42e8f2e5da5587bd99e600e5e9c6fa7"],["/archives/page/4/index.html","835f5cb460defc773394b1517baa6688"],["/archives/page/5/index.html","894a1070d8da9216d5384bdcb948b826"],["/archives/page/6/index.html","f281a2e2ee9a32ddf125f665e5a32f7d"],["/archives/page/7/index.html","d17ec7c1e37d2b33ad8e0408d0e3b7de"],["/archives/page/8/index.html","aea91981f1625712d2cdcea3e6a93146"],["/archives/page/9/index.html","5673a0d61c11137c96682b85d9724e00"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","45f8acb1645fdc374dc3996f6801531e"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","c6ba8f8b0f325b004682f9d7c33a99cc"],["/page/10/index.html","d2772a990cb070a5ef8521a587a9f477"],["/page/11/index.html","0e239f700559d8c09e0beaaadeda2c6f"],["/page/12/index.html","da553b0f46d1cdc25e3459b0b6f3ba55"],["/page/2/index.html","a6bb6d5b080c78ef9a64884424573946"],["/page/3/index.html","4013b8bb72b987e62f02a61abd1ec02c"],["/page/4/index.html","fd67a998f7719416fe4d88500d481f88"],["/page/5/index.html","583f01d18c81adf11c59b33163d22032"],["/page/6/index.html","9d610b1cf3e6f7018ce9a2107c64da98"],["/page/7/index.html","2289a3eccbe0150ace583477c3cb52af"],["/page/8/index.html","972ab68f0812d80d5a7a2814886d10f0"],["/page/9/index.html","11d5abd1132bd18df77e886723d63584"],["/sw-register.js","5543e12a05e92db15331ee0f5e6861f4"],["/tags/Android/index.html","2389b9dfca63d410599e782f5e88691e"],["/tags/Angular2/index.html","7776a557f6b4e59e7eca6221af1f4a3d"],["/tags/Babel/index.html","7dd617630ea06cff054243291112f63d"],["/tags/C/index.html","432f79253593da22b8aee75ef2097cf8"],["/tags/CSS/index.html","07500c7e22c367ffa11e09828392b8e1"],["/tags/Coffeescript/index.html","d5bd697b4da15253ad58366fc32231e2"],["/tags/Compiler/index.html","52ee04b0dbe7ab2e9ec9a4ebf3f3355f"],["/tags/Component/index.html","4a8894cfc02c4327ee18e54fe7ac4525"],["/tags/Design-Pattern/index.html","eb3dfe6e833008a298763dc07ac8a1bd"],["/tags/Docker/index.html","067e5b4b807f66922c14a38249932884"],["/tags/ES6/index.html","f378ee95a408ddc6df6733b362879e16"],["/tags/Game/index.html","12b45105b8f716518696f63b98e7fac7"],["/tags/Gulp/index.html","20896d62f1d6f888210e806ec86d3abc"],["/tags/Hybird/index.html","191c82df9d76b4c98cafea7fa0523e49"],["/tags/JIT/index.html","9464edcfcc6f3b2fd5b659dc8e49047e"],["/tags/Javascirpt/index.html","dfb079e83f906034474850f60de4dda7"],["/tags/Javascript/index.html","1c9bae6dd3b9722582cc21defca5aa47"],["/tags/Jest/index.html","df832b2172b1c0605c44832947be7be5"],["/tags/LeetCode/index.html","b3fc92ebe627855876bd21c49aed34c3"],["/tags/LeetCode/page/2/index.html","0f64e798bd8fb4ed36ad9bf613cbe762"],["/tags/LeetCode/page/3/index.html","c0ee3edd1cf7ca08c095317f673931c8"],["/tags/Leetcode/index.html","7dee4ac081a38e5453ebb8c6a58ad980"],["/tags/Linux/index.html","36a7722581036c4b470cf95244df0653"],["/tags/Lyrics/index.html","80da87a391e05efd00699dede48def39"],["/tags/Mobx/index.html","828193c8fdf49d29b9b81b9f457fd770"],["/tags/Mocha/index.html","77d800b41a4f04e31bb1fe25a13c8190"],["/tags/Module/index.html","147972c043aab9bf83f879e2229d7bb7"],["/tags/Node-js/index.html","ce1c6889cb8396d8e3c55c058e129227"],["/tags/Node/index.html","b415494eb27913d6d4543f85a8736f0e"],["/tags/Note/index.html","94f0c915dc637c080dc8c92b72f042df"],["/tags/Object-C/index.html","d9b737f94baee3b8bd8966eeebb2cce4"],["/tags/Objective-C/index.html","b02508b1c9b6fc012d73911893f1f133"],["/tags/PHP/index.html","0e81092124f5a020963e1a82f328a99f"],["/tags/Python/index.html","99f2a88f9f967129ef5da5cdd32702dc"],["/tags/Python/page/2/index.html","a3e3c4c59e6d4fe7a4d5e045011a9aa0"],["/tags/Python/page/3/index.html","6738c5de85cd3e5611a84b0eeb333071"],["/tags/React-js/index.html","426b9c28adbefa8a516d2838d491527f"],["/tags/React/index.html","8807f416708b21c2fc9dfc79afa989d1"],["/tags/Redux/index.html","32997e0683b8c8f5c05d2a4cf2ebf442"],["/tags/Require-js/index.html","e929efa77c2c0998bc26ad61df2caae0"],["/tags/SSR/index.html","49ffc28e840c1335aa5e5c3446b5f50b"],["/tags/SegmentFault/index.html","4d4da535df513cfc2fb38b85cb3ee2ab"],["/tags/Swift/index.html","de1b524cc7c55bfa381ea46cd81dd851"],["/tags/Template-Engine/index.html","2cc7a8b8393479e3899fa67db8448772"],["/tags/Test/index.html","7b58ee75488c1e316b4d750d5a802a0c"],["/tags/Twig/index.html","ebedbce39509192fc56a84adf504e3e7"],["/tags/Typescript/index.html","3e1d7a31e4a02d0a4df19c37e644e495"],["/tags/V8/index.html","03e2ca7efbd58236d77edc66ee24352f"],["/tags/WebAPI/index.html","a4d574ad894aaccc5eb4bda5e02d8efe"],["/tags/Webpack/index.html","fc965f3f160d3f136d729d9f4cb22349"],["/tags/Webview/index.html","ba836067447b5812ba37ed223d36e2d8"],["/tags/Windows/index.html","a31b5a56f041b1faf2ce3b36385c48f0"],["/tags/babel/index.html","5f4902ece822edb8949752f9828b7c95"],["/tags/base64/index.html","091cd0527d95b1d8ec9233abce64e1a0"],["/tags/bootstrap/index.html","c44838c2a01b597595e714210f733575"],["/tags/ci/index.html","5f05c78c1846a27bc4d91cb029160c2a"],["/tags/codepen/index.html","54661c18106094e58d54253203e7b179"],["/tags/compact/index.html","13cad9deaa697276a1390861d5c1470d"],["/tags/css/index.html","78d12da4a8fd7986e678c1ceaf6d4ca9"],["/tags/database/index.html","e06801c26de0af6c6810a9b8b81f6d2f"],["/tags/docker/index.html","d0bbf680de8edf468a1be0d3f129dccc"],["/tags/event/index.html","5285869ca39cedf32920405818b51834"],["/tags/facebook/index.html","4301d0c2cbfe17fe34bb0be3d8f14f0b"],["/tags/flask/index.html","f124d92a91167da36992ccef58cf91ab"],["/tags/flow/index.html","cbb22b253fc85dc78dab720d1b7da090"],["/tags/i18n/index.html","f476b02480c4a8bda5ccbc1bf28b8ce8"],["/tags/iOS/index.html","7594166a8726058a0032867377dba6a3"],["/tags/iOS/page/2/index.html","da52202f4f7da668667f15cebc304cbb"],["/tags/index.html","e799da944e7bc277ffbfec3521e593e9"],["/tags/javascirpt/index.html","a8a6ad8f57de9ec44605f83b296d2ea9"],["/tags/jest/index.html","fbdc729562331dc2aed401a0bb6702e8"],["/tags/jquery/index.html","acf820d78cae84b9bc5e44731ce8b7b5"],["/tags/life/index.html","bf32b58c53bf49ef65d8c8ae5e3e5009"],["/tags/lyrics/index.html","4caf99fa65a04d7fc0698c1eb8559c3d"],["/tags/node/index.html","f43296a9f66ffd94fc7a5a693d238630"],["/tags/npm/index.html","6a2586d5e2c50625513f58878cfd483c"],["/tags/pwn/index.html","c47b719bb870ae3f2bd538a2633e61c3"],["/tags/python/index.html","5169edec8beb5b12cd5ca3d8bb3c2a87"],["/tags/reactive/index.html","d6418fa45ecba18c2525543f9b20254a"],["/tags/shell/index.html","58b6a3c328db02453c51873529f01b5b"],["/tags/ssh/index.html","150bff010e13f39c8c9dbeb7ef491b54"],["/tags/svg/index.html","bb9c9e6ea040bbd4761b8640587305df"],["/tags/translate/index.html","9ccb2c7b4cb28119bcd3e3229b2670aa"],["/tags/translation/index.html","805f1dd3f721c78f4ff907f83f2daf3e"],["/tags/typescript/index.html","50d4cdf4b71760a11684c67c7f232930"],["/tags/underscore/index.html","d11b4d3c91ba9b28261390e50f0c15ed"],["/tags/video-js/index.html","8e6fd5457613a96fbb2602d7f9312b07"],["/tags/webpack/index.html","51d065776a2389789d0551ab09141708"],["/tags/web安全/index.html","53bc6107df4ef2424a2c28e21a38c02b"],["/tags/函数式编程/index.html","e80aa667d80e0d3ab8472cf5ae707488"],["/tags/各种开发者大会/index.html","0ca7953ea6a3425afebe8a6a40d5ba4a"],["/tags/文档/index.html","439e516323811b29dc7d7857a3d36946"],["/tags/构建工具/index.html","16525b8056d62e77d51419967b01f889"],["/tags/测试/index.html","d40f20d4ac75797faa48a631a8aa3d68"],["/tags/生活/index.html","72a192cdd242a1a58b666f60bc4e0ef1"],["/tags/笔记/index.html","b6d7ba299b0840f842bf64e542cd3e14"],["/tags/读书笔记/index.html","637195ff711216c44d5a64bf965d2daa"],["/tags/逆向/index.html","f2e3b2bc59d62c63c170a232f1bc4777"],["/tags/随笔/index.html","5689777fdcda8be5b3679a7a6b6242da"],["/tags/－-Test-Karma/index.html","55ec683eb19b50c2df2c4124d06ebc8a"],["/tags/－-杂谈/index.html","5d65abd9e1f9ad9b6cc4f4c1a5f719f3"],["/tags/－生活/index.html","400bd1476c3a783b424265be7430aeb6"]];
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
