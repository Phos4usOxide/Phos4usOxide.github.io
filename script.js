function goToPage(page = "index") {
    //list of valid pages (not including the ".html" file ending)
    let validPages = ["index", "about"];
    //go to the passed page as long as it's a valid page
    if (validPages.includes(page)) {
        window.location.href = `${page}.html`;//add ".html" file ending
    } else {
        console.log(`Page "${page}" is invalid`);
    }
}