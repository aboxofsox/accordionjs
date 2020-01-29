// import './accordion.css';



class Accordion {
  constructor(images, options, element) {
    this.images = images;
    this.options = options;
    this.element = element;
  }
  build() {
    console.log('building');
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    this.images.forEach(image =>{
      const block = document.createElement('div');
      block.className = 'block';
      const img = document.createElement('img');
      img.className = 'block-bkg';
      img.src = image;
      block.appendChild(img);

      const button = document.createElement('button');
      button.className = 'call-to-action';
      button.textContent = 'Button';

      if(this.options.buttons) {
        block.appendChild(button);
      }


      wrapper.appendChild(block);
    });
    const btns = document.querySelectorAll('.call-to-action');
    btns.forEach(btn =>{
      btn.addEventListener('click', e =>{
        
      });
    });
    const style = document.createElement('style');
    const styleContent = `
      .wrapper {
        width: 100%;
        height: 500px;
        display: flex;
        flex-flow: row;
        margin: auto;
        justify-content: center;
        align-items: center;
      }
      
      .block {
        width: 25%;
        max-width: 25%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        position: relative;
        transition: all 0.5s ease;
        box-shadow: -3px 0 5px;
      }

      .block-bkg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        object-fit: cover;
        transition: all 0.5s ease;
      }

      .call-to-action {
        border: none;
        outline: none;
        padding: 0.5em;
        font-size: 2em;
        background: dodgerBlue;
        color: white;
        border-radius: 0.3em;
        opacity: 0;
        transition: all 0.5s ease;
      }
      
      .block:not(:nth-child(${this.images.length + 1})):hover {
        width: 100%;
        max-width: 100%;
      }
      .block:not(:nth-child(${this.images.length + 1})):hover .call-to-action {
        opacity: 1;
      }
      .block:not(:nth-child(${this.images.length + 1})):hover .block-bkg {
        filter: ${this.options.buttons ? 'brightness(0.5)' : 'brightness(1)'};
      }
    `;
    style.textContent = styleContent;
    document.body.appendChild(style);
    
    return this.element.appendChild(wrapper);
  }

}  

export {Accordion}
