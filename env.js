import * as Ably from 'ably'

//export const ABLY_API_KEY = 'Vc9Yjg.Yg0Gcw:M5o7DX8LnXZn3jG2'
export const ABLY_API_KEY = 'qERu2A.HTgnaA:Lgd1pnPki7Hz_M_q'
export const ably = new Ably.Realtime(`${ABLY_API_KEY}`)
