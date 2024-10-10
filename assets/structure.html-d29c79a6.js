const e=JSON.parse('{"key":"v-753a8a37","path":"/note/cs/programming/android/structure.html","title":"App Structure","lang":"zh-CN","frontmatter":{"article":false,"date":"2024-10-08T00:00:00.000Z","index":true,"order":2,"headerDepth":2,"description":"App Structure Introduction Android应用程序由多个组件组成，包括活动（Activity）、服务（Service）、广播接收器（Broadcast Receiver）和内容提供者（Content Provider）。其中，活动是与用户交互的主要组件，而布局则定义了活动的UI。 Android Manifest file: Android清单文件（AndroidManifest.xml）是项目的核心文件之一。 它定义了应用的基本信息，如包名、组件（活动、服务、广播接收器等）以及权限声明。 每个Android应用都必须包含一个清单文件。 Java source code：Java源代码文件包含应用的业务逻辑。 所有的活动、服务和其他组件都是通过Java类来实现的。 源代码文件通常位于项目的src/main/java目录中。 Drawables： Drawables是指可绘制资源，如图像、矢量图、形状等。 它们通常存储在res/drawable目录中，用于定义应用的视觉元素。 Layout and menu files： 布局文件（layout）和菜单文件（menu）是用XML定义的，用于描述用户界面布局和菜单结构。 布局文件通常存储在res/layout目录中，而菜单文件存储在res/menu目录中。 Color list： 颜色列表文件（colors.xml）定义应用中使用的颜色值 它们通常存储在res/values/colors.xml文件中，便于在应用中统一管理颜色资源。 String / array resources： 字符串和数组资源文件（strings.xml和arrays.xml）用于定义应用中使用的字符串和数组。 它们通常存储在res/values目录中，有助于实现应用的本地化和资源管理。 Gradle configuration files： Gradle配置文件（build.gradle）定义了项目的构建配置，如依赖项、编译选项和插件。 每个项目至少有一个顶级的build.gradle文件和一个模块级的build.gradle文件。","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/cs/programming/android/structure.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"App Structure"}],["meta",{"property":"og:description","content":"App Structure Introduction Android应用程序由多个组件组成，包括活动（Activity）、服务（Service）、广播接收器（Broadcast Receiver）和内容提供者（Content Provider）。其中，活动是与用户交互的主要组件，而布局则定义了活动的UI。 Android Manifest file: Android清单文件（AndroidManifest.xml）是项目的核心文件之一。 它定义了应用的基本信息，如包名、组件（活动、服务、广播接收器等）以及权限声明。 每个Android应用都必须包含一个清单文件。 Java source code：Java源代码文件包含应用的业务逻辑。 所有的活动、服务和其他组件都是通过Java类来实现的。 源代码文件通常位于项目的src/main/java目录中。 Drawables： Drawables是指可绘制资源，如图像、矢量图、形状等。 它们通常存储在res/drawable目录中，用于定义应用的视觉元素。 Layout and menu files： 布局文件（layout）和菜单文件（menu）是用XML定义的，用于描述用户界面布局和菜单结构。 布局文件通常存储在res/layout目录中，而菜单文件存储在res/menu目录中。 Color list： 颜色列表文件（colors.xml）定义应用中使用的颜色值 它们通常存储在res/values/colors.xml文件中，便于在应用中统一管理颜色资源。 String / array resources： 字符串和数组资源文件（strings.xml和arrays.xml）用于定义应用中使用的字符串和数组。 它们通常存储在res/values目录中，有助于实现应用的本地化和资源管理。 Gradle configuration files： Gradle配置文件（build.gradle）定义了项目的构建配置，如依赖项、编译选项和插件。 每个项目至少有一个顶级的build.gradle文件和一个模块级的build.gradle文件。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-09T06:03:21.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2024-10-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-09T06:03:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"App Structure\\",\\"description\\":\\"App Structure Introduction Android应用程序由多个组件组成，包括活动（Activity）、服务（Service）、广播接收器（Broadcast Receiver）和内容提供者（Content Provider）。其中，活动是与用户交互的主要组件，而布局则定义了活动的UI。 Android Manifest file: Android清单文件（AndroidManifest.xml）是项目的核心文件之一。 它定义了应用的基本信息，如包名、组件（活动、服务、广播接收器等）以及权限声明。 每个Android应用都必须包含一个清单文件。 Java source code：Java源代码文件包含应用的业务逻辑。 所有的活动、服务和其他组件都是通过Java类来实现的。 源代码文件通常位于项目的src/main/java目录中。 Drawables： Drawables是指可绘制资源，如图像、矢量图、形状等。 它们通常存储在res/drawable目录中，用于定义应用的视觉元素。 Layout and menu files： 布局文件（layout）和菜单文件（menu）是用XML定义的，用于描述用户界面布局和菜单结构。 布局文件通常存储在res/layout目录中，而菜单文件存储在res/menu目录中。 Color list： 颜色列表文件（colors.xml）定义应用中使用的颜色值 它们通常存储在res/values/colors.xml文件中，便于在应用中统一管理颜色资源。 String / array resources： 字符串和数组资源文件（strings.xml和arrays.xml）用于定义应用中使用的字符串和数组。 它们通常存储在res/values目录中，有助于实现应用的本地化和资源管理。 Gradle configuration files： Gradle配置文件（build.gradle）定义了项目的构建配置，如依赖项、编译选项和插件。 每个项目至少有一个顶级的build.gradle文件和一个模块级的build.gradle文件。\\"}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"AndroidManifest.xml","slug":"androidmanifest-xml","link":"#androidmanifest-xml","children":[]},{"level":2,"title":"Assets","slug":"assets","link":"#assets","children":[]},{"level":2,"title":"UI Components","slug":"ui-components","link":"#ui-components","children":[{"level":3,"title":"Layouts (ViewGroups)","slug":"layouts-viewgroups","link":"#layouts-viewgroups","children":[]},{"level":3,"title":"Dialogs","slug":"dialogs","link":"#dialogs","children":[]}]},{"level":2,"title":"Activity","slug":"activity","link":"#activity","children":[]},{"level":2,"title":"Intents","slug":"intents","link":"#intents","children":[{"level":3,"title":"Component","slug":"component","link":"#component","children":[]},{"level":3,"title":"The App Chooser","slug":"the-app-chooser","link":"#the-app-chooser","children":[]},{"level":3,"title":"Intent Filters","slug":"intent-filters","link":"#intent-filters","children":[]}]},{"level":2,"title":"Jetpack Compose","slug":"jetpack-compose","link":"#jetpack-compose","children":[{"level":3,"title":"LazyColumn and LazyRow","slug":"lazycolumn-and-lazyrow","link":"#lazycolumn-and-lazyrow","children":[]},{"level":3,"title":"记忆机制","slug":"记忆机制","link":"#记忆机制","children":[]}]}],"git":{"createdTime":1728210173000,"updatedTime":1728453801000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":6}]},"readingTime":{"minutes":59.85,"words":5985},"filePathRelative":"note/cs/programming/android/structure.md","localizedDate":"2024年10月8日","excerpt":"<h1> App Structure</h1>\\n<h2> Introduction</h2>\\n<p>Android应用程序由多个组件组成，包括活动（Activity）、服务（Service）、广播接收器（Broadcast Receiver）和内容提供者（Content Provider）。其中，活动是与用户交互的主要组件，而布局则定义了活动的UI。</p>\\n<ul>\\n<li><strong>Android Manifest file</strong>: Android清单文件（AndroidManifest.xml）是项目的核心文件之一。\\n<ul>\\n<li>它定义了应用的基本信息，如包名、组件（活动、服务、广播接收器等）以及权限声明。</li>\\n<li>每个Android应用都必须包含一个清单文件。</li>\\n</ul>\\n</li>\\n<li><strong>Java source code</strong>：Java源代码文件包含应用的业务逻辑。\\n<ul>\\n<li>所有的活动、服务和其他组件都是通过Java类来实现的。</li>\\n<li>源代码文件通常位于项目的<code>src/main/java</code>目录中。</li>\\n</ul>\\n</li>\\n<li><strong>Drawables</strong>：\\n<ul>\\n<li>Drawables是指可绘制资源，如图像、矢量图、形状等。</li>\\n<li>它们通常存储在<code>res/drawable</code>目录中，用于定义应用的视觉元素。</li>\\n</ul>\\n</li>\\n<li><strong>Layout and menu files</strong>：\\n<ul>\\n<li>布局文件（layout）和菜单文件（menu）是用XML定义的，用于描述用户界面布局和菜单结构。</li>\\n<li>布局文件通常存储在<code>res/layout</code>目录中，而菜单文件存储在<code>res/menu</code>目录中。</li>\\n</ul>\\n</li>\\n<li><strong>Color list</strong>：\\n<ul>\\n<li>颜色列表文件（colors.xml）定义应用中使用的颜色值</li>\\n<li>它们通常存储在<code>res/values/colors.xml</code>文件中，便于在应用中统一管理颜色资源。</li>\\n</ul>\\n</li>\\n<li><strong>String / array resources</strong>：\\n<ul>\\n<li>字符串和数组资源文件（strings.xml和arrays.xml）用于定义应用中使用的字符串和数组。</li>\\n<li>它们通常存储在<code>res/values</code>目录中，有助于实现应用的本地化和资源管理。</li>\\n</ul>\\n</li>\\n<li><strong>Gradle configuration files</strong>：\\n<ul>\\n<li>Gradle配置文件（build.gradle）定义了项目的构建配置，如依赖项、编译选项和插件。</li>\\n<li>每个项目至少有一个顶级的build.gradle文件和一个模块级的build.gradle文件。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};