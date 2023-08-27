export function domInjector(seletor: string){

    return function(target: any, propertyKey: string){
        let elemento: HTMLElement;
        const getter = function(){
            if(!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`Getting DOM element with selector ${seletor} to inject in ${propertyKey}.`)
            }
            return elemento;
        }

        Object.defineProperty(target,propertyKey,{get: getter})
    }
}