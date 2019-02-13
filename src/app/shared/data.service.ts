export class DataService {
    getDetails() {
        const reusltPromise = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve('Data');
            } , 1500);
        });
        return reusltPromise;
    }
}
