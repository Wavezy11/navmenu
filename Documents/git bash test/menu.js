const menuItems = [
    {"title": "home", "url": "/"},
    {"title": "producten", "url": "/producten/"},
    {"title": "Over ons", "url": "/overons/"},
    {"title": "contact", "url": "/contact/"}
];

function createMenu(menuItems) {
    const menu = document.createElement('ul');
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.title;
        link.href = item.url;
        menuItem.appendChild(link);
        menu.appendChild(menuItem);
    });
    return menu;
}


document.body.appendChild(createMenu(menuItems));
