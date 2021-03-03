function Picture(url, title, tags, color) {
    this.url = url;
    this.title = title;
    this.tags = tags;
    this.color = color;
    this.display = function () {

        var container = $("<div>")
        this.tags.forEach(function (tag) {
            container.addClass(tag);
        })
        container.css("background", this.color);
        container.addClass("picture");

        var showPictures = "";
        showPictures += "<img src=" + this.url + ">"; //img tag
        showPictures += "<p>" + this.title + "</p>";
        container.html(showPictures);
        $(".pictures").prepend(container);
    }
};

var pics = [
    new Picture('"images/maeve1.jpg"',
        'Maeve pre-prom arrival',
        ["Maeve", "Solo", "Reset"],
        'violet'),
    new Picture('"images/maeve2.jpg"',
        'Maeve closeup pre-prom arrival',
        ["Maeve", "Solo", "Reset"],
        'violet'),
    new Picture('"images/neva1.jpg"',
        'Neva closeup',
        ["Neva", "Solo", "Reset"],
        'lightgreen'),
    new Picture('"images/neva2.jpg"',
        'Neva closeup',
        ["Neva", "Solo", "Reset"],
        'lightgreen'),
    new Picture('"images/claire1-group.jpg"',
        'Claire with prom date Ben',
        ["Claire", "Group-shots", "Reset"],
        'lightyellow'),
    new Picture('"images/group3-claire.jpg"',
        'Claire and Emma',
        ["Claire", "Group-shots", "Reset"],
        'lightyellow'),
    new Picture('"images/maeve-neva-claire.jpg"',
        'Claire, Maeve, and Neva',
        ["Claire", "Maeve", "Neva", "Group-shots", "Reset"],
        'lightblue'),
    new Picture('"images/group1.jpg"',
        'Admiring corsages',
        ["Group-shots", "Reset"],
        'lightblue'),
    new Picture('"images/group2.jpg"',
        'Girls group shot',
        ["Group-shots", "Claire", "Maeve", "Neva", "Reset"],
        'lightblue'),
    new Picture('"images/group4.jpg"',
        'Students group shot',
        ["Group-shots", "Claire", "Maeve", "Neva", "Reset"],
        'lightblue')
                ]

//global taglist
var tagList = []

pics.forEach(function (picture) {
    picture.display();

    picture.tags.forEach(function (tag) {
        //check to see if tag has been added to taglist
        if (!tagList.includes(tag)) {
            //if it isn't already added, add it
            tagList.push(tag);
            //also make a button for it.
            $(".buttons").prepend("<button class='filter'>" + tag + "</button>")
        } //section and option drop down list??
    })
})

console.log(tagList);

$(".filter").on("click", function () {
    var tag = $(this).text(); //or attr.id
    console.log(tag);
    $("div > div").not("." + tag).hide();
    $("." + tag).fadeIn();

})
