export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape in action on class ${this.constructor.name} for the method ${propertyKey}.`);
            retorno = retorno.replace(/<script>[\s\S]*?<script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
