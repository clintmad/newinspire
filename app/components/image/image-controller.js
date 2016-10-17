(function () {
    var imgService = new ImageService();

    imgService.getImage()
        .then(function (data) {
            console.log(data)
            debugger
            var template = `
                <style>body{background-image:url('${data.url}')}</style>`

            $('#body').append(template);
        })
} ())