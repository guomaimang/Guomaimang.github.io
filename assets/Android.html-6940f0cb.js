import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as a,a as e,b as i,d as t,e as n}from"./app-20cb2ce2.js";const c={},s=n('<h1 id="android-应用开发" tabindex="-1"><a class="header-anchor" href="#android-应用开发" aria-hidden="true">#</a> Android 应用开发</h1><p>Android 是一个基于Linux内核的操作系统。Android 是在 <em>Android</em> <em>Open Source</em> <em>Project</em>（AOSP）中开发的。这个项目是由谷歌领导的。</p><p>Android 操作系统可分为四个区域，如下图所示。 Android 应用程序开发人员通常使用上面的两个层来创建新的 Android 应用程序。</p><p>级别可以描述为：</p><ul><li>应用程序: 包含应用程序，如浏览器、相机、图库、音乐和电话</li><li>应用程序框架: 允许与 Android 系统进行高级交互的 API</li><li>Libraries and runtime: 多常见框架功能的库，如图形渲染、数据存储、网络浏览。还包含Android runtime，以及运行Android应用程序的核心Java库。</li><li>Linux kernel - 底层硬件的通信层</li></ul><h2 id="system-structure" tabindex="-1"><a class="header-anchor" href="#system-structure" aria-hidden="true">#</a> System Structure</h2><img src="https://pic.hanjiaming.com.cn/2022/10/21/abc5f24e86043.png" alt="1666285552943.png" style="zoom:50%;"><h2 id="application-components" tabindex="-1"><a class="header-anchor" href="#application-components" aria-hidden="true">#</a> Application Components</h2><p>App components 是 Android 应用程序的基本构件。每个组件都是一个入口点，系统或用户可以通过它进入你的应用程序。一些组件依赖于其他组件。</p><ul><li>Activities: 一个 activity 与用户互动的入口。它代表一个具有用户界面的单一屏幕。</li><li>Services: 它是一个在后台「background」运行的组件，执行长期运行的操作或为远程进程执行工作。一个服务不提供一个用户界面。</li><li>Broadcast receivers: broadcast receiver 是一个组件，它使系统能够在常规用户流之外向应用程序提供事件，使应用程序能够响应全系统的广播公告。</li><li>Content providers: A content provider 管理一组共享的应用程序数据，你可以将这些数据存储在文件系统、SQLite数据库、网络上，或任何其他你的应用程序可以访问的持久性存储位置。</li></ul><h2 id="the-manifest-file" tabindex="-1"><a class="header-anchor" href="#the-manifest-file" aria-hidden="true">#</a> The manifest file</h2><p>在Android系统启动一个app组件之前，系统必须通过读取 app 的 manifest 文件Android Manifest.xml 来知道该组件存在。您的应用程序必须在此文件中声明其所有组件，该文件必须位于应用程序项目目录的根目录中。</p><p>The manifest 除了声明应用程序的组件外，还做了一些事情，比如说以下</p><ul><li>识别应用程序需要的任何用户权限，如互联网访问或对用户联系人的读取访问。</li><li>根据应用程序使用的API，声明应用程序所需的最小API级别。</li><li>声明应用程序使用或需要的硬件和软件功能，如摄像头、蓝牙服务或多点触控屏幕。</li><li>声明应用程序需要链接的API库（除Android框架API外），如Google Maps库。</li><li>强烈建议您通过网站组件查看Android Manifest.xml中关于如何声明组件、声明组件功能和声明应用需求的解释和示例</li></ul><h2 id="development-environment" tabindex="-1"><a class="header-anchor" href="#development-environment" aria-hidden="true">#</a> Development Environment</h2>',15),u=e("li",null,"你需要一套工具来开发Android手机应用程序",-1),p={href:"https://developer.android.com/studio/index.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developer.android.com/studio/install.html",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"如果你的应用程序需要满足一些特殊的要求，你需要下载适当版本的JAVA（配置环境变量）或自己下载SDK。",-1),g={href:"https://developer.android.com/studio/intro/index.html",target:"_blank",rel:"noopener noreferrer"},f=n('<h2 id="file-description" tabindex="-1"><a class="header-anchor" href="#file-description" aria-hidden="true">#</a> File description</h2><p>The most frequently used are res, java, AndroidManifaest.xml and the build.gradle files(Moudule).</p><p><strong>res</strong>：此文件夹将包含您的应用程序可能需要的所有资源（也称为外部数据文件）。它包含所有非代码资源，如 XML 布局、UI 字符串和位图图像，分为相应的子目录。有关所有可能的资源类型的更多信息，请参阅提供资源。</p><ul><li>res/drawable。这个文件夹将存放你可以在你的应用程序中使用的图像和动画文件。</li><li>res/mipmap：用于不同启动器图标密度的可绘制文件。 <ul><li>它已经包含了一个 &quot;png &quot;文件，该文件代表了一旦你的应用程序被安装，Android将使用的图标。</li></ul></li><li>res/layout: 这个文件夹将存放XML布局文件，应用程序可以用它来构建用户界面。 <ul><li>它已经包含了一个叫做 &quot;main.xml &quot;的文件，它为你的 &quot;HelloAndroid &quot;活动类定义了用户界面。双击这个文件将打开Android UI编辑器，你可以用它来帮助生成XML布局文件。</li></ul></li><li>res/values: 这个文件夹将存放包含价值类型资源的文件，如字符串和整数常量。 <ul><li>它已经包含了一个名为 &quot;strings.xml &quot;的文件。双击这个文件将打开Android资源编辑器。注意，那里已经有一个名为 &quot;app_name &quot;的字符串。如果你选择这个值，在编辑器的右侧你应该看到你在项目创建向导中输入的应用程序名称。你可以使用这个编辑器来为你的应用程序添加新的资源。</li></ul></li></ul><p><strong>AndroidManifest.xml</strong>: 在安卓系统启动一个应用组件之前，系统必须通过读取应用的清单文件知道该组件的存在。你的应用必须在这个文件中声明它的所有组件，这个文件必须在应用项目目录的根部。更多信息请参考AndroidManifest.xml。</p><figure><img src="https://pic.hanjiaming.com.cn/2022/10/21/f33364177a1a0.png" alt="1666330294841.png" tabindex="0" loading="lazy"><figcaption>1666330294841.png</figcaption></figure><ul><li>这里的<code>&lt;application&gt;</code>...<code>&lt;application&gt;</code>标签包含了与应用程序相关的组件。属性<code>android:icon</code>将指向<code>res/drawable-hdpi</code>下可用的应用程序图标。该应用程序使用位于drawable文件夹中的名为<code>ic_launcher.png</code>的图片。</li><li><code>&lt;activity&gt;</code>标签用于指定一个活动，<code>android:name</code>属性指定活动子类的完全合格的类名，<code>android:label</code>属性指定一个字符串，作为活动的标签。你可以使用<code>&lt;activity&gt;</code>标签指定多个活动。</li><li><code>&lt;intent-filter&gt;</code>的<code>&lt;action&gt;</code>被命名为<code>android.intent.action.MAIN</code>，表示该活动是应用程序的入口。<code>&lt;intent-filter&gt;</code>的类别被命名为<code>android.intent.category.LAUNCHER</code>，表示该应用程序可以从设备的启动器图标中启动。</li><li><code>@string</code>指的是<code>strings.xml</code>文件中的字符串。因此，<code>@string/app_name</code>指的是<code>strings.xml</code>文件中定义的<code>app_name</code>字符串，也就是 &quot;HelloAndroid&quot;。类似的方式，其他字符串也会被填充到应用程序中。请注意，上面两个图有不同的标签分配。<code>@string/...</code>，它是一个引用变量，用来引用包含我们想要显示的文本的资源。在这种情况下，我们通过使用<code>@</code>符号，然后是资源的可变体类型（这是一个 &quot;String&quot;），然后是可变体的名称（这是 &quot;app_name&quot;）。</li><li>以下是您将在 <code>manifest</code> 中使用的标签列表，以指定不同的Android应用程序组件 <ul><li><code>&lt;activity&gt;</code>elements for activities</li><li><code> &lt;service&gt;</code> elements for services</li><li><code>&lt;receiver&gt;</code> elements for broadcast receivers</li><li><code>&lt;provider&gt;</code> elements for content providers</li></ul></li></ul><p><strong>Java</strong>：这包含您项目的 .java 源文件。默认情况下，它包含一个 Main Activity.java(Hello Android) 源文件，该源文件具有一个在使用应用程序图标启动应用程序时运行的 activity 类。</p><ul><li>这里，R.layout.activity_main指的是位于res/layout文件夹中的main.xml文件。onCreate()方法是activity被加载时的许多方法中的一个。</li></ul><p>Build.gradle。这是一个自动生成的文件，其中包含编译SdkV版本、buildTools版本、applicationId、minSdkV版本、targetSdkV版本、versionCode和versionName。</p><p>UI 的 <strong>XML</strong> 布局已经被添加到 &quot;res\\layout\\main.xml &quot;中。虽然你可以使用Android布局编辑器来创建你的XML布局，但你也可以自己手动编码。让我们来看看这个文件。</p><ul><li><p>双击文件 &quot;main.xml&quot; 。如果你的编辑器显示 &quot;设计 &quot;窗口，点击窗口底部的 &quot;文本 &quot;标签。</p></li><li><p>顶层标签，ConstraintLayout，它定义了这个文件将使用的布局风格。这个 &quot;ConstraintLayout &quot;是一个新功能，它非常适用于用视觉方式准备界面，但不适合用XML类型来写。因为ConstraintLayout的许多用法都是拖放小部件，仅用文字或一些静态图片来表达清楚太难。因此，有兴趣的同学可以自己去学习。在后面的实验中，我们仍然会使用传统的Layout来实现界面准备。</p></li><li><p>第二层标签，TextView，它定义了一个用于显示文本的UI元素。它有三个属性，&quot;layout_width&quot;、&quot;layout_height &quot;和 &quot;text &quot;来显示。</p><p>WRAP_CONTENT意味着该视图要刚好大到足以包围其内容（加上填充）。而MATCH_PARENT意味着视图要和它的父节点一样大（减去padding）。</p><p>注意到文本属性被设置为 &quot;Hello World！&quot;。注意到，如果它被设置为&quot;@string/hello_world&quot;，它是一个引用变量，用来引用包含我们想要显示的文本的资源。因此，@string/hello_world指的是strings.xml文件中定义的hello字符串，它可以是 &quot;Hello World！&quot;。</p></li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/10/21/a98b8b64a1a09.png" alt="1666331484856.png" tabindex="0" loading="lazy"><figcaption>1666331484856.png</figcaption></figure>',13);function A(v,_){const o=l("ExternalLinkIcon");return r(),a("div",null,[s,e("ul",null,[u,e("li",null,[i("注意到谷歌拥有所有需要集成到 Android Studio 中的工具，只需通过 "),e("a",p,[i("https://developer.android.com/studio/index.html"),t(o)]),i(" 下载即可")]),e("li",null,[i("关于如何安装AS，你可以参考链接"),e("a",m,[i("https://developer.android.com/studio/install.html"),t(o)]),i(" 提供的视频教程（Win/Mac/Linux的说明）。")]),h,e("li",null,[i("Android Studio official user guide for your reference: "),e("a",g,[i("https://developer.android.com/studio/intro/index.html"),t(o)])])]),f])}const y=d(c,[["render",A],["__file","Android.html.vue"]]);export{y as default};
