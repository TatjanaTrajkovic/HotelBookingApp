


    function showRoomInfo() {
        let hash = window.location.hash.slice(1);  // slice(1) uklanja "#"
        console.log(hash);

        // Dölj alla rumssektioner först
        document.querySelectorAll('.room-info').forEach(section => {
            section.style.display = 'none';
        });

        // Visa endast sektionen som matchar hash-värdet
        if (hash) {
            const roomSection = document.getElementById(hash);
            if (roomSection) {
                roomSection.style.display = 'block';
            }
        }
    }

    // Kör funktionen när sidan laddas
    window.addEventListener('load', showRoomInfo);

    // Kör funktionen om hash ändras (om användaren navigerar direkt via länk)
    window.addEventListener('hashchange', showRoomInfo);

    // Lägg till en event listener till alla länkar med rum-referenser
    document.querySelectorAll('a[href^="#room"]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Förhindra standardlänknavigering
            const targetHash = link.getAttribute('href').substring(1);
            window.location.hash = targetHash; // Uppdatera URL:en med nytt hash
            showRoomInfo(); // Visa endast det valda rummet
        });
    });


