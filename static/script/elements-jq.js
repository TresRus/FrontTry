$('#change-btn').click(function () {
    $.ajax({
        url: '/test.json',
        method: 'GET',
        success: function (data) {
            $('#first-item').html(data.first);
            $('#second-item').html(data.second);
        }
    });
});

