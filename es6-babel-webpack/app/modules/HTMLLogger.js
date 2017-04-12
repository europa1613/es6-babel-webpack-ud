import $ from 'jquery';


export function log(content) {
    $('#content').append('<h3 class="bg-info">' + content + '</h3>');
}


export function logTitle(content) {
    $('#content').append('<h1 class="bg-primary">' + content + '</h1>');
}
