export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Method ${propertyKey}`);
        console.log(`------ Parameters: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ Return: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
