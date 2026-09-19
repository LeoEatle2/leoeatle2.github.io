/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","d25609ba531894ff769e6e5d92e3f435"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","7d8604595ce00adf736a2cf01d346a13"],["/2016/09/02/The-inherit-in-javascript/index.html","f64e2ccf7552aa92c42e0913be31be24"],["/2016/09/20/令人伤心的博客碎片/index.html","d4081740782effa74b82fa93594dc127"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","8839c84e1f4663c1a065d107e933c778"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","315cb80f54d40e77b905bc200ef5f6d6"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","56db978cc314b927e65d5d95089d2f17"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","2a2b0cb0d472128fac28cd1209966504"],["/2016/11/14/爬虫的意义在哪里？/index.html","42f9066446c8117ba452ee604ef0a839"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","66de9c850940f3d9a6033bf4b3da4cfe"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","2c27657c9706ac4395231cdd5de732b1"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","5176a6dd79851613448b199aca766e47"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","58d384880dd10f2f0deb5ccec0e63174"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","bb5d47f6621cb3d287fc28b479aeca10"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","b99358fe3910007c67a62187248887df"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","29ea2152846f6cee3a9474dfe93e2d25"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","9abaa6b2d4ce1b7080348573baa527e1"],["/2016/11/28/SegmentFault开发文档笔记/index.html","12fac492597a94ed12ffeb4400b61bb2"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","605a41bb7fd1b2a2a304d3fb3f5e860a"],["/2016/11/29/Twig模板引擎学习笔记/index.html","ec2897d72ac14b75476dcc45716a26ed"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","b37b16ff43c96a576253aeb347a7e6fb"],["/2016/11/30/compositionstart事件/index.html","402fc61e6172b15534d56b7e464319a9"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","f59327003b6bcbfcab91822463b115c7"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","79e7e39a83a46d0f0954e21a9018ca5e"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","7060efc86dd63a2fe0e87afdce227b89"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","8d21592002326d6cd29d4a329bf50620"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","18f6ffebe890b70cc472e028123eedf4"],["/2016/12/10/SFDC笔记/index.html","893def54cebd97919fa1ebb3c37d9f72"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","0bc613e4160916d72d0c62784f9fe272"],["/2016/12/13/深入浅出node-js-笔记/index.html","9f31664f4f9d4456f1bc9164a466dfc6"],["/2016/12/17/LeetCode-274-H-index/index.html","1d808cd13810e9b882fae8443d972111"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","ce200b958c9dae44386ad4f8bbf374a0"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","b64bbd683dc1c8d6e09ff872590c8dca"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","44d44b92efb96426fdfed12eeee52981"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","dac7ad986d05c76f04234a7584c791ea"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","ef0f6dcf96f92b92db3d6d6b2ca5ca2f"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","95262175655cdcc00119ec8005552aad"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","f0feae53b50b20f4e5cf781d5215fb33"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","9ee46da592c22dfa775db15030557788"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","bb574a0b360b4d2e896a05490981b060"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","ea670fc8dbcfe98ad94d57be1b387c9d"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","3203b9c777fa800639c23c21c0fc00d2"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","0a854e1ef9be32b438fa3c5b918b791a"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","1d4ceacb1b09809bca0ba238c39d7525"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","59bcdf78d870478ceed24d728c29032e"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","e69c423faad81522fd5832bac42de3b0"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","989902c6bc7aa794457175bd5e3f0db5"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","4e539fbab68f1eb1876db7ca8c9b88f6"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","2ee255e17704e8de8c5d9e46c069da6b"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","7faf804392a8c886a906d39bae8d4957"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","59ea0253037f43cde2618a49db1abc7c"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","2dac26a5ee1ebb81c702a6efa227ab37"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","83d87d6a91b7ffa97353301b36cf867c"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","9134dd19ca09a2d0b8e0456057e92c83"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","df2813f1b95fdca2e795a625ffc4da92"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","a4741a6c9aaa6405923cac055f4c30a5"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","1343613742dd29f125b7e07e80dfa903"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","c3bcaa9ed260d88197d7d31bf9f83449"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","f2242440c872cdb5b024aec59b871e18"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","c1b0d6c0e278c05952d650ca87a90a1a"],["/2017/03/03/Google-Android-System-learning/index.html","a244d9f9a4c18e90e27432ede6f67b8a"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","1fcfaa03beb0b9b0da7257cc7b99dbd2"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","def06441b6c7f7a4d2927ba528420fc6"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","e7042ee1c38a35b35fa41e51b30c94ce"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","028d2436e8606f6d50e49a19ddd9aa91"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","664df74bd16e491a3c3966f6c4171fab"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","8a0179136e179011365506d3014b519e"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","d0f990631b18e1e6916decbf2fae710e"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","608c7e5f257f413fbddf4ddcb171e241"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","aa7ad2e6139cd4cff8481392ea92c9d1"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","ce65d8144e96074c3dd492923b9529f4"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","f2da6ecabb15b42545911042654e87ce"],["/2017/09/08/编写Webpack插件笔记/index.html","5c6df30843d2bf39f068beae0b96c8da"],["/2017/11/30/Mobx学习笔记/index.html","4fa52396baf380bb8d575b0858f6275c"],["/2017/11/30/Test-travis-ci/index.html","b4af33e3cd49e63b080c376530b502b8"],["/2017/12/01/Use-flow-type-in-React-project/index.html","47008d335312b5d50188b040e82d893c"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","0c34d4c9834907acc175394e19f738e1"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","38ddcb0d9aba30749f9a2a5b7e4e531e"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","607c6e6eef6447ae101ca811f0453bd2"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","3f36d707263310f42a83686ba640b953"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","8ad542fc1a7d8a923ab100f741f9661c"],["/2018/07/31/SDT自我决定理论/index.html","dac468db5884fc11fa03934e05a8fdd6"],["/2018/08/04/React16源码解析-As-required-order/index.html","26e76b7982dd1b011ff63459c1dcb7af"],["/2018/08/05/React16源码解析（Fiber）/index.html","80939894a9e9c6ab658a1eeb1ac2f070"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","fbf3b98f4c8fe263749c8225c8431347"],["/2018/08/27/释放webpack的真正潜力/index.html","48d15639f10058c754f18c5b3aa95edb"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","9ac9a251a728501abe3379c51f873372"],["/2018/09/17/升级到Babel-7的经验/index.html","008c00a57f1b3932a430d9ea8d6a58f3"],["/2018/10/16/React-tip组件的设计/index.html","b0d906ff0bd76d5ce8ad7cc7f282bd24"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","054c4ae94e5ceb4250b347b1cd79340d"],["/2018/12/08/jenkins问题定位/index.html","273347b008806bfd88dbe969a7f7aac2"],["/2018/12/21/React-SSR实践-压测/index.html","f6f3b12c6e75fac5657cb1ba6af313f3"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","34610459c1c1efb41095467333c08253"],["/2019/01/21/item2-profile-config/index.html","afb1efd2b61d3dce301dbb7e0e961290"],["/2019/01/22/i18n-about-Access-Language/index.html","4abeba391f0f6d307094486e8711fe38"],["/2019/02/27/Node-C-addon-学习笔记/index.html","46c90fe197417c301c82225f88266cf5"],["/2019/05/16/Modern-Crusaders/index.html","0d284590684aaaa5b1833fcc3e7f2aa2"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","c67332e626d25bb49ed971169e5d5654"],["/2019/08/28/关于docker使用的一些记录/index.html","5ed8da8564d3bbbac3ac4ae93735a31b"],["/2019/08/30/全干工程师的基本素养/index.html","e5e56976127260e877c8b9e7cbcc348a"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","7ad4fc5d388212ed0500603b352a4dbb"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","bf3e2486d30f84edfd94cdce3cac84cc"],["/2019/12/02/One-example-of-Typescript-generics/index.html","f671cacf718ceaec1e48987b6a542669"],["/2019/12/04/有趣的上网冲浪之旅/index.html","3ea477fecf9e6b871d7feda25eb49734"],["/2020/04/17/企业微信国际化方案总结/index.html","88a31e2e68f41b16e248c75864399ac7"],["/2020/04/27/come-on-sweet-death/index.html","e7db3b483f3b46b67d195e32625b1575"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","f3c2dcea4ccf861e3c24b0c97280ce11"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","dc68a50e490cb4f0f9d25a66ac054343"],["/2020/05/28/525-Contiguous-Array/index.html","f8f5554eeb532c8ba94822518f424688"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","9708a41a4483c98c50a707ea42693b47"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","2e3a32cbfa36b54795d3498eebcf844a"],["/2020/07/21/Node-js-与-epoll/index.html","d82a8966436c82a6aac38e26247a4b5b"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","572e30dff6f27001027e0ba3f78d100e"],["/2021/03/02/总结一些测试vue组件的经验/index.html","b93ce111810d296fb7806627880bb9f9"],["/2021/03/15/Purpose/index.html","27d74465e34f7227c38860f68ab9e30e"],["/2021/03/16/和安全团队的斗智斗勇/index.html","cf211496878ddc261ffe08ca54d13bc9"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","52e42a9d5ba20967d8551f1e5a0e31e5"],["/2022/08/10/关于图片处理的一些事情/index.html","340d2c8667079b9ee31a36d7851a61dd"],["/404.html","8fb9f3b56368f15dfb375f85dac2b538"],["/about/index.html","72ff754dfac2021ee4f4beec41283207"],["/alice/img/01-ee2afe4f.jpg","39e62f8071c9bdf639f9186586bac0d2"],["/alice/img/02-96824f07.jpg","64645e2c85a214b332a34ebe606e9594"],["/alice/img/03-23094728.jpg","63f66b53e5b6e683558e3f70322432d1"],["/alice/img/04-375511e8.jpg","96b4091365279ae4e8ae51178a1074a6"],["/alice/img/05-2c5411f3.jpg","762f319cf2c7c388422be056041c56d0"],["/alice/img/06-decdf5e5.jpg","c60bbd607622944fb62a9256b7271075"],["/alice/img/07-9961af6e.jpg","d56676e6cc1b0f04c47853c7b0e95210"],["/alice/img/08-1e8905b7.jpg","5b3d0a1a57c2c0a63a013468e1f5884d"],["/alice/img/09-539af5f7.jpg","43402b92a8631f8d20bef368cef62b18"],["/alice/img/10-6091866b.jpg","0ccaac8de2718f13fb14c7afbbed1148"],["/alice/img/11-3e7516be.jpg","1fe9a3e30382089df89fcfe8aeb08f79"],["/alice/img/12-44268290.jpg","77fdc8e64a1ca98b2a18b99da9080c7f"],["/alice/img/13-9709db5b.jpg","f3eb6bd562d4262be3d9c7b897e2fc01"],["/alice/img/14-8bc800ac.jpg","a82a48d79aee1576b8226886fbb1e0db"],["/alice/img/15-a4047faa.jpg","b5b18c458786814f17c82b9bf391d75c"],["/alice/img/16-90e2ffc1.jpg","e18cd3b54a177d07b7d18ff992c1fbfb"],["/alice/img/17-4368884f.jpg","7fd2ab2e166fff8492af153f18571f74"],["/alice/img/18-f5e3f4c2.jpg","ba37b92e8f7fd41aa6023cf543e2f439"],["/alice/img/19-f4abf441.jpg","b4f6d55cc6d899580f8512727b77da82"],["/alice/img/20-b507f3f1.jpg","49815bc5b293f2c529816f6d73957140"],["/alice/img/21-4443a8ca.jpg","45a1f9bee04a883bc38521f116906f7a"],["/alice/img/22-56791f9a.jpg","9081d516adf4ddc86a5815df6a84fd3b"],["/alice/img/23-4ed30ac3.jpg","f1fbcd83ee3324368ba221558161ffce"],["/alice/img/24-575b30a3.jpg","55222c430fe7e5ed765b07071e6e2a33"],["/alice/img/25-ba06fa1c.jpg","f48b11b2740c2394f290d3a79e64c7ed"],["/alice/img/26-19025568.jpg","e5f69935d8d8b58076328f7d3e84bdff"],["/alice/img/27-a4199bd1.jpg","353d507bda21f194a587fdc73866e948"],["/alice/img/28-f006b3bc.jpg","b8ed99d902f6a016c0166d1ebc746806"],["/alice/img/29-fdd6489b.jpg","8ac441b95700656fee98af35641c5ef9"],["/alice/img/30-6065962a.jpg","b5b1abbe5e92d87a8c200c850d840aed"],["/alice/img/31-3a7202d4.jpg","d25d4efee045e5a1fc4e40b67e8e8897"],["/alice/img/32-2ce354bd.jpg","4b72b9063aec44f022251b3d6fb5f2f4"],["/alice/img/33-3a4da03e.jpg","f7bafaf4d11aa6f484e7527ada4992c5"],["/alice/img/34-69bdf272.jpg","d38bebb6a697aa09cd13d66d46e001d3"],["/alice/img/35-f1c7565b.jpg","c1ac592eedeb8de92f221f9ad79c28d4"],["/alice/img/36-622e264d.jpg","21cb2723dc95eaa7fa018b49d8009746"],["/alice/img/37-baf33a74.jpg","fe03020abefec246fc5591a04326fcc8"],["/alice/index.html","43ea91ed2a6ff4a3ff369e87e1dbaf61"],["/archive/index.html","01ec3fbb09a43c97683fca167d15f522"],["/archives/2016/07/index.html","6f11609bc36fe660001bc699b187aa4b"],["/archives/2016/08/index.html","33ecde62eaa8a7070006513126e14c65"],["/archives/2016/09/index.html","c6532014b148b6e3db178b11bf63e5db"],["/archives/2016/11/index.html","62f089334a759bd915ac839a0591665a"],["/archives/2016/11/page/2/index.html","8108b27791ad4e0497def6dcd6a2f224"],["/archives/2016/12/index.html","c1ab943dfea56d4fe7e638b9d99e9d5e"],["/archives/2016/12/page/2/index.html","b42a476f1b238200b571eefce3ed6c73"],["/archives/2016/index.html","7e3cdbcd60c95d3e1058cfad44df10f9"],["/archives/2016/page/2/index.html","d2f9dd29f4a9f478e1c1fbef926bc9fb"],["/archives/2016/page/3/index.html","11916c463b9f77c02cfc545b74a41260"],["/archives/2016/page/4/index.html","e0a60ad0edbd57074c8f2c910ed2c108"],["/archives/2017/01/index.html","d1cf87916ec6dd238c75681681b601a6"],["/archives/2017/01/page/2/index.html","b78fbea4a1f1d7e4354c5ee89faae334"],["/archives/2017/02/index.html","bbbdd6a4a1d29cf31372ad1fef2f151b"],["/archives/2017/03/index.html","368522551509c6dfdbd0c04c4160f63a"],["/archives/2017/04/index.html","9511a9eb8b42138903bd7114ce375f06"],["/archives/2017/06/index.html","a2f35b1b59bf1689078d8a3e2716186f"],["/archives/2017/09/index.html","2e3aee8898443c8866a1ba119e81205e"],["/archives/2017/11/index.html","880e1c55c9679fca186471afef86c8da"],["/archives/2017/12/index.html","2178cdf43d16fabb0f2b5887866389be"],["/archives/2017/index.html","a320d08c06176ee29d4d126925e216dc"],["/archives/2017/page/2/index.html","a30a3fdc3e2d2ab2279c11ea44689192"],["/archives/2017/page/3/index.html","78855caac493c2d16ae1f9ea548ca012"],["/archives/2017/page/4/index.html","e453949c82c424156c786e44812bf0b8"],["/archives/2018/06/index.html","462f32f3635d64fda4c509e7c373bc5e"],["/archives/2018/07/index.html","3774411f280716ea3d5f9f11567e2995"],["/archives/2018/08/index.html","aa52a87443120ac0a1c54a31a66f3421"],["/archives/2018/09/index.html","a48c845b167ae1f6cf51336c380d754d"],["/archives/2018/10/index.html","6ec4cb2aa4647cec2524b1fb7d1dc11c"],["/archives/2018/11/index.html","d2e472d841a6fe507b9954e1e041e2c2"],["/archives/2018/12/index.html","1fa8d023fdc5ce9ba89d1de4ea3646b6"],["/archives/2018/index.html","f2fc25704cc235bd246bde2d8f25f8f0"],["/archives/2018/page/2/index.html","e9ef758eeb6da704ab12c66bb3180247"],["/archives/2019/01/index.html","881e62ae04d274e0f4090d02de5996de"],["/archives/2019/02/index.html","13ad799c414676aebb579330a90128a8"],["/archives/2019/05/index.html","4fba69a2e7b5e6bc6d813733a58543b1"],["/archives/2019/08/index.html","2dccbfd083536a1ebc0bbe0255660490"],["/archives/2019/10/index.html","98a29ae2d69c396b08d14ac881f5ea22"],["/archives/2019/11/index.html","02219997f95486b63abf6794826d5423"],["/archives/2019/12/index.html","3e79f8dbbd410afd2151a2f5afe837cb"],["/archives/2019/index.html","cfd54d0382702f4a0ff9a932226783ca"],["/archives/2019/page/2/index.html","2ebfa06264b64761fa2e47a353b626b7"],["/archives/2020/04/index.html","f5d7c4805ebc79b3e54cc70a1926c7e4"],["/archives/2020/05/index.html","052c73e1d0b3d55f55e90d02fc039982"],["/archives/2020/06/index.html","b887765a09e0283573e10596a0944b0a"],["/archives/2020/07/index.html","8ec3e0d1e4c825c874b699dc12157c21"],["/archives/2020/index.html","11f2973baba1062ac556864436566bf8"],["/archives/2021/01/index.html","5399c36c0685cbf5016986e21629f7fd"],["/archives/2021/03/index.html","c910b13dae303241778aeac3111e194f"],["/archives/2021/10/index.html","0b4023913db6f18f0d6e4da481a4f742"],["/archives/2021/index.html","722e99093c88e4c78ef44c4cb7b01fa0"],["/archives/2022/08/index.html","ef96cebc4391e413ecdeb568ac47b673"],["/archives/2022/index.html","7d8880cffad23a51513a0e0ccc558131"],["/archives/index.html","f2c2fb966845302e63a49e4c04396cbe"],["/archives/page/10/index.html","a03f98713719effe788e6cef5079fd79"],["/archives/page/11/index.html","227d6ca3be7eaa777d8c30eed974fa61"],["/archives/page/12/index.html","d9ddb7ff18e134a8b6ad329f534f4446"],["/archives/page/2/index.html","187711e94adbf09a3773e2ff8a915d40"],["/archives/page/3/index.html","adf320f17c32e5957ae066d4569417fb"],["/archives/page/4/index.html","9f632a9ffc80e4cad8595c5d6bdc14ec"],["/archives/page/5/index.html","ed754480b01ed6241fbed58e7f072843"],["/archives/page/6/index.html","6f6bd154bc05f04708a9811952104609"],["/archives/page/7/index.html","419158ff3061c60fa69276dd1e92bb31"],["/archives/page/8/index.html","5fc91cb7a5ecd620379ee57b07b7aeb6"],["/archives/page/9/index.html","80f734b9db8b76683a102eaa54d29afc"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","294b7a7b9da3604bb81cbdf5ffaf4155"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","02d737cc755651025b76e41a0432c745"],["/page/10/index.html","22d1f49fbea0bc400677f9d84758eae7"],["/page/11/index.html","f7fb4b541f91f50ae162f8956b37c099"],["/page/12/index.html","e0c8ddda82304f017e9479139eee30fb"],["/page/2/index.html","9a639837610188a70fab7b95752f61f7"],["/page/3/index.html","5b97a07078b868581616f1d5ae2d4961"],["/page/4/index.html","f949cce1a6a5620e552f13b3694e99ca"],["/page/5/index.html","55d71876a40ae9a9e78184f77f89c03b"],["/page/6/index.html","27a3e0567ae21cd0f6f7d2427c580c9f"],["/page/7/index.html","42765f41c045c3081e086439dd5ad6a5"],["/page/8/index.html","30e65fce7ee6373c6737f2d105cf2787"],["/page/9/index.html","bae3d00d7cc58104b32d5c5cfb21aef5"],["/sw-register.js","adb5231eaad87fdb0623885a949422b0"],["/tags/Android/index.html","9f2b4f1979eae7f66e16446af1db970b"],["/tags/Angular2/index.html","ef45dc96ab20b32f3a009af448b20dac"],["/tags/Babel/index.html","17bc660cf8ebf2a9e788fdc57c6cd666"],["/tags/C/index.html","00aa2ab6ee0b21b6b22d38d75825292c"],["/tags/CSS/index.html","681cb82321d2829c35ba542be22405bd"],["/tags/Coffeescript/index.html","f5cec6e24097e7fa8dbce6af0ecbf6d8"],["/tags/Compiler/index.html","a7e534e533007f98fd0004e8b29c2ac5"],["/tags/Component/index.html","79e91cb7b35c29fd5afdbf3e367b2514"],["/tags/Design-Pattern/index.html","e72072eabb5d59ff087b016372181db3"],["/tags/Docker/index.html","e23b50903919f84d64978111aa9576cc"],["/tags/ES6/index.html","9a72435677842738b9c65dfcdf5c66f9"],["/tags/Game/index.html","27a958b78019d471140d6bbe927fe723"],["/tags/Gulp/index.html","a5fa584efaebee4b0461a2d8f2ef86a5"],["/tags/Hybird/index.html","9e7eeb3d6d4c06b065bc8caaef6ca85c"],["/tags/JIT/index.html","37e628277da449300ed675a69d536157"],["/tags/Javascirpt/index.html","f564bfcfdb80cb753352e658721cbeb9"],["/tags/Javascript/index.html","e93eef45dcd934ea40763a8761dd2498"],["/tags/Jest/index.html","d50497f4118bf12ad086f0372429ff06"],["/tags/LeetCode/index.html","f963bd656d269e9acd1ad151e35c2062"],["/tags/LeetCode/page/2/index.html","a70fda7d753a6e4073207978691cc80d"],["/tags/LeetCode/page/3/index.html","25ccbd23eac08adee6773ea5be6e7087"],["/tags/Leetcode/index.html","e8798ed5160d000f1c60def09428e6b2"],["/tags/Linux/index.html","5171c09d1aad7c43402c437d745f1903"],["/tags/Lyrics/index.html","4d82b6097571f4266ff74ade928f0bfd"],["/tags/Mobx/index.html","780c2325519344ac9f49fca7a77f9138"],["/tags/Mocha/index.html","300d896fd27b1a68e871051adca8c0ce"],["/tags/Module/index.html","94379a6a94eb1d3ff09b73de995170e0"],["/tags/Node-js/index.html","1c008de3622fd329cf314495cedf0e9f"],["/tags/Node/index.html","7f241a92df148915fca448a43febc1ea"],["/tags/Note/index.html","4ae97547f88149fc6a7e0c55fbbbd8a7"],["/tags/Object-C/index.html","387b8645de89412432fb5feeb6f4de4b"],["/tags/Objective-C/index.html","c1ba1ab3a4699dc5f619163ee7dc5ffb"],["/tags/PHP/index.html","d60d23326085af27e9c54a7c67dbf3f8"],["/tags/Python/index.html","80eff97022560ef360dad82d384148b5"],["/tags/Python/page/2/index.html","95e69e467cc301be2f07060e16c65a2e"],["/tags/Python/page/3/index.html","bf3f07d183cbe29133535c44a6df41a1"],["/tags/React-js/index.html","5b9b919973dd946da093d75dc03e4224"],["/tags/React/index.html","16f8549404159271fb37b32b76390d8c"],["/tags/Redux/index.html","944190e2870b7712a4738e80cdd3387a"],["/tags/Require-js/index.html","5eeee28e5a6fddd0bf337a2e8e592d03"],["/tags/SSR/index.html","be42b53775de44a9cb045094b93dda82"],["/tags/SegmentFault/index.html","bf5ee71d712328bcf95b0f57925846db"],["/tags/Swift/index.html","e0ea489c8dd68a6fe34a616d81afb6e4"],["/tags/Template-Engine/index.html","ca8d068878692a6919c3ff1b2b719e1c"],["/tags/Test/index.html","247a84486ca3d5c7acc8ec8ac61bb16f"],["/tags/Twig/index.html","938e839dabfcbc5cd4eb456371acb7c6"],["/tags/Typescript/index.html","2365d2c2274f45abfe9c653de5157bce"],["/tags/V8/index.html","5fc6564989c802216336ca7bb134e881"],["/tags/WebAPI/index.html","412bb3be3f16e76659d84710a9ece629"],["/tags/Webpack/index.html","ac7731c6562ddd78ff3afc5525a9d09e"],["/tags/Webview/index.html","19faede2af4d0940e39543a149816f3a"],["/tags/Windows/index.html","b8b933af4b9a2146b117b5fdd30a37fa"],["/tags/babel/index.html","07c7e834ba29ee786e0e719718bd818e"],["/tags/base64/index.html","7eb454f46343ad4477f8e62d7fe41ba9"],["/tags/bootstrap/index.html","fdaceb98027c8bad4e13a7191a9a0f79"],["/tags/ci/index.html","c540f2c89a87e18ff95a4468a053a983"],["/tags/codepen/index.html","109e0e1fe9f710bee988fa7b6e43c950"],["/tags/compact/index.html","c8b83424e7456e75f4ff6311019649bf"],["/tags/css/index.html","c67a2c00ea035cc4bd03dff4dca34e39"],["/tags/database/index.html","10166a51506cc6d14671ef18322fbdc1"],["/tags/docker/index.html","e2528f5902584f754ccc238e40540b8a"],["/tags/event/index.html","63803d811f2d64b5ae77d750cb839612"],["/tags/facebook/index.html","6bf73d020cfc9caa94c0a8c2f08342ec"],["/tags/flask/index.html","e11abcd6fe055a90b38de174c327c6f5"],["/tags/flow/index.html","0f90ea54e89ee122b4ef0fc4feb95f02"],["/tags/i18n/index.html","288e45d92009ea96dbed45420e6666f7"],["/tags/iOS/index.html","5070921bdcdae95482b7a7eb65f82962"],["/tags/iOS/page/2/index.html","e5e7628c3728ea36a9dd5d69181d4a32"],["/tags/index.html","70f10a246f5e5dc2e9b06892fb841049"],["/tags/javascirpt/index.html","2722e3cd12aedd6a7db86edf3c72eb04"],["/tags/jest/index.html","037b94591213cf1a67db9cbf3bb6a8ad"],["/tags/jquery/index.html","bac0fd725ba8b7dcf2c7b2fa21064356"],["/tags/life/index.html","7e6e0983dc46d20d60531ba167b7e33b"],["/tags/lyrics/index.html","4562c6eed5852c08a6717c3386d8f20d"],["/tags/node/index.html","0a495565c3373d539b61bd534079029a"],["/tags/npm/index.html","8d5b2bc0d86b55923a84d85e94a1313b"],["/tags/pwn/index.html","8e3b7f9c5571f7f27e79d829c32dfaf9"],["/tags/python/index.html","1db335790394153c39d0dab11481df4f"],["/tags/reactive/index.html","3a057394fd68329a3dcb0f40b47b1ada"],["/tags/shell/index.html","77f0547a99c676ede38c8bd8e6e40b3e"],["/tags/ssh/index.html","9e8cb5162fd9ec389806e2b411a64f8c"],["/tags/svg/index.html","19622b6d05625f83a5a1b36713642838"],["/tags/translate/index.html","1c388b74066418d89cebcb3bc534551d"],["/tags/translation/index.html","6d8e2c47986501a23e5abe4d06198ab3"],["/tags/typescript/index.html","1c4b449b67e91c8ecac573884a81eaf0"],["/tags/underscore/index.html","b479ae0174a15f465ba686bb749fcae4"],["/tags/video-js/index.html","4a0848e71b0c2f3292488322e6fe3ec3"],["/tags/webpack/index.html","30051955a745890c85a96a75395acb58"],["/tags/web安全/index.html","0885537d78f85a5d50995a69074ca0ee"],["/tags/函数式编程/index.html","22d62981ef244094d1bc9d68253c6a42"],["/tags/各种开发者大会/index.html","84f56a9ebdde643dd018e4b197a26b1f"],["/tags/文档/index.html","e2471ab0c3ad57276deca698f5416ac8"],["/tags/构建工具/index.html","ce631d3b5f964cac5b68619fd3f170a0"],["/tags/测试/index.html","5875d3315be6f3f3167f4d123627408c"],["/tags/生活/index.html","4248a616deaf61c3f6d40933c070d197"],["/tags/笔记/index.html","4ff2f518ab5f8e898da3904716ce724d"],["/tags/读书笔记/index.html","7625fa1d3d88e6aaaaa0b10d61dba225"],["/tags/逆向/index.html","1e4e5433a6b11c2df164f387e3b031a0"],["/tags/随笔/index.html","10e56a868e2eadba7c7ca1c36a0ff221"],["/tags/－-Test-Karma/index.html","e8d10dfd4ade7284e9ff8bd9ad2dcb7f"],["/tags/－-杂谈/index.html","294e9476ce355b80dbb09ecc186f05a9"],["/tags/－生活/index.html","f22660c4f9863a7c40039c8c872dd880"]];
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
