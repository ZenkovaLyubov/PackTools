
    function displayImg(el){
        return `<div class="item"><img src="${el.url}" alt="img" class="imgItem">
        <div class="itemName">${el.resName}</div></div>`
    }
    function displayAudio(el){
        return `<div class="item"><audio class="audioItem"
            src="${el.url}"
            controls>
            Ваш браузер не поддерживает элемент <code>audio</code>.
            </audio>
            <div class="itemName">${el.resName}</div>
            </div>`
    }
    function displayVideo(el){
        return `<div class="item"><video class="videoItem"
            controls>
            <source src="${el.url}" type="video/mp4"/>
            </video>
            <div class="itemName">${el.resName}</div>
            </div>`
    }
    export function itemDisplay(el) {
       
        switch(el.type){
            
            case 'img': return displayImg(el); break;
            case 'audio': return displayAudio(el); break;
            case 'video': return displayVideo(el); break;
        }
      
    };