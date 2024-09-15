import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as l,a,b as i,d as p,e}from"./app-20cb2ce2.js";const s={},c=e('<h1 id="apache-spark" tabindex="-1"><a class="header-anchor" href="#apache-spark" aria-hidden="true">#</a> Apache Spark</h1><ul><li>Offers over 80 operators.</li><li>Languages binding Scala,Java,SQL, Python(PySpark),R(SparkR).</li><li>RDD:in-memory cache &gt; &quot;Up to 100x faster than MapReduce&quot;</li><li>Deployment standalone,<strong>YARN,</strong> Mesos, Kubernetes(containers)</li><li>External storage systems:HDFS, HBase,Amazon S3,Azure Storage,Azure Datalake,Google Cloud Storage,Cassandra, Alluxio,.…</li></ul><h2 id="build-in-libraries" tabindex="-1"><a class="header-anchor" href="#build-in-libraries" aria-hidden="true">#</a> Build-in Libraries</h2>',3),g=a("li",null,"Spark SQL: processing structured data with relational queries(newer API than RDDs->DataFrame API)",-1),d=a("li",null,"Spark Structured Streaming: processing structured data streams with relation queries",-1),h={href:"http://spark.ml",target:"_blank",rel:"noopener noreferrer"},u=a("li",null,[i("GraphX: distributed graph-processing "),a("ul",null,[a("li",null,"Page Ranking,Recommendation Systems, financial Fraud Detection, Geographic Information Systems,...")])],-1),f=e('<h2 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture" aria-hidden="true">#</a> Architecture</h2><ul><li>One <strong>Master node</strong> + multiple <strong>Worker nodes</strong></li><li>Equivalent to <strong>Hadoop&#39;s Master</strong> and <strong>Slave nodes</strong>.</li></ul><img src="https://pic.hanjiaming.com.cn/2024/05/07/a457797633715.png" alt="CleanShot 2024-05-07 at 23.28.23@2x.png" style="zoom:33%;"><p>Key Elements of a Spark Cluster</p><ul><li>Spark Driver: your Spark application that launches the main method</li><li>Cluster Manager: manages the resources of a cluster <ul><li>Support YARN,Kubernetes(K8S),Mesos,or Spark Standalone</li></ul></li><li>Workers：集群中任何可以运行应用程序代码的节点。</li><li>Executors: Executors are worker nodes&#39; <strong>JVM processes</strong> in charge of running individual tasks in a given Spark job.</li></ul><h2 id="runs-on-kubernetes" tabindex="-1"><a class="header-anchor" href="#runs-on-kubernetes" aria-hidden="true">#</a> Runs on Kubernetes</h2><p>Each Spark app is <strong>fully isolated from the others</strong> and <strong>packages its own version of Spark and dependencies</strong> within a Docker image.</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/07/6b61af814d4e4.png" alt="1715096544157.png" tabindex="0" loading="lazy"><figcaption>1715096544157.png</figcaption></figure><h2 id="runs-on-yarn" tabindex="-1"><a class="header-anchor" href="#runs-on-yarn" aria-hidden="true">#</a> Runs on Yarn</h2><figure><img src="https://pic.hanjiaming.com.cn/2024/05/07/471d128823455.png" alt="1715096652353.png" tabindex="0" loading="lazy"><figcaption>1715096652353.png</figcaption></figure><p>Spark Executors Runs on Yarn</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/07/b90b2a21ef50f.png" alt="1715097532139.png" tabindex="0" loading="lazy"><figcaption>1715097532139.png</figcaption></figure><h2 id="run-schedule-tasks" tabindex="-1"><a class="header-anchor" href="#run-schedule-tasks" aria-hidden="true">#</a> Run Schedule Tasks</h2><p>Schedule Tasks to run on Executors</p><ul><li>执行器启动一次，可被多个任务和所有后续任务使用</li><li>任务总数取决于 RDD 分区的数量</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/b111f17e2b52b.png" alt="1715101694531.png" tabindex="0" loading="lazy"><figcaption>1715101694531.png</figcaption></figure><h2 id="spark-driver" tabindex="-1"><a class="header-anchor" href="#spark-driver" aria-hidden="true">#</a> Spark Driver</h2><p>任何 Spark 驱动程序应用程序中最重要的步骤是生成 SparkContext。</p><ul><li>Spark Driver 程序使用 SparkContext 通过资源管理器（例如 Yarn）连接到集群。</li><li>SparkContext 存储配置参数： <ul><li>例如，应用程序名称、集群的主 URL、资源请求（执行器数量、执行器内存/核心数）、...</li></ul></li></ul><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/170bcf623d9aa.png" alt="1715101780851.png" tabindex="0" loading="lazy"><figcaption>1715101780851.png</figcaption></figure><div class="hint-container note"><p class="hint-container-title">SparkContext: PySpark Example</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/8b346b7a744a9.png" alt="1715101875252.png" tabindex="0" loading="lazy"><figcaption>1715101875252.png</figcaption></figure></div><h2 id="cluster-managers" tabindex="-1"><a class="header-anchor" href="#cluster-managers" aria-hidden="true">#</a> Cluster Managers</h2><p>Spark Supported Cluster Managers</p><ul><li>Spark Standalone Mode <ul><li>使用 Spark 自带的集群管理器。</li></ul></li><li>YARN - the resource manager since Hadoop 2.X. <ul><li>更丰富的调度能力：FIFO、Capacity、Fair调度器。</li></ul></li><li>Kubernetes (&gt; Spark 2.3) <ul><li>K8S 创建执行器 pod 来运行 Spark 应用程序，每个执行器一个 pod！</li></ul></li><li>Mesos - Deprecated as of Apache Spark 3.2.0</li></ul><h2 id="how-to-run" tabindex="-1"><a class="header-anchor" href="#how-to-run" aria-hidden="true">#</a> How to run</h2><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/e4056633c7130.png" alt="1715102039480.png" tabindex="0" loading="lazy"><figcaption>1715102039480.png</figcaption></figure><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/7b3f124e9841d.png" alt="1715102086137.png" tabindex="0" loading="lazy"><figcaption>1715102086137.png</figcaption></figure><h3 id="method-1-spark-submit" tabindex="-1"><a class="header-anchor" href="#method-1-spark-submit" aria-hidden="true">#</a> Method 1: Spark-Submit</h3><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/aa59038405012.png" alt="1715143599474.png" tabindex="0" loading="lazy"><figcaption>1715143599474.png</figcaption></figure><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/64926e5dd7d22.png" alt="1715143627926.png" tabindex="0" loading="lazy"><figcaption>1715143627926.png</figcaption></figure><p>Use spark-submit to run PySpark Application</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/5be84756da855.png" alt="1715143707486.png" tabindex="0" loading="lazy"><figcaption>1715143707486.png</figcaption></figure><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/3f71e7ba37688.png" alt="1715144729961.png" tabindex="0" loading="lazy"><figcaption>1715144729961.png</figcaption></figure><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/07b88dcf5071b.png" alt="1715144790262.png" tabindex="0" loading="lazy"><figcaption>1715144790262.png</figcaption></figure><h3 id="method-2-spark-shell" tabindex="-1"><a class="header-anchor" href="#method-2-spark-shell" aria-hidden="true">#</a> Method 2: spark-shell</h3><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/12e03386b5ba5.png" alt="1715144935943.png" tabindex="0" loading="lazy"><figcaption>1715144935943.png</figcaption></figure><p>Use PySpark as a Python shell</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/bcfba23ebbc27.png" alt="1715144958293.png" tabindex="0" loading="lazy"><figcaption>1715144958293.png</figcaption></figure><h2 id="deploy-modes" tabindex="-1"><a class="header-anchor" href="#deploy-modes" aria-hidden="true">#</a> Deploy Modes</h2><h3 id="spark-execution-with-yarn-cluster-mode" tabindex="-1"><a class="header-anchor" href="#spark-execution-with-yarn-cluster-mode" aria-hidden="true">#</a> Spark Execution with Yarn: Cluster Mode</h3><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/d9cfeeac7bf03.png" alt="1715145158487.png" tabindex="0" loading="lazy"><figcaption>1715145158487.png</figcaption></figure><h3 id="client-mode" tabindex="-1"><a class="header-anchor" href="#client-mode" aria-hidden="true">#</a> Client Mode</h3><p>Spark 驱动程序在提交作业的主机上运行</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/f9639b9f5d9e6.png" alt="1715145210037.png" tabindex="0" loading="lazy"><figcaption>1715145210037.png</figcaption></figure><p>ApplicationMaster 只负责向 YARN 请求执行容器。容器启动后，客户端与容器通信，直接安排工作。</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/363dcf6dc80b1.png" alt="1715145317387.png" tabindex="0" loading="lazy"><figcaption>1715145317387.png</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">Cluster Mode vs. Client Mode</p><p>Client mode: (Interactive)</p><ul><li>用于调试或希望以交互方式快速查看输出。</li><li>如果客户端不在群集中，则会遭受更高的延迟。</li><li><strong>仍需要 ApplicationMaster（占用 1 个 Yarn 容器，但驱动程序代码不在其中运行）</strong></li></ul><p>Cluster mode: (Non-interactive)</p><ul><li>Used for applications in production.</li><li>Spark Driver 和 Spark Executor 受到 YARN 自动故障恢复的监督。</li><li>Not supported for spark-shell 和 PySpark.</li></ul><div class="hint-container note"><p class="hint-container-title">View ApplicationMaster &amp; Executor Processes at a Worker Node</p><p>ApplicationMaster 在 Spark 中的进程名称是 ExecutorLauncher。</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/08/b79c9fa9a9b67.png" alt="1715145527742.png" tabindex="0" loading="lazy"><figcaption>1715145527742.png</figcaption></figure></div></div>',47);function m(b,k){const n=t("ExternalLinkIcon");return o(),l("div",null,[c,a("ul",null,[g,d,a("li",null,[i("MLlib: Spark's machine learning (ML)library "),a("ul",null,[a("li",null,[i("(new) DataFrame - based API in the "),a("a",h,[i("spark.ml"),p(n)]),i(" package")])])]),u]),f])}const y=r(s,[["render",m],["__file","spark.html.vue"]]);export{y as default};
