function ImageService() {
    var url = 'http://bcw-getter.herokuapp.com/?url=';
    var url2 = 'http://www.splashbase.co/api/v1/images/random'
    var apiUrl = url + encodeURIComponent(url2);

    this.getImage = function () {
        debugger
        return new Promise(function (resolve, reject) {
            $.get(apiUrl).then(
                function (data) {
                    var result = JSON.parse(data)
                    resolve(result);
                },
                function (error) {
                    reject(error);
                }
            );
        })
    }
}