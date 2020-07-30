(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),o=t(6),r=(t(0),t(77)),s={id:"advanced-jq",title:"Implementing JQ equivalent in Deno",sidebar_label:"Implementing JQ"},c={unversionedId:"advanced-jq",id:"advanced-jq",isDocsHomePage:!1,title:"Implementing JQ equivalent in Deno",description:"jq is like sed for JSON data, you can use it to slice and filter and map and transform structured data",source:"@site/docs/advance_jq.md",permalink:"/deno-by-example/advanced-jq",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/advance_jq.md",sidebar_label:"Implementing JQ",sidebar:"someSidebar",previous:{title:"Variables and Constants",permalink:"/deno-by-example/05-variables-constants"},next:{title:"Read Line by Line as Data Stream",permalink:"/deno-by-example/advanced-readline"}},l=[{value:"How to create a stdin",id:"how-to-create-a-stdin",children:[]},{value:"How to read stdin in Deno.",id:"how-to-read-stdin-in-deno",children:[]},{value:"Parsing JSON",id:"parsing-json",children:[]}],i={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"jq is like ",Object(r.b)("inlineCode",{parentName:"p"},"sed")," for JSON data, you can use it to slice and filter and map and transform structured data"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"-- https://stedolan.github.io/jq/")),Object(r.b)("p",null,"I am not going to create the entire library here. Instead, I will just give a small demo how you can read STDIN data using Deno and parse it."),Object(r.b)("p",null,"STDIN ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)"}),"Standard input Stream"),", Standard input is a stream from which a program reads its input data."),Object(r.b)("h2",{id:"how-to-create-a-stdin"},"How to create a stdin"),Object(r.b)("p",null,"Passing data as stdin is very easy. You can use ",Object(r.b)("inlineCode",{parentName:"p"},"<")," to pipe data to any program."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'deno run program.ts < file_name.txt\ndeno run programe.ts < echo "data here"\n')),Object(r.b)("p",null,"You can also pass the output of any program to the other program using pipe",Object(r.b)("inlineCode",{parentName:"p"},"(|)"),".\n",Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'cat file_name.txt | deno run program.ts\necho "data here" | deno run programe.ts\n')),Object(r.b)("h2",{id:"how-to-read-stdin-in-deno"},"How to read stdin in Deno."),Object(r.b)("p",null,"Reading stdin is very similar to reding and stream in Deno. Deno provides core API like ",Object(r.b)("inlineCode",{parentName:"p"},"Deno.read")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Deno.readAll")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// examples/advance_jq.ts\n\nconst stdinContent = await Deno.readAll(Deno.stdin);\nconsole.log(stdinContent);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Run:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"deno run examples/advance_jq.ts < examples/advance_jq.ts\n")),Object(r.b)("p",null,"When you run this program, This will print some numbers (",Object(r.b)("inlineCode",{parentName:"p"},"Uint8Array"),"). Like other languages, stream data is buffer data encoded in buffer. To convert we need ",Object(r.b)("inlineCode",{parentName:"p"},"TextDecoder"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// examples/advance_jq.ts\n\nconst stdinContent = await Deno.readAll(Deno.stdin);\nconst response = new TextDecoder().decode(stdinContent);\nconsole.log(response);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Run:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"deno run examples/advance_jq.ts < examples/advance_jq.ts\n")),Object(r.b)("p",null,"You can see you file data as output"),Object(r.b)("h2",{id:"parsing-json"},"Parsing JSON"),Object(r.b)("p",null,"Parsing JSON and extracting value is a very tedious task. I have written a basic Extract value from an object based on key provided. Code look as below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const evalReg = /(\\.)|(\\[(\\d)\\])/;\nconst safeEval = (key: string, obj: any) => {\n  let lastKey;\n  let match;\n  do {\n    if (lastKey) {\n      if (match && match[2]) {\n        obj = obj[lastKey][match[3]];\n      } else {\n        obj = obj[lastKey];\n      }\n    }\n    match = evalReg.exec(key);\n    if (!match) {\n      lastKey = key;\n      break;\n    } else {\n      lastKey = key.substr(0, match.index);\n      key = key.slice(!match[3] ? match.index + 1 : match.index + 3);\n    }\n  } while (match);\n  if (lastKey) {\n    obj = obj[lastKey];\n  }\n  return obj;\n};\n")),Object(r.b)("p",null,"Here i am using ",Object(r.b)("inlineCode",{parentName:"p"},"RegExp.exec"),Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec"}),"more")," method to parse the key and extract tokens. This is a very rough sample of what JQ can do. So ",Object(r.b)("inlineCode",{parentName:"p"},"safeEvel")," code is also small \ud83d\ude01."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"How this method works:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const obj = {\n  id: 1,\n  version: "1.0.1",\n  contributors: ["deepak", "gary"],\n  actor: {\n    name: "Tom Cruise",\n    age: 56,\n    "Born At": "Syracuse, NY",\n    Birthdate: "July 3 1962",\n    movies: ["Top Gun", "Mission: Impossible", "Oblivion"],\n    photo: "https://jsonformatter.org/img/tom-cruise.jpg",\n  },\n};\nconsole.log(JSON.stringify(obj, null, 2));\nconsole.log(safeEval("id", obj));\nconsole.log(safeEval("contributors", obj));\nconsole.log(safeEval("contributors[1]", obj));\nconsole.log(safeEval("actor.movies[2]", obj));\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OUTPUT:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'1\n[ "deepak", "gary" ]\ngary\nOblivion\n')),Object(r.b)("p",null,"As you can see, this is very much what we need. Let's complete the actual demo."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"[Note:]")," Thanks to Deno ",Object(r.b)("inlineCode",{parentName:"p"},"import"),", now i can use this file from github directly. I don't need to create another file to import. You can do that. However, I will use network to ",Object(r.b)("inlineCode",{parentName:"p"},"import"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import safeEval from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/safe_eval.ts";\nconst stdinContent = await Deno.readAll(Deno.stdin);\nconst response = new TextDecoder().decode(stdinContent);\n\ntry {\n  console.log(safeEval(key, JSON.parse(response)));\n} catch (err) {\n  console.log(response);\n}\n')),Object(r.b)("p",null,"But wait, from where we will get missing key ??"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://images.unsplash.com/photo-1529247833802-700f53170380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&q=80",alt:"alt text"}))),Object(r.b)("p",null,"(c) Photo by Paolo Nicolello on Unsplash"),Object(r.b)("p",null,"Deno provides direct access to arguments passed to programs using CLI. We can use ",Object(r.b)("inlineCode",{parentName:"p"},"Deno.args")," to get all the arguments passed to programs as an Array. Let's use it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import safeEval from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/safe_eval.ts";\nconst stdinContent = await Deno.readAll(Deno.stdin);\nconst response = new TextDecoder().decode(stdinContent);\n\nconst [key = ""] = Deno.args;\ntry {\n  console.log(safeEval(key, JSON.parse(response)));\n} catch (err) {\n  console.log(response);\n}\n')),Object(r.b)("p",null,"You can create a json(tom.json) and tryout."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'/* tom.json */\n{\n  "id": 1,\n  "version": "1.0.1",\n  "contributors": ["deepak", "gary"],\n  "actor": {\n    "name": "Tom Cruise",\n    "age": 56,\n    "Born At": "Syracuse, NY",\n    "Birthdate": "July 3 1962",\n    "movies": ["Top Gun", "Mission: Impossible", "Oblivion"],\n    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"\n  }\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Run:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ deno run examples/advance_jq.ts "id" < examples/tom.json\n## 1\n\n$ deno run examples/advance_jq.ts "actor.name" < examples/tom.json\n## Tom Cruise\n')),Object(r.b)("p",null,"Perfect: Let's try with curl"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s -k https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/tom.json | deno run  examples/advance_jq.ts "actor.movies[1]"\n')),Object(r.b)("p",null,"Output: Mission: Impossible"),Object(r.b)("p",null,"Nice! Mission: I am possible"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"I hope you like this tutorial. let me know your feedback in the comment. Please support(\ud83d\ude4f\ud83d\ude4f) by subscribing and clapping on ",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"https://medium.com/@deepak_v"}),"https://medium.com/@deepak_v"),".")),Object(r.b)("p",null,"Read More: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.readAll"}),"Deno.readAll")))}p.isMDXComponent=!0},77:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),p=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,u=b["".concat(s,".").concat(m)]||b[m]||d[m]||r;return t?o.a.createElement(u,c(c({ref:n},i),{},{components:t})):o.a.createElement(u,c({ref:n},i))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<r;i++)s[i]=t[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);