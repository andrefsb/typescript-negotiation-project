export function inspect(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]){
            console.log(`--- Method ${propertyKey}`);
            console.log(`------ Parameters: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------ Return: ${JSON.stringify(retorno)}`)
            return retorno;
        }
        return descriptor;
    }
