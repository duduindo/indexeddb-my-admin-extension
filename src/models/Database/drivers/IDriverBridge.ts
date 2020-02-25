import IDatabase from './IDatabase'
import IIndex from './IIndex'
import ITable from './ITable'


interface IDriverBridge extends IDatabase, IIndex, ITable {}


export default IDriverBridge
