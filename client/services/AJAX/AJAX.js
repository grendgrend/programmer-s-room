export default class AJAX {

    /**
     * @param {string} url
     * @param {object} options
     * @return Promise
     * **/
    request( url, options = {} ) {
        return fetch( url, options )
            .then( ( response ) => {
                if ( response.status !== 200 ) {
                    console.error( response.status );
                    return;
                }
                return response.json();
            })
            .catch( ( err ) => console.error( 'Fetch Error :-S', err ) );
    }

    /**
     * @param {string} url
     * @return Promise
     * **/
    get( url ) {
       return this.request( url );
    }

    /**
     * @param {string} url
     * @return Promise
     * **/
    post( url ) {
        let options = {};
        return this.request( url, options );
    }
}
