$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#F5F5DC', '#D3D3D3', '#F5F5DC', '#D3D3D3', '#F5F5DC'],
        anchors: ['home', 'books', 'stats', 'inventory', 'footer'],
        menu: '#menu',
        scrollOverflow: true,
        navigation: true,
        afterRender: function () {
            animateHomeSection();
            animateChartSection();
            animateBookSection();
        },
        afterLoad: function (origin, destination, direction) {
            if (destination.anchor === 'home') {
                animateHomeSection();
            } else if (destination.anchor === 'books') {
                animateBookSection();
            } else if (destination.anchor === 'stats') {
                animateChartSection();
            } else if (destination.anchor === 'inventory') {
                animateInventorySection();
            } else if (destination.anchor === 'footer') {
                animateFooterSection();
            }
        },
    });

    const chartData = {
        labels: ['Horror', 'Fiction', 'Non-Fiction', 'Romance', 'Children-Friendly'],
        datasets: [{
            label: 'Number of Books',
            data: [30, 45, 12, 23, 60],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('libraryChart').getContext('2d');
    const libraryChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    function animateHomeSection() {
        var homeContainer = document.querySelector('.home-container');
        var elementsToAnimate = homeContainer.querySelectorAll('.row.align-items-center > *');
        var delayIncrement = 200;

        anime.timeline({ loop: false })
            .add({
                targets: elementsToAnimate,
                translateY: [-20, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(delayIncrement),
            });
    }

    function animateBookSection() {
        var bookCards = document.querySelectorAll('.book-container .card');

        anime.timeline({ loop: false })
            .add({
                targets: '.book-container h3',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: bookCards,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(200, { start: 500 }),
            }, '-=500');
    }

    function animateChartSection() {
        var chartBars = document.querySelectorAll('.chart-container canvas');

        anime.timeline({ loop: false })
            .add({
                targets: '.chart-container h3',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: chartBars,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(200, { start: 500 }),
                complete: function () {
                    libraryChart.data.datasets[0].data.forEach(function (_, index) {
                        libraryChart.data.datasets[0].data[index] = chartData.datasets[0].data[index];
                    });
                    libraryChart.update();
                },
            }, '-=500');
    }

    function animateInventorySection() {
        var inventoryContainer = document.querySelector('.inventory-container');
        var table = document.getElementById('table');

        anime.timeline({ loop: false })
            .add({
                targets: '.inventory-h2',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: table,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500');
    }

    function animateFooterSection() {
        var footerSection = document.getElementById('footer-section');

        anime.timeline({ loop: false })
            .add({
                targets: '#footer-section h2',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: '.contact-icon',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(200),
            }, '-=500')
            .add({
                targets: '#footer-section h3',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '.location p',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '.map-container',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '.poly-marker',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '#footer-section a',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '#footer-section p',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500');
    }

    var dataSet = [
        ["The Three Little Pigs", "Hillert, Margaret", "Children", 2017, "Picture Book"],
        ["Little Red Riding Hood", "Hillert, Margaret", "Children", 2017, "Picture Book"],
        ["Redlocks and the Three Bears", "Rueda, Claudia", "Children", 2021, "Picture Book"],
        ["Girls in Pieces", "Glasgow, Kathleen", "Fiction", 2016, "Audio Book"],
        ["How to Make Friends With The Dark", "Glasgow, Kathleen", "Fiction", 2019, "Audio Book"],
        ["Wonder", "R.J. Palacio", "Fiction", 2012, "Paperback"],
        ["You'd Be Home Now", "Glasgow, Kathleen", "Fiction", 2021, "Audio Book"],
        ["The Boy in the Striped Pyjamas", "John Boyne", "Fiction", 2006, "Paperback"],
        ["The Silent Observer", "Emily Thompson", "Mystery", 2019, "Hardcover"],
        ["Echoes of Eternity", "Michael Reynolds", "Fantasy", 2022, "Paperback"],
        ["Whispers in the Wind", "Sarah Johnson", "Romance", 2017, "E-book"],
        ["Beyond the Horizon", "David Mitchell", "Science Fiction", 2020, "Audiobook"],
    ];

    $('#table').DataTable({
        data: dataSet,
        pagelength: 10,
        columns: [
            { title: "Title" },
            { title: "Author" },
            { title: "Genre" },
            { title: "Year" },
            { title: "Type" }
        ]
    });

    $('[data-bs-toggle="tooltip"]').tooltip();

    document.querySelectorAll('.carousel-item .btn-primary').forEach(button => {
        button.addEventListener('click', function () {
            this.textContent = 'Reserved';
            this.disabled = true;
            this.style.backgroundColor = 'red';
            alert('Book reserved successfully!');
        });
    });

    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $("#authorFilter").on("change", function () {
        var selectedAuthor = $(this).val().toLowerCase();
        $(".card").filter(function () {
            $(this).toggle($(this).data("author").toLowerCase() === selectedAuthor || selectedAuthor === "all");
        });
    });

    const libraries = [
        { name: 'Lotte Library, Bras Basah', top: 2675, left: 700 },
    ];

    const mapContainer = document.getElementById('map');

    mapContainer.addEventListener('click', (event) => {
        const clickedMarker = event.target.closest('.poly-marker');

        if (clickedMarker) {
            const markerIndex = Array.from(mapContainer.children).indexOf(clickedMarker);
            const clickedLibrary = libraries[markerIndex];
            alert(clickedLibrary.name + ' clicked!');
        }
    });

    libraries.forEach(library => {
        const marker = document.createElement('div');
        marker.className = 'poly-marker';
        marker.style.top = library.top + 'px';
        marker.style.left = library.left + 'px';
        mapContainer.appendChild(marker);

        tippy(marker, {
            content: library.name,
            placement: 'top'
        });
    });
});

function showBookDescription(title, description) {
    var modalTitle = document.querySelector("#bookDescriptionModal .modal-title");
    var modalBody = document.querySelector("#bookDescriptionModal .modal-body");

    modalTitle.textContent = title;
    modalBody.textContent = description;

    $('#bookDescriptionModal').modal('show');
}

