const $template = document.createElement('template');
$template.innerHTML = `
    <div class="contain-fim">
        <div class="contain-image">
            <div class="contain-type">HD-Lồng tiếng</div>
        </div>
        <div class="contain-inf">
            <div class="contain-name">North Idaho Monkeyflower</div>
            <div class="contain-originalName">Mimulus clivicola Greenm.</div>
            <div class="contain-duration">95 phút</div>
        </div>
    </div>
`;

export default class ComicContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name = this.querySelector('.contain-name');
        this.$originalName = this.querySelector('.contain-originalName');
        this.$image = this.querySelector('.comic-image');
        this.$type = this.querySelector('.contain-type');        
        this.$duration = this.querySelector('.contain-duration');
    }

    // định nghĩa thuộc tính cho thẻ
    static get observedAttributes() {
        return ['name', 'duration', 'image','type', 'originalName' ]
    }
    // chạy khi giá trị của thuộc tính (được định nghĩa ở trên) thay đổi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'name') {
            this.$name.innerHTML = newValue;
        }
        else if (attrName == 'duration') {
            this.$duration.innerHTML = newValue + " phút";
        }
        else if (attrName == 'image') {
            this.$image.style.backgroundImage = `url('${newValue}')`;
        }
        else if (attrName == 'type') {
            this.$type.innerHTML = newValue;
        }
        else if (attrName == 'originalName') {
            this.$originalName.innerHTML = newValue;
        } 
    }
}
window.customElements.define('contain-fim', ComicContainer);