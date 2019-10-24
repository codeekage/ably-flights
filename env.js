import * as Ably from 'ably'

export const ABLY_API_KEY = 'Vc9Yjg.Yg0Gcw:M5o7DX8LnXZn3jG2'
export const ably = new Ably.Realtime(`${ABLY_API_KEY}`)
