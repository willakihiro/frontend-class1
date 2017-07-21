package br.com.linkedin

import grails.rest.Resource

@Resource(uri='/news',readOnly = false, formats = ['json', 'xml'])
class News {

    Date dateCreated = new Date()
    Date lastUpdated = new Date()
    String description

    static belongsTo = [belongs: People]

    static constraints = {
        dateCreated nullable: true
        lastUpdated nullable: true
        description nullable: true
    }

}
