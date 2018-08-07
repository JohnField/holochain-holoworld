// https://developer.holochain.org/HoloWorld_Tutorial_Writing_Functions

function genesis() {
  // A Zome must be able to genesis(). Sounds fair.
  return true
}

function validateCommit(entryType, entry, header, package, sources) {
  return true
}

function jsonEntryWrite(json) {
  var hash = commit('jsonEntry', json)
  return hash
}

function jsonEntryRead(hash) {
  // Entry is private, so get from Local.
  var holoText = get(hash, { Local: true })
  return holoText
}