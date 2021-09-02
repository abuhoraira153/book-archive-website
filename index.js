const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if(searchText === ''){
        document.getElementById('error-message').innerText = `Please write something!!!`;
    }
    else{
        // console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
    }
}
const loadImage = () => {
    const imageField = document.getElementById()
}
const displaySearchResult = books => {
    document.getElementById('total-books').innerText = `${books.length}`
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(books.length === 0){
        document.getElementById('error-message').innerText = `No result found!!!`
    }
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">Book-Name : ${book.title ? book.title : ''}</p>
            <p class="card-text">Author : ${book.author_name ? book.author_name : ''}</p>
            <p class="card-text">First-publish-year : ${book.first_publish_year ? book.first_publish_year : 'Not found'}</p>
                <p class="card-text">Publisher : ${book.publisher ? book.publisher : ''}</p>
            </div>
          </div>
        `;
        searchResult.appendChild(div);
    })
}
