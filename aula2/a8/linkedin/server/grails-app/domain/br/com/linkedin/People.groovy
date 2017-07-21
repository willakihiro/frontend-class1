package br.com.linkedin

import grails.rest.Resource

@Resource(uri='/people',readOnly = false, formats = ['json', 'xml'])
class People {

    Long id
    String name
    String matiralStatus
    Date birthday
    String job
    String email
    String username
    String password
    String photo
    String minibiography

    static hasMany = [news : News,
                      experience : Experience]

    static constraints = {
        news nullable: true
        photo nullable: true
        experience nullable: true
        matiralStatus nullable: true
        birthday nullable: true
        minibiography nullable: true
        photo sqlType: "longtext"
    }

    static mapping = {
        experience lazy: false
    }


}
