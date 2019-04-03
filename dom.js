//_______________________core

let _ = {}

//_______________________code

_.dom = {}
_.dom._ = (el, r) => document.querySelectorAll(el + '>*').forEach((e,n) => _.dom[e.getAttribute('_') || '_'+(n)] = !r ? e : e.replace(/\r|\n|\t/g,''))
_.dom.__ = (e, m, e2, e3) =>
typeof e == 'object'
	? typeof e2 == 'object' || e3
		? e.insertAdjacentHTML(m, e3 || e2.outerHTML)
		: e2.split(',').forEach( e2 => e.insertAdjacentHTML(m, _.dom[e2.trim()].outerHTML))
	: document.querySelectorAll(e).forEach( el => 
		typeof e2 == 'object' || e3
			? e.split(',').forEach( e => el.insertAdjacentHTML(m, e3 || e2.outerHTML))
			: e2.split(',').forEach( e => e2.split(',').forEach(e2 => el.insertAdjacentHTML(m, _.dom[e2.trim()].outerHTML))))
_.in = {'start': (e, e2, e3) => _.dom.__(e, 'beforeBegin', e2, e3),	'end': (e, e2, e3) => _.dom.__(e, 'beforeEnd', e2, e3)}
_.out = {'start': (e, e2, e3) => _.dom.__(e, 'afterBegin', e2, e3),	'end': (e, e2, e3) => _.dom.__(e, 'afterEnd', e2, e3)}

//_______________________test

_.dom._('#dom')

let tg = document.querySelector('#target')

_.out.end('#target,.target', 'a,b, d')
_.in.end(tg, _.dom.b)
_.out.start('.target > ul, #target-2 ', _.dom._2)
_.in.start(tg, 'd,b')
_.in.start('.target', 0, '<h1><code>E!</code></h1>')

console.log(_)