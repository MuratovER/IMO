var x = "{{ speciality.direction_choice }}-url";

switch (x) {
    case ("First-building-url"):
        document.getElementById("First-building-url").href = "https://go.2gis.com/01zrow";
        console.log("Первое Здание!");
        break;
    case ("Second-building-url"):
        document.getElementById("Second-building-url").href = "https://go.2gis.com/obc5vy";
        console.log("Второе Здание!");
        break;
    case ("Third-building-url"):
        document.getElementById("Third-building-url").href = "https://go.2gis.com/cyfft9";
        console.log("Второе Здание!");
        break;
    case ("Fifth-building-url"):
        document.getElementById("Fifth-building-url").href = "https://go.2gis.com/ku84vh";

        console.log("Второе Здание!");
        break;
    case ("Seven-building-url"):
        document.getElementById("Seven-building-url").href = "https://go.2gis.com/f4pcs";
        console.log("Второе Здание!");
        break;
    case ("Eighth-building-url"):
        document.getElementById("Eighth-building-url").href = "https://go.2gis.com/ywdjjo";
        console.log("Второе Здание!");
        break;
    default:
        console.log("Ошибка!");
        break;
}