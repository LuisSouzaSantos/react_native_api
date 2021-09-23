const CAR_BRANDS_URL="https://parallelum.com.br/fipe/api/v1/carros/marcas";
const CAR_MODELS_URL="https://parallelum.com.br/fipe/api/v1/carros/marcas/{NUMERO_DA_MARCA}/modelos";

const carBrandsHTTP = async (callback) => {
    const HTTP = { }

    const carBrandsHTTP = await fetch(CAR_BRANDS_URL);
    const carBrandsJson = await carBrandsHTTP.json();

    callback(carBrandsJson);
}

const carModelsHTTP = async (brandNumber, callback) => {
    const HTTP = { }

    let url = CAR_MODELS_URL.replace("{NUMERO_DA_MARCA}", brandNumber);

    const carModelsHTTP = await fetch(url);
    const carModelsJson = await carModelsHTTP.json();

    callback(carModelsJson);
}


export { carBrandsHTTP,  carModelsHTTP }