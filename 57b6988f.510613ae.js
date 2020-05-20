(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),i=(t(0),t(120)),o={id:"02_greet_from_cli",title:"Greet From CLI",sidebar_label:"Greet From CLI"},l={id:"02_greet_from_cli",title:"Greet From CLI",description:"Taking user input can be difficult task. You can take user input as command line argument or you can read input stream(STDIN)",source:"@site/website/02_greet_from_cli.md",permalink:"/deno-by-example/02_greet_from_cli",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/website/02_greet_from_cli.md",sidebar_label:"Greet From CLI",sidebar:"someSidebar",previous:{title:"Hello World",permalink:"/deno-by-example/01_hello_world"},next:{title:"Numbers",permalink:"/deno-by-example/03_numbers"}},m=[{value:"Take user input as command line arguments",id:"take-user-input-as-command-line-arguments",children:[]}],u={rightToc:m};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Taking user input can be difficult task. You can take user input as command line argument or you can read ",Object(i.b)("inlineCode",{parentName:"p"},"input stream(STDIN)")),Object(i.b)("h2",{id:"take-user-input-as-command-line-arguments"},"Take user input as command line arguments"),Object(i.b)("p",null,"Create file examples/02_greet_from_cli.ts"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const { args } = Deno;\n\ninterface UserInput {\n  name?: string;\n}\n\nfunction main({ name }: UserInput) {\n  console.log(`Hello ${name ? name : "world"}`);\n}\nmain({ name: args[0] });\n\n')),Object(i.b)("p",null,"Run Using deno run by passing name"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ deno run examples/02_greet_from_cli.ts Deepak\n#[Output] Hello Deepak\n\n$ deno run examples/02_greet_from_cli.ts\n#[Output] Hello World\n")))}s.isMDXComponent=!0}}]);