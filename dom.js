//_______________________core

let _={}

//_______________________code

_.dom={},_.dom.new=(el,r)=>document.querySelectorAll(el+'>*').forEach((e,n)=>_.dom[e.getAttribute('_')||'_'+(n)]=!r?e:e.replace(/\r|\n|\t/g,''))
_.dom._=(m,e,e2,e3)=>
typeof e=='object'
	?typeof e2=='object'||e3
		?e.insertAdjacentHTML(m,e3||e2.outerHTML)
		:e2.split(',').forEach(e2=>e.insertAdjacentHTML(m,_.dom[e2.trim()].outerHTML))
	:document.querySelectorAll(e).forEach(el=>
		typeof e2=='object'||e3
			?e.split(',').forEach(e=>el.insertAdjacentHTML(m,e3||e2.outerHTML))
			:e2.split(',').forEach(e=>e2.split(',').forEach(e2=>el.insertAdjacentHTML(m,_.dom[e2.trim()].outerHTML))))
_.in={'start':(e,e2,e3)=>_.dom._('afterBegin',e,e2,e3),'end':(e,e2,e3)=>_.dom._('beforeEnd',e,e2,e3)}
_.out={'start':(e,e2,e3)=>_.dom._('beforeBegin',e,e2,e3),'end':(e,e2,e3)=>_.dom._('afterEnd',e,e2,e3)}

//_______________________test

_.dom.new('#dom')

let tg = document.querySelector('#target')

_.dom.a
	.style.background = 'beige'

_.dom._2 // №2
	.style.color = 'red'

_.dom['d']
	.style.fontSize = 'xx-large'

_.out.end('#target, .target', 'a, b, d')
_.in.end(tg, _.dom.b)
_.out.start('.target, #target', _.dom._2) // №2
_.in.start('.target > ul', 0, '<code><h1><a href>E!</a></h1></code>')



console.log(_.dom._2)