document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
    //console.log('It works :)');
    var siteName = document.getElementById('sitename').value;
    //console.log(siteName);
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl

    }

    //to save in the word hello world in the local storage
    //localStorage.setItem('test', 'Hello World');
    //retrieve from local storage
    //console.log(localStorage.getItem['test']);


    //check if there are any bookmarks available
    if(localStorage.getItem('bookmarks')==null ){
        var bookmarks = [];
        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        //add bookmark being submitted to array
        boomarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


    }
    
    fetchBookmarks();

    e.preventDefault();
}
function deleteBookmark(){
    //console.log(url);
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var i=0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i,1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
}

function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //console.log(bookmarks)
    var bookmarksResults = document.getElementById('bookmarksResults');

    //build output
    bookmarksResults.innerHTML ='';

    for(var i=0; i<bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML +='<div class="well">'+
                                     '<h3>' +name + 
                                     '<a class="btn btn-primary" target="_blank" href="'+ url +'">Visit</a>' + 
                                     '<a onclick="deleteBookmark(\''+url +'\') class="btn btn-danger"  href="'+ url +'">Delete</a>' + 
                                     '</h3>'+'</div>';

    }
}