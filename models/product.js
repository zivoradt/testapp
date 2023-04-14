import {toPascalCase, toPascalCaseWithWhiteSpace} from "../helpers/string-helper.js";

export class Product {
  constructor(
    series,
    model,
    price,
    colors,
    mainCamera,
    sim,
    url,
    picture,
    activeColor
  ) {
    this.series = series;
    this.model = model;
    this.price = price;
    this.colors = colors;
    this.mainCamera = mainCamera;
    this.sim = sim;
    this.url = url;
    this.picture = picture;
    this.activeColor = activeColor;
  }

  renderProduct(parent) {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');

    const card = document.createElement('card');
    card.classList.add('card');

    const model = document.createElement('h3');
    model.classList.add('card__title');
    model.textContent=this.model;
    card.appendChild(model);

    const cardImageContainer = document.createElement('card');
    cardImageContainer.classList.add('card__img-container');

    const img = document.createElement('img');
    img.src = this.picture;
    img.classList.add('card__img');
    img.classList.add('s23image');
    cardImageContainer.appendChild(img);
    card.appendChild(cardImageContainer);

    const colorPicker = document.createElement('div');
    colorPicker.classList.add('color-picker');

    const h5 = document.createElement('h5');
    h5.classList.add('card-style');
    h5.classList.add('price');
    h5.textContent='Color: ';

    const specContetn = document.createElement('div');
    specContetn.classList.add('spec-content');
    

    
    const spanH5 = document.createElement('span');
    spanH5.classList.add('value');
    spanH5.textContent = toPascalCaseWithWhiteSpace(this.activeColor);
    h5.appendChild(spanH5);
    this.renderColorsNew(colorPicker, spanH5,img, h5);
    colorPicker.appendChild(specContetn);

    

    const h5a = document.createElement('h5');
    h5a.classList.add('card-style');
    h5a.classList.add('price');
    h5a.textContent = 'Series: ';
    const spanH5a = document.createElement('span');
    spanH5a.classList.add('value');
    spanH5a.textContent = this.series;
    h5a.appendChild(spanH5a);
    specContetn.appendChild(h5a);

    const h5b = document.createElement('h5');
    h5b.classList.add('card-style');
    h5b.classList.add('price');
    h5b.textContent = 'Main Camera: ';
    const spanH5b = document.createElement('span');
    spanH5b.classList.add('value');
    spanH5b.textContent = `${this.mainCamera}MP`;
    h5b.appendChild(spanH5b);
    specContetn.appendChild(h5b);

    const h5d = document.createElement('h5');
    h5d.classList.add('card-style');
    h5d.classList.add('price');
    h5d.textContent = 'SIM: ';
    const spanH5d = document.createElement('span');
    spanH5d.classList.add('value');
    spanH5d.textContent = this.sim;
    h5d.appendChild(spanH5d);
    specContetn.appendChild(h5d);

    const h5c = document.createElement('h5');
    h5c.classList.add('card-style');
    h5c.classList.add('price2');
    h5c.textContent = 'Price:  ';
    const spanH5c = document.createElement('span');
    spanH5c.classList.add('value');
    spanH5c.textContent = `${this.price}R`;
    h5c.appendChild(spanH5c);
    specContetn.appendChild(h5c);

    const a = document.createElement('a');
    a.classList.add('card__btn');
    a.href = this.url;
    const att = {'an-tr':'co30_button-flagship pdp-cta-button'};
    a.textContent = 'Learn more';
    colorPicker.appendChild(a);


    

/*   
                </div>
                <a href="${
        this.url
    }" title="Learn More about Galaxy S23" an-tr="co30_button-flagship pdp-cta-button" an-ca="content click" an-ac="feature" an-la="button:galaxy s23 learn more cta" class="card__btn" cid="https://www.samsung.com/africa_en/smartphones/galaxy-s23/?cid=africa_ow_app_dotcom_galaxy-s23-series_pre-order_galaxy-s23-series_other_s23-cta_ghana">Learn more</a>
              `;*/

    card.appendChild(colorPicker);
    cardsContainer.appendChild(card);
    parent.appendChild(cardsContainer);
  }

  renderColorsNew(parent,spanH5,img,h5Add){

    const colorSamples = document.createElement('div');
    colorSamples.classList.add('color__samples');
    this.colors.forEach(color=>{
      const divCircle = document.createElement('div');
      divCircle.classList.add('color__sample');
      divCircle.classList.add(`color__sample--${color.replaceAll(" ","-")}`);

      if(color === this.activeColor)
        this.toggleActive(colorSamples,divCircle);


      divCircle.addEventListener('click',()=>{
        this.toggleActive(colorSamples,divCircle);
        this.activeColor = color;
        img.src = this.getImageSrc();
        spanH5.textContent = toPascalCaseWithWhiteSpace(this.activeColor);
      },true);
      
      colorSamples.appendChild(divCircle);
    });
    parent.appendChild(h5Add);
    parent.appendChild(colorSamples)
  }

  toggleActive(parent,el){
    parent.querySelectorAll('.color__sample').forEach(els=>{
      if(els.classList.contains('active'))
      {
        els.classList.remove('active');
      }
    })
      el.classList.add('active');
  }

  getImageSrc(){
    let imgSrc = `assets/`;

    const series = this.series.replaceAll(" ","");
    switch (series)
    {
      case "GalaxyS":
          imgSrc += `s-series/${this.concatImgColor('_')}`
        break;
      case "GalaxyA":
        imgSrc += `a-series/${this.concatImgColor('_')}`
        break;
      case "GalaxyZ":
        imgSrc += `z-series/${this.concatImgColor('-')}`
        break;
      default:
    }

    return imgSrc;
  }

  concatImgColor(char)
  {
    //assets/s-series/Galaxy S23 Ultra_Lavender.png
    return `${toPascalCase(this.model)}${char}${toPascalCase(this.activeColor)}.png`
  }
}



