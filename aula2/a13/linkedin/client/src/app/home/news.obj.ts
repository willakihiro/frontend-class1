import { Injectable } from '@angular/core'

@Injectable()
export class NewsObj {
    dateCreated: Date
    lastUpdated: Date
    description: String
    belongs : {
        id: number
    }
}