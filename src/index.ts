const affichage = (selecteur: string, template: string) => {
    return (target: any,
      nomMethode: string,
      descriptor: PropertyDescriptor) => {
      const originalMethode = descriptor.value;
  
      console.log(nomMethode);
  
      descriptor.value = function (...args: any[]) {
        const result = originalMethode.apply(this, args);
        const elmt: Element | null = document.querySelector(selecteur);
        if(elmt) elmt.innerHTML = template.replace("%s", result);
      };
    }
  }
  
  class Animal {
    nom: string;
  
    constructor(nom: string) {
      this.nom = nom;
    }
  
    @affichage("section", "<h1>%s</h1>")
    faireDuBruit(bruit: string): string {
      return `${this.nom} fait ${bruit}!`;
    }
  
    @affichage("div","<h2>%s</h2>")
    manger(plat:string): string{
      return `${this.nom} mange ${plat}`
    }
  }
  
  window.onload = () => {
    const chat = new Animal("Le chat");
    chat.faireDuBruit("Miaou");
    chat.manger("des croquettes");
  }
  