Instructions:

1) ALWAYS put the newest live at the bottom of the file(whether it be oldShows.json or upomingShows.json). Otherwise the shows
won't appear in the right order.

Example:
[
    {
        "name": "Old show",
        "date": "13/6/08",
        "address": "Λόρδου Βύρωνος 3, Θεσσαλονίκη 546 22",
        "link": "theLink1.com"
    }
    ,{
        "name": "Newer Show",
        "date": "21/6/08",
        "address": "Παρκο Μεγάλου Αλεξάνδρου , Ξάνθη",
        "link": "theLink2.net"
    } 
]

2) All new elements have to follow the format I have layed down for you.
- Never touch the outer brackets [ and ].
- Always make sure the file begins with a [ and ends with a ].
- The first element in each file has NO COMMA at its beggining:
    {
        "name": "Old show",
        "date": "13/6/08",
        "address": "Λόρδου Βύρωνος 3, Θεσσαλονίκη 546 22",
        "link": "theLink1.com"
    }
- Every other element that follows the first element always begins with a comma:
    ,{
        "name": "Newer Show",
        "date": "21/6/08",
        "address": "Παρκο Μεγάλου Αλεξάνδρου , Ξάνθη",
        "link": "theLink2.net"
    } 