(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return i})),a.d(n,"default",(function(){return l}));var t=a(2),r=a(6),s=(a(0),a(120)),o={id:"05_variables_constants",title:"Variables and Constants",sidebar_label:"Variables and Constants"},c={id:"05_variables_constants",title:"Variables and Constants",description:"Constant can be created using const and variable can be created using let.",source:"@site/website/05_variables_constants.md",permalink:"/deno-by-example/docs/05_variables_constants",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/website/05_variables_constants.md",sidebar_label:"Variables and Constants",sidebar:"someSidebar",previous:{title:"Numbers",permalink:"/deno-by-example/docs/03_numbers"},next:{title:"Implementing JQ equivalent in Deno",permalink:"/deno-by-example/docs/advance_jq"}},i=[],b={rightToc:i};function l(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},b,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Constant can be created using ",Object(s.b)("inlineCode",{parentName:"p"},"const")," and variable can be created using ",Object(s.b)("inlineCode",{parentName:"p"},"let"),".  "),Object(s.b)("p",null,"Sample:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"function main() {\n  const constant = 10;\n  // constant = 12 // Error, Cannot assign to 'constant' because it is a constant.\n  console.log(constant);\n  const object = {\n    name: \"deepak\",\n  };\n  object.name = \"updated\"; // No Error in updating property\n\n  // object = {} // Error, Cannot assign to 'object' because it is a constant.\n  // Cant change reference\n\n  // Same for Array\n\n  const array = [10, 12];\n  array[0] = 12;\n\n  // array = [] // Error\n  // Cant change reference\n\n  let variable = 10;\n  variable = 12; // No issue\n\n  let arrVar = [12];\n  arrVar = [];\n}\nmain();\n\n")),Object(s.b)("p",null,"More:"),Object(s.b)("p",null,Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"}),"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const")),Object(s.b)("p",null,"How to run example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"deno run examples/05_variables_constants.ts\n")))}l.isMDXComponent=!0}}]);