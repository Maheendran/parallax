let tree=document.getElementById("brown_tree")
let bird=document.getElementById("bird")
let sunset=document.getElementById("sunset")
let heading=document.getElementById("heading")
let cycle=document.getElementById("cycle")
let astro=document.getElementById("astro")
let earth=document.getElementById("earth")
let mail=document.getElementById("mail")
let mail_circle=document.getElementById("mail_circle")
let tom=document.getElementById("tom")
let jerry=document.getElementById("jerry")
let tom_heading=document.getElementById("tom_heading")
let and_heading=document.getElementById("and_heading")
let jerry_heading=document.getElementById("jerry_heading")
window.addEventListener("scroll",function(){
    let value=window.scrollY;
  sunset.style.top=- value * 2+ 'px';
  tree.style.top=- value * 0.3+ 'px';
  tree.style.left= value * 0.3+ 'px';
  bird.style.top=-5*value * 0.6+ 'px';
  bird.style.width=20*+value * 0.5+ 'px';
  heading.style.bottom=7*value * 0.1+ 'px';
  // //////////////////////
  cycle.style.left=value + 5+ 'px';
  // /////////////////
  astro.style.left=0.5*value + 'px';
  astro.style.width=0.50*value + 'px';
  astro.style.rotate=value/100+ 'Deg';
  earth.style.rotate=-value/10+ 'Deg';
  earth.style.width=0.90*value + 'px';
  // /////////////////////////////////
  mail_circle.style.rotate=4.5*value/10+ 'Deg';
// /////////////////////////////
thank_you.style.left=-value/60+48+ 'rem';
// ////////////////////////////////////
tom.style.left=5*value/100+'px'
tom.style.top=4*value/100+'px'
tom.style.width=2*value/100-10+'%'

jerry.style.left=3*value/1000+'rem'
jerry.style.top=3*value/100+'px'
jerry.style.width=3.5*value/100-10+'%'

tom_heading.style.left=value/6+'px'
tom_heading.style.fontSize=5*value/100-10+'px'

and_heading.style.top=value/8+'px'
and_heading.style.fontSize=3.7*value/100-10+'px'
and_heading.style.fontSize=15*value/50+'%'

jerry_heading.style.right=value/5+'px'
jerry_heading.style.fontSize=5*value/100-10+'px'
})

// /////////////////////////////////

