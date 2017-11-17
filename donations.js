function getDonations() {
    var donationsHist = $("#donationsmark");
    donationsHist.append("Donationshistory:<br/><br/>");
    $.ajax({
      url: "http://185.3.48.79:8080/leet/user3/donations",
      dataType: "json"
    })
    .done(function(data) {
        $.each(data, function(idx, obj) {
            var d = obj.date.toString();

            var dateFormatted = d.substring(0,4) + '-' + d.substring(4,6) + '-' + d.substring(6,8);
            donationsHist.append(dateFormatted + ": " + obj.name + "<br/><br/>");
        })

    });
}

getDonations();