(()=>{"use strict";console.log("dom file");var e,o=document.querySelector("body"),m=[{name:"mario",premium:!0},{name:"luigi",premium:!1},{name:"yoshi",premium:!0},{name:"toad",premium:!0},{name:"peach",premium:!1}],n=function(e){return e.filter((function(e){return e.premium}))}(m);console.log(m,n),console.log("index file"),(e=document.createElement("h1")).textContent="test",o.appendChild(e),o.style.background="peachpuff",console.log("mario@gmail.com")})();