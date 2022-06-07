    let news;
    let url = ``;

    let renderSorce = async ()=>{
        let hedaer = new Headers({'x-api-key':'9cOmEeBlDd_8GHfIb6748kBIaLAIVEafVSWqCndLz6o'});
        let response = await fetch(url,{headers : hedaer});
        let data = await response.json();
        news = data.articles;
        render();
    }

    let getNewscatcher = async()=>{
        url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`);
        renderSorce();
        console.log(news);
        
    }

    let getButtonMenu = async(event)=>{
        let currentMenu = event.target.textContent.toLowerCase();        
        url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${currentMenu}&page_size=10`);
        renderSorce();
    }

    let render = ()=>{
        let newsHTML = '';
        newsHTML = news.map((items)=>{
            return `<div class="news row">
                        <div class="col-lg-4">
                            <img class="news-img" src="${items.media}" />
                        </div>
                        <div class="col-lg-8">
                            <h1>${items.title}</h1>
                            <p>${items.summary}</p>
                            <div>${items.rights} * ${items.published_date}</div>
                        </div>
                    </div>`
        }).join('');
        //console.log(newsHTML)
        document.getElementById("news-board").innerHTML = newsHTML;
    }

    let menuList = document.querySelectorAll('.menus > button');
    menuList.forEach(menu => {menu.addEventListener("click",(event)=>{
            getButtonMenu(event);
        });
    });



    getNewscatcher();