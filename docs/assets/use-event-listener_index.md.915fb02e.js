import{n as c}from"./chunks/hooks.ee6b4e0e.js";import{d as r,j as l,o,c as e,t as y,e as C,D as F,G as p,B as A,R as t}from"./chunks/framework.f143b279.js";const D=r({__name:"demo",setup(E){const s=l(null),n=l(0);return c("click",()=>{n.value++},{target:s}),(a,u)=>(o(),e("button",{type:"button",ref_key:"refs",ref:s},"count: "+y(C(n)),513))}}),i=t('<h1 id="useeventlistener" tabindex="-1">useEventListener <a class="header-anchor" href="#useeventlistener" aria-label="Permalink to &quot;useEventListener&quot;">​</a></h1><p>优雅的使用 addEventListener。</p><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>',4),d=t(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useEventListener</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">keyof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HTMLElementEventMap</span><span style="color:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">eventName</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listener</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ev</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HTMLElementEventMap</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Options</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLElement</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useEventListener</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">keyof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ElementEventMap</span><span style="color:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">eventName</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listener</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ev</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ElementEventMap</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Options</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Element</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useEventListener</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">keyof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DocumentEventMap</span><span style="color:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">eventName</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listener</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ev</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DocumentEventMap</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Options</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Document</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useEventListener</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">keyof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WindowEventMap</span><span style="color:#E1E4E8;">&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">eventName</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listener</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ev</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WindowEventMap</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Options</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Window</span><span style="color:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">eventName</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">listener</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Noop</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Options</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useEventListener</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">keyof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HTMLElementEventMap</span><span style="color:#24292E;">&gt;(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">eventName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listener</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ev</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HTMLElementEventMap</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Options</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">HTMLElement</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useEventListener</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">keyof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ElementEventMap</span><span style="color:#24292E;">&gt;(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">eventName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listener</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ev</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ElementEventMap</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Options</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Element</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useEventListener</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">keyof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DocumentEventMap</span><span style="color:#24292E;">&gt;(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">eventName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listener</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ev</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DocumentEventMap</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Options</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Document</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useEventListener</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">keyof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WindowEventMap</span><span style="color:#24292E;">&gt;(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">eventName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listener</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ev</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WindowEventMap</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Options</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Window</span><span style="color:#24292E;">&gt;,</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useEventListener</span><span style="color:#24292E;">(</span><span style="color:#E36209;">eventName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">listener</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Noop</span><span style="color:#24292E;">, </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Options</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;Params&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>eventName</td><td>必填，事件名称</td><td><code> string</code></td><td>-</td></tr><tr><td>listener</td><td>必填，处理函数</td><td><code> (ev: Event) =&gt; void</code></td><td>-</td></tr><tr><td>options</td><td>可选，详见下面的 UseEventListenerOptions</td><td><code>UseEventListenerOptions</code></td><td>-</td></tr></tbody></table><h3 id="useeventlisteneroptions" tabindex="-1">UseEventListenerOptions <a class="header-anchor" href="#useeventlisteneroptions" aria-label="Permalink to &quot;UseEventListenerOptions&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>DOM 节点或者 ref</td><td><code>(() =&gt; TargetValue&lt;T&gt;) ｜ TargetValue&lt;T&gt; ｜ Ref&lt;TargetValue&lt;T&gt;&gt;</code></td><td><code>window</code></td></tr><tr><td>capture</td><td>可选，listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>once</td><td>可选，listener 在添加之后最多只调用一次。如果是 true，listener 会在其被调用之后自动移除。</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>passive</td><td>可选，设置为 true 时，表示 listener 永远不会调用 preventDefault() 。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>`,6),g=JSON.parse('{"title":"useEventListener","description":"","frontmatter":{"map":{"path":"/use-event-listener"},"realPath":"src/useEventListener/index.md"},"headers":[],"relativePath":"use-event-listener/index.md","lastUpdated":1677844606000}'),B={name:"use-event-listener/index.md"},h=Object.assign(B,{setup(E){return(s,n)=>{const a=F("demo");return o(),e("div",null,[i,p(a,{code:"%3C!--%0A%20*%20%40Descripttion%3A%20%0A%20*%20%40version%3A%20%0A%20*%20%40Author%3A%20Carroll%0A%20*%20%40Date%3A%202023-02-06%2017%3A58%3A36%0A%20*%20%40LastEditTime%3A%202023-02-07%2015%3A52%3A19%0A--%3E%0A%3Ctemplate%3E%0A%20%20%20%20%3Cbutton%20type%3D%22button%22%20ref%3D%22refs%22%3Ecount%3A%20%7B%7B%20count%20%7D%7D%3C%2Fbutton%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20useEventListener%20%7D%20from%20%22%40lemonpeel2%2Fhooks%22%0Aimport%20%7B%20ref%20%7D%20from%20%22vue-demi%22%3B%0A%0Aconst%20refs%20%3D%20ref%3CHTMLButtonElement%20%7C%20null%3E(null)%3B%0Aconst%20count%20%3D%20ref%3Cnumber%3E(0)%3B%0A%0AuseEventListener(%22click%22%2C%20()%20%3D%3E%20%7B%20count.value%2B%2B%3B%20%7D%2C%20%7B%20target%3A%20refs%20%7D)%0A%0A%3C%2Fscript%3E",highlightedCode:"%3Cpre%20v-pre%20class%3D%22shiki%20github-dark%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%26lt%3B!--%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40Descripttion%3A%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40version%3A%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40Author%3A%20Carroll%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40Date%3A%202023-02-06%2017%3A58%3A36%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40LastEditTime%3A%202023-02-07%2015%3A52%3A19%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E--%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bbutton%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Brefs%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3Bcount%3A%20%7B%7B%20count%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%20useEventListener%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3B%40lemonpeel2%2Fhooks%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bvue-demi%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Erefs%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3EHTMLButtonElement%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Enumber%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3EuseEventListener%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bclick%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%2C%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%20count.value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%2B%2B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3B%20%7D%2C%20%7B%20target%3A%20refs%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20github-light%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%26lt%3B!--%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40Descripttion%3A%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40version%3A%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40Author%3A%20Carroll%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40Date%3A%202023-02-06%2017%3A58%3A36%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E%20*%20%40LastEditTime%3A%202023-02-07%2015%3A52%3A19%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236A737D%22%3E--%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bbutton%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Brefs%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3Bcount%3A%20%7B%7B%20count%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%20useEventListener%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3B%40lemonpeel2%2Fhooks%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bvue-demi%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Erefs%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3EHTMLButtonElement%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Enumber%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3EuseEventListener%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bclick%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%2C%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%20count.value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%2B%2B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3B%20%7D%2C%20%7B%20target%3A%20refs%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/carroll/Desktop/project/lemonpeel_pro/packages/hooks/src/useEventListener/demo/demo.vue",title:"基础用法",desc:"点击按钮查看效果。"},{default:A(()=>[p(D)]),_:1}),d])}}});export{g as __pageData,h as default};
