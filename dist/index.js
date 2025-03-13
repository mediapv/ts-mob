"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const affichage = (selecteur, template) => {
    return (target, nomMethode, descriptor) => {
        const originalMethode = descriptor.value;
        console.log(nomMethode);
        descriptor.value = function (...args) {
            const result = originalMethode.apply(this, args);
            const elmt = document.querySelector(selecteur);
            if (elmt)
                elmt.innerHTML = template.replace("%s", result);
        };
    };
};
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    faireDuBruit(bruit) {
        return `${this.nom} fait ${bruit}!`;
    }
    manger(plat) {
        return `${this.nom} mange ${plat}`;
    }
}
__decorate([
    affichage("section", "<h1>%s</h1>")
], Animal.prototype, "faireDuBruit", null);
__decorate([
    affichage("div", "<h2>%s</h2>")
], Animal.prototype, "manger", null);
window.onload = () => {
    const chat = new Animal("Le chat");
    chat.faireDuBruit("Miaou");
    chat.manger("des croquettes");
};
