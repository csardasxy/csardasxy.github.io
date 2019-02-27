$(function () {
    var workType = getQueryVariable('type')
    if(!workType) return
    var workTypeBtn = $('#filters').children('.filters-button')
    for (var i = 0; i < workTypeBtn.length; i++) {
        var aim = $(workTypeBtn[i])
        if (aim.text().replace(/\s/g, "") == workType) {
            if (!aim.hasClass('workTypeClass')) {
                aim.addClass('workTypeClass')
            }
        } else {
            aim.removeClass('workTypeClass')
        }
    }
})
