// console.log('我是main.js 2')
let n = 1
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n += 1
        }
    }
    request.send()
}


getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')

    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status ===200){
            // console.log( typeof request.response)   //字符串
            // console.log(request.response)
            const object = JSON.parse(request.response)   //JS对象
            // console.log(typeof object)
            // console.log(object)
            myName.textContent = object.name
        }
    }
    request.send()
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')

    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                // console.log(request.response)
                const dom = request.responseXML;  //将xml变成dom对象
                const text = dom.getElementsByTagName('warning')[0].textContent  //获取warning标签的内容
                console.log(text.trim())
            }else {
                alert('内容加载失败')
            }
        }
    }
    request.send()
}
//用ajax加载HTML
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')

    request.onload = ()=>{
        // console.log(request.response)
        //创建div
        const div = document.createElement('div')
        //填写div内容
        div.innerHTML = request.response
        //将div插到body中
        document.body.appendChild(div)
    }
    request.onerror = ()=>{
        console.log('html加载失败')
    }
    request.send()
}
//用ajax加载JS
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')

    request.onload = ()=>{
        // console.log('js加载成功')
        // console.log(request.response)
        //创建script标签
        const script = document.createElement('script')

        //填写script内容
        script.innerHTML = request.response

        //将script标签加到body
        document.body.appendChild(script)
    }
    request.onerror = ()=>{
        console.log('js加载失败')
    }
    request.send()
}
// 用ajax加载css
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')  //readyState=1
    
    // request.onload = ()=>{
    request.onreadystatechange = ()=>{
        // console.log(request.response)

        // console.log(request.readyState)
        if(request.readyState === 4){
            // console.log('下载完成') 
            // console.log(request.status)
            //下载完成但是不知道下载的是失败4xx 5xx还是成功 2xx，所以需要通过状态码来判断
            if(request.status >= 200 && request.status < 300){
                // 创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //将style标签插到head中
                document.head.appendChild(style)
            } else {
                alert('加载失败')
            }            
        }        
    }    
    request.send()  //readyState=2
}
