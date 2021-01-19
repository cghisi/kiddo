import Prismic from '@prismicio/client'

export const apiEndpoint = 'https://saharandchristophe.cdn.prismic.io/api/v2'
export const accessToken = 'MC5ZQVlHUFJFQUFDTUE5NlRN.XTrvv73vv73vv73vv73vv73vv73vv71gAO-_ve-_vXwafh_vv71tde-_vXjvv73vv70v77-977-9AO-_ve-_vVHvv70'

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, { accessToken: accessToken })