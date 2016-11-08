export default class BaseService {

    cb = [];

    /**
     * @param {function} cb
     * @return function
     * **/
    //TODO неправильно работает отписка, так как индексы сдвигаются после первой отписки
    subscribe( cb ) {
        let index = this.cb.push( cb ) - 1;
        return () => {
            this.cb.splice( index, 1 );
        }
    }
    trigger() {
        this.cb.forEach( ( item ) => item() );
    }
}