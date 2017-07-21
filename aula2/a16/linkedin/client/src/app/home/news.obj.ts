import { Injectable } from '@angular/core'

@Injectable()
export class NewsObj {
    id: number
    dateCreated: Date
    lastUpdated: Date
    description: String
    belongs : {
        id: number
    }
}