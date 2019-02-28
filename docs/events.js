function EventFetcher (element, past) {
    this.init(element, past);
};

EventFetcher.prototype.init = function (element, past) {
    // Get all events from a Google Sheet
    this.url = 'https://sheets.googleapis.com/v4/spreadsheets' +
        '/1Zd0MEe68i77bECHKtAqRTI8VGcmaJVNlDwLhySYgsWw/values/' +
        'Respostes%20al%20formulari%201?' +
        'key=AIzaSyBnrpDkEddq-GePUKlJXS_fV82ggNNmksg';
    this.past = past;
    this.eventsDiv = element;

    this.fetchEvents();
};

EventFetcher.prototype.fetchEvents = function () {
    var request = new XMLHttpRequest(),
        myself = this;

    request.open('GET', this.url);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200 || this.status === 0) {
                try {
                    var rows = JSON.parse(this.response).values;
                    rows.map(function (row) {
                        // turn dates into actual dates
                        var splitCell = row[5].split('/'); // date as DD/MM/YYYY
                        row[0] = new Date(); // reuse unused row[0]
                        row[0].setDate(splitCell[0]); // date means DOTM
                        row[0].setMonth(splitCell[1] - 1); // months are 0-based
                        row[0].setYear(splitCell[2]);
                    });
                    rows.splice(1).filter(
                        function (row) {
                            if (myself.past) {
                                return new Date() > row[0];
                            } else {
                                return new Date() <= row[0];
                            }
                        }
                    ).sort(
                        function (a, b) {
                            return a[0] > b[0];
                        }).forEach(function (row) {
                            if (row[9] === 'TRUE') { // event is approved
                                myself.appendEvent(
                                    row[1], // title
                                    row[2], // organizer
                                    row[3], // location
                                    row[4], // URL
                                    row[0], // date as Date object
                                    row[6], // time
                                    row[7]  // description
                                );
                            }
                        });
                } catch (err) {
                    // no events
                    console.error(err);
                }
            }
        }
    };
    request.send(null);
};

EventFetcher.prototype.appendEvent = function (
    title,
    organizer,
    eventLocation,
    url,
    date,
    time,
    description
) {
    var eventDiv = document.createElement('div'),
        titleH2 = document.createElement('h2'),
        organizerSpan = document.createElement('span'),
        locationSpan = document.createElement('span'),
        urlAnchor = document.createElement('a'),
        dateSpan = document.createElement('span'),
        descriptionSpan = document.createElement('span');

    eventDiv.classList.add('event');

    titleH2.innerHTML = title;
    titleH2.classList.add('title');
    eventDiv.append(titleH2);

    if (organizer) {
        organizerSpan.innerHTML = '<strong>Organizer:</strong> ' + organizer;
        organizerSpan.classList.add('organizer');
        eventDiv.append(organizerSpan);
    }

    locationSpan.innerHTML = '<strong>Location:</strong> ' + eventLocation;
    locationSpan.classList.add('location');
    eventDiv.append(locationSpan);

    dateSpan.innerHTML = '<strong>Date:</strong> ' +
        EventFetcher.monthNames[date.getMonth()] + ' ' +
        date.getDate() + ', ' + date.getFullYear();
    dateSpan.classList.add('date');
    eventDiv.append(dateSpan);

    if (time) {
        dateSpan.innerHTML += ' at ' + time.slice(0, -3); // remove seconds
    }

    if (description) {
        descriptionSpan.innerHTML =
            '<strong>Description:</strong><span>' + description + '</span>';
        descriptionSpan.classList.add('description');
        eventDiv.append(descriptionSpan);
        if (url) {
            urlAnchor.href = url;
            urlAnchor.innerHTML = 'more information';
            urlAnchor.classList.add('url');
            descriptionSpan.append(urlAnchor);
        }
    }

    this.eventsDiv.append(eventDiv);
};

EventFetcher.monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
