    let news;
    let menus = document.querySelectorAll("#menu-list > button");    
    let url = "";
    let newsHTML = '';

    let getLatestNews = async()=>{
        url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=1`);
        let header = new Headers({'x-api-key' : '9cOmEeBlDd_8GHfIb6748kBIaLAIVEafVSWqCndLz6o'})
        let response = await fetch(url,{headers : header})
        let data = await response.json();
        news = data.articles;    
        render();
    }
    

    let getNewsByTopic = async(event)=>{
        let currentMenu = event.currentTarget.textContent.toLowerCase();
        url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${currentMenu}&page_size=1`)
        let header = new Headers({'x-api-key' : '9cOmEeBlDd_8GHfIb6748kBIaLAIVEafVSWqCndLz6o'})
        let response = await fetch(url,{headers : header})
        let data = await response.json();
        news = data.articles;    
        render();

    }

    let render = ()=>{
        newsHTML = '';
        newsHTML = news.map((items) =>{
            return `<div class="news row">
                <div class="col-lg-4">
                    <img class="news-img"
                        src="${items.media}" />
                </div>
                <div class="col-lg-8">
                    <h1>${items.title}</h1>
                    <p>${items.summary}</p>
                    <div>${items.rights} * ${items.published_date}</div>
                </div>
            </div>`
        }).join('');
        document.getElementById('news-board').innerHTML = newsHTML;
    }

    menus.forEach((menu) => {
        menu.addEventListener("click",(event)=>{
            getNewsByTopic(event);
        });
    });

    getLatestNews();