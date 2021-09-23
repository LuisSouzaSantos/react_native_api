const MOTORCYCLE_BRANDS_URL="https://parallelum.com.br/fipe/api/v1/motos/marcas";

const motorcycleBrandsHTTP = async (callback) => {
    const motorcycleBrandsHTTP = await fetch(MOTORCYCLE_BRANDS_URL);
    const motorcycleBrandsJson = await motorcycleBrandsHTTP.json();

    callback(motorcycleBrandsJson);
}

export { motorcycleBrandsHTTP }