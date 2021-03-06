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
        showPictures += "<img src=" + this.url + ">";
        showPictures += "<p>" + this.title + "</p>";
        container.html(showPictures);
        $(".pictures").prepend(container);
    }
};

var pics = [
    new Picture('"images/maeve1.jpg"',
        'Maeve pre-prom arrival',
        ["Reset", "Maeve", "Solo"],
        '#D3B9B8'),
    new Picture('"images/maeve2.jpg"',
        'Maeve closeup pre-prom arrival',
        ["Reset", "Maeve", "Solo"],
        '#D3B9B8'),
    new Picture('"images/neva1.jpg"',
        'Neva closeup',
        ["Reset", "Neva", "Solo"],
        '#D1CEC7'),
    new Picture('"images/neva2.jpg"',
        'Neva closeup',
        ["Reset", "Neva", "Solo"],
        '#D1CEC7'),
    new Picture('"images/claire1-group.jpg"',
        'Claire with prom date Ben',
        ["Reset", "Claire", "Group-shots"],
        '#EEDBD7'),
    new Picture('"images/group3-claire.jpg"',
        'Claire and Emma',
        ["Reset", "Claire", "Group-shots"],
        '#EEDBD7'),
    new Picture('"images/maeve-neva-claire.jpg"',
        'Claire, Maeve, and Neva',
        ["Reset", "Claire", "Maeve", "Neva", "Group-shots"],
        '#9D9C98'),
    new Picture('"images/group1.jpg"',
        'Admiring corsages',
        ["Reset", "Group-shots"],
        '#9D9C98'),
    new Picture('"images/group2.jpg"',
        'Girls group shot',
        ["Reset", "Group-shots", "Claire", "Maeve", "Neva"],
        '#9D9C98'),
    new Picture('"images/group4.jpg"',
        'Students group shot',
        ["Reset", "Group-shots", "Claire", "Maeve", "Neva"],
        '#9D9C98')
                ]
$(".title").text("Photo Gallery - Prom 2019");

//global taglist
var tagList = []

pics.forEach(function (picture) {
    picture.display();
    tagList.sort();

    picture.tags.forEach(function (tag) {
        if (!tagList.includes(tag)) {
            tagList.push(tag);
            $(".buttons").prepend("<button class='filter'>" + tag + "</button>")
        }
    })

})



console.log(tagList);

$(".filter").on("click", function () {
    var tag = $(this).text();
    console.log(tag);
    $("div > div").not("." + tag).hide();
    $("." + tag).fadeIn();

    $(".filter").removeClass("active");
    $(this).addClass("active");

})
