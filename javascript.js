function showLastModified() {

    var lastMod = document.lastModified;

    var lastModDate = new Date(lastMod);

    var formatted =
        lastModDate.toLocaleDateString(undefined, {
            year:  'numeric',
            month: 'long',
            day:   'numeric'
        }) +
        ' at ' +
        lastModDate.toLocaleTimeString(undefined, {
            hour:   'numeric',
            minute: '2-digit'
        });

    var target = document.getElementById('lastModified');

    if (target) {
        target.innerHTML = 'Page last modified: ' + formatted;
    }
}