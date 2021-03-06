type Document = {
  type: string
  number: string
}

export type ClientRequest = {
  name?: string
  document?: Document[]
  type?: string
}

export type Error = {
  code: string
  detail: string
  status: number
  title: string
}

export type ClientResponse = {
  value?: ClientRequest
  error?: Error
}
