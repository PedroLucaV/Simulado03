fetch('./simulado/database.json')
.then(res=>res.json())
.then(data=> {

    console.log(data)
    const logo = document.querySelector('.logo')
    logo.src = data.imageAssets.logo;

    const headingHero = document.querySelector('#heading-hero');
    headingHero.textContent = data.siteInfo.tagline

    const descriptionHero = document.querySelector("#description-hero");
    descriptionHero.textContent = data.siteInfo.description

    const heroImage = document.querySelector('.hero-image');
    heroImage.src = data.heroSection.featuredGame.image
    heroImage.alt = data.heroSection.featuredGame.title

    const heroPrice = document.querySelector('.hero-price')
    const heroOffer = document.querySelector('.hero-offer')
    heroPrice.textContent = `$${data.heroSection.featuredGame.price}`;
    heroOffer.textContent = `-${data.heroSection.featuredGame.discount}%`;

    const searchHero = document.querySelector('.search-hero');
    searchHero.placeholder = data.heroSection.searchBar.placeholder

    const btnSearch = document.querySelector('.btn-search');
    btnSearch.textContent = data.heroSection.searchBar.buttonText

    const featureImage = document.querySelectorAll('.feature-image');
    const featureText = document.querySelectorAll('.feature-text');
    featureText.forEach((text, index) => text.textContent = data.features[index].title)
    featureImage.forEach((image, index) => {
        image.src = data.features[index].icon
        image.alt = data.features[index].title
    })

    const trendingGames = document.querySelector('.trendGamesWrapper')
    const trendingGamesJson = data.trendingGames;
    console.log(trendingGamesJson);
    
    trendingGamesJson.forEach((trendGame) => {
        const gameArticle = document.createElement('div');
        gameArticle.classList.add('trending-game');

        const gameImage = document.createElement('img')
        gameImage.src = trendGame.image;
        gameImage.alt = trendGame.title
        gameImage.classList.add('gameImage');
        gameArticle.appendChild(gameImage);

        const gameCategory = document.createElement('p')
        gameCategory.textContent = trendGame.category
        gameCategory.classList.add('gameCategory')
        gameArticle.appendChild(gameCategory)

        const gameTitle = document.createElement('p')
        gameTitle.textContent = trendGame.title
        gameTitle.classList.add('gameTitle')
        gameArticle.appendChild(gameTitle);

        const gameText = document.createElement('div')
        gameText.appendChild(gameCategory)
        gameText.appendChild(gameTitle)
        gameText.classList.add('gameText')
        gameArticle.appendChild(gameText)

        const gamePrice = document.createElement('span')
        gamePrice.textContent = `$${trendGame.price}`
        gamePrice.classList.add('gamePrice')

        const gameDiscounted = document.createElement('span')
        gameDiscounted.textContent = `$${trendGame.discountedPrice}`
        gameDiscounted.classList.add('gameDiscount')
        
        const gamePriceDiv = document.createElement('div')
        gamePriceDiv.classList.add('gamePriceDiv')
        gamePriceDiv.appendChild(gamePrice)
        gamePriceDiv.appendChild(gameDiscounted)
        gameArticle.appendChild(gamePriceDiv);

        trendingGames.appendChild(gameArticle)
    })

    const mostPlayed = document.querySelector('.mostPlayedWrapper')
    const mostPlayedJson = data.mostPlayed;
    console.log(mostPlayedJson);
    
    mostPlayedJson.forEach((mP) => {
        const gameArticle = document.createElement('div');
        gameArticle.classList.add('most-played-game')
        mostPlayed.appendChild(gameArticle)

        const gamePicture = document.createElement('img')
        gamePicture.src = mP.image
        gamePicture.alt = mP.title
        gamePicture.classList.add('gIMp')
        gameArticle.appendChild(gamePicture)

        const gameText = document.createElement('div')
        gameText.classList.add('gameText')
        gameArticle.appendChild(gameText)

        const gameCategory = document.createElement('p')
        gameCategory.textContent = mP.category
        gameText.appendChild(gameCategory)

        const gameTitle = document.createElement('h2')
        gameTitle.textContent = mP.title
        gameText.appendChild(gameTitle)

        const gameButton = document.createElement('button')
        gameButton.textContent = 'EXPLORE'
        gameButton.classList.add('gBtn')
        gameArticle.appendChild(gameButton)
    })

    const topCategories = document.querySelector('.top-categories-wrapper')
    const topCategoriesJson = data.categories;
    console.log(topCategoriesJson);

    topCategoriesJson.forEach((tC) => {
        const categoryArticle = document.createElement('div')
        categoryArticle.classList.add('category-card')
        topCategories.appendChild(categoryArticle)

        const categoryName = document.createElement('p')
        categoryName.textContent = tC.name;
        categoryArticle.appendChild(categoryName)

        const categoryImage = document.createElement('img')
        categoryImage.src = tC.image
        categoryImage.alt = `${tC.name} game image`
        categoryImage.classList.add('cI')
        categoryArticle.appendChild(categoryImage)
    })

    const promoSection = document.querySelector('.promo-section')
    const ourShop = data.promoSection
    const newsLetter = data.newsletter

    const ourShopArticle = document.createElement('div');
    ourShopArticle.classList.add('ourshop')
    promoSection.appendChild(ourShopArticle)
    
    const shop = () => {
        const headingShop = document.createElement('div')
        headingShop.classList.add('heading-promo')
        ourShopArticle.appendChild(headingShop)

        const shopHeadingSup = document.createElement('p')
        shopHeadingSup.textContent = 'Our Shop'
        headingShop.appendChild(shopHeadingSup)

        const shopHeadingTitle = document.createElement('h2')
            const firstP = document.createElement('span')
            firstP.textContent = ourShop.title.split('Prices')[0]
            shopHeadingTitle.appendChild(firstP)

            const decoratedTitleText = document.createElement('span')
            decoratedTitleText.textContent = ourShop.title.split(' ')[6]
            decoratedTitleText.style.color = `#0071f8`
            shopHeadingTitle.appendChild(decoratedTitleText)

            const lastP = document.createElement('span')
            lastP.textContent = ourShop.title.split('Prices')[1]
            shopHeadingTitle.appendChild(lastP)

            headingShop.appendChild(shopHeadingTitle)

        const shopHeadingDesc = document.createElement('p')
        shopHeadingDesc.textContent = ourShop.description
        shopHeadingDesc.classList.add('shopDesc')
        ourShopArticle.appendChild(shopHeadingDesc)

        const shopButton = document.createElement('button')
        shopButton.textContent = ourShop.buttonText
        ourShopArticle.appendChild(shopButton)
    }
    shop()

    const promoImgBg = document.createElement('img')
    promoImgBg.src = ourShop.image
    promoImgBg.alt = 'img-promo'
    promoImgBg.classList.add('img-promo')
    promoSection.appendChild(promoImgBg)

    const newsLetterArticle = document.createElement('div');
    newsLetterArticle.classList.add('newsLetter')
    promoSection.appendChild(newsLetterArticle)

    const newsletter = () => {
        const headingShop = document.createElement('div')
        headingShop.classList.add('heading-promo')
        newsLetterArticle.appendChild(headingShop)

        const shopHeadingSup = document.createElement('p')
        shopHeadingSup.textContent = 'NEWSLETTER'
        headingShop.appendChild(shopHeadingSup)

        const shopHeadingTitle = document.createElement('h2')
            const firstP = document.createElement('span')
            firstP.textContent = newsLetter.title.split('Subscribe')[0]
            shopHeadingTitle.appendChild(firstP)

            const decoratedTitleText = document.createElement('span')
            decoratedTitleText.textContent = newsLetter.title.split(' ')[7]
            decoratedTitleText.style.color = `#0071f8`
            shopHeadingTitle.appendChild(decoratedTitleText)

            const lastP = document.createElement('span')
            lastP.textContent = newsLetter.title.split('Subscribe')[1]
            shopHeadingTitle.appendChild(lastP)

            headingShop.appendChild(shopHeadingTitle)

            const inpBox = document.createElement('div')
            inpBox.classList.add('inp-box')

            const emailInp = document.createElement('input')
            emailInp.type = 'email'
            emailInp.placeholder = newsLetter.inputPlaceholder
            emailInp.classList.add('inp-email')
            inpBox.appendChild(emailInp)

            const btnSend = document.createElement('button')
            btnSend.textContent = newsLetter.buttonText
            btnSend.classList.add('btn-send')
            inpBox.appendChild(btnSend)

            newsLetterArticle.appendChild(inpBox)
    }

    newsletter()

    const footer = document.querySelector('footer')
    const footerTextCopy = document.createElement('p')
    footerTextCopy.textContent = data.siteInfo.copyright
    footer.appendChild(footerTextCopy)
})