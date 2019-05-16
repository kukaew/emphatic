//_______________________core

let _={}

//_______________________code

_.dom={},_.dom._=(el,r)=>document.querySelectorAll(el+'>*').forEach((e,n)=>_.dom[e.getAttribute('_')||'_'+(n)]=!r?e:e.replace(/\r|\n|\t/g,''))
_.dom.__=(m,e,e2,e3)=>
	typeof e=='object'
		?typeof e2=='object'||e3
			?e.insertAdjacentHTML(m,e3||e2.outerHTML)
			:e2.split(',').forEach(e2=>e.insertAdjacentHTML(m,_.dom[e2.trim()].outerHTML))
		:document.querySelectorAll(e).forEach(el=>
			typeof e2=='object'||e3
				?e.split(',').forEach(e=>el.insertAdjacentHTML(m,e3||e2.outerHTML))
				:e2.split(',').forEach(e=>e2.split(',').forEach(e2=>el.insertAdjacentHTML(m,_.dom[e2.trim()].outerHTML))))
_.in={'start':(e,e2,e3)=>_.dom.__('afterBegin',e,e2,e3),'end':(e,e2,e3)=>_.dom.__('beforeEnd',e,e2,e3)}
_.out={'start':(e,e2,e3)=>_.dom.__('beforeBegin',e,e2,e3),'end':(e,e2,e3)=>_.dom.__('afterEnd',e,e2,e3)}

//_______________________test

_.dom._('#dom')

_.dom.a
	.style.background = 'beige'
_.dom['b']
	.style.textShadow = '2px 1px #f33'
_.dom._2
	.style.color = 'red'

_.out.end('#target, .target', 'a, d, b')
_.in.end(document.querySelector('#target'), _.dom.b)
_.out.start('.target, #target', _.dom._2)
_.in.start('.target', 0, '<code><h1><a href>E!</a></h1></code>')

console.log(_)