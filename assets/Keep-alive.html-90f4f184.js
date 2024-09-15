const e=JSON.parse('{"key":"v-73bc4234","path":"/note/cs/cn/Java-Socket-Programming/Keep-alive.html","title":"Keep-alive","lang":"zh-CN","frontmatter":{"article":false,"date":"2022-04-19T00:00:00.000Z","description":"Keep-alive 什么是 HTTP 持久连接？ HTTP 持久连接，也称为 HTTP keep-alive 或 HTTP 连接重用，是使用相同的 TCP 连接发送和接收多个 HTTP 请求/响应的想法，而不是为每个请求/响应对打开一个新连接。使用持久连接对于提高 HTTP 性能非常重要。 使用持久连接有几个优点，包括： 网络友好。由于 TCP 连接的设置和断开更少，因此网络流量更少。 减少后续请求的延迟。由于避免了初始 TCP 握手 持久连接允许 TCP 有足够的时间来确定网络的拥塞状态，从而做出适当的反应。","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/cs/cn/Java-Socket-Programming/Keep-alive.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"Keep-alive"}],["meta",{"property":"og:description","content":"Keep-alive 什么是 HTTP 持久连接？ HTTP 持久连接，也称为 HTTP keep-alive 或 HTTP 连接重用，是使用相同的 TCP 连接发送和接收多个 HTTP 请求/响应的想法，而不是为每个请求/响应对打开一个新连接。使用持久连接对于提高 HTTP 性能非常重要。 使用持久连接有几个优点，包括： 网络友好。由于 TCP 连接的设置和断开更少，因此网络流量更少。 减少后续请求的延迟。由于避免了初始 TCP 握手 持久连接允许 TCP 有足够的时间来确定网络的拥塞状态，从而做出适当的反应。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2022-04-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Keep-alive\\",\\"description\\":\\"Keep-alive 什么是 HTTP 持久连接？ HTTP 持久连接，也称为 HTTP keep-alive 或 HTTP 连接重用，是使用相同的 TCP 连接发送和接收多个 HTTP 请求/响应的想法，而不是为每个请求/响应对打开一个新连接。使用持久连接对于提高 HTTP 性能非常重要。 使用持久连接有几个优点，包括： 网络友好。由于 TCP 连接的设置和断开更少，因此网络流量更少。 减少后续请求的延迟。由于避免了初始 TCP 握手 持久连接允许 TCP 有足够的时间来确定网络的拥塞状态，从而做出适当的反应。\\"}"]]},"headers":[{"level":2,"title":"什么是 HTTP 持久连接？","slug":"什么是-http-持久连接","link":"#什么是-http-持久连接","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.34,"words":534},"filePathRelative":"note/cs/cn/Java-Socket-Programming/Keep-alive.md","localizedDate":"2022年4月19日","excerpt":"<h1> Keep-alive</h1>\\n<h2> 什么是 HTTP 持久连接？</h2>\\n<p>HTTP 持久连接，也称为 HTTP keep-alive 或 HTTP 连接重用，是使用相同的 TCP 连接发送和接收多个 HTTP 请求/响应的想法，而不是为每个请求/响应对打开一个新连接。使用持久连接对于提高 HTTP 性能非常重要。</p>\\n<p>使用持久连接有几个优点，包括：</p>\\n<ul>\\n<li>网络友好。由于 TCP 连接的设置和断开更少，因此网络流量更少。</li>\\n<li>减少后续请求的延迟。由于避免了初始 TCP 握手</li>\\n<li>持久连接允许 TCP 有足够的时间来确定网络的拥塞状态，从而做出适当的反应。</li>\\n</ul>","autoDesc":true}');export{e as data};
