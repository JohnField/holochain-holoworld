function jsonEntryCreate(message, callback) {
  var xhr = new XMLHttpRequest();
  var url = "/fn/readerWriter/jsonEntryCreate";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send(JSON.stringify(message));
}

function jsonEntryRead(hash, callback) {
  var xhr = new XMLHttpRequest();
  var url = "/fn/readerWriter/jsonEntryRead";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send(hash);
}
