import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()


export default {
  // Database
  openDatabase: actionCreator<{name: string, version: number}>('IDBADMIN_OPEN_DATABASE'),
  deleteDatabase: actionCreator<{name: string}>('IDBADMIN_DELETE_DATABASE'),


  // Object store
  createObjectStores: actionCreator<{
    name: string,
    version: number,
    stores: createObjectStoreProperties[]
  }>('IDBADMIN_CREATE_OBJECT_STORES'),

  deleteObjectStores: actionCreator<{
    name: string,
    version: number,
    stores: string[]
  }>('IDBADMIN_DELETE_OBJECT_STORES'),

  objectStore: actionCreator<{
    name: string,
    version: number,
    store: string
  }>('IDBADMIN_OBJECT_STORE'),


  // Object
  addObjects: actionCreator<{
    name: string,
    version: number,
    store: string,
    values: addObjectProperties[]
  }>('IDBADMIN_ADD_OBJECTS')
}
