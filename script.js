fetch('./simulado/database.json')
.then(res=>res.json())
.then(data=> {

    console.log(data)
    const logo = document.querySelector('.logo')
    logo.src = data.siteInfo.logo;

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
})