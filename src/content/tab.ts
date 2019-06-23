class Tab {
  getHost(): IDBAdminResponse {
    const host: string = window.location.host

    return {
      data: host,
      text: 'Success',
      type: 'success',
      timeStamp: 0
    }
  }
}

export default Tab
