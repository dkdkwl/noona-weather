    let news;


    let menus = document.querySelectorAll("#menu-list > button");    

    menus.forEach((menu) => {
        menu.addEventListener("click",(event)=>{
            getNewsByTopic(event);
        });
    });
    
    let getNewsByTopic = (event)=>{
        let currentMenu = event.currentTarget.textContent;
        console.log(currentMenu);
    }

    let getLatestNews = async()=>{
        let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`);
        let header = new Headers({'x-api-key' : '9cOmEeBlDd_8GHfIb6748kBIaLAIVEafVSWqCndLz6o'})

        let response = await fetch(url,{headers : header})
        let data = await response.json();
        news = data.articles;
        console.log(news)
    
        render();
    }

    let render = ()=>{
        let newsHTML = '';
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
        
        // console.log(newsHTML);
        document.getElementById('news-board').innerHTML = newsHTML;
    }
    console.log()


    getLatestNews();