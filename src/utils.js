export function clearHtml() {
    // просто очищает содержимое страницы
    document.getElementById("app").innerHTML = "";
}

export function addHtml(content) {
    // добавляет к содержимому страницы content
    document.getElementById("app").innerHTML += content;
}
