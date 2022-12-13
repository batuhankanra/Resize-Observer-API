document.querySelectorAll('.boxes').forEach(boxes => resizeObserver.observe(boxes))

const genres=[
    {
        title:'aile'
    },
    {
        title:'fantastik'
    },
    {
        title:'korku'
    },
    {
        title:'gerilim'
    },
    {
        title:'aksiyon'
    },
    {
        title:'macera'
    },
    {
        title:'belgesel'
    }
]


const observer=new ResizeObserver(([entry])=>{
    const visibles=Math.floor((entry.contentRect.width-130) /130)
    let html =genres.slice(0,visibles-1).reduce((prev,current)=>{
    return prev +=`<a href="#">${current.title}</a>`
},'')
const invisibles=genres.slice(visibles-1)
if(invisibles.length>0){
    html+=`<div class="dropdown">`
    html+=`<button>Türler</button>`
    html+=`<nav>`
         html +=invisibles.reduce((prev,current)=>{
        return prev +=`<a href="#">${current.title}</a>`
    },'')
    html+=`</nav>`
    html+=`</div>`
}

document.querySelector('.menu').innerHTML=html
})
observer.observe(document.querySelector('.menu'))