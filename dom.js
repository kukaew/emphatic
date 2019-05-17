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
'afterBegin.beforeEnd.beforeBegin.afterEnd'.split('.').forEach(m=>_[m]=(e,e2,e3)=>_.dom.__(m,e,e2,e3))

//_______________________test
	//* _.afterBegin||beforeEnd||beforeBegin||afterEnd.(targets,elements||0,code)  

_.dom._('#dom')

_.dom.a
	.style.background = 'beige'
_.dom['b']
	.style.textShadow = '2px 1px #f33'
_.dom._2
	.style.color = 'red'

_.afterEnd('.target', 'a,d, b')
_.beforeBegin(_.dom._2, _.dom.b)
_.beforeEnd('.target, #target', _.dom._2)
_.afterBegin('.target', 0, '<code><h1><a href>E!</a></h1></code>')

console.log(_)