(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{121:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,u=b["".concat(s,".").concat(m)]||b[m]||d[m]||o;return t?r.a.createElement(u,c({ref:n},i,{components:t})):r.a.createElement(u,c({ref:n},i))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(121)),s={id:"advance_jq",title:"Implementing JQ equivalent in Deno",sidebar_label:"Implementing JQ"},c={id:"advance_jq",title:"Implementing JQ equivalent in Deno",description:"jq is like sed for JSON data, you can use it to slice and filter and map and transform structured data",source:"@site/website/advance_jq.md",permalink:"/deno-by-example/advance_jq",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/website/advance_jq.md",sidebar_label:"Implementing JQ",sidebar:"someSidebar",previous:{title:"Variables and Constants",permalink:"/deno-by-example/05_variables_constants"},next:{title:"Read Line by Line as Data Stream",permalink:"/deno-by-example/advance_readline"}},l=[{value:"How to create a stdin",id:"how-to-create-a-stdin",children:[]},{value:"How to read stdin in Deno.",id:"how-to-read-stdin-in-deno",children:[]},{value:"Parsing JSON",id:"parsing-json",children:[]}],i={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"jq is like ",Object(o.b)("inlineCode",{parentName:"p"},"sed")," for JSON data, you can use it to slice and filter and map and transform structured data"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"-- https://stedolan.github.io/jq/")),Object(o.b)("p",null,"I am not going to create the entire library here. Instead, I will just give a small demo how you can read STDIN data using Deno and parse it."),Object(o.b)("p",null,"STDIN ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)"}),"Standard input Stream"),", Standard input is a stream from which a program reads its input data."),Object(o.b)("h2",{id:"how-to-create-a-stdin"},"How to create a stdin"),Object(o.b)("p",null,"Passing data as stdin is very easy. You can use ",Object(o.b)("inlineCode",{parentName:"p"},"<")," to pipe data to any program."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'deno run program.ts < file_name.txt\ndeno run programe.ts < echo "data here"\n')),Object(o.b)("p",null,"You can also pass the output of any program to the other program using pipe",Object(o.b)("inlineCode",{parentName:"p"},"(|)"),".\n",Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'cat file_name.txt | deno run program.ts\necho "data here" | deno run programe.ts\n')),Object(o.b)("h2",{id:"how-to-read-stdin-in-deno"},"How to read stdin in Deno."),Object(o.b)("p",null,"Reading stdin is very similar to reding and stream in Deno. Deno provides core API like ",Object(o.b)("inlineCode",{parentName:"p"},"Deno.read")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Deno.readAll")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// examples/advance_jq.ts\n\nconst stdinContent = await Deno.readAll(Deno.stdin);\nconsole.log(stdinContent);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"deno run examples/advance_jq.ts < examples/advance_jq.ts\n")),Object(o.b)("p",null,"When you run this program, This will print some numbers (",Object(o.b)("inlineCode",{parentName:"p"},"Uint8Array"),"). Like other languages, stream data is buffer data encoded in buffer. To convert we need ",Object(o.b)("inlineCode",{parentName:"p"},"TextDecoder"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// examples/advance_jq.ts\n\nconst stdinContent = await Deno.readAll(Deno.stdin);\nconst response = new TextDecoder().decode(stdinContent);\nconsole.log(response);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"deno run examples/advance_jq.ts < examples/advance_jq.ts\n")),Object(o.b)("p",null,"You can see you file data as output"),Object(o.b)("h2",{id:"parsing-json"},"Parsing JSON"),Object(o.b)("p",null,"Parsing JSON and extracting value is a very tedious task. I have written a basic Extract value from an object based on key provided. Code look as below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const evalReg = /(\\.)|(\\[(\\d)\\])/;\nconst safeEval = (key: string, obj: any) => {\n  let lastKey;\n  let match;\n  do {\n    if (lastKey) {\n      if (match && match[2]) {\n        obj = obj[lastKey][match[3]];\n      } else {\n        obj = obj[lastKey];\n      }\n    }\n    match = evalReg.exec(key);\n    if (!match) {\n      lastKey = key;\n      break;\n    } else {\n      lastKey = key.substr(0, match.index);\n      key = key.slice(!match[3] ? match.index + 1 : match.index + 3);\n    }\n  } while (match);\n  if (lastKey) {\n    obj = obj[lastKey];\n  }\n  return obj;\n};\n")),Object(o.b)("p",null,"Here i am using ",Object(o.b)("inlineCode",{parentName:"p"},"RegExp.exec"),Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec"}),"more")," method to parse the key and extract tokens. This is a very rough sample of what JQ can do. So ",Object(o.b)("inlineCode",{parentName:"p"},"safeEvel")," code is also small \ud83d\ude01."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"How this method works:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const obj = {\n  id: 1,\n  version: "1.0.1",\n  contributors: ["deepak", "gary"],\n  actor: {\n    name: "Tom Cruise",\n    age: 56,\n    "Born At": "Syracuse, NY",\n    Birthdate: "July 3 1962",\n    movies: ["Top Gun", "Mission: Impossible", "Oblivion"],\n    photo: "https://jsonformatter.org/img/tom-cruise.jpg",\n  },\n};\nconsole.log(JSON.stringify(obj, null, 2));\nconsole.log(safeEval("id", obj));\nconsole.log(safeEval("contributors", obj));\nconsole.log(safeEval("contributors[1]", obj));\nconsole.log(safeEval("actor.movies[2]", obj));\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OUTPUT:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'1\n[ "deepak", "gary" ]\ngary\nOblivion\n')),Object(o.b)("p",null,"As you can see, this is very much what we need. Let's complete the actual demo."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"[Note:]")," Thanks to Deno ",Object(o.b)("inlineCode",{parentName:"p"},"import"),", now i can use this file from github directly. I don't need to create another file to import. You can do that. However, I will use network to ",Object(o.b)("inlineCode",{parentName:"p"},"import"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import safeEval from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/safe_eval.ts";\nconst stdinContent = await Deno.readAll(Deno.stdin);\nconst response = new TextDecoder().decode(stdinContent);\n\ntry {\n  console.log(safeEval(key, JSON.parse(response)));\n} catch (err) {\n  console.log(response);\n}\n')),Object(o.b)("p",null,"But wait, from where we will get missing key ??"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://images.unsplash.com/photo-1529247833802-700f53170380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&q=80",alt:"alt text"}))),Object(o.b)("p",null,"(c) Photo by Paolo Nicolello on Unsplash"),Object(o.b)("p",null,"Deno provides direct access to arguments passed to programs using CLI. We can use ",Object(o.b)("inlineCode",{parentName:"p"},"Deno.args")," to get all the arguments passed to programs as an Array. Let's use it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import safeEval from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/safe_eval.ts";\nconst stdinContent = await Deno.readAll(Deno.stdin);\nconst response = new TextDecoder().decode(stdinContent);\n\nconst [key = ""] = Deno.args;\ntry {\n  console.log(safeEval(key, JSON.parse(response)));\n} catch (err) {\n  console.log(response);\n}\n')),Object(o.b)("p",null,"You can create a json(tom.json) and tryout."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'/* tom.json */\n{\n  "id": 1,\n  "version": "1.0.1",\n  "contributors": ["deepak", "gary"],\n  "actor": {\n    "name": "Tom Cruise",\n    "age": 56,\n    "Born At": "Syracuse, NY",\n    "Birthdate": "July 3 1962",\n    "movies": ["Top Gun", "Mission: Impossible", "Oblivion"],\n    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ deno run examples/advance_jq.ts "id" < examples/tom.json\n## 1\n\n$ deno run examples/advance_jq.ts "actor.name" < examples/tom.json\n## Tom Cruise\n')),Object(o.b)("p",null,"Perfect: Let's try with curl"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -s -k https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/tom.json | deno run  examples/advance_jq.ts "actor.movies[1]"\n')),Object(o.b)("p",null,"Output: Mission: Impossible"),Object(o.b)("p",null,"Nice! Mission: I am possible"),Object(o.b)("p",null,"For more example, visit:\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://deepakshrma.github.io/deno-by-example/"}),"https://deepakshrma.github.io/deno-by-example/")),Object(o.b)("p",null,"Read More: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.readAll"}),"Deno.readAll")))}p.isMDXComponent=!0}}]);