package br.com.linkedin

import grails.rest.Resource

@Resource(uri='/academic',readOnly = false, formats = ['json', 'xml'])
class Academicxp extends Experience {

    String level

    static mapping = {
        discriminator "ACADEMIC"
    }
}