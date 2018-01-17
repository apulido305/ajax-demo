window.addEventListener('load', getData);

$(function(){

  $('#github').click(function(evt){

    evt.preventDefault();

    const url = 'https://api.github.com/users/rhema305';

    $.get(url, function(result) {
      $('#output').append(getData(result));
    });
  });
});

function getData (result) {
  let output = ''
  output += '<table class="striped"><thead><tr><th>Key</th><th>Value</th></tr></thead>';
  for (const key in result){
    output += '<tr>';
    output += '<td>';
    output += key + ': ';
    output += '</td>';
    output += '<td>';
    output += result[key];
    output += '</td>';
    output += '</tr>';
  }
  output += '</table>';

  return output;
}
