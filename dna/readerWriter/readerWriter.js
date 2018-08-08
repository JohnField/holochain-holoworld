// https://developer.holochain.org/HoloWorld_Tutorial_Writing_Functions

function genesis() {
  // A Zome must be able to genesis(). Sounds fair.
  return true
}

function validateCommit(entryType, entry, header, package, sources) {
  return true
}

function validatePut(entryType, entry, header, package, sources){
  return true
}

function jsonEntryCreate(json) {
  var hash = commit('jsonEntry', json)
  return hash
}

function jsonEntryRead(hash) {
  var jsonEntry = get(hash)
  return jsonEntry
}