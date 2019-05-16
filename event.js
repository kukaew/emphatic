//_______________________core

let _={}

//_______________________code

_.on=(f,el,t,kc,ek)=>el?el.forEach(e=>!e||t.matches(e)?!kc||kc==ek?f():0:0):!kc||kc==ek?f():0
'abort afterprint autocomplete autocompleteerror beforeprint beforeunload blur cancel canplay canplaythrough change click close contextmenu copy cuechange cut dblclick drag dragend dragenter dragexit dragleave dragover dragstart drop durationchange emptied ended error focus hashchange input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel offline line pagehide pageshow paste pause play playing popstate progress ratechange reset resize scroll search seeked seeking select show sort stalled storage submit suspend timeupdate toggle unload volumechange waiting'.split(' ').forEach(n=>_[n]=(f,el,kc)=>window.addEventListener(n,e=>_.on(f,el?el.split(','):0,_.this=e.target,kc,e.keyCode)))

//_______________________test
	//* _.event(function,element,keyCode)
	//* this=_.this

const
	f=e=>document.getElementById('list').innerText+=(e||_.this.value||'ok!')+' . . . '
	,add=()=>_.this.insertAdjacentHTML('beforeBegin',_.this.previousElementSibling.outerHTML)

_.change(f)
_.click(add,'.add')
_.load(()=>f('HELLO!'))
_.click(()=>f('CLICK!'),'button')
_.keypress(()=>f('ENTER:'),'.inp',13) // press enter in input
_.mouseover(e=>f('MOUSEOVER!'),'.mov')

console.log(_)
