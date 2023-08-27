export function logarTempoDeExecucao(emSegundos: boolean = false){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal =  descriptor.value;
        descriptor.value = function(...args: any[]){
            let divisor = 1;
            let unidades = 'miliseconds';
            if(!emSegundos){
                let divisor = 1000;
                let unidades = 'seconds';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, runtime: ${(t2-t1)/divisor} ${unidades}.`);
            retorno;
        };
        return descriptor;
    }
}