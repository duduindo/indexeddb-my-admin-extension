function payloadToPromise({ resolved, rejected }) {
  if (resolved) {
    return Promise.resolve(resolved)
  }

  return Promise.reject(rejected)
}


export default payloadToPromise
