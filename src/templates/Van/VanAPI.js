const VAN_BRANDS_URL="https://parallelum.com.br/fipe/api/v1/caminhoes/marcas";

const vanBrandsHTTP = async (callback) => {
    const vanBrandsHTTP = await fetch(VAN_BRANDS_URL);
    const vanBrandsJson = await vanBrandsHTTP.json();

    callback(vanBrandsJson);
}

export { vanBrandsHTTP }