class CardNews extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || " Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href= this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");



        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const newsImage = document.createElement("img");
        newsImage.src= this.getAttribute("photo") || "assets/imagem_padrao.png"
        newsImage.alt = "Imagem da notícia"

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 80%;
                -webkit-box-shadow: 10px 10px 5px -3px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 5px -3px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 5px -3px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .card__left{

                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card__left > span{
                font-weight: 400;
            }

            .card__left > h1{
                margin-top: 15px;
                font-size: 25px;
            }

            .card__left > p{
            color: rgb(70,70,70);
            }

        `;

        return style;
    }
}

customElements.define('card-news', CardNews)
